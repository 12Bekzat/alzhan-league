import React from "react";

export default function MatchCard({
  imageSrc,
  title,
  date,         // "19.05.2025"
  duration,     // "02:34:11"
  tag = "МАТЧИ",
  href,
  alt = "",
  className = "",
}) {
  const Wrapper = href ? "a" : "article";

  return (
    <Wrapper
      href={href}
      target="_blank"
      className={`match-card ${className}`}
      aria-label={title}
    >
      <div className="match-card__thumb">
        <img src={imageSrc} alt={alt} loading="lazy" draggable="false" />
        <span className="match-card__badge">{tag}</span>

        <span className="match-card__play" aria-hidden="true">
          <span className="match-card__play-circle">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M8 5v14l11-7-11-7z" fill="white" />
            </svg>
          </span>
        </span>
      </div>

      <div className="match-card__meta">
        <span className="match-card__date">{date}</span>
        {duration && (
          <span className="match-card__duration">
            <svg
              className="match-card__icon"
              width="16" height="16" viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12 10.26 10.26 0 0 0 12 1.75Zm0 18.5A8.25 8.25 0 1 1 20.25 12 8.26 8.26 0 0 1 12 20.25Zm.75-13.5h-1.5v6l5.25 3.15.75-1.23-4.5-2.67Z"/>
            </svg>
            {duration}
          </span>
        )}
      </div>

      <h3 className="match-card__title">{title}</h3>
    </Wrapper>
  );
}
