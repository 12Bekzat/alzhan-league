import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import newsData from "../data/news";

const parseNewsDate = (value) => {
  if (!value) return null;

  const text = String(value).trim();

  // Format: DD.MM.YYYY
  const ruMatch = text.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  if (ruMatch) {
    const [, dd, mm, yyyy] = ruMatch;
    const date = new Date(Number(yyyy), Number(mm) - 1, Number(dd), 12, 0, 0, 0);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  // Format: YYYY-MM-DD (or native parseable formats)
  const date = new Date(text);
  return Number.isNaN(date.getTime()) ? null : date;
};

export default function BasketballNewsSection() {
  const latest = useMemo(() => {
    if (!Array.isArray(newsData)) return [];

    return [...newsData]
      .sort((a, b) => {
        const aDate = parseNewsDate(a?.date);
        const bDate = parseNewsDate(b?.date);
        const aTs = aDate ? aDate.getTime() : -Infinity;
        const bTs = bDate ? bDate.getTime() : -Infinity;
        return bTs - aTs;
      })
      .slice(0, 2);
  }, []);

  if (!latest.length) return null;

  return (
    <section className="basketball-news-section" aria-label="Новости">
      <div className="container">
        <div className="basketball-news-section__head">
          <h2 className="section-title">Новости</h2>
          <Link className="basketball-news-section__all" to="/news">
            Все новости
          </Link>
        </div>

        <div className="basketball-news-section__grid">
          {latest.map((item) => (
            <article key={item.id} className="basketball-news-section__card">
              <div className="basketball-news-section__media">
                {item.previewImage && (
                  <img
                    className="basketball-news-section__img"
                    src={item.previewImage}
                    style={item?.additionStyle || {}}
                    alt={item.title || "Новость"}
                    loading="lazy"
                  />
                )}
              </div>

              <div className="basketball-news-section__body">
                {item.date && (
                  <div className="basketball-news-section__meta">
                    <span className="basketball-news-section__date">
                      {item.date}
                    </span>
                  </div>
                )}

                <h3 className="basketball-news-section__title">{item.title}</h3>

                {item.previewText && (
                  <p className="basketball-news-section__text">
                    {item.previewText}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
