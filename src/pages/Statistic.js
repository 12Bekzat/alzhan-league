// src/pages/GameStats.jsx
import React, { useEffect, useState } from "react";
import Default from "../assets/default.jpg";
import Documents from "../components/Documents";
import Broadcast from "../components/Broadcast";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

export default function GameStats() {
  const [streams, setStreams] = useState([]);


  const fetchStreams = async () => {
    const querySnapshot = await getDocs(collection(db, "streams"));
    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setStreams(data);
  };

  useEffect(() => {
    fetchStreams();
  }, []);

  const tableData = [
    {
      team: "Almaty Eagles",
      games: 10,
      wins: 8,
      losses: 2,
      pointsScored: 856,
      pointsAgainst: 740,
      diff: +116,
    },
    {
      team: "Astana Wolves",
      games: 10,
      wins: 7,
      losses: 3,
      pointsScored: 812,
      pointsAgainst: 765,
      diff: +47,
    },
    {
      team: "Shymkent Lions",
      games: 10,
      wins: 6,
      losses: 4,
      pointsScored: 790,
      pointsAgainst: 780,
      diff: +10,
    },
    {
      team: "Aktobe Hawks",
      games: 10,
      wins: 4,
      losses: 6,
      pointsScored: 745,
      pointsAgainst: 755,
      diff: -10,
    },
    {
      team: "Karaganda Bears",
      games: 10,
      wins: 3,
      losses: 7,
      pointsScored: 710,
      pointsAgainst: 780,
      diff: -70,
    },
    {
      team: "Pavlodar Storm",
      games: 10,
      wins: 2,
      losses: 8,
      pointsScored: 678,
      pointsAgainst: 805,
      diff: -127,
    },
  ];

  return (
    <div className="game-stats-page">
      <div className="container">
        <h1 className="main-title">Статистика игр / Онлайн трансляции</h1>

        <div className="tournament-table-section">
          <h2 className="section-title">Турнирная таблица</h2>
          <table className="tournament-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Команда</th>
                <th>И</th>
                <th>В</th>
                <th>П</th>
                <th>Забито</th>
                <th>Пропущено</th>
                <th>+/-</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((team, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{team.team}</td>
                  <td>{team.games}</td>
                  <td>{team.wins}</td>
                  <td>{team.losses}</td>
                  <td>{team.pointsScored}</td>
                  <td>{team.pointsAgainst}</td>
                  <td className={team.diff >= 0 ? "positive" : "negative"}>
                    {team.diff}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Секция с карточками игроков */}
        <div className="players-section">
          <h2 className="section-title">Игроки</h2>
          <div className="players-grid">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="player-card">
                <img src={Default} alt="Player" className="player-image" />
                <h3 className="player-name">Игрок #{i + 1}</h3>
                <p className="player-info">Возраст: 23</p>
                <p className="player-info">Позиция: Нападающий</p>
                <p className="player-info">Голы: {5 + i}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Встроенный YouTube-плеер */}
        <Broadcast translations={streams} />
      </div>
    </div>
  );
}
