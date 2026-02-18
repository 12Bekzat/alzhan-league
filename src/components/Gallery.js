import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const ALBUMS_CHUNK = 8;
const PHOTOS_CHUNK = 18;

const extractDateFromTitle = (title = "") => {
  const match = title.match(/(\d{1,2})\.(\d{1,2})\.(\d{2,4})/);
  if (!match) return null;

  const day = Number(match[1]);
  const month = Number(match[2]);
  let year = Number(match[3]);
  if (year < 100) year += 2000;

  const value = new Date(year, month - 1, day);
  return Number.isNaN(value.getTime()) ? null : value;
};

const extractLocationFromTitle = (title = "") => {
  if (title.includes("|")) {
    return title.split("|").pop().trim();
  }

  const cityMatch = title.match(/[гg]\.\s*[^,|]+/i);
  return cityMatch ? cityMatch[0].trim() : "";
};

const buildAlbumKey = (title = "", index = 0) => {
  const date = extractDateFromTitle(title);
  const location = extractLocationFromTitle(title);

  if (date && location) return `${date.toISOString().slice(0, 10)}-${location.toLowerCase()}`;
  if (date) return date.toISOString().slice(0, 10);
  if (location) return location.toLowerCase();
  return `album-${index}`;
};

const buildAlbumTitle = (title = "") => {
  const date = extractDateFromTitle(title);
  const location = extractLocationFromTitle(title);

  if (date && location) return `${date.toLocaleDateString("ru-RU")} - ${location}`;
  if (date) return date.toLocaleDateString("ru-RU");
  if (location) return location;
  return "Общий альбом";
};

