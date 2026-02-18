import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fetch from "node-fetch";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const DEFAULT_OWNER_ID = -224328985;
const VK_SOURCE_TYPE = String(process.env.VK_SOURCE_TYPE || "owner")
  .trim()
  .toLowerCase();
const VK_SOURCE_ID = String(process.env.VK_SOURCE_ID || "").trim();
const VK_GROUP_ID = String(process.env.VK_GROUP_ID || "").trim();
const VK_PROFILE_ID = String(process.env.VK_PROFILE_ID || "").trim();
const RAW_OWNER_ID = String(process.env.VK_OWNER_ID || "").trim();
const VK_ACCESS_TOKEN = String(process.env.VK_ACCESS_TOKEN || "").trim();
const VK_API_VERSION = String(process.env.VK_API_VERSION || "5.199").trim();
const MAX_ALBUMS = Number(process.env.VK_MAX_ALBUMS || 0);
const MAX_PHOTOS_PER_ALBUM = Number(process.env.VK_MAX_PHOTOS || 0);
const INCLUDE_SYSTEM_ALBUMS = String(process.env.VK_INCLUDE_SYSTEM_ALBUMS || "1") !== "0";
const REQUEST_DELAY_MS = Number(process.env.VK_REQUEST_DELAY_MS || 350);
const MAX_RETRIES = Number(process.env.VK_MAX_RETRIES || 4);
const OUTPUT_PATH = path.resolve(projectRoot, "src", "data", "vkGalleryDemo.json");

const ensurePositiveNumber = (value, fallback) => {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed <= 0) return fallback;
  return Math.floor(parsed);
};

const parseNumberOrNull = (value) => {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return null;
  return Math.trunc(parsed);
};

const resolveLimit = (rawValue) => {
  if (!Number.isFinite(rawValue) || rawValue <= 0) return Number.POSITIVE_INFINITY;
  return Math.max(1, Math.floor(rawValue));
};

const resolveVkSource = () => {
  const sourceType = VK_SOURCE_TYPE || "owner";
  const explicitOwner = parseNumberOrNull(RAW_OWNER_ID);

  if (sourceType === "group") {
    const groupId = parseNumberOrNull(VK_GROUP_ID || VK_SOURCE_ID);
    if (!groupId || groupId <= 0) {
      throw new Error("For VK_SOURCE_TYPE=group set VK_GROUP_ID or VK_SOURCE_ID to a positive id.");
    }
    return {
      ownerId: -Math.abs(groupId),
      sourceLabel: `group:${Math.abs(groupId)}`,
    };
  }

  if (sourceType === "profile") {
    const profileId = parseNumberOrNull(VK_PROFILE_ID || VK_SOURCE_ID);
    if (!profileId || profileId <= 0) {
      throw new Error(
        "For VK_SOURCE_TYPE=profile set VK_PROFILE_ID or VK_SOURCE_ID to a positive id."
      );
    }
    return {
      ownerId: Math.abs(profileId),
      sourceLabel: `profile:${Math.abs(profileId)}`,
    };
  }

  if (sourceType === "owner") {
    const ownerId = explicitOwner ?? DEFAULT_OWNER_ID;
    return {
      ownerId,
      sourceLabel: `owner:${ownerId}`,
    };
  }

  throw new Error('VK_SOURCE_TYPE must be "group", "profile", or "owner".');
};

const limitAlbums = resolveLimit(MAX_ALBUMS);
const hasPhotoLimit = Number.isFinite(MAX_PHOTOS_PER_ALBUM) && MAX_PHOTOS_PER_ALBUM > 0;
const limitPhotosPerAlbum = hasPhotoLimit
  ? Math.max(1, Math.floor(MAX_PHOTOS_PER_ALBUM))
  : Number.POSITIVE_INFINITY;
const requestDelayMs = ensurePositiveNumber(REQUEST_DELAY_MS, 350);
const maxRetries = Math.max(0, ensurePositiveNumber(MAX_RETRIES, 4));
const { ownerId: OWNER_ID, sourceLabel: SOURCE_LABEL } = resolveVkSource();

