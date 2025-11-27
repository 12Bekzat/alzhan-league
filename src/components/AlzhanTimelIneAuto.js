// AlzhanTimelineAuto.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";

export default function AlzhanTimelineAuto({
  interval = 4000,   // мс между сменами
  loop = true,       // зацикливать
  autoPlay = true,   // автозапуск
}) {
  const items = useMemo(
    () => [
      {
        id: "y2024",
        label: "2024",
        title: "2024 — Первый сезон",
        text:
          "Запуск Лиги «Alzhan». В турнире участвовали 5–6 классы: около 700 детей и 60 команд. Формат — отборочные этапы, региональные финалы и Суперфинал.",
      },
      {
        id: "m2024",
        label: "Май 2024",
        title: "Май 2024 — Первый Суперфинал",
        text:
          "Финал прошёл в Актобе. Лучшие команды региона встретились в решающих матчах, определив первых чемпионов Лиги. Турнир стал отправной точкой для масштабного развития проекта.",
      },
      {
        id: "y2025",
        label: "2024–2025",
        title: "2024–2025 — Второй сезон",
        text:
          "К Лиге присоединились 7–8 классы. Число участников выросло до 2000 детей и более 150 команд из разных регионов Казахстана.",
      },
      {
        id: "m2025",
        label: "Май 2025",
        title: "Май 2025 — Второй Суперфинал",
        text:
          "Суперфинал прошёл в Хромтау на площадке ФОКа Донского ГОКа. 18 сильнейших команд боролись за чемпионство. Турнир сопровождали шоу-программа, специальные гости и награды лучшим игрокам (MVP).",
      },
      {
        id: "n2025",
        label: "Ноябрь 2025",
        title: "Ноябрь 2025 — Старт третьего сезона ",
        text:
          "Стартовал третий сезон Школьной Баскетбольной Лиги «Alzhan». В проект добавилась новая возрастная группа 9-11 классы, что расширило охват участников и стало следующим этапом развития проекта",
      },
    ],
    []
  );

  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRefs = useRef(items.map(() => React.createRef()));
  const hoverRef = useRef(false);
  const reduced = typeof window !== "undefined"
    ? window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    : false;

  // Автоплей по таймеру
  useEffect(() => {
    if (!autoPlay) return;
    let id;

    const tick = () => {
      if (hoverRef.current) return; // пауза при ховере
      setActiveIdx((i) => {
        const next = i + 1;
        if (next < items.length) return next;
        return loop ? 0 : i;
      });
    };

    // если пользователь предпочитает меньше анимации — делаем шаг реже/не анимируем скролл
    const step = Math.max(2000, reduced ? interval * 1.5 : interval);
    id = setInterval(tick, step);
    return () => clearInterval(id);
  }, [autoPlay, interval, loop, items.length, reduced]);

  // Скроллим к активной секции плавно
  useEffect(() => {
    const el = sectionRefs.current[activeIdx]?.current;
    if (!el) return;
  }, [activeIdx, reduced]);

  const scrollTo = (i) => setActiveIdx(i);

  return (
    <section
      className="tl"
      aria-label="История Лиги Alzhan"
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
    >
      <div className="tl__grid">
        {/* Years column */}
        <aside className="tl__years">
          <h3 className="tl__heading">Наша история</h3>
          <ul className="tl__list">
            {items.map((it, i) => (
              <li
                key={it.id}
                className={"tl__year" + (i === activeIdx ? " is-active" : "")}
              >
                <button
                  type="button"
                  onClick={() => scrollTo(i)}
                  aria-current={i === activeIdx}
                >
                  <span className="tl__dot" aria-hidden />
                  <span className="tl__label">{it.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content column */}
        <div className="tl__content">
          {items.map((it, i) => (
            <section
              key={it.id}
              id={it.id}
              ref={sectionRefs.current[i]}
              className={"tl__section" + (i === activeIdx ? " is-visible" : "")}
              aria-labelledby={`${it.id}-title`}
            >
              <h4 className="tl__title" id={`${it.id}-title`}>
                {it.title}
              </h4>
              <p className="tl__text">{it.text}</p>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
