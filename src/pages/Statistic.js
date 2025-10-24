// src/pages/GameStats.jsx
import React, { useCallback, useEffect, useState } from "react";
import TabPanel from "../components/TabPanel";
import GameBoard from "../components/stats/GameBoard";
import TeamBoard from "../components/stats/TeamBoard";
import PlayoffBoard from "../components/stats/PlayoffBoard";
import StatsFilterPanel from '../components/StatsFilterPanel'
import { useMtgame } from "../hooks/useMtgame";
import AllTableBoard from "../components/stats/AllTableBoard";
import LeaderBoard from "../components/stats/LeaderBoard";

export default function GameStats() {
  const [filters, setFilters] = useState({
    stage: "regular", // regular | playoff
    gender: "all", // пример
    season: "2024", // пример
    region: "all", // пример
    course: null, // пример
    tournamentId: undefined, // можно подхватывать из селектора турниров
  });

  const handleChange = useCallback((next) => {
    setFilters((prev) => ({ ...prev, ...next }));
  }, []);

  const { useLeagueTournaments } = useMtgame()
  const { data: tournaments } = useLeagueTournaments()
  const [activeTournament, setActiveTournament] = useState(null)

  useEffect(() => {
    const tournament = tournaments?.filter(x => {
      return (filters.stage && x?.name?.toLowerCase()?.includes(filters.stage === 'superfinal' ? 'Суперфинал' : filters.region?.toLowerCase())) &&
        (filters.course && x?.name?.includes(filters.course)) &&
        (compareGender(x?.settings?.gender, filters.gender)) &&
        (filters.season && x?.date?.includes(filters.season))
    })

    if (tournament?.length) setActiveTournament(tournament[0])
    else setActiveTournament(null)

  }, [filters])

  const compareGender = (original, secondary) => {
    if (!original || !secondary || original === 'all') return true
    return original?.toLowerCase() === secondary?.toLowerCase()
  }

  // Можно показать индикаторы загрузки/ошибки
  const loadingBlock = (s) =>
    s === "loading" ? <div className="mt-16">Загрузка…</div> : null;

  return (
    <>
      <div className="docs-wrap" style={{ paddingBottom: 0 }}>
        <div className="docs-header">
          <div className="docs-breadcrumbs">
            Главная — <span>Статистика игр</span>
          </div>
        </div>
      </div>

      <div className="container">
        <StatsFilterPanel
          onChange={handleChange}
          // tournaments={tournaments}
          value={filters}
        />
      </div>

      {activeTournament ? <TabPanel
        tabs={[
          {
            label: "Матчи",
            content: (
              <div className="game-stats-page">
                <div className="container">
                  <GameBoard tournament={activeTournament} />
                </div>
              </div>
            ),
          },
          {
            label: "Таблица",
            content: (
              <div className="game-stats-page">
                <div className="container">
                  <TeamBoard tournament={activeTournament} />
                </div>
              </div>
            ),
          },
          {
            label: "Плей-офф",
            content: (
              <div className="game-stats-page">
                <div className="container">
                  <PlayoffBoard tournament={activeTournament} />
                </div>
              </div>
            ),
          },
          {
            label: "Статистика",
            content: (
              <div className="game-stats-page">
                <div className="container">
                  {/* {loadingBlock(statsStatus)}
                  <TeamsStatsTable data={tableFromAggregated} limit={30} /> */}
                  <AllTableBoard tournament={activeTournament}/>
                </div>
              </div>
            ),
          },
          {
            label: "Лидеры",
            content: (
              <div className="game-stats-page">
                <div className="container">
                  {/* {loadingBlock(statsStatus)}
                  <TeamsStatsTable data={tableFromAggregated} limit={30} /> */}
                  <LeaderBoard tournament={activeTournament}/>
                </div>
              </div>
            ),
          },
        ]}
      /> : <div className="">Нет существующего турнира</div>}
    </>
  );
}
