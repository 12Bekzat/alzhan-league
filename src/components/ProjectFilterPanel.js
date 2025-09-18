import React, { useEffect, useRef, useState } from "react";

const STAGES = [
  { key: "photo", label: "Фото" },
  { key: "broadcast", label: "Прямые трансляции" },
];

const GENDERS = [
  { key: "girls", label: "Девочки" },
  { key: "boys", label: "Мальчики" },
];

const COURSES = [
  { key: "begin", label: "5-6 классы" },
  { key: "middle", label: "7-8 классы" },
  { key: "adult", label: "9-11 классы" },
];

// Статический список регионов — при желании подмени на данные из API
const REGIONS = ["Актобе", "Рудный", "Лисаковск", "Хромтау", "Павлодар"];

export default function ProjectFilterPanel({
  years = ["2024", "2024-2025"],
  seasons = ["2024", "2024-2025"],
  defaultSeason = null,
  defaultStage = 'photo',
  defaultGender = null,
  defaultRegion = null,
  defaultCourse = null,
  onChange,
}) {
  const [stage, setStage] = useState(defaultStage);
  const [gender, setGender] = useState(defaultGender);
  const [season, setSeason] = useState(defaultSeason);
  const [year, setYear] = useState(defaultRegion);
  const [city, setCity] = useState(defaultRegion);
  const [course, setCourse] = useState(defaultCourse);

  // Управление дропдауном у «Регионального этапа»
  const [open, setOpen] = useState(false);
  const [openCity, setOpenCity] = useState(false);
  const btnRef = useRef(null);
  const listRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndexCity, setActiveIndexCity] = useState(0);

  // Закрытие по клику вне
  useEffect(() => {
    const onDoc = (e) => {
      if (!open) return;
      if (
        btnRef.current?.contains(e.target) ||
        listRef.current?.contains(e.target)
      )
        return;
      setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  // Клавиатура в поповере
  const onKeyDown = (e) => {
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, REGIONS.length - 1));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    }
    if (e.key === "Enter") {
      e.preventDefault();
      pickSeason(REGIONS[activeIndex]);
    }
    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
    }
  };

  const pickSeason = (val) => {
    setSeason(val);
    setOpen(false);
    // if (stage !== "years") setStage("years");
  };
  const pickCity = (val) => {
    setCity(val);
    setOpenCity(false);
    // if (stage !== "years") setStage("years");
  };

  // Прокидываем наружу выбранные фильтры
  useEffect(() => {
    onChange?.({ stage, gender, season, city, course });
  }, [stage, gender, season, city, course, onChange]);

  return (
    <div className="sf-wrap">
      <div className="sf-header">
        <div className="sf-breadcrumbs"></div>
      </div>

      <div className="sf-card">
        {/* Этапы */}
        <div className="sf-tabs">
          <div key={'years'} className="sf-tabWithDrop">
            <button
              ref={btnRef}
              className={`sf-tab ${
                open ? "sf-open" : ""
              }`}
              onClick={() => {
                setOpen((v) => !v);
              }}
              type="button"
              aria-haspopup="listbox"
              aria-expanded={open}
            >
              <span>
                {'Сезон'}
                {season ? `: ${season}` : ""}
              </span>
              <svg
                className="sf-chev"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  d="M7 10l5 5 5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>

            {open && (
              <div
                ref={listRef}
                className="sf-dropdown"
                role="listbox"
                tabIndex={-1}
              >
                {years.map((r, idx) => (
                  <button
                    key={idx}
                    role="option"
                    aria-selected={season === r}
                    className={`sf-dropItem ${
                      idx === activeIndex ? "sf-focused" : ""
                    } ${season === r ? "sf-selected" : ""}`}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => pickSeason(r)}
                    type="button"
                  >
                    {r}
                  </button>
                ))}
              </div>
            )}
          </div>
          {STAGES.map((s) => {
              return (
                <button
                  key={s.key}
                  className={`sf-tab ${stage === s.key ? "sf-active" : ""}`}
                  onClick={() => {
                    setStage(s.key);
                    setOpen(false);
                  }}
                  type="button"
                >
                  {s.label}
                </button>
              );
          })}
        </div>
        {
          stage && <div key={'cities'} className="sf-tabWithDrop" >
            <button
              ref={btnRef}
              className={`sf-tab ${
                openCity ? "sf-open" : ""
              }`}
              onClick={() => {
                setOpenCity((v) => !v);
              }}
              type="button"
              aria-haspopup="listbox"
              aria-expanded={open}
            >
              <span>
                {'Город'}
                {city ? `: ${city}` : ""}
              </span>
              <svg
                className="sf-chev"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  d="M7 10l5 5 5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>

            {openCity && (
              <div
                ref={listRef}
                className="sf-dropdown"
                role="listbox"
                tabIndex={-1}
              >
                {REGIONS.map((r, idx) => (
                  <button
                    key={idx}
                    role="option"
                    aria-selected={city === r}
                    className={`sf-dropItem ${
                      idx === activeIndex ? "sf-focused" : ""
                    } ${city === r ? "sf-selected" : ""}`}
                    onMouseEnter={() => setActiveIndexCity(idx)}
                    onClick={() => pickCity(r)}
                    type="button"
                  >
                    {r}
                  </button>
                ))}
              </div>
            )}
          </div>
        }

        {/* Зона под доп. фильтры (возраст, турнир и т.д.) */}
        <div className="sf-extra"></div>
      </div>
    </div>
  );
}
