import React, { useMemo } from "react";

const STATS = [
  { key: "games_count", label: "Матчей" },
  { key: "won_games_count", label: "Победы" },
  { key: "lose_games_count", label: "Поражения" },
  { key: "won_games_percent", label: "% побед" },
  { key: "plus_minus", label: "Разница" },
  { key: "last_matches", label: "Последние 5" },
];

function fmtCell(value) {
  if (value == null || value === "") return "—";
  if (typeof value === "number") {
    return Number.isInteger(value) ? value : Number(value).toFixed(1);
  }
  return value;
}

function normalizeRow(row) {
  const gamesCount = Number(row.games_count || 0);
  const winsCount = Number(row.won_games_count || 0);

  return {
    id: row.id ?? row.team?.id ?? row.name,
    rank: row.rank ?? null,
    team: row.name ?? "Команда",
    city: row?.team?.city?.name ?? "",
    logo: row?.logo?.path ?? null,
    games_count: row.games_count ?? null,
    won_games_count: row.won_games_count ?? null,
    lose_games_count: row.lose_games_count ?? null,
    won_games_percent: row.won_games_percent ?? null,
    plus_minus: row.plus_minus ?? null,
    last_matches: `${winsCount} из ${gamesCount}`,
  };
}

function parsePlusMinus(value) {
  const parsed = Number.parseInt(value, 10);
  return Number.isNaN(parsed) ? 0 : parsed;
}

export default function DataViewPanel({ data = [], limit = 30, title = "Таблица команд" }) {
  const rows = useMemo(() => {
    const normalized = data.map(normalizeRow);
    return normalized
      .sort((a, b) => {
        if (a.rank != null && b.rank != null) return a.rank - b.rank;
        return parsePlusMinus(b.plus_minus) - parsePlusMinus(a.plus_minus);
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
                  const value = fmtCell(row[stat.key]);
                  const isPositiveDelta =
                    stat.key === "plus_minus" && parsePlusMinus(row.plus_minus) > 0;

                  return (
                    <div key={stat.key} className="data-view-panel__stat">
                      <span className="data-view-panel__stat-label">{stat.label}</span>
                      <span
                        className={
                          "data-view-panel__stat-value" +
                          (isPositiveDelta ? " data-view-panel__stat-value--pos" : "")
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
