import React from "react";
import { Link } from "react-router-dom";
import "./news-card.scss";

const NewsCard = ({ id, title, date, previewImage, previewText, additionStyle }) => {
  const articleLink = `/news/${id}`;

  return (
    <article className="news-article-card">
      {previewImage && (
        <Link to={articleLink} className="news-article-card__image-wrapper">
          <img
            src={previewImage}
            alt={title}
            className="news-article-card__image"
            style={additionStyle}
          />
        </Link>
      )}

      <div className="news-article-card__content">
        {date && <span className="news-article-card__date">{date}</span>}

        <Link to={articleLink} className="news-article-card__title-link">
          <h3 className="news-article-card__title">{title}</h3>
        </Link>

        {previewText && (
          <p className="news-article-card__preview">{previewText}</p>
        )}

        <Link to={articleLink} className="news-article-card__read-more">
          Читать полностью
        </Link>
      </div>
    </article>
  );
};

export default NewsCard;
