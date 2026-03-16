import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import news from "../data/news";
import "../components/news/news-card.scss";

export default function NewsArticle() {
  const { newsId } = useParams();

  const article = useMemo(
    () => news.find((item) => item.type !== "instagram" && item.id === newsId),
    [newsId]
  );

  const allImages = useMemo(() => {
    if (!article) {
      return [];
    }

    if (Array.isArray(article.images) && article.images.length > 0) {
      return article.images;
    }

    return article.previewImage ? [article.previewImage] : [];
  }, [article]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setActiveImageIndex(0);
  }, [newsId]);

  if (!article) {
    return (
      <div className="game-stats-page">
        <div className="container news-article-page">
          <div className="news-article-page__not-found">
            <h1>Новость не найдена</h1>
            <p>Возможно, материал был удален или ссылка устарела.</p>
            <Link to="/news" className="news-article-page__back-link">
              Вернуться к новостям
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="game-stats-page">
      <div className="container news-article-page">
        <article className="news-article-page__container">
          <header className="news-article-page__head">
            <Link to="/news" className="news-article-page__back-link">
              ← Все новости
            </Link>
            <h1 className="news-article-page__title">{article.title}</h1>
            {article.date && (
              <span className="news-article-page__date">{article.date}</span>
            )}
          </header>

          {allImages.length > 0 && (
            <div className="news-article-page__gallery">
              <div className="news-article-page__main-image-wrap">
                <img
                  src={allImages[activeImageIndex]}
                  alt={article.title}
                  className="news-article-page__main-image"
                  style={article.additionStyle}
                />
              </div>

              {allImages.length > 1 && (
                <div className="news-article-page__thumbs">
                  {allImages.map((src, index) => (
                    <button
                      key={`${article.id}-${index}`}
                      type="button"
                      className={
                        "news-article-page__thumb-btn" +
                        (index === activeImageIndex
                          ? " news-article-page__thumb-btn--active"
                          : "")
                      }
                      onClick={() => setActiveImageIndex(index)}
                      aria-label={`Открыть фото ${index + 1}`}
                    >
                      <img
                        src={src}
                        alt={`${article.title} фото ${index + 1}`}
                        className="news-article-page__thumb"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="news-article-page__body">
            {article.fullTextParagraphs?.map((paragraph, index) => (
              <p key={`${article.id}-paragraph-${index}`}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
