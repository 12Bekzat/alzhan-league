import React from 'react';

/**
 * props.items: Array<{
 *   id: string|number,
 *   title: string,
 *   date: string, // ISO или любая строка
 *   image?: string, // URL
 *   href?: string,
 *   excerpt?: string
 * }>
 * props.isLoading?: boolean
 * props.error?: string
 * props.columns?: 1|2|3|4 // по умолчанию 3 на десктопе
 */

export default function NewsGrid({ items = [], isLoading = false, error = '', columns = 3 }) {
  if (error) {
    return <div className="ng__empty ng__empty--error">Произошла ошибка: {error}</div>;
  }
  if (isLoading) {
    return (
      <div className={`ng ng--cols-${columns}`}>
        {Array.from({ length: 6 }).map((_, i) => (
          <article key={i} className="ng-card is-skeleton">
            <div className="ng-card__media" />
            <div className="ng-card__body">
              <div className="ng-skel ng-skel--title" />
              <div className="ng-skel ng-skel--line" />
              <div className="ng-skel ng-skel--date" />
            </div>
          </article>
        ))}
      </div>
    );
  }

  if (!items.length) {
    return <div className="ng__empty">Пока нет новостей. Загляните позже.</div>;
  }

  return (
    <div className={`ng ng--cols-${columns}`}>
      {items.map((n) => (
        <NewsCard key={n.id} {...n} />
      ))}
    </div>
  );
}

function NewsCard({ title, date, image, href, excerpt }) {
  const content = (
    <article className="ng-card">
      <div className="ng-card__media">
        {image ? (
          <img src={image} alt="" loading="lazy" />
        ) : (
          <div className="ng-card__placeholder" aria-hidden>
            <span>ALZHAN</span>
          </div>
        )}
      </div>
      <div className="ng-card__body">
        <h3 className="ng-card__title" title={title}>{title}</h3>
        {excerpt && <p className="ng-card__excerpt">{excerpt}</p>}
        <div className="ng-card__date">{formatDate(date)}</div>
      </div>
    </article>
  );

  return href ? (
    <a className="ng-link" href={href} target="_blank" rel="noopener noreferrer">{content}</a>
  ) : (
    content
  );
}

function formatDate(val) {
  if (!val) return '';
  try {
    const d = new Date(val);
    return d.toLocaleDateString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' });
  } catch {
    return val;
  }
}