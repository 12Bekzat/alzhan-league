import React from "react";
import { Link } from "react-router-dom";
import newsData from "../data/news";

export default function BasketballNewsSection() {
  const latest = Array.isArray(newsData) ? newsData.slice(-2).reverse() : [];

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
