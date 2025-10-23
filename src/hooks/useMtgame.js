import { useEffect, useMemo, useRef, useState } from "react";

const DEFAULT_BASE_URL = "https://mtgame.ru/api/v1";
const ALZHAN_ID = 108;

function qs(params) {
  if (!params) return "";
  const sp = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v === undefined || v === null) return;
    sp.set(k, String(v));
  });
  const s = sp.toString();
  return s ? `?${s}` : "";
}

async function getJson(url, signal) {
  const res = await fetch(url, { signal });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`HTTP ${res.status}: ${text || res.statusText}`);
  }
  return res.json();
}

export function useCancelableFetch(url) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState(null);
  const cacheRef = useRef({});

  useEffect(() => {
    if (!url) return;
    let active = true;
    const controller = new AbortController();

    if (cacheRef.current[url]) {
      setData(cacheRef.current[url]);
      setStatus("success");
      return;
    }

    setStatus("loading");
    setError(null);

    getJson(url, controller.signal)
      .then((json) => {
        if (!active) return;
        cacheRef.current[url] = json;
        setData(json);
        setStatus("success");
      })
      .catch((e) => {
        if (!active || controller.signal.aborted) return;
        setError(e instanceof Error ? e : new Error(String(e)));
        setStatus("error");
      });

    return () => {
      active = false;
      controller.abort();
    };
  }, [url]);

  return { data, status, error };
}

export function useMtgame(baseUrl = DEFAULT_BASE_URL) {
  const api = useMemo(() => {
    const u = (p, params) => `${baseUrl}${p}${qs(params)}`;

    // ---------- ЛИГА / ТУРНИРЫ ----------
    const useLeagueTournaments = (leagueId) =>
      useCancelableFetch(u(`/league/${leagueId || ALZHAN_ID}/tournaments/`));

    const useTournamentGames = ({ page = 1, size = 9, tournamentId = null }) =>
      useCancelableFetch(
        u(`/tournament/${tournamentId || ALZHAN_ID}/games/`, { page, size })
      );

    // ---------- ИГРА: СОСТАВЫ, ЛОГИ, СТАТИСТИКА ----------
    const useGameUsers = (gameId) =>
      useCancelableFetch(
        gameId ? u(`/tournament_basketball_game/${gameId}/users/`) : undefined
      );

    const useGameLogs = (gameId) =>
      useCancelableFetch(
        gameId ? u(`/tournament_basketball_game/${gameId}/logs/`) : undefined
      );

    const useGameUserStatistic = (gameId) =>
      useCancelableFetch(
        gameId
          ? u(`/tournament_basketball_game/${gameId}/user_statistic/`)
          : undefined
      );

    const useGameTeamStatistic = (gameId) =>
      useCancelableFetch(
        gameId
          ? u(`/tournament_basketball_game/${gameId}/team_statistic/`)
          : undefined
      );

    // ---------- АГРЕГИРОВАННАЯ СТАТИСТИКА ----------
    // params: group_by, per_game, tournament_id, league_id, tournament_team_id, team_id,
    //         tournament_team_user_id, league_player_id, order_by
    const useBasketballStatistic = (params) =>
      useCancelableFetch(u(`/basketball_statistic/`, params));

    // ---------- КОМАНДЫ / ПЛЕЙ-ОФФ ----------
    const useTournamentTableTeams = (tournamentId) =>
      useCancelableFetch(
        u(`/tournament/${tournamentId || ALZHAN_ID}/teams/`)
      );

    const useTournamentPlayoffs = (tournamentId) =>
      useCancelableFetch(
        u(`/tournament/${tournamentId || ALZHAN_ID}/playoff/`)
      );

    const usePlayoffGames = (playoffId) =>
      useCancelableFetch(
        playoffId ? u(`/tournament_playoff/${playoffId}/games/`) : undefined
      );

    // ---------- ДАННЫЕ ПО КОМАНДЕ / ИГРОКАМ ----------
    const useTournamentTeam = (tournamentTeamId) =>
      useCancelableFetch(
        tournamentTeamId
          ? u(`/tournament_team/${tournamentTeamId}/`)
          : undefined
      );

    const useTournamentTeamUsers = (tournamentTeamId) =>
      useCancelableFetch(
        tournamentTeamId
          ? u(`/tournament_team/${tournamentTeamId}/users/`)
          : undefined
      );

    const useTournamentTeamUser = (tournamentTeamUserId) =>
      useCancelableFetch(
        tournamentTeamUserId
          ? u(`/tournament_team_user/${tournamentTeamUserId}/`)
          : undefined
      );

    // ---------- ЛИГА: ИГРОК ----------
    const useLeaguePlayer = (leaguePlayerId) =>
      useCancelableFetch(
        leaguePlayerId ? u(`/league_player/${leaguePlayerId}/`) : undefined
      );

    const useLeaguePlayerTournamentUsers = (leaguePlayerId) =>
      useCancelableFetch(
        leaguePlayerId
          ? u(`/league_player/${leaguePlayerId}/tournament_users/`)
          : undefined
      );

    return {
      url: u,
      useLeagueTournaments,
      useTournamentGames,
      useGameUsers,
      useGameLogs,
      useGameUserStatistic,
      useGameTeamStatistic,
      useBasketballStatistic,
      useTournamentTableTeams,
      useTournamentPlayoffs,
      usePlayoffGames,
      useTournamentTeam,
      useTournamentTeamUsers,
      useTournamentTeamUser,
      useLeaguePlayer,
      useLeaguePlayerTournamentUsers,
    };
  }, [baseUrl]);

  return api;
}
