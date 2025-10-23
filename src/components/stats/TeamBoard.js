import { useMtgame } from "../../hooks/useMtgame";
import TeamTable from "./TeamTable";

export default function TeamBoard() {
  const { useTournamentTableTeams } = useMtgame();

  const { data, status } = useTournamentTableTeams();

  return <TeamTable data={data?.length ? data : []} limit={30} />;
}
