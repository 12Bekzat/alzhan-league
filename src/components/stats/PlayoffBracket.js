import React, { useMemo } from "react";

const STAGE_ORDER = ["quarter", "semi", "final", "third"];

const STAGE_META = {
  quarter: { label: "1/4 финала" },
  semi: { label: "1/2 финала" },
  final: { label: "Финал" },
  third: { label: "3 место" },
};

const EMPTY_TEAM = { name: "—", logo: null };

const normalizeText = (value) =>
  String(value || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();

const parsePlayoffNumber = (rawValue) => {
  const raw = String(rawValue || "").trim();
  const [roundStr, pairStr] = raw.split("_");

  const roundIndex = Number(roundStr);
  const pairIndex = Number(pairStr);

  return {
    raw,
    roundIndex: Number.isFinite(roundIndex) ? roundIndex : null,
    pairIndex: Number.isFinite(pairIndex) ? pairIndex : null,
  };
};

const parseScore = (value) => {
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
};

const parseStageKey = (game, playoffNumber) => {
  const stage = normalizeText(game?.playoff_stage);

  const isThirdByText =
    (stage.includes("3") && stage.includes("мест")) || stage.includes("third");
  if (isThirdByText) return "third";

  if (stage.includes("1 / 4") || stage.includes("1/4") || stage.includes("четверт")) {
    return "quarter";
  }
  if (stage.includes("1 / 2") || stage.includes("1/2") || stage.includes("полуфин")) {
    return "semi";
  }
  if (stage.includes("финал")) {
    return "final";
  }

  if (playoffNumber.roundIndex === 1) return "quarter";
  if (playoffNumber.roundIndex === 2) return "semi";
  if (playoffNumber.roundIndex === 3 && playoffNumber.pairIndex === 2) return "third";
  if (playoffNumber.roundIndex === 3) return "final";

  const round = Number(game?.playoff_round);
  if (round === 4) return "quarter";
  if (round === 2) return "semi";
  if (round === 1) return "final";

  return "semi";
};

const pickTeam = (primary, fallback) => {
  const source = primary || fallback || {};
  const logoPath = source?.logo?.path || null;

  return {
    name: source?.name || "—",
    logo: logoPath,
  };
};

const toMatchView = (game) => {
  if (!game || typeof game !== "object") return null;

  const playoffNumber = parsePlayoffNumber(game.playoff_number);
  const stageKey = parseStageKey(game, playoffNumber);
  const dateObj = game?.datetime ? new Date(game.datetime) : null;
  const dateValid = dateObj && !Number.isNaN(dateObj.getTime());

  return {
    id: game.id || `${playoffNumber.raw || "game"}-${game?.datetime || "0"}`,
    stageKey,
    playoffNumber: playoffNumber.raw,
    pairIndex: playoffNumber.pairIndex,
    datetime: dateValid ? dateObj : null,
    timestamp: dateValid ? dateObj.getTime() : Number.MAX_SAFE_INTEGER,
    location: game?.location || game?.tournament_court?.address || null,
    homeTeam: pickTeam(game?.team, game?.tournament_team),
    awayTeam: pickTeam(game?.competitor_team, game?.competitor_tournament_team),
    homeScore: parseScore(game?.team_score),
    awayScore: parseScore(game?.competitor_team_score),
  };
};

const sortMatches = (a, b) => {
  const pairA = a.pairIndex ?? 999;
  const pairB = b.pairIndex ?? 999;
  if (pairA !== pairB) return pairA - pairB;
  if (a.timestamp !== b.timestamp) return a.timestamp - b.timestamp;
  return String(a.id).localeCompare(String(b.id));
};

const groupStageMatches = (matches) => {
  const groupsMap = new Map();

  matches.forEach((match) => {
    const key = Number.isFinite(match.pairIndex)
      ? `pair-${match.pairIndex}`
      : `match-${match.id}`;

    if (!groupsMap.has(key)) {
      groupsMap.set(key, {
        key,
        pairIndex: match.pairIndex,
        matches: [],
      });
    }
    groupsMap.get(key).matches.push(match);
  });

  return Array.from(groupsMap.values())
    .map((group) => ({
      ...group,
      matches: [...group.matches].sort(sortMatches),
    }))
    .sort((a, b) => (a.pairIndex ?? 999) - (b.pairIndex ?? 999));
};

const formatDate = (date) =>
  date
    ? date.toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "short",
      })
    : "Дата уточняется";

