function InstaCard({ post, onClick }) {
  const {
    type = "article", // 'article' | 'instagram'
    title,
    excerpt,
    image,
    href,
    source,
    date,
  } = post;

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

  const isInstagram = type === "instagram";
  const dateText = formatDate(date);
  const badgeText = source || (isInstagram ? "Instagram" : "Alzhan League");

  const content = (
    <article
      className={`news-card news-card--${
        isInstagram ? "instagram" : "article"
      }`}
      onClick={!href && onClick ? () => onClick(post) : undefined}
    >
      <div className="news-card__media">
        {image && (
          <img
            src={image}
            alt={title || (isInstagram ? "Instagram post" : "Новость")}
            loading="lazy"
          />
        )}
        <span
          className={
            "news-card__badge " +
            (isInstagram
              ? "news-card__badge--instagram"
              : "news-card__badge--article")
          }
        >
          {badgeText}
          {isInstagram && <span className="news-card__badge-icon">↗</span>}
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

  // instagram → наружу в новой вкладке, обычные новости → просто контент (div)
  return isInstagram && href ? (
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

export default InstaCard;
