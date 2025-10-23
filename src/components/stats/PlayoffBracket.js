import React, { useEffect, useMemo, useState } from 'react';

/**
 * stages: [{ id, name, settings: { rounds, final_rounds, third_place_rounds, teams_count, type }, status }]
 * gamesByStageId?: { [stageId: string]: Game[] }
 * Game (если есть матчи):
 *   {
 *     id,
 *     datetime, // ISO
 *     team: { name, logo? },
 *     competitor_team: { name, logo? },
 *     team_score,
 *     competitor_team_score,
 *     round?: 'semi'|'final'|'third' // опционально
 *   }
 */
export default function PlayoffBracket({ stages = [], gamesByStageId = {} }) {
  const [activeId, setActiveId] = useState(stages[0]?.id ?? null);
  useEffect(() => { if (!activeId && stages[0]) setActiveId(stages[0].id); }, [stages, activeId]);

  const activeStage = useMemo(() => stages.find(s => s.id === activeId) || null, [stages, activeId]);
  const games = gamesByStageId[activeId] || [];

  const columns = useMemo(() => buildColumns(activeStage, games), [activeStage, games]);

  return (
    <div className="pb">
      {/* Шапка */}
      <div className="pb__header">
        <div className="pb__title">Плей‑офф</div>
        <div className="pb__spacer" />
        <StageSelect stages={stages} activeId={activeId} onChange={setActiveId} />
      </div>

      {!activeStage ? (
        <div className="pb__empty">Этапы плей‑офф не найдены.</div>
      ) : (
        <section className="pb__stage">
          <div className="pb__stage-head">
            <h3 className="pb__stage-name">{activeStage.name}</h3>
            <StatusPill status={activeStage.status} />
          </div>

          {columns.length === 0 ? (
            <div className="pb__empty">Для этого этапа ещё нет игр.</div>
          ) : (
            <div className="pb__grid">
              {columns.map(col => (
                <div key={col.key} className="pb-col">
                  <div className="pb-col__title">{col.title}</div>
                  {col.matches.length === 0 ? (
                    <div className="pb-col__empty">Нет игр</div>
                  ) : (
                    col.matches.map(m => <MatchCard key={m.id} m={m} />)
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
}

function StageSelect({ stages, activeId, onChange }) {
  if (!stages?.length) return null;
  return (
    <div className="pb__select">
      <select value={activeId ?? ''} onChange={e => onChange(Number(e.target.value))}>
        {stages.map(s => (
          <option key={s.id} value={s.id}>{s.name}</option>
        ))}
      </select>
    </div>
  );
}

function StatusPill({ status }) {
  if (!status) return null;
  const map = { open: 'Идёт', closed: 'Завершён', draft: 'Черновик' };
  return <span className={`pb-pill pb-pill--${status}`}>{map[status] || status}</span>;
}

function MatchCard({ m }) {
  const left = m.leftTeam || m.team || {};
  const right = m.rightTeam || m.competitor_team || {};
  const date = m.date || m.datetime;
  const time = m.time || (m.datetime ? String(m.datetime).slice(11,16) : '');

  return (
    <article className="pb-card" role="group" aria-label="Матч">
      <div className="pb-card__date">{fmtDate(date)}{time ? `, ${time}` : ''}</div>
      <div className="pb-card__row">
        <Team name={left.name} logo={left.logo} />
        <Score value={m.scoreLeft ?? m.team_score ?? '—'} side="left" />
      </div>
      <div className="pb-card__row pb-card__row--muted">
        <Team name={right.name} logo={right.logo} />
        <Score value={m.scoreRight ?? m.competitor_team_score ?? '—'} side="right" muted />
      </div>
    </article>
  );
}

function Team({ name, logo }) {
  const src = typeof logo === 'string' ? logo : (logo?.url || logo?.original?.url);
  const initials = getInitials(name);
  return (
    <div className="pb-team">
      {src ? (
        <img className="pb-team__logo" src={src} alt="logo" />
      ) : (
        <div className="pb-team__avatar" aria-hidden>{initials}</div>
      )}
      <div className="pb-team__name" title={name}>{name}</div>
    </div>
  );
}

function Score({ value, side, muted }) {
  return <div className={`pb-score pb-score--${side}${muted ? ' is-muted' : ''}`}>{value}</div>;
}

function buildColumns(stage, games) {
  if (!stage) return [];
  const st = stage.settings || {};
  const cols = [];

  if (st.rounds >= 2) cols.push({ key: 'semi', title: 'ПОЛУФИНАЛ', matches: [] });
  if (st.final_rounds >= 1 || st.rounds >= 1) cols.push({ key: 'final', title: 'ФИНАЛ', matches: [] });
  if (st.third_place_rounds >= 1) cols.push({ key: 'third', title: '3 МЕСТО', matches: [] });

  if (!games?.length) return cols;

  const byKey = Object.fromEntries(cols.map(c => [c.key, c]));
  games.forEach(g => {
    const ui = mapGameToUi(g);
    const key = g.round || guessRound(ui, st);
    if (byKey[key]) byKey[key].matches.push(ui);
  });
  return cols;
}

function mapGameToUi(g) {
  const left = g.team || g.leftTeam || {};
  const right = g.competitor_team || g.rightTeam || {};
  const dt = g.datetime || g.date;
  const date = typeof dt === 'string' ? dt.slice(0,10) : dt;
  const time = typeof dt === 'string' ? dt.slice(11,16) : '';

  return {
    id: g.id,
    date,
    time,
    leftTeam: { name: left.name, logo: left.logo },
    rightTeam: { name: right.name, logo: right.logo },
    scoreLeft: g.team_score ?? g.scoreLeft,
    scoreRight: g.competitor_team_score ?? g.scoreRight,
  };
}

function guessRound(ui, st) { return 'final'; }

function fmtDate(iso) { if (!iso) return ''; try { return new Date(iso).toLocaleDateString('ru-RU', { day: '2-digit', month: 'short' }); } catch { return iso; } }
function getInitials(name = '') { const letters = name.replace(/[^\p{L}\s]/gu, '').trim().split(/\s+/).slice(0, 2).map(w => w[0]).join(''); return (letters || '—').toUpperCase(); }