export const Gallery = ({ images }) => {
  const [activeAlbumId, setActiveAlbumId] = useState(null);
  const [viewerIndex, setViewerIndex] = useState(null);
  const [visibleAlbumsCount, setVisibleAlbumsCount] = useState(ALBUMS_CHUNK);
  const [visiblePhotosCount, setVisiblePhotosCount] = useState(PHOTOS_CHUNK);

  const albumsSentinelRef = useRef(null);
  const photosSentinelRef = useRef(null);

  const normalizedImages = useMemo(
    () => (images || []).filter((item) => item?.imageUrl),
    [images]
  );

  const albums = useMemo(() => {
    const map = new Map();

    normalizedImages.forEach((item, index) => {
      const title = item?.title || "";
      const albumId = item?.albumId || buildAlbumKey(title, index);
      const albumTitle = item?.albumTitle || buildAlbumTitle(title);
      const previewText = item?.albumPreviewText || title;
      const dateValue =
        typeof item?.albumSortValue === "number"
          ? item.albumSortValue
          : extractDateFromTitle(title)?.getTime() || 0;
      const cover = item?.albumCover || item.imageUrl;

      if (!map.has(albumId)) {
        map.set(albumId, {
          id: albumId,
          title: albumTitle,
          previewText,
          cover,
          sortValue: dateValue,
          photos: [],
        });
      }

      const album = map.get(albumId);
      album.photos.push(item);
      album.sortValue = Math.max(album.sortValue, dateValue);
      if (!album.cover && item?.imageUrl) {
        album.cover = item.imageUrl;
      }
    });

    return Array.from(map.values()).sort((a, b) => b.sortValue - a.sortValue);
  }, [normalizedImages]);

  const activeAlbum = useMemo(
    () => albums.find((album) => album.id === activeAlbumId) || null,
    [albums, activeAlbumId]
  );

  const visibleAlbums = useMemo(
    () => albums.slice(0, visibleAlbumsCount),
    [albums, visibleAlbumsCount]
  );

  const activePhotos = useMemo(() => activeAlbum?.photos || [], [activeAlbum]);
  const visiblePhotos = useMemo(
    () => activePhotos.slice(0, visiblePhotosCount),
    [activePhotos, visiblePhotosCount]
  );

  const activePhoto = viewerIndex !== null ? visiblePhotos[viewerIndex] : null;

  const hasMoreAlbums = visibleAlbumsCount < albums.length;
  const hasMorePhotos = visiblePhotosCount < activePhotos.length;

  const closeViewer = useCallback(() => setViewerIndex(null), []);
  const openViewer = useCallback((index) => setViewerIndex(index), []);

  const goPrev = useCallback(() => {
    if (viewerIndex === null || visiblePhotos.length <= 1) return;
    setViewerIndex((prev) => (prev === 0 ? visiblePhotos.length - 1 : prev - 1));
  }, [viewerIndex, visiblePhotos.length]);

  const goNext = useCallback(() => {
    if (viewerIndex === null || visiblePhotos.length <= 1) return;
    setViewerIndex((prev) => (prev === visiblePhotos.length - 1 ? 0 : prev + 1));
  }, [viewerIndex, visiblePhotos.length]);

  const loadMoreAlbums = useCallback(() => {
    setVisibleAlbumsCount((prev) => Math.min(prev + ALBUMS_CHUNK, albums.length));
  }, [albums.length]);

  const loadMorePhotos = useCallback(() => {
    setVisiblePhotosCount((prev) => Math.min(prev + PHOTOS_CHUNK, activePhotos.length));
  }, [activePhotos.length]);

  useEffect(() => {
    setActiveAlbumId(null);
    setViewerIndex(null);
    setVisibleAlbumsCount(ALBUMS_CHUNK);
    setVisiblePhotosCount(PHOTOS_CHUNK);
  }, [images]);

  useEffect(() => {
    setVisiblePhotosCount(PHOTOS_CHUNK);
    setViewerIndex(null);
  }, [activeAlbumId]);

  useEffect(() => {
    if (viewerIndex === null) return;
    if (viewerIndex >= visiblePhotos.length) {
      setViewerIndex(visiblePhotos.length ? visiblePhotos.length - 1 : null);
    }
  }, [viewerIndex, visiblePhotos.length]);

  useEffect(() => {
    if (activeAlbum || !hasMoreAlbums || !albumsSentinelRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) loadMoreAlbums();
      },
      { rootMargin: "260px 0px" }
    );

    observer.observe(albumsSentinelRef.current);
    return () => observer.disconnect();
  }, [activeAlbum, hasMoreAlbums, loadMoreAlbums]);

  useEffect(() => {
    if (!activeAlbum || !hasMorePhotos || !photosSentinelRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) loadMorePhotos();
      },
      { rootMargin: "220px 0px" }
    );

    observer.observe(photosSentinelRef.current);
    return () => observer.disconnect();
  }, [activeAlbum, hasMorePhotos, loadMorePhotos]);

  useEffect(() => {
    if (viewerIndex === null) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeViewer();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [viewerIndex, closeViewer, goPrev, goNext]);

  if (!normalizedImages.length) return null;

  const albumsProgress = albums.length
    ? Math.min(100, Math.round((visibleAlbums.length / albums.length) * 100))
    : 0;

  const photosProgress = activePhotos.length
    ? Math.min(100, Math.round((visiblePhotos.length / activePhotos.length) * 100))
    : 0;

  return (
    <div className="project-gallery vk-gallery">
      {!activeAlbum && (
        <>
          <div className="vk-gallery__head">
            <div>
              <h3 className="vk-gallery__title">Группы фотографий</h3>
              <p className="vk-gallery__hint">
                Лента загружается волнами: ниже появятся следующие группы автоматически.
              </p>
            </div>
          </div>

          <div className="vk-flow">
            <span>
              Показано групп: {visibleAlbums.length} из {albums.length}
            </span>
            <div className="vk-flow__bar">
              <i style={{ width: `${albumsProgress}%` }} />
            </div>
          </div>

          <div className="vk-albums-grid">
            {visibleAlbums.map((album) => (
              <button
                key={album.id}
                type="button"
                className="vk-album-card"
                onClick={() => setActiveAlbumId(album.id)}
              >
                <div className="vk-album-card__coverWrap">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="vk-album-card__cover"
                    loading="lazy"
                  />
                  <span className="vk-album-card__count">{album.photos.length} фото</span>
                </div>
                <div className="vk-album-card__info">
                  <h4>{album.title}</h4>
                  <p>{album.previewText}</p>
                </div>
              </button>
            ))}
          </div>

          {hasMoreAlbums && (
            <div className="vk-load-wrap">
              <div ref={albumsSentinelRef} className="vk-load-sentinel" />
              <button type="button" className="vk-load-more" onClick={loadMoreAlbums}>
                Показать следующую волну групп (
                {Math.min(ALBUMS_CHUNK, albums.length - visibleAlbums.length)})
              </button>
            </div>
          )}
        </>
      )}

      {activeAlbum && (
        <div className="vk-album-view">
          <div className="vk-gallery__head">
            <button
              type="button"
              className="vk-gallery__back"
              onClick={() => {
                setActiveAlbumId(null);
                setViewerIndex(null);
              }}
            >
              Назад к группам
            </button>

            <div className="vk-gallery__albumMeta">
              <h3>{activeAlbum.title}</h3>
              <p>{activeAlbum.photos.length} фото</p>
            </div>
          </div>

          <div className="vk-flow">
            <span>
              Показано фото: {visiblePhotos.length} из {activePhotos.length}
            </span>
            <div className="vk-flow__bar">
              <i style={{ width: `${photosProgress}%` }} />
            </div>
          </div>

          <div className="vk-photos-grid">
            {visiblePhotos.map((photo, index) => (
              <button
                key={`${photo.imageUrl}-${index}`}
                type="button"
                className="vk-photo-tile"
                onClick={() => openViewer(index)}
              >
                <img
                  src={photo.imageUrl}
                  alt={photo.title || `Фото ${index + 1}`}
                  style={photo.additionalStyle}
                  loading="lazy"
                />
              </button>
            ))}
          </div>

          {hasMorePhotos && (
            <div className="vk-load-wrap">
              <div ref={photosSentinelRef} className="vk-load-sentinel" />
              <button type="button" className="vk-load-more" onClick={loadMorePhotos}>
                Показать следующую волну фото (
                {Math.min(PHOTOS_CHUNK, activePhotos.length - visiblePhotos.length)})
              </button>
            </div>
          )}
        </div>
      )}

      {activePhoto && (
        <div className="vk-viewer" onClick={closeViewer}>
          <div className="vk-viewer__content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="vk-viewer__close"
              onClick={closeViewer}
              aria-label="Закрыть"
            >
              x
            </button>

            {visiblePhotos.length > 1 && (
              <button
                type="button"
                className="vk-viewer__nav vk-viewer__nav--prev"
                onClick={goPrev}
                aria-label="Предыдущее фото"
              >
                ‹
              </button>
            )}

            <img
              src={activePhoto.imageUrl}
              alt={activePhoto.title || "Фото"}
              className="vk-viewer__image"
              style={activePhoto.additionalStyle}
            />

            {visiblePhotos.length > 1 && (
              <button
                type="button"
                className="vk-viewer__nav vk-viewer__nav--next"
                onClick={goNext}
                aria-label="Следующее фото"
              >
                ›
              </button>
            )}

            <div className="vk-viewer__meta">
              <span>
                {viewerIndex + 1} / {visiblePhotos.length}
              </span>
              <p>{activePhoto.title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
