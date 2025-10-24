import { useMtgame } from "../../hooks/useMtgame";
import TeamTable from "./TeamTable";

export default function TeamBoard({ tournament }) {
  const { useTournamentTableTeams } = useMtgame();

  const { data, status } = useTournamentTableTeams(tournament?.id);

  return <TeamTable data={data?.length ? data : []} limit={30} />;
}
