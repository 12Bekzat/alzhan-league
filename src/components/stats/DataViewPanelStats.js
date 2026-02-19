import React, { useMemo } from "react";

const STATS = [
  { key: "points", label: "Очки" },
  { key: "rebounds", label: "Подборы" },
  { key: "assists", label: "Передачи" },
  { key: "steals", label: "Перехваты" },
  { key: "blocks", label: "Блокшоты" },
  { key: "efficiency", label: "Эффективность" },
  { key: "two_point_percent", label: "% 2-очк.", pct: true },
  { key: "three_point_percent", label: "% 3-очк.", pct: true },
  { key: "free_throw_percent", label: "% штрафных", pct: true },
  { key: "minutes", label: "Минуты" },
];

function fmtCell(value) {
  if (value == null || value === "") return "—";
  if (typeof value === "number") {
    return Number.isInteger(value) ? value : Number(value).toFixed(1);
  }
  return value;
}

function fmtPct(value) {
  if (value == null || value === "" || Number.isNaN(Number(value))) return "—";
  return `${Number(value).toFixed(1)}%`;
}

function normalizeRow(row) {
  return {
    id: row.id ?? row.team?.id ?? row.team?.name,
    rank: row.rank ?? null,
    team: row?.team?.name ?? row?.name ?? "Команда",
    city: row?.team?.city?.name ?? row?.city ?? "",
    logo: row?.team?.logo?.path ?? row?.logo?.path ?? row?.logo ?? null,
    points: row.points ?? null,
    rebounds: row.rebounds ?? null,
    assists: row.assists ?? null,
    steals: row.steals ?? null,
    blocks: row.blocks ?? null,
    efficiency: row.efficiency ?? null,
    two_point_percent: row.two_point_percent ?? null,
    three_point_percent: row.three_point_percent ?? null,
    free_throw_percent: row.free_throw_percent ?? null,
    minutes: row.minutes ?? null,
  };
}

export default function DataViewPanelStats({
  data = [],
  limit = 30,
  title = "Статистика команд",
}) {
  const rows = useMemo(() => {
    const normalized = data.map(normalizeRow);
    return normalized
      .sort((a, b) => {
        if (a.rank != null && b.rank != null) return a.rank - b.rank;
        return Number(b.points || 0) - Number(a.points || 0);
      })
      .slice(0, limit || normalized.length);
  }, [data, limit]);

  return (
    <section className="data-view-panel">
      <div className="data-view-panel__head">
        <h2 className="data-view-panel__title">{title}</h2>
        <div className="data-view-panel__meta">
          Показано: {rows.length} {rows.length === 1 ? "команда" : "команд"}
        </div>
      </div>

      {!rows.length ? (
        <div className="data-view-panel__empty">Нет данных для отображения</div>
      ) : (
        <div className="data-view-panel__list">
          {rows.map((row, index) => (
            <article key={`${row.id}-${index}`} className="data-view-panel__item">
              <div className="data-view-panel__top">
                <span className="data-view-panel__rank">{row.rank ?? index + 1}</span>
                <div className="data-view-panel__team">
                  {row.logo ? (
                    <img src={row.logo} alt="" className="data-view-panel__logo" />
                  ) : (
                    <span className="data-view-panel__logo data-view-panel__logo--empty" aria-hidden>
                      —
                    </span>
                  )}
                  <div className="data-view-panel__identity">
                    <h3 className="data-view-panel__name">{row.team}</h3>
                    <p className="data-view-panel__city">{row.city || "Город не указан"}</p>
                  </div>
                </div>
              </div>

              <div className="data-view-panel__stats">
                {STATS.map((stat) => {
                  const raw = row[stat.key];
                  const value = stat.pct ? fmtPct(raw) : fmtCell(raw);
                  const isPositivePct = stat.pct && Number(raw) >= 50;

                  return (
                    <div key={stat.key} className="data-view-panel__stat">
                      <span className="data-view-panel__stat-label">{stat.label}</span>
                      <span
                        className={
                          "data-view-panel__stat-value" +
                          (isPositivePct ? " data-view-panel__stat-value--pos" : "")
                        }
                      >
                        {value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
