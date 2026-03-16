import React from "react";
import NewsCard from "./news/NewsCard";
import InstagramNewsCard from "./news/InstagramNewsCard";

export default function NewsGrid({ posts = [], title = "Новости" }) {
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
            <NewsCard key={post.id} {...post} />
          )
        )}
      </div>
    </section>
  );
}
