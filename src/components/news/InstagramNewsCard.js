// src/components/news/InstagramNewsCard.js
import React from "react";
import "./insta.scss";

function InstagramNewsCard({ post }) {
  const {
    title,
    excerpt,
    image,
    href,
    source = "Instagram",
    date,
  } = post;

  const dateText = formatDate?.(date) ?? date;

  function formatDate(d) {
    if (!d) return "";
    try {
      const date = typeof d === "string" ? new Date(d) : d;
      return date.toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    } catch {
      return "";
    }
  }

  const content = (
    <article className="news-card news-card--insta">
      <div className="news-card__media">
        {image && (
          <img
            src={image}
            alt={title || "Instagram post"}
            loading="lazy"
          />
        )}
        <span className="news-card__badge news-card__badge--instagram">
          {source}
          <span className="news-card__badge-icon">↗</span>
        </span>
      </div>

      <div className="news-card__body">
        {dateText && <div className="news-card__meta">{dateText}</div>}

        {title && (
          <h3 className="news-card__title" title={title}>
            {title}
          </h3>
        )}

        {excerpt && <p className="news-card__excerpt">{excerpt}</p>}
      </div>
    </article>
  );

  return href ? (
    <a
      className="news__link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  ) : (
    content
  );
}

export default InstagramNewsCard;