const formatTime = (date) =>
  date
    ? date.toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

function TeamRow({ team, score, isWinner }) {
  const scoreLabel = Number.isFinite(score) ? score : "—";

  return (
    <div className={`clb-match__team ${isWinner ? "is-winner" : ""}`}>
      <div className="clb-match__teamMeta">
        {team?.logo ? (
          <img className="clb-match__logo" src={team.logo} alt={team?.name || "Team"} />
        ) : (
          <div className="clb-match__logo clb-match__logo--empty" />
        )}
        <div className="clb-match__name" title={team?.name || "—"}>
          {team?.name || "—"}
        </div>
      </div>
      <div className={`clb-match__score ${isWinner ? "is-winner" : ""}`}>{scoreLabel}</div>
    </div>
  );
}

function MatchCard({ match }) {
  const homeWins =
    Number.isFinite(match.homeScore) &&
    Number.isFinite(match.awayScore) &&
    match.homeScore > match.awayScore;
  const awayWins =
    Number.isFinite(match.homeScore) &&
    Number.isFinite(match.awayScore) &&
    match.awayScore > match.homeScore;

  return (
    <article className="clb-match">
      <header className="clb-match__meta">
        <span>{formatDate(match.datetime)}</span>
        {formatTime(match.datetime) ? <span>{formatTime(match.datetime)}</span> : null}
        {match.playoffNumber ? <span>Матч {match.playoffNumber}</span> : null}
      </header>

      <TeamRow team={match.homeTeam || EMPTY_TEAM} score={match.homeScore} isWinner={homeWins} />
      <TeamRow team={match.awayTeam || EMPTY_TEAM} score={match.awayScore} isWinner={awayWins} />
    </article>
  );
}

export default function PlayoffBracket({
  games = [],
  isLoading = false,
  playoffName = "",
}) {
  const stageColumns = useMemo(() => {
    const mapped = (Array.isArray(games) ? games : []).map(toMatchView).filter(Boolean);
    const byStage = {
      quarter: [],
      semi: [],
      final: [],
      third: [],
    };

    mapped.forEach((match) => {
      if (!byStage[match.stageKey]) return;
      byStage[match.stageKey].push(match);
    });

    return STAGE_ORDER.map((stageKey) => {
      const matches = [...byStage[stageKey]].sort(sortMatches);
      return {
        key: stageKey,
        label: STAGE_META[stageKey].label,
        groups: groupStageMatches(matches),
        count: matches.length,
      };
    });
  }, [games]);

  const hasGames = stageColumns.some((column) => column.count > 0);

  return (
    <section className="clb">
      <header className="clb__header">
        <h3 className="clb__title">Сетка плей-офф</h3>
        {playoffName ? <p className="clb__subtitle">{playoffName}</p> : null}
      </header>

      {isLoading ? (
        <div className="clb__empty">Загружаем матчи плей-офф...</div>
      ) : !hasGames ? (
        <div className="clb__empty">Матчей плей-офф пока нет</div>
      ) : (
        <div className="clb__grid">
          {stageColumns.map((stage) => (
            <section className="clb-stage" key={stage.key}>
              <div className="clb-stage__head">
                <span className="clb-stage__label">{stage.label}</span>
                <span className="clb-stage__count">{stage.count}</span>
              </div>

              <div className="clb-stage__body">
                {stage.groups.length ? (
                  stage.groups.map((group) => (
                    <div className="clb-series" key={group.key}>
                      {Number.isFinite(group.pairIndex) &&
                      stage.key !== "final" &&
                      stage.key !== "third" ? (
                        <div className="clb-series__title">Пара {group.pairIndex}</div>
                      ) : null}
                      <div className="clb-series__matches">
                        {group.matches.map((match) => (
                          <MatchCard key={match.id} match={match} />
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="clb-stage__empty">Нет матчей на этой стадии</div>
                )}
              </div>
            </section>
          ))}
        </div>
      )}
    </section>
  );
}
