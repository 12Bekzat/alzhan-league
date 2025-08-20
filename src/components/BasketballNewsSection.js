import React from "react";

const news = [
  {
    title: "Суперфинал — решающая игра сезона, где встречаются сильнейшие команды. Это напряжённая борьба за титул, полная эмоций, драйва и ярких моментов.\nЖенский баскетбол-это сочетание силы, грации и стратегии. Здесь каждая игра — это борьба, эмоции и невероятная командная работа. Быстрые передачи, точные броски и страсть к победе делают этот вид спорта по-настоящему захватывающим.",
    image: "https://scontent.cdninstagram.com/v/t51.75761-15/497112584_17909308803106234_7699118675996129407_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=111&ig_cache_key=MzYyOTU4MTYzMjA2ODI5OTI5MTE3OTA5MzA4Nzk3MTA2MjM0.3-ccb1-7&ccb=1-7&_nc_sid\n=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjYwOHgxMDgwLnNkci5DMyJ9&_nc_ohc=hA1gdkK-qssQ7kNvwGslKWX&_nc_oc=AdnpUjc7zKVObhcsBszjmNCiqEOQs5UQJNHOHSLnGPLlZobgBMHXym_ID4IYFS2LrHE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&oh=00_AfW6h9B_YmIiQV8ciSfvtVioUuKFMyHyL0ARQFuOwYcF0w&oe=68AB77FA",
    tag: "Alzhan League",
  },
  {
    title: "11 мая — финальный день Суперфинала Alzhan в Хромтау!\nБудет не только крутой баскетбол, но и розыгрыш классных призов: наушники, Яндекс.Станция с Алисой и многое другое!\n\nПриходи сам, зови друзей — будет интересно и азартно!\nФОК Донского ГОКа, с 9:00 утра 🔥🔥🔥\n\n@ergkazakhstan @ergsport @zhebelogistics.kz @kusto_home",
    image: "https://instagram.fala8-1.fna.fbcdn.net/v/t51.2885-15/496918923_17909249802106234_256190063690193968_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjEzNDd4MTY3OS5zZHIuZjc1NzYxLmRlZmF1bHRfaW1hZ2\nUuYzIifQ&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHFbYiP6qTVm83RF1PMPnN6gn8Yf-HeSVIqFjILlLyYMLo20wI7vLc5kRDNHZNfwgU&_nc_ohc=yofxWKQ0eT4Q7kNvwGppp_x&_nc_gid=9j_KGcyFyNgOi9YOw2MUTg&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzYyOTY1MjAyNTYyNTgzOTQ4NQ%3D%3D.3-ccb7-5&oh=00_AfXAiX8GKVjSE_nIzIsadSfUs8VWDJ67Y-nEf7y1Bjm-sQ&oe=68AB9A90&_nc_sid=8f1549",
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
              <div className="news-image">
                <img src={item.image} alt="" className="news-img" />
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
