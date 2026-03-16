import React, { useMemo, useState } from "react";

function extractSeasonTokens(seasonValue) {
  if (Array.isArray(seasonValue)) {
    return seasonValue.flatMap(extractSeasonTokens);
  }

  if (seasonValue === null || seasonValue === undefined) {
    return [];
  }

  if (typeof seasonValue === "number") {
    return [String(seasonValue)];
  }

  if (typeof seasonValue === "string") {
    const years = seasonValue.match(/\d{4}/g);
    if (years?.length) {
      return years;
    }

    const normalized = seasonValue.trim();
    return normalized ? [normalized] : [];
  }

  return [];
}

export default function DocumentsPanel({
  seasons = ["2024", "2025", "2026"],
  defaultSeason = "2025",
  categories = [], // [{ id, title, items:[{ id, title, href }] }]
  defaultCategoryId = null,
  onOpen, // (docItem) => void (если нужно перехватить клики)
}) {
  const [season, setSeason] = useState(defaultSeason);
  const initialCat = useMemo(
    () => defaultCategoryId ?? categories[0]?.id ?? null,
    [defaultCategoryId, categories]
  );
  const [activeCat, setActiveCat] = useState(initialCat);

  const activeItems = useMemo(
    () => categories.find((c) => c.id === activeCat)?.items ?? [],
    [categories, activeCat]
  );
  const filteredItems = useMemo(
    () =>
      activeItems.filter(
        (item) => {
          if (season === "Все" || !item?.season) {
            return true;
          }

          const itemSeasons = extractSeasonTokens(item.season);
          return itemSeasons.includes(season);
        }
      ),
    [activeItems, season]
  );

  const handleOpen = (item) => {
    if (onOpen) onOpen(item);
    else if (item?.href)
      window.open(item.href, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="docs-wrap">
      <div className="docs-header">
        <div className="docs-breadcrumbs">
          Главная — <span>Документы</span>
        </div>
        <div className="docs-season">
          <span className="docs-season__label">Сезон</span>
          <select
            className="docs-selectShell"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            aria-label="Выбор сезона"
          >
            {seasons.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <span className="docs-caret" />
        </div>
      </div>

      <div className="docs-card">
        <div className="docs-grid">
          {/* ЛЕВАЯ КОЛОНКА — КАТЕГОРИИ */}
          <div className="docs-left">
            <ul className="docs-catList">
              {categories.map((c) => {
                const active = c.id === activeCat;
                return (
                  <li key={c.id}>
                    <button
                      type="button"
                      className={`docs-cat ${active ? "is-active" : ""}`}
                      onClick={() => setActiveCat(c.id)}
                    >
                      <span className="docs-cat__title">{c.title}</span>
                      <svg
                        className="docs-cat__chev"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path
                          d="M9 6l6 6-6 6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ПРАВАЯ КОЛОНКА — ДОКУМЕНТЫ */}
          <div className="docs-right">
            <ul className="docs-docList">
              {filteredItems.map((it, i) => (
                <li key={it.id ?? i}>
                  <button
                    type="button"
                    className="docs-doc"
                    onClick={() => handleOpen(it)}
                    title={it.title}
                  >
                    <span className="docs-doc__title">{it.title}</span>
                  </button>
                  {i !== filteredItems.length - 1 && (
                    <div className="docs-divider" />
                  )}
                </li>
              ))}
              {!filteredItems.length && (
                <li className="docs-empty">Нет документов в этой категории</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
