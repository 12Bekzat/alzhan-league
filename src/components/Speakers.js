import React, { useEffect, useState } from "react";

export default function SpeakersTestimonials({
  title = "Отзывы спикеров",
  items = defaultItems,
}) {
  const [open, setOpen] = useState(null); // {name, videoUrl}

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <section className="st" aria-label={title}>
      <h2 className="st__title">{title}</h2>
      <div className="st__grid">
        {items.map((it, i) => (
          <article key={i} className="st__card">
            <button
              className="st__media"
              style={{ backgroundImage: `url(${it.photo})` }}
              onClick={() => setOpen({ name: it.name, videoUrl: it.videoUrl })}
              aria-label={`Смотреть отзыв: ${it.name}`}
            >
              <div className="st__overlay" />
              <div className="st__name">{it.name}</div>
              <span className="st__play" aria-hidden>
                <svg viewBox="0 0 48 48" width="40" height="40">
                  <circle cx="24" cy="24" r="22" fill="#fff" />
                  <path d="M20 16l14 8-14 8z" fill="#2b74c8" />
                </svg>
              </span>
            </button>
          </article>
        ))}
      </div>

      {/* Modal */}
      {open && (
        <div className="st__modal" role="dialog" aria-label={`Видео: ${open.name}`}
             onClick={() => setOpen(null)}>
          <div className="st__modalBox" onClick={(e) => e.stopPropagation()}>
            <button className="st__close" onClick={() => setOpen(null)} aria-label="Закрыть">×</button>
            <div className="st__videoWrap">
              <iframe
                className="st__video"
                src={`${open.videoUrl}?autoplay=1&rel=0&modestbranding=1`}
                title={open.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="st__caption">{open.name}</div>
          </div>
        </div>
      )}
    </section>
  );
}

// Example data (replace with your real speaker photos & video links)
const defaultItems = [
  {
    name: "Роман Скрыпнюк",
    photo: "https://i.ytimg.com/vi/IvEsbdj2A34/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgSSg-MA8=&rs=AOn4CLDY5tOAnH5_uPNnPHZRXaX8nXtxIQ",
    videoUrl: "https://www.youtube.com/embed/IvEsbdj2A34?si=CfuZ5sIlO0GQ0YLU",
  },
  {
    name: "Жанат Сыздыков",
    photo: "https://i.ytimg.com/vi/TORUPPzwgT4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gQSgnMA8=&rs=AOn4CLDNEtO5rto7t5mAcgrYeeYOviUmWQ",
    videoUrl: "https://www.youtube.com/embed/TORUPPzwgT4?si=ef6rcXeLheV01o9U",
  },
  {
    name: "Данияр Рахматуллаев",
    photo: "https://i.ytimg.com/vi/AvxgrMTe8_o/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFIgTyhlMA8=&rs=AOn4CLANl06lmelnx9-K6f6kszhrf2toMw",
    videoUrl: "https://youtu.be/AvxgrMTe8_o",
  },
  {
    name: "Олжас Оразбаев",
    photo: "https://i.ytimg.com/vi/PrXbWNzkA3w/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgTSgxMA8=&rs=AOn4CLADA-aaFBakii_aGJ03a7SSy2_yRQ",
    videoUrl: "https://youtu.be/PrXbWNzkA3w",
  },
  {
    name: "Митрофанова Елена",
    photo: "https://i.ytimg.com/vi/APaPgd4_mY4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGF4gXiheMA8=&rs=AOn4CLAaNIrFgs4mjZQTSm1vUiG40a-G1g",
    videoUrl: "https://youtu.be/APaPgd4_mY4?si=O90H3yy3Khl900xu",
  },
];
