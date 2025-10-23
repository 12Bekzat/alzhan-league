import React, { useMemo, useState } from 'react';

const STAGES = [
  { key: 'regional', label: 'Региональный этап' },
  { key: 'superfinal', label: 'Суперфинал' },
];

const TABS = ['Матчи', 'Таблица', 'Плей-офф', 'Статистика', 'Лидеры'];

export default function MatchesBoard({ matches = [], initialSeason = '2024-2025', seasons = ['2024-2025', '2023-2024'] }) {
  const [activeStage, setActiveStage] = useState(STAGES[1].key);
  const [season, setSeason] = useState(initialSeason);

  return (
    <div className="mb">
      <section className="mb__content">
        <div className="mb__grid">
          {matches.map(match => (
            <MatchCard key={match.id} match={match} />
          ))}
          {matches.length === 0 && (
            <div className="mb__empty">Нет матчей по выбранным фильтрам</div>
          )}
        </div>
      </section>
    </div>
  );
}

function MatchCard({ match }) {
  const {
    datetime,
    time,
    eventTitle = 'Суперфинал Школьной Лиги «Alzhan»',
    team: leftTeam,
    competitor_team: rightTeam,
    team_score: scoreLeft,
    competitor_team_score: scoreRight,
    winsNote,
  } = match;

  const winner = scoreLeft === scoreRight ? 'Ничья' : scoreLeft > scoreRight ? leftTeam?.name : rightTeam?.name;

  return (
    <article className="mb-card">
      <div className="mb-card__head">
        <div className="mb-card__datetime">
          <span className="mb-card__date">{fmtDate(datetime)}</span>
          {time && <span className="mb-card__time">{time}</span>}
        </div>
      </div>

      <div className="mb-card__event">{eventTitle}</div>
      <h3 className="mb-card__title">Результат матча</h3>

      <div className="mb-card__teams">
        <Team name={leftTeam?.name} logo={leftTeam?.logo?.path} score={scoreLeft} align="left" />
        <div className="mb-card__vs">vs</div>
        <Team name={rightTeam?.name} logo={rightTeam?.logo?.path} score={scoreRight} align="right" />
      </div>

      <div className="mb-card__footer">
        {winsNote ? (
          <span className="mb-card__wins">{winsNote}</span>
        ) : (
          <span className="mb-card__winner">Победитель: {winner}</span>
        )}
      </div>
    </article>
  );
}

function Team({ name, logo, score, align }) {
  return (
    <div className={"mb-team mb-team--" + align}>
      <div className="mb-team__info">
        <div className="mb-team__name" title={name}>{name}</div>
        {logo && <img className="mb-team__logo" src={logo} alt="logo" />}
      </div>
      <div className="mb-team__score">{score}</div>
    </div>
  );
}

function fmtDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString('ru-RU', { day: '2-digit', month: 'long' });
  } catch {
    return iso;
  }
}