import React, { useEffect, useMemo, useState } from "react";
import NewsGrid from "../components/NewGrid";
import news from "../data/news";
import {
  dedupeNewsById,
  getNewsYear,
  sortNewsByDateDesc,
} from "../utils/newsUtils";

export default function NewsPage() {
  const normalizedNews = useMemo(
    () => sortNewsByDateDesc(dedupeNewsById(Array.isArray(news) ? news : [])),
    []
  );

  const availableYears = useMemo(() => {
    const years = normalizedNews
      .map((item) => getNewsYear(item?.date))
      .filter((year) => Number.isFinite(year));

    return [...new Set(years)].sort((a, b) => b - a);
  }, [normalizedNews]);

  const [selectedYear, setSelectedYear] = useState("all");

  useEffect(() => {
    if (
      selectedYear !== "all" &&
      !availableYears.includes(Number(selectedYear))
    ) {
      setSelectedYear("all");
    }
  }, [availableYears, selectedYear]);

  const filteredNews = useMemo(() => {
    if (selectedYear === "all") {
      return normalizedNews;
    }

    const targetYear = Number(selectedYear);
    return normalizedNews.filter((item) => getNewsYear(item?.date) === targetYear);
  }, [normalizedNews, selectedYear]);

  return (
    <>
      <div className="docs-wrap" style={{ paddingBottom: 0 }}>
        <div className="docs-header">
          <div className="docs-breadcrumbs">
            Главная — <span>Новости</span>
          </div>
        </div>
      </div>
      <div className="game-stats-page">
        <div className="container">
          <h1 className="main-title">Новости</h1>

          <div
            className="news__filters"
            role="tablist"
            aria-label="Фильтр новостей по годам"
          >
            <button
              type="button"
              role="tab"
              className={
                "news__filter-btn" + (selectedYear === "all" ? " is-active" : "")
              }
              aria-selected={selectedYear === "all"}
              onClick={() => setSelectedYear("all")}
            >
              Все
            </button>

            {availableYears.map((year) => {
              const value = String(year);
              const isActive = selectedYear === value;

              return (
                <button
                  key={value}
                  type="button"
                  role="tab"
                  className={"news__filter-btn" + (isActive ? " is-active" : "")}
                  aria-selected={isActive}
                  onClick={() => setSelectedYear(value)}
                >
                  {value}
                </button>
              );
            })}
          </div>

          <NewsGrid
            posts={filteredNews}
            title={selectedYear === "all" ? "Новости" : `Новости ${selectedYear}`}
          />
        </div>
      </div>
    </>
  );
}