if (!VK_ACCESS_TOKEN) {
  throw new Error("VK_ACCESS_TOKEN is required. Provide it in environment variables.");
}

const vkApiRequest = async (method, params = {}) => {
  for (let attempt = 0; attempt <= maxRetries; attempt += 1) {
    const url = new URL(`https://api.vk.com/method/${method}`);
    url.searchParams.set("access_token", VK_ACCESS_TOKEN);
    url.searchParams.set("v", VK_API_VERSION);

    for (const [key, rawValue] of Object.entries(params)) {
      if (rawValue === undefined || rawValue === null || rawValue === "") continue;
      url.searchParams.set(key, String(rawValue));
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${method}: HTTP ${response.status} ${response.statusText}`);
      }

      const payload = await response.json();
      if (payload?.error) {
        const code = Number(payload.error.error_code || 0);
        const message = payload.error.error_msg || "VK API error";
        if (code === 6 && attempt < maxRetries) {
          await new Promise((resolve) => setTimeout(resolve, requestDelayMs * (attempt + 1)));
          continue;
        }
        throw new Error(`${method}: [${payload.error.error_code || "UNKNOWN"}] ${message}`);
      }

      if (requestDelayMs > 0) {
        await new Promise((resolve) => setTimeout(resolve, requestDelayMs));
      }
      return payload?.response;
    } catch (error) {
      if (attempt >= maxRetries) {
        throw error;
      }
      await new Promise((resolve) => setTimeout(resolve, requestDelayMs * (attempt + 1)));
    }
  }

  throw new Error(`${method}: request failed after ${maxRetries + 1} attempts`);
};

const pickLargestSizeUrl = (sizes = []) => {
  if (!Array.isArray(sizes) || !sizes.length) return "";

  const best = sizes.reduce((acc, item) => {
    if (!item?.url) return acc;

    const width = Number(item.width) || 0;
    const height = Number(item.height) || 0;
    const area = width * height;

    if (!acc || area > acc.area || (area === acc.area && width > acc.width)) {
      return { area, width, url: item.url };
    }

    return acc;
  }, null);

  return best?.url || "";
};

const pickPhotoUrl = (photo) =>
  pickLargestSizeUrl(photo?.sizes) ||
  photo?.orig_photo?.url ||
  photo?.photo_2560 ||
  photo?.photo_1280 ||
  photo?.photo_807 ||
  photo?.photo_604 ||
  photo?.photo_130 ||
  photo?.photo_75 ||
  "";

const SYSTEM_ALBUM_BY_ID = {
  "-15": "saved",
  "-7": "wall",
  "-6": "profile",
};

const resolveAlbumApiId = (album) => {
  const type = typeof album?.type === "string" ? album.type.trim() : "";
  if (type) return type;

  const numericId = Number(album?.id);
  if (numericId > 0) return numericId;
  return SYSTEM_ALBUM_BY_ID[String(numericId)] || numericId;
};

const resolveAlbumOutputSuffix = (album) => {
  const type = typeof album?.type === "string" ? album.type.trim() : "";
  if (type) return type;
  return String(album?.id ?? "unknown");
};

const fetchAlbumPhotos = async (ownerId, albumApiId) => {
  const batchMax = 1000;
  const photos = [];
  let offset = 0;
  let totalCount = null;

  while (true) {
    const remaining = Number.isFinite(limitPhotosPerAlbum)
      ? Math.max(0, limitPhotosPerAlbum - photos.length)
      : batchMax;
    if (remaining <= 0) break;

    const count = Math.min(batchMax, remaining);
    const photosResponse = await vkApiRequest("photos.get", {
      owner_id: ownerId,
      album_id: albumApiId,
      photo_sizes: 1,
      rev: 1,
      count,
      offset,
    });

    const items = Array.isArray(photosResponse?.items) ? photosResponse.items : [];
    const responseCount = Number(photosResponse?.count || 0);
    if (totalCount === null) totalCount = responseCount;

    if (!items.length) break;

    photos.push(...items);
    offset += items.length;

    if (Number.isFinite(limitPhotosPerAlbum) && photos.length >= limitPhotosPerAlbum) break;
    if (totalCount !== null && offset >= totalCount) break;
    if (items.length < count) break;
  }

  return photos;
};

const fetchAlbums = async (ownerId) => {
  const batchMax = 1000;
  const albums = [];
  let offset = 0;
  let totalCount = null;

  while (true) {
    const remaining = Number.isFinite(limitAlbums) ? Math.max(0, limitAlbums - albums.length) : batchMax;
    if (remaining <= 0) break;

    const count = Math.min(batchMax, remaining);
    const albumsResponse = await vkApiRequest("photos.getAlbums", {
      owner_id: ownerId,
      need_covers: 1,
      need_system: INCLUDE_SYSTEM_ALBUMS && ownerId > 0 ? 1 : 0,
      photo_sizes: 1,
      count,
      offset,
    });

    const items = Array.isArray(albumsResponse?.items) ? albumsResponse.items : [];
    const responseCount = Number(albumsResponse?.count || 0);
    if (totalCount === null) totalCount = responseCount;

    if (!items.length) break;

    albums.push(...items);
    offset += items.length;

    if (Number.isFinite(limitAlbums) && albums.length >= limitAlbums) break;
    if (totalCount !== null && offset >= totalCount) break;
    if (items.length < count) break;
  }

  return albums;
};

const run = async () => {
  // eslint-disable-next-line no-console
  console.log(`VK source: ${SOURCE_LABEL} (owner_id=${OWNER_ID})`);

  let albums;
  try {
    albums = await fetchAlbums(OWNER_ID);
  } catch (error) {
    if (String(error?.message || "").includes("[15]")) {
      throw new Error(
        `No access to ${SOURCE_LABEL}. Check token rights and confirm this account can view that source.`
      );
    }
    throw error;
  }

  const filteredAlbums = albums
    .filter((album) => resolveAlbumApiId(album) !== 0)
    .sort((left, right) => Number(right?.updated || 0) - Number(left?.updated || 0))
    .slice(0, Number.isFinite(limitAlbums) ? limitAlbums : undefined);

  const flatPhotos = [];

  for (const [index, album] of filteredAlbums.entries()) {
    const albumApiId = resolveAlbumApiId(album);
    const albumId = `album${OWNER_ID}_${resolveAlbumOutputSuffix(album)}`;
    const albumTitle = String(album.title || albumId);
    const albumCover = pickLargestSizeUrl(album.sizes) || album.thumb_src || "";
    const albumCount = Number(album.size || 0);
    const albumSortValue =
      (Number(album.updated || album.created || 0) || Math.floor(Date.now() / 1000)) * 1000;

    try {
      const photos = await fetchAlbumPhotos(OWNER_ID, albumApiId);

      if (!photos.length && albumCover) {
        flatPhotos.push({
          albumId,
          albumTitle,
          albumCover,
          albumCount,
          albumSortValue,
          title: albumTitle,
          imageUrl: albumCover,
        });
      } else {
        for (const photo of photos) {
          const imageUrl = pickPhotoUrl(photo);
          if (!imageUrl) continue;

          flatPhotos.push({
            albumId,
            albumTitle,
            albumCover: albumCover || imageUrl,
            albumCount,
            albumSortValue,
            title: albumTitle,
            imageUrl,
            vkPhotoId: `${photo.owner_id}_${photo.id}`,
          });
        }
      }

      // eslint-disable-next-line no-console
      console.log(
        `[${index + 1}/${filteredAlbums.length}] ${albumId}: "${albumTitle}" -> ${photos.length} photos`
      );
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn(`[WARN] Failed to fetch photos for ${albumId}: ${error.message}`);
      if (albumCover) {
        flatPhotos.push({
          albumId,
          albumTitle,
          albumCover,
          albumCount,
          albumSortValue,
          title: albumTitle,
          imageUrl: albumCover,
        });
      }
    }
  }

  await fs.writeFile(OUTPUT_PATH, JSON.stringify(flatPhotos, null, 2), "utf8");
  // eslint-disable-next-line no-console
  console.log(`Saved ${flatPhotos.length} photos to ${path.relative(projectRoot, OUTPUT_PATH)}`);
};

run().catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error);
  process.exitCode = 1;
});
