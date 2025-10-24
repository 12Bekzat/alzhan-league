import { useMtgame } from "../../hooks/useMtgame";
import PlayoffBracket from "./PlayoffBracket";

export default function PlayoffBoard({ tournament }) {
  const { usePlayoffGames } = useMtgame();

  const { data, status } = usePlayoffGames(tournament?.id);

  return <PlayoffBracket games={data?.length ? data : []} />;
}
