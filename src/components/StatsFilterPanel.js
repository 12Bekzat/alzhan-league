import React, { useEffect, useRef, useState } from "react";

const STAGES = [
  { key: "regional",    label: "Региональный этап", hasDropdown: true },
  { key: "superfinal",  label: "Суперфинал" },
];

const GENDERS = [
  { key: "girls", label: "Девочки" },
  { key: "boys",  label: "Мальчики"  },
];

const COURSES = [
  { key: "begin", label: "5-6 классы" },
  { key: "middle",  label: "7-8 классы"  },
  { key: "adult",  label: "9-11 классы"  },
];

// Статический список регионов — при желании подмени на данные из API
const REGIONS = [
  "Актобе","Рудный","Лисаковск","Хромтау", "Павлодар",
];

export default function StatsFilterPanel({
  seasons = ["2024", "2024-2025"],
  defaultSeason = "2024-2025",
  defaultStage = null,
  defaultGender = null,
  defaultRegion = null,
  defaultCourse = null,
  onChange,
}) {
  const [stage, setStage]   = useState(defaultStage);
  const [gender, setGender] = useState(defaultGender);
  const [season, setSeason] = useState(defaultSeason);
  const [region, setRegion] = useState(defaultRegion);
  const [course, setCourse] = useState(defaultCourse);

  // Управление дропдауном у «Регионального этапа»
  const [open, setOpen] = useState(false);
  const btnRef  = useRef(null);
  const listRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Закрытие по клику вне
  useEffect(() => {
    const onDoc = (e) => {
      if (!open) return;
      if (btnRef.current?.contains(e.target) || listRef.current?.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  // Клавиатура в поповере
  const onKeyDown = (e) => {
    if (!open) return;
    if (e.key === "ArrowDown") { e.preventDefault(); setActiveIndex((i)=>Math.min(i+1, REGIONS.length-1)); }
    if (e.key === "ArrowUp")   { e.preventDefault(); setActiveIndex((i)=>Math.max(i-1, 0)); }
    if (e.key === "Enter")     { e.preventDefault(); pickRegion(REGIONS[activeIndex]); }
    if (e.key === "Escape")    { e.preventDefault(); setOpen(false); }
  };

  const pickRegion = (val) => {
    setRegion(val);
    setOpen(false);
    if (stage !== "regional") setStage("regional");
  };

  // Прокидываем наружу выбранные фильтры
  useEffect(() => {
    onChange?.({ stage, gender, season, region, course });
  }, [stage, gender, season, region, course, onChange]);

  return (
    <div className="sf-wrap">
      <div className="sf-header">
        <div className="sf-breadcrumbs"></div>

        <div className="sf-seasonSelect">
          <label className="sf-seasonLabel">Сезон</label>
            <select
                className="sf-selectShell"
              value={season}
              onChange={(e) => setSeason(e.target.value)}
              aria-label="Выбор сезона"
            >
              {seasons.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <span className="sf-caret" />
        </div>
      </div>

      <div className="sf-card">
        {/* Этапы */}
        <div className="sf-tabs">
          {STAGES.map(s => {
            if (!s.hasDropdown) {
              return (
                <button
                  key={s.key}
                  className={`sf-tab ${stage === s.key ? "sf-active" : ""}`}
                  onClick={() => { setStage(s.key); setOpen(false); }}
                  type="button"
                >
                  {s.label}
                </button>
              );
            }
            // Региональный этап с выпадающим списком
            return (
              <div key={s.key} className="sf-tabWithDrop" onKeyDown={onKeyDown}>
                <button
                  ref={btnRef}
                  className={`sf-tab ${stage === "regional" ? "sf-active" : ""} ${open ? "sf-open" : ""}`}
                  onClick={() => { setStage("regional"); setOpen((v)=>!v); }}
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded={open}
                >
                  <span>{s.label}{region ? `: ${region}` : ""}</span>
                  <svg className="sf-chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden>
                    <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </button>

                {open && (
                  <div ref={listRef} className="sf-dropdown" role="listbox" tabIndex={-1}>
                    {REGIONS.map((r, idx) => (
                      <button
                        key={r}
                        role="option"
                        aria-selected={region === r}
                        className={`sf-dropItem ${idx===activeIndex ? "sf-focused" : ""} ${region===r ? "sf-selected" : ""}`}
                        onMouseEnter={() => setActiveIndex(idx)}
                        onClick={() => pickRegion(r)}
                        type="button"
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Пол */}
        {stage && <div className="sf-pillsRow">
          {COURSES.map(g => (
            <button
              key={g.key}
              className={`sf-pill ${course=== g.key ? "sf-pillActive" : ""}`}
              onClick={() => setCourse(g.key)}
              type="button"
            >
              {g.label}
            </button>
          ))}
        </div>}
        {course && <div className="sf-pillsRow">
          {GENDERS.map(g => (
            <button
              key={g.key}
              className={`sf-pill ${gender === g.key ? "sf-pillActive" : ""}`}
              onClick={() => setGender(g.key)}
              type="button"
            >
              {g.label}
            </button>
          ))}
        </div>}

        {/* Зона под доп. фильтры (возраст, турнир и т.д.) */}
        <div className="sf-extra"></div>
      </div>
    </div>
  );
}
