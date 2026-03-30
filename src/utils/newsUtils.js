export const parseNewsDate = (value) => {
  if (!value) return null;

  const text = String(value).trim();
  const ruMatch = text.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);

  if (ruMatch) {
    const [, dd, mm, yyyy] = ruMatch;
    const date = new Date(Number(yyyy), Number(mm) - 1, Number(dd), 12, 0, 0, 0);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  const date = new Date(text);
  return Number.isNaN(date.getTime()) ? null : date;
};

export const getNewsYear = (value) => {
  const date = parseNewsDate(value);
  return date ? date.getFullYear() : null;
};

export const dedupeNewsById = (items = []) => {
  const seen = new Set();

  return items.filter((item) => {
    const key = item?.id || `${item?.title || ""}-${item?.date || ""}`;

    if (!key || seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
};

export const sortNewsByDateDesc = (items = []) =>
  [...items].sort((a, b) => {
    const aDate = parseNewsDate(a?.date);
    const bDate = parseNewsDate(b?.date);
    const aTs = aDate ? aDate.getTime() : -Infinity;
    const bTs = bDate ? bDate.getTime() : -Infinity;
    return bTs - aTs;
  });
