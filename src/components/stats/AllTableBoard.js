import { useMtgame } from "../../hooks/useMtgame";
import TeamsStatsTable from "./TeamsStatsTable";
import TeamTable from "./TeamTable";

export default function AllTableBoard({ tournament }) {
  const { useBasketballStatistic } = useMtgame();

  const { data, status } = useBasketballStatistic({
    group_by: 'team',
    tournament_id: tournament?.id
  });

  return <TeamsStatsTable data={data?.length ? data : []} limit={30} />;
}
