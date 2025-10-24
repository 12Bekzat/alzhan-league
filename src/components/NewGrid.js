import React from 'react';

/**
 * Ожидаемый формат поста
 * {
 *   id: string | number,
 *   title: string,          // короткий заголовок (можно обрезать из alt)
 *   excerpt?: string,       // длинное описание (по желанию)
 *   image: string,          // src картинки
 *   href?: string,          // ссылка на пост
 *   source?: string,        // например: 'Instagram'
 *   date?: string | Date,   // дата публикации
 * }
 */

export default function NewsGrid({ posts = [], title = 'Новости' }) {
  return (
    <section className="news">
      <div className="news__head">
        <h2 className="news__title">{title}</h2>
        <div className="news__count">{posts.length || 0}</div>
      </div>

      {(!posts || posts.length === 0) && (
        <div className="news__empty">Пока нет новостей</div>
      )}

      <div className="news__grid">
        {posts.map((p) => (
          <NewsCard key={p.id || p.href} post={p} />
        ))}
      </div>
    </section>
  );
}

function NewsCard({ post }) {
  const {
    title,
    excerpt,
    image,
    href,
    source = 'Instagram',
    date,
  } = post;

  const dateText = formatDate(date);
  const content = (
    <article className="news-card">
      <div className="news-card__media">
        <img src={image} alt={title || 'instagram post'} loading="lazy" />
        <span className="news-card__badge">{source}</span>
      </div>

      <div className="news-card__body">
        {dateText && <div className="news-card__meta">{dateText}</div>}
        <h3 className="news-card__title" title={title}>{title}</h3>
        {excerpt && <p className="news-card__excerpt">{excerpt}</p>}
      </div>
    </article>
  );

  return href ? (
    <a className="news__link" href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}

function formatDate(d) {
  if (!d) return '';
  try {
    const date = typeof d === 'string' ? new Date(d) : d;
    return date.toLocaleDateString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' });
  } catch {
    return '';
  }
}