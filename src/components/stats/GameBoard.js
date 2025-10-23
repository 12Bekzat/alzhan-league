import React, { useEffect, useState } from "react";
import { useMtgame } from "../../hooks/useMtgame";
import MatchesBoard from "./MatchBoard";

export default function GameBoard() {
  const { useTournamentGames } = useMtgame();

  const [page, setPage] = useState(1);
  const [games, setGames] = useState([])
  const { data, status } = useTournamentGames({
    page,
    size: 9,
    tournamentId: null,
  });

  useEffect(() => {
    setGames((prev) => [...prev, ...(data?.filter(x => !prev.find(c => c.id === x.id)) || [])])
  }, [data]);

  return (
    <div className="container" style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: 24 }}>
      <MatchesBoard matches={games?.length ? games : []} />
      {data?.length >= 9 && <div class="eh__more" style={{ cursor: 'pointer' }} onClick={() => setPage((page) => page + 1)}>Показать еще</div>}
    </div>
  );
}
