import React from "react";
import NewsCard from "./news/NewsCard";
import InstaCard from "./news/InstaCard";
import InstagramNewsCard from "./news/InstagramNewsCard";

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

export default function NewsGrid({ posts = [], title = "Новости" }) {
  const handleArticleClick = (post) => {
    // здесь открываешь модалку или переходишь на /news/:id
    // openModal(post) или navigate(`/news/${post.id}`)
  };

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
        {posts.map((post) =>
          post.type === "instagram" ? (
            <InstagramNewsCard key={post.id} post={post} />
          ) : (
            <NewsCard key={post.id} {...post} onClick={handleArticleClick} />
          )
        )}
      </div>
    </section>
  );
}
