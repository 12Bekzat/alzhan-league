// src/pages/GameStats.jsx
import React, { useCallback, useEffect, useMemo, useState } from "react";
import TabPanel from "../components/TabPanel";
import GameBoard from "../components/stats/GameBoard";
import TeamTable from "../components/stats/TeamTable";
import TeamBoard from "../components/stats/TeamBoard";
import PlayoffBoard from "../components/stats/PlayoffBoard";

export default function GameStats() {
  const [filters, setFilters] = useState({
    stage: "regular", // regular | playoff
    gender: "mixed", // пример
    season: "2024/25", // пример
    region: "all", // пример
    tournamentId: undefined, // можно подхватывать из селектора турниров
  });

  const demo = [
    {
      id: 1,
      date: '2025-05-11',
      time: '16:37',
      season: '2024-2025',
      stage: 'superfinal',
      leftTeam: { name: 'Средняя школа – лицей №27 · 7–8 класс', logo: 'https://dummyimage.com/80x80/ffd24d/000.png&text=A' },
      rightTeam: { name: 'Гимназия №5', logo: 'https://dummyimage.com/80x80/faa46a/000.png&text=B' },
      scoreLeft: 62,
      scoreRight: 46,
      winsNote: 'Победы 1',
    },
    {
      id: 2,
      date: '2025-05-11',
      time: '14:30',
      season: '2024-2025',
      stage: 'superfinal',
      leftTeam: { name: 'Гимназия №2', logo: 'https://dummyimage.com/80x80/f36d5a/000.png&text=C' },
      rightTeam: { name: 'СОШЛ №20', logo: 'https://dummyimage.com/80x80/1f2b3a/fff.png&text=D' },
      scoreLeft: 56,
      scoreRight: 47,
      winsNote: 'Победы 1',
    },
    {
      id: 3,
      date: '2025-05-11',
      time: '12:40',
      season: '2024-2025',
      stage: 'superfinal',
      leftTeam: { name: 'КГУ «Иртышская СОШ №4»', logo: 'https://dummyimage.com/80x80/7bc3ff/000.png&text=E' },
      rightTeam: { name: 'Гимназия №5', logo: 'https://dummyimage.com/80x80/faa46a/000.png&text=B' },
      scoreLeft: 55,
      scoreRight: 13,
      winsNote: 'Победы 1',
    },
  ];

  const handleChange = useCallback((next) => {
    // console.log('next', next);
    // console.log('change', { ...filters, ...next });
    
    setFilters((prev) => ({ ...prev, ...next }));
    // console.log('all', filters);
  }, []);

  useEffect(() => {
    console.log('filters', filters);
    
  }, [filters])

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

      {/* <div className="container">
        <StatsFilterPanel
          onChange={handleChange}
          tournaments={tournaments}
          value={filters}
        />
      </div> */}

      <TabPanel
        tabs={[
          {
            label: "Матчи",
            content: (
              <div className="game-stats-page">
                <div className="container">
                  <GameBoard />
                </div>
              </div>
            ),
          },
          {
            label: "Таблица",
            content: (
              <div className="game-stats-page">
                <div className="container">
                  <TeamBoard />
                </div>
              </div>
            ),
          },
          {
            label: "Плей-офф",
            content: (
              <div className="game-stats-page">
                <div className="container">
                  <PlayoffBoard />
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
                </div>
              </div>
            ),
          },
        ]}
      />
    </>
  );
}
