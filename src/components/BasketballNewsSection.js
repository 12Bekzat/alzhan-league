import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import newsData from "../data/news";
import { dedupeNewsById, sortNewsByDateDesc } from "../utils/newsUtils";

export default function BasketballNewsSection() {
  const latest = useMemo(() => {
    if (!Array.isArray(newsData)) return [];

    return sortNewsByDateDesc(
      dedupeNewsById(newsData.filter((item) => item?.type !== "instagram"))
    ).slice(0, 2);
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
            <Link
              key={item.id}
              to={item?.id ? `/news/${item.id}` : "/news"}
              className="basketball-news-section__card-link"
            >
              <article className="basketball-news-section__card">
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
                      <span className="basketball-news-section__date">{item.date}</span>
                    </div>
                  )}

                  <h3 className="basketball-news-section__title">{item.title}</h3>

                  {item.previewText && (
                    <p className="basketball-news-section__text">{item.previewText}</p>
                  )}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
