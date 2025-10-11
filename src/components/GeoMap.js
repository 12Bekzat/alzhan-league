import React, { useEffect, useRef, useState } from "react";

const BallIcon = () => (
  <svg viewBox="0 0 48 48" width="24" height="24" aria-hidden>
    <circle cx="24" cy="24" r="22" fill="#ff7a00" stroke="#fff" strokeWidth="3" />
    <path d="M3 24h42M24 3v42M8 8c11 7 21 7 32 0M8 40c11-7 21-7 32 0"
          stroke="#fff" strokeWidth="3" fill="none"/>
  </svg>
);

export default function GeoMapImage({
  mapSrc,
  title = "География Лиги",
  description =
    "Проект охватывает ключевые города в Костанайской, Актюбинской, Абайской и Павлодарской областях и продолжает расширяться: в сезоне 2024–2025 в лиге участвовали команды из Актобе, Хромтау, Павлодара, Рудного, Лисаковска, Семея и Житикары. Мы готовимся выходить в новые регионы в следующих сезонах.",
  points = [],
}) {
  const [openId, setOpenId] = useState(null);
  const wrapRef = useRef(null);

  // закрытие по Esc и клику вне карты
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpenId(null);
    const onClick = (e) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) setOpenId(null);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <section
      className={`gmi ${openId ? "has-open" : ""}`}
      aria-label={title}
      ref={wrapRef}
    >
      <header className="gmi__head">
        <h2 className="gmi__title">{title}</h2>
        <p className="gmi__desc">{description}</p>
      </header>

      <div className="gmi__map">
        <img className="gmi__img" src={mapSrc} alt="Карта Казахстана" />

        {points.map((p) => {
          const isOpen = openId === p.id;
          return (
            <div
              key={p.id}
              className={`gmi__pinWrap ${isOpen ? "is-open" : ""}`}
              style={{
                left: p.x + "%",
                top: p.y + "%",
                zIndex: isOpen ? 99 : 1, // открытая метка поверх остальных
              }}
            >
              <button
                className="gmi__pin"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenId((id) => (id === p.id ? null : p.id));
                }}
                onMouseDown={(e) => e.stopPropagation()}
                aria-label={p.name}
                aria-expanded={isOpen}
              >
                <BallIcon />
                {p.count != null && <span className="gmi__badge">{p.count}</span>}
              </button>

              {isOpen && (
                <div
                  className="gmi__popup"
                  role="dialog"
                  aria-label={`Информация: ${p.name}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="gmi__popHead">
                    <div className="gmi__popTitle">{p.name}</div>
                    <button
                      className="gmi__close"
                      onClick={() => setOpenId(null)}
                      aria-label="Закрыть"
                    >
                      ×
                    </button>
                  </div>
                  <ul className="gmi__list">
                    {p.sponsor && (
                      <li>
                        <span>Спонсор:</span> {p.sponsor}
                      </li>
                    )}
                    {p.seasons && (
                      <li>
                        <span>Сезон:</span> {p.seasons}
                      </li>
                    )}
                    {p.count != null && (
                      <li>
                        <span>Общее количество команд:</span> {p.count}
                      </li>
                    )}
                  </ul>
                  {p.link && (
                    <img className="gmi__popupImg" src={p.link} alt="Фото" />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
