import React, { useEffect, useMemo, useState } from "react";

const COLUMNS = [
  { key: "games_count", label: "Матчей проведено" },
  { key: "won_games_count", label: "Побед" },
  { key: "lose_games_count", label: "Поражения" },
  { key: "won_games_percent", label: "% побед" },
  { key: "plus_minus", label: "Разница мячей" },
  { key: "last_matches", label: "Последние 5 матчей" },
];

const RU_TO_KEY = {
  "Матчей проведено": "games_count",
  "Побед": "won_games_count",
  "Поражения": "lose_games_count",
  "% побед": "won_games_percent",
  "Разница мячей": "plus_minus",
  "Последние 5 матчей": "last_matches",
};

function fmtCell(v) {
  if (v == null || v === "") return "—";
  return typeof v === "number"
    ? Number.isInteger(v)
      ? v
      : Number(v).toFixed(1)
    : v;
}

/** Приводит объект из моего JSON (русские ключи внутри stats) к плоскому виду */
function normalizeRow(row) {
  const flat = {
    rank: row.rank ?? null,
    team: row.name ?? "",
    city: row?.team?.city?.name ?? "",
    logo: row?.logo?.path ?? null,
  };
  for (const [_, key] of Object.entries(RU_TO_KEY)) {
    if (key === 'last_matches') {
        flat['last_matches'] = row['won_games_count'] + ' из ' + row['games_count']
        continue
    }
    flat[key] = row[key] ?? null;
  }
  return flat;
}

export default function TeamTable({
  data, // массив как в моём JSON (rank,name,city,logo,stats{..})
  src, // путь до json-файла (альтернатива передаче data)
  limit = 30, // показывать первые N
  initialSort = { key: "won_games_count", dir: "desc" }, // сортировка по умолчанию
  title = "Статистика",
}) {
  const [rows, setRows] = useState([]);
  const [sort, setSort] = useState(initialSort);

  // загрузка из файла, если data не передали пропсом
  useEffect(() => {
    let cancelled = false;
    async function load() {
      if (data && data.length) {
        const normalized = data.map(normalizeRow);
        if (!cancelled) setRows(normalized);
        return;
      }
      if (src) {
        const r = await fetch(src);
        const json = await r.json();
        const normalized = (json || []).map(normalizeRow);
        if (!cancelled) setRows(normalized);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [data, src]);

  // сортировка
  const sorted = useMemo(() => {
    const arr = [...rows];
    const { key, dir } = sort || {};
    if (key) {
      arr.sort((a, b) => {
        const va = a[key],
          vb = b[key];
        // строки vs числа
        if (typeof va === "number" && typeof vb === "number") {
          return dir === "asc" ? va - vb : vb - va;
        }
        else if (key === 'plus_minus') {
            const first = parseInt(va)
            const second = parseInt(vb)
            console.log(first, second);
            
            return dir === "asc" ? first - second : second - first;
        }
        return dir === "asc"
          ? String(va ?? "").localeCompare(String(vb ?? ""))
          : String(vb ?? "").localeCompare(String(va ?? ""));
      });
    }
    console.log('arr', arr.slice(0, limit || arr.length));
    
    return arr.slice(0, limit || arr.length);
  }, [rows, sort, limit]);

  const onSort = (key) => {
    setSort((s) => {
      if (!s || s.key !== key) return { key, dir: "desc" };
      return { key, dir: s.dir === "desc" ? "asc" : "desc" };
    });
  };

  return (
    <section className="teams-table">
      <div className="teams-table__head">
        <h2 className="teams-table__title">{title}</h2>
        <div className="teams-table__meta">
          Показано: {sorted.length} {sorted.length === 1 ? "команда" : "команд"}
        </div>
      </div>

      <div className="teams-table__card">
        <table className="teams-table__grid">
          <thead>
            <tr>
              <th className="is-center">#</th>
              <th>Команда</th>
              <th>Город</th>
              {COLUMNS.map((col) => (
                <th key={col.key}>
                  <button
                    type="button"
                    className={
                      "th-sort " +
                      (sort?.key === col.key ? `is-${sort.dir}` : "")
                    }
                    onClick={() => onSort(col.key)}
                    title="Отсортировать"
                  >
                    {col.label}
                    <span className="th-sort__icon" aria-hidden>
                      ▾
                    </span>
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((r, i) => (
              <tr key={r.id + i}>
                <td className="is-center">{r.rank ?? i + 1}</td>
                <td>
                  <div className="team-cell">
                    {r?.logo ? (
                      <img src={r.logo} alt="" className="team-cell__logo" />
                    ) : (
                      <div
                        className="team-cell__logo team-cell__logo--empty"
                        aria-hidden
                      >
                        —
                      </div>
                    )}
                    <span className="team-cell__name">{r.team}</span>
                  </div>
                </td>
                <td className="text-muted">{r.city || "—"}</td>
                {COLUMNS.map((col) => {
                  const raw = r[col.key];
                  const value = col.fmt ? col.fmt(raw) : fmtCell(raw);
                  const cls = col.key.endsWith("_pct")
                    ? Number(raw) >= 50
                      ? "pos"
                      : Number(raw) > 0
                      ? ""
                      : ""
                    : "";
                  return (
                    <td key={col.key} className={cls}>
                      {value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
