// src/pages/NewsPage.jsx
import React from 'react';

export default function NewsPage() {
  const news = [
    {
      title: 'Анонс: Финальный матч сезона в Алматы',
      category: 'Анонс',
      date: '26 июля 2025',
      text: 'Не пропустите решающий матч лиги между Almaty Eagles и Astana Wolves. Начало в 19:00 на главной арене города.',
    },
    {
      title: 'Фонд на встрече с предпринимателями',
      category: 'Встреча',
      date: '20 июля 2025',
      text: 'Alzhan League провёл закрытую встречу с представителями малого и среднего бизнеса для обсуждения спонсорской поддержки молодёжных инициатив.',
    },
    {
      title: 'Отчёт: Турнир в Шымкенте завершён',
      category: 'Отчёт',
      date: '18 июля 2025',
      text: 'В турнире приняли участие 8 команд. Победу одержала команда Shymkent Lions, финальный счёт 74:68.',
    },
    {
      title: 'Фонд принял участие в форуме "Спорт и Молодёжь"',
      category: 'Форум',
      date: '15 июля 2025',
      text: 'Обсуждались перспективы развития молодёжного спорта в Казахстане и роль частных инициатив в этом процессе.',
    },
  ];

  const featured = [
    {
      image: 'https://img.championat.com/news/big/z/l/lejkers-sobirayut-neudachnikov_17532813691567005827.jpg',
      title: 'Большой матч: Битва за финал',
      text: 'В преддверии финала сезона фанаты готовятся к захватывающему противостоянию лидеров турнира.',
    },
    {
      image: 'https://olympic.kz/images/1658221585.jpg',
      title: 'Участие в Международной конференции',
      text: 'Представители фонда поделились своими инициативами на крупной международной платформе.',
    },
  ];

  return (
    <div className="game-stats-page">
      <div className="container">
        <h1 className="main-title">Новости / Актуально</h1>

        <div className="featured-news">
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
        </div>
      </div>
    </div>
  );
}
