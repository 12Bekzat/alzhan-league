import React, { useEffect, useMemo, useRef, useState } from "react";

export default function AlzhanTimeline() {
  const items = useMemo(
    () => [
      {
        id: "y2024",
        label: "2024",
        title: "2024 — Первый сезон",
        text: "Запуск Лиги «Alzhan». В турнире участвовали 5–6 классы: около 700 детей и 60 команд. Формат — отборочные этапы, региональные финалы и Суперфинал.",
      },
      {
        id: "m2024",
        label: "Май 2024",
        title: "Май 2024 — Первый Суперфинал",
        text: "Финал прошёл в Актобе. Лучшие команды региона встретились в решающих матчах, определив первых чемпионов Лиги. Турнир стал отправной точкой для масштабного развития проекта.",
      },
      {
        id: "y2025",
        label: "2024–2025",
        title: "2024–2025 — Второй сезон",
        text: "К Лиге присоединились 7–8 классы. Число участников выросло до 2000 детей и более 150 команд из разных регионов Казахстана.",
      },
      {
        id: "m2025",
        label: "Май 2025",
        title: "Май 2025 — Второй Суперфинал",
        text: "Суперфинал прошёл в Хромтау на площадке ФОКа Донского ГОКа. 18 сильнейших команд боролись за чемпионство. Турнир сопровождали шоу‑программа, специальные гости и награды лучшим игрокам (MVP).",
      },
    ],
    []
  );

  const sectionRefs = useRef(items.map(() => React.createRef()));
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const refs = sectionRefs.current.map((r) => r.current).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        // pick the most visible section
        let max = { ratio: 0, idx: activeIdx };
        entries.forEach((e) => {
          const idx = refs.indexOf(e.target);
          if (e.intersectionRatio > max.ratio)
            max = { ratio: e.intersectionRatio, idx };
        });
        if (max.ratio > 0.4) setActiveIdx(max.idx);
      },
      {
        rootMargin: "-20% 0px -20% 0px",
        threshold: [...Array(11)].map((_, i) => i / 10),
      }
    );
    refs.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [items.length]);

  const scrollTo = (i) => {
    sectionRefs.current[i]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="tl" aria-label="История Лиги Alzhan">
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
