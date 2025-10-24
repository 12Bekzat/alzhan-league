import React from "react";

const news = [
  {
    title: "Суперфинал — решающая игра сезона, где встречаются сильнейшие команды. Это напряжённая борьба за титул, полная эмоций, драйва и ярких моментов.\nЖенский баскетбол-это сочетание силы, грации и стратегии. Здесь каждая игра — это борьба, эмоции и невероятная командная работа. Быстрые передачи, точные броски и страсть к победе делают этот вид спорта по-настоящему захватывающим.",
    image: "https://scontent.cdninstagram.com/v/t51.75761-15/498322954_18370463209124826_8889040092632707397_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=111&ig_cache_key=MzYzMjIyOTY2NzgxNDE0NDAyMzE4MzcwNDYzMjA2MTI0ODI2.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE2MjB4Mjg4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=3O5PfKWA0jwQ7kNvwEvfAbm&_nc_oc=Admhf5c5MZ0XtyGeIiTCs6f7FMV9VBKhH6QgjMoHfvBgZMMB--WVHot_tbcURBiCRy4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=CWvoJTDWsgSKAUz7k5bT-Q&oh=00_AfeguXcL3-gV4YSjEr9ZhzF6heB1OONmX1HDTTD7lOfmoQ&oe=69012EC1",
    tag: "Alzhan League",
  },
  {
    title: "11 мая — финальный день Суперфинала Alzhan в Хромтау!\nБудет не только крутой баскетбол, но и розыгрыш классных призов: наушники, Яндекс.Станция с Алисой и многое другое!\n\nПриходи сам, зови друзей — будет интересно и азартно!\nФОК Донского ГОКа, с 9:00 утра 🔥🔥🔥\n\n@ergkazakhstan @ergsport @zhebelogistics.kz @kusto_home",
    image: "https://scontent.cdninstagram.com/v/t51.75761-15/497180431_17889799866252055_3958420774617560214_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=107&ig_cache_key=MzYzMDYwNTgxMDIyMjYxOTc4Mg%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=W4uBmOhdgXkQ7kNvwG9qw6N&_nc_oc=AdmrBZs6mbPIJlDZWIHFsSherBGeoz7jC2ztLepTEPwIZeEB3jFr82ReZ6ul2wW1WLU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=wSoalWh7L4MWSHS_LC6yQQ&oh=00_AfduZ28zmuNrWqZtoiUmqr0Xub_jSCCEa4WOkWMZycIltQ&oe=690113D4",
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
