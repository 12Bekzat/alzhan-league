// src/pages/NewsPage.jsx
import React from "react";
import NewsGrid from "../components/NewGrid";
import news from "../data/news";

export default function NewsPage() {

  return (
    <>
      <div className="docs-wrap" style={{ paddingBottom: 0 }}>
        <div className="docs-header">
          <div className="docs-breadcrumbs">
            Главная — <span>Новости</span>
          </div>
        </div>
      </div>
      <div className="game-stats-page">
        <div className="container">
          <h1 className="main-title">Новости</h1>

          <NewsGrid posts={news} />

          {/* <div className="featured-news">
      {featured.map((item, i) => (
        <div key={i} className="featured-card">
          <img src={item.image} alt={item.title} className="featured-image" />
          <div className="featured-content">
            <h2 className="featured-title">{item.title}</h2>
            <p className="featured-text">{item.text}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="news-grid">
      {news.map((item, i) => (
        <div key={i} className="news-card">
          <span className="news-category">{item.category}</span>
          <h2 className="news-title">{item.title}</h2>
          <p className="news-date">{item.date}</p>
          <p className="news-text">{item.text}</p>
        </div>
      ))}
    </div>

    <div className="horizontal-scroll-news">
      <h2 className="section-title">Все новости</h2>
      <div className="scroll-horizontal-container">
        {news.concat(news).map((item, i) => (
          <div key={i} className="horizontal-card">
            <h3 className="news-title">{item.title}</h3>
            <p className="news-date">{item.date}</p>
            <p className="news-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div> */}
        </div>
      </div>
    </>
  );
}
