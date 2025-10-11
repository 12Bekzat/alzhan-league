// src/pages/GameStats.jsx
import React, { useCallback, useMemo, useState } from "react";
import TeamsStatsTable from "../components/TeamsStatsTable";
import StatsFilterPanel from "../components/StatsFilterPanel";
import TabPanel from "../components/TabPanel";
import { useMtgame } from "../hooks/useMtgame";
import { GROUPS, makeStatParams } from "../utils/filterConfig";

export default function GameStats() {
  const [filters, setFilters] = useState({
    stage: "regular",  // regular | playoff
    gender: "mixed",   // пример
    season: "2024/25", // пример
    region: "all",     // пример
    leagueId: 3,       // твоя лига
    tournamentId: undefined, // можно подхватывать из селектора турниров
  });

  const {
    useLeagueTournaments,
    useTournamentGames,
    useTournamentTableTeams,
    useTournamentPlayoffs,
    usePlayoffGames,
    useBasketballStatistic,
  } = useMtgame();

  // 1) Подтягиваем турниры лиги (можно дать пользователю выбрать из выпадашки)
  const { data: tournaments, status: tStatus } = useLeagueTournaments(filters.leagueId);

  // Пример: если в фильтре не выбран турнир — подставим первый «под сезон/регион»
  const resolvedTournamentId = useMemo(() => {
    if (filters.tournamentId) return filters.tournamentId;
    if (!tournaments) return undefined;
    // тут можешь отфильтровать по season/region/gender:
    // const t = tournaments.find(t => t.season === filters.season && t.region === filters.region);
    const t = tournaments?.[0];
    return t?.id;
  }, [filters.tournamentId, tournaments /*, filters.season, filters.region*/]);

  // 2) Матчи по турниру
  const { data: gamesData, status: gamesStatus } = useTournamentGames(resolvedTournamentId, 1, 200);

  // 3) Турнирная таблица (команды турнира)
  const { data: tableTeams, status: tableStatus } = useTournamentTableTeams(resolvedTournamentId);

  // 4) Плей-офф: сетки и игры
  const { data: playoffs, status: poStatus } = useTournamentPlayoffs(resolvedTournamentId);
  const playoffId = playoffs?.[0]?.id; // при необходимости — селектор сетки
  const { data: playoffGames, status: poGamesStatus } = usePlayoffGames(playoffId);

  // 5) Агрегированная статистика для вкладок «Статистика» и «Лидеры»
  //    Группировка по игрокам турнира (как в примере из справочника)
  const statParams = useMemo(() => {
    return makeStatParams({
      tournamentId: resolvedTournamentId,
      leagueId: filters.leagueId,
      groupBy: GROUPS.PLAYERS_IN_TOURNAMENT, // tournament_team_user
      perGame: true,
      // Пример сортировки: ORDER BY points DESC — см. свой сервер, какое поле принимает order_by
      // orderBy: "-points"
    });
  }, [resolvedTournamentId, filters.leagueId]);

  const { data: statsAgg, status: statsStatus, error: statsError } = useBasketballStatistic(statParams);

  // Маппинг данных API -> формат таблицы
  const tableFromTeams = useMemo(() => {
    if (!tableTeams) return [];
    // Преобразуй к формату твоего TeamsStatsTable
    return tableTeams.map((t, i) => ({
      rank: i + 1,
      name: t?.team?.name || t?.name,
      city: t?.team?.city || t?.city || "",
      logo: t?.team?.logo || t?.logo || null,
      stats: {
        // адаптируй под поля API (примерные поля, зависят от твоего ответа)
        Очки: t.points_total ?? 0,
        Подборы: t.rebounds_total ?? 0,
        Передачи: t.assists_total ?? 0,
        "Игровое время (мин)": t.minutes_total ?? 0,
      },
    }));
  }, [tableTeams]);

  const tableFromGames = useMemo(() => {
    if (!gamesData) return [];
    // сверстай как тебе удобно (матчи в строках или агрегировать)
    return gamesData.map((g, i) => ({
      rank: i + 1,
      name: `${g.team_home?.name || "Команда A"} — ${g.team_away?.name || "Команда B"}`,
      city: g.city || "",
      logo: g.team_home?.logo || null,
      stats: {
        Очки: `${g.score_home ?? "-"} : ${g.score_away ?? "-"}`,
        "Дата матча": g.start_datetime?.slice(0, 10) || "",
      },
    }));
  }, [gamesData]);

  const tableFromPlayoff = useMemo(() => {
    if (!playoffGames) return [];
    return playoffGames.map((g, i) => ({
      rank: i + 1,
      name: `${g.team_home?.name || "A"} — ${g.team_away?.name || "B"}`,
      city: g.round_name || "Playoff",
      logo: g.team_home?.logo || null,
      stats: {
        Очки: `${g.score_home ?? "-"} : ${g.score_away ?? "-"}`,
        Раунд: g.round_name || "",
      },
    }));
  }, [playoffGames]);

  const tableFromAggregated = useMemo(() => {
    if (!statsAgg) return [];
    // Пример: ответ по игрокам турнира -> строки таблицы
    return statsAgg.map((row, i) => ({
      rank: i + 1,
      name: row?.user_name || row?.player_name || "Игрок",
      city: row?.team_name || "",
      logo: row?.team_logo || null,
      stats: {
        Очки: row.points ?? 0,
        Подборы: row.rebounds ?? 0,
        Передачи: row.assists ?? 0,
        Перехваты: row.steals ?? 0,
        Блокшоты: row.blocks ?? 0,
        "2 очковых": row.twos_made ?? 0,
        "% 2 очковых": row.twos_pct ?? 0,
        "3 очковых": row.threes_made ?? 0,
        "% 3 очковых": row.threes_pct ?? 0,
        штрафных: row.fts_made ?? 0,
        "% штрафных": row.fts_pct ?? 0,
        "Эффектив.": row.efficiency ?? 0,
        "Игровое время (мин)": row.minutes ?? 0,
      },
    }));
  }, [statsAgg]);

  const handleChange = useCallback((next) => {
    // next приходит из StatsFilterPanel, например { stage, gender, season, region, tournamentId }
    setFilters((prev) => ({ ...prev, ...next }));
  }, []);

  // Можно показать индикаторы загрузки/ошибки
  const loadingBlock = (s) => s === "loading" ? <div className="mt-16">Загрузка…</div> : null;

  return (
    <>
      <div className="docs-wrap" style={{ paddingBottom: 0 }}>
        <div className="docs-header">
          <div className="docs-breadcrumbs">
            Главная — <span>Статистика игр</span>
          </div>
        </div>
      </div>

      <TabPanel
        tabs={[
          {
            label: "Матчи",
            content: (
              <div className="game-stats-page">
                <div className="container">
                  <div className="main-title">Статистика игр</div>
                  <StatsFilterPanel
                    onChange={handleChange}
                    tournaments={tournaments}
                    value={filters}
                  />
                  {loadingBlock(gamesStatus)}
                  <TeamsStatsTable data={tableFromGames} limit={30} />
                </div>
              </div>
            ),
          },
          {
            label: "Таблица",
            content: (
              <div className="game-stats-page">
                <div className="container">
                  <StatsFilterPanel
                    onChange={handleChange}
                    tournaments={tournaments}
                    value={filters}
                  />
                  {loadingBlock(tableStatus)}
                  <TeamsStatsTable data={tableFromTeams} limit={30} />
                </div>
              </div>
            ),
          },
          {
            label: "Плей-офф",
            content: (
              <div className="game-stats-page">
                <div className="container">
                  <StatsFilterPanel
                    onChange={handleChange}
                    tournaments={tournaments}
                    value={filters}
                  />
                  {loadingBlock(poStatus) || loadingBlock(poGamesStatus)}
                  <TeamsStatsTable data={tableFromPlayoff} limit={30} />
                </div>
              </div>
            ),
          },
          {
            label: "Статистика",
            content: (
              <div className="game-stats-page">
                <div className="container">
                  <StatsFilterPanel
                    onChange={handleChange}
                    tournaments={tournaments}
                    value={filters}
                  />
                  {loadingBlock(statsStatus)}
                  <TeamsStatsTable data={tableFromAggregated} limit={30} />
                </div>
              </div>
            ),
          },
          {
            label: "Лидеры",
            content: (
              <div className="game-stats-page">
                <div className="container">
                  <StatsFilterPanel
                    onChange={handleChange}
                    tournaments={tournaments}
                    value={filters}
                  />
                  {loadingBlock(statsStatus)}
                  <TeamsStatsTable data={tableFromAggregated} limit={30} />
                </div>
              </div>
            ),
          },
        ]}
      />
    </>
  );
}
