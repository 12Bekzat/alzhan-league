import React from "react";

const news = [
  {
    title: "Сенсация: Юниоры обыграли лидера чемпионата!",
    image: "https://img.championat.com/news/big/z/l/lejkers-sobirayut-neudachnikov_17532813691567005827.jpg",
    tag: "Alzhan League",
  },
  {
    title: "Объявлен набор на летний баскетбольный лагерь 2025",
    image: "https://olympic.kz/images/1658221585.jpg",
    tag: "Alzhan League",
  },
];

export default function BasketballNewsSection() {
  return (
    <div className="basketball-news-section">
      <div className="container">
        <h2 className="section-title">Новости</h2>
        <div className="news-grid">
          {news.map((item, index) => (
            <div key={index} className="news-card">
              <div className="news-image" style={{ backgroundImage: `url(${item.image})` }}>
                <div className="news-tag">{item.tag}</div>
                <div className="news-overlay">
                  <p className="news-title">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
