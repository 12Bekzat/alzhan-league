import { useMtgame } from "../../hooks/useMtgame";
import { PlayerStatsDashboard } from "./PlayerStatsDashboard";

export default function LeaderBoard({ tournament }) {
  const { useBasketballStatistic } = useMtgame();

  const { data, status } = useBasketballStatistic({
    group_by: 'league_player',
    tournament_id: tournament?.id
  });

  return <PlayerStatsDashboard playerStatsArray={data?.length ? data : []} />
}
