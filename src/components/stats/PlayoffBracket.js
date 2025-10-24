import React, { useMemo } from 'react';

export default function PlayoffBracket({ games = [], title = 'Плей-офф' }) {
  const items = useMemo(() => games.map(fromMtgameGame).filter(Boolean), [games]);

  // Группировка по стадиям
  const semi = items.filter(g => g.stageKey === 'semi');
  const final = items.filter(g => g.stageKey === 'final');
  const third = items.filter(g => g.stageKey === 'third');

  const isEmpty = semi.length + final.length + third.length === 0;

  return (
    <section className="pb">
      {isEmpty ? (
        <div className="pb__empty">Матчей плей‑офф пока нет</div>
      ) : (
        <div className="pb__grid">
          <div className="pb__col">
            <div className="pb__col-title">ПОЛУФИНАЛ</div>
            {semi.length === 0 && <div className="pb__placeholder">—</div>}
            {semi.map(m => <MatchCard key={m.id} match={m} />)}
          </div>

          <div className="pb__col">
            <div className="pb__col-title">ФИНАЛ</div>
            {final.length === 0 && <div className="pb__placeholder">—</div>}
            {final.map(m => <MatchCard key={m.id} match={m} big />)}
          </div>

          <div className="pb__col">
            <div className="pb__col-title">3 МЕСТО</div>
            {third.length === 0 && <div className="pb__placeholder">—</div>}
            {third.map(m => <MatchCard key={m.id} match={m} />)}
          </div>
        </div>
      )}
    </section>
  );
}

function MatchCard({ match, big = false }) {
  const {
    id,
    dateStr,
    timeStr,
    leftTeam,
    rightTeam,
    scoreLeft,
    scoreRight,
  } = match;

  const leftWins = Number(scoreLeft) > Number(scoreRight);
  const rightWins = Number(scoreRight) > Number(scoreLeft);

  return (
    <article className={"pb-card" + (big ? ' pb-card--big' : '')} data-id={id}>
      <div className="pb-card__row">
        <Team name={leftTeam.name} logo={leftTeam.logo} subtitle={dateStr + (timeStr ? ', ' + timeStr : '')} />
        <div className={"pb-card__score pb-card__score--left" + (leftWins ? ' is-win' : '')}>{scoreLeft ?? '—'}</div>
      </div>

      <div className="pb-card__row">
        <Team name={rightTeam.name} logo={rightTeam.logo} />
        <div className={"pb-card__score" + (rightWins ? ' is-win' : '')}>{scoreRight ?? '—'}</div>
      </div>
    </article>
  );
}

function Team({ name, logo, subtitle }) {
  return (
    <div className="pb-team">
      {logo && <img className="pb-team__logo" src={logo} alt="logo" />}
      <div className="pb-team__meta">
        <div className="pb-team__name" title={name}>{name || '—'}</div>
        {subtitle && <div className="pb-team__sub">{subtitle}</div>}
      </div>
    </div>
  );
}

// =========================
// ADAPTER: MTGame payload -> внутренний формат
// =========================
export function fromMtgameGame(game) {
  if (!game) return null;

  const leftTeam = {
    name: game?.team?.name || '—',
    logo: game?.team?.logo?.path,
  };
  const rightTeam = {
    name: game?.competitor_team?.name || '—',
    logo: game?.competitor_team?.logo?.path,
  };

  const dt = game?.datetime ? new Date(game.datetime) : null;
  const dateStr = dt ? dt.toLocaleDateString('ru-RU', { day: '2-digit', month: 'short' }) : undefined;
  const timeStr = dt ? dt.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }) : undefined;

  // Определяем стадию: полуфинал / финал / матч за 3-е место
  const stageText = String(game?.playoff_stage || '').toLowerCase();
  const numberText = String(game?.playoff_number || '').toLowerCase();

  let stageKey = 'semi';
  if (stageText.includes('финал') || /(^|\b)1\s*\/\s*1(\b|$)/.test(stageText)) stageKey = 'final';
  if (stageText.includes('3') && (stageText.includes('мест') || stageText.includes('place'))) stageKey = 'third';
  // fallback: иногда в number пишут 3rd
  if (/third|3-?place|3мест|3_mesto/i.test(numberText)) stageKey = 'third';

  return {
    id: game.id,
    stageKey,
    dateStr,
    timeStr,
    leftTeam,
    rightTeam,
    scoreLeft: game?.team_score,
    scoreRight: game?.competitor_team_score,
  };
}