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
    name: "Тосио Хорикири",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "Андрей Курпатов",
    photo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
  },
  {
    name: "Олег Коновалов",
    photo: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
  },
  {
    name: "Джеффри Лайкер",
    photo: "https://images.unsplash.com/photo-1527980965255-4c1d47f6f86a?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
  },
];
