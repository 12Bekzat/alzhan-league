import { useMemo } from "react";
import { useMtgame } from "../../hooks/useMtgame";
import PlayoffBracket from "./PlayoffBracket";

export default function PlayoffBoard({ tournament }) {
  const { useTournamentPlayoffs, usePlayoffGames } = useMtgame();

  const { data: playoffsRaw, status: playoffsStatus } = useTournamentPlayoffs(
    tournament?.id
  );

  const playoffs = useMemo(() => {
    if (Array.isArray(playoffsRaw)) return playoffsRaw;
    if (!playoffsRaw) return [];
    return [playoffsRaw];
  }, [playoffsRaw]);

  const selectedPlayoff = useMemo(() => {
    if (!playoffs.length) return null;

    const official = playoffs.find((item) => item?.is_official);
    if (official) return official;

    return [...playoffs].sort((a, b) => {
      const aSort = Number(a?.sort ?? 9999);
      const bSort = Number(b?.sort ?? 9999);
      return aSort - bSort;
    })[0];
  }, [playoffs]);

  const { data: gamesRaw, status: gamesStatus } = usePlayoffGames(
    selectedPlayoff?.id
  );

  const games = Array.isArray(gamesRaw) ? gamesRaw : [];
  const isLoading = playoffsStatus === "loading" || gamesStatus === "loading";

  return (
    <PlayoffBracket
      games={games}
      isLoading={isLoading}
      playoffName={selectedPlayoff?.name}
    />
  );
}
