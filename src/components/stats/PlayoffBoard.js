import { useMtgame } from "../../hooks/useMtgame";
import PlayoffBracket from "./PlayoffBracket";

export default function PlayoffBoard() {
  const { useTournamentPlayoffs } = useMtgame();

  const { data, status } = useTournamentPlayoffs();

  const stages = [
    {
      id: 79,
      name: "Плей-офф Сезон 2020/21",
      status: "closed",
      settings: {
        rounds: 3,
        final_rounds: 1,
        third_place_rounds: 1,
        teams_count: 8,
        type: "elimination",
      },
    },
    {
      id: 80,
      name: "Плей-офф нижней сетки 2021",
      status: "open",
      settings: {
        rounds: 3,
        final_rounds: 3,
        third_place_rounds: 1,
        teams_count: 4,
        type: "elimination",
      },
    },
  ];
  const gamesByStageId = {
    79: [
      {
        id: 1,
        datetime: "2021-05-10T14:20:00Z",
        team: { name: 'КГУ "Иртышская СОШ №4"' },
        competitor_team: { name: "Гимназия 17" },
        team_score: 52,
        competitor_team_score: 27,
        round: "semi",
      },
      {
        id: 2,
        datetime: "2021-05-10T15:40:00Z",
        team: { name: "гимназия #5" },
        competitor_team: { name: "Гимназия № 2" },
        team_score: 63,
        competitor_team_score: 52,
        round: "semi",
      },
      {
        id: 3,
        datetime: "2021-05-11T10:40:00Z",
        team: { name: 'КГУ "Иртышская СОШ №4"' },
        competitor_team: { name: "гимназия #5" },
        team_score: 55,
        competitor_team_score: 13,
        round: "final",
      },
      {
        id: 4,
        datetime: "2021-05-11T09:00:00Z",
        team: { name: "Гимназия 17" },
        competitor_team: { name: "Гимназия № 2" },
        team_score: 39,
        competitor_team_score: 36,
        round: "third",
      },
    ],
    80: [],
  };

  return <PlayoffBracket stages={stages} gamesByStageId={gamesByStageId} />;
}
