// src/pages/GameStats.jsx
import React, { useCallback, useEffect, useMemo, useState } from "react";
import TabPanel from "../components/TabPanel";
import GameBoard from "../components/stats/GameBoard";
import TeamBoard from "../components/stats/TeamBoard";
import PlayoffBoard from "../components/stats/PlayoffBoard";
import StatsFilterPanel from "../components/StatsFilterPanel";
import { useMtgame } from "../hooks/useMtgame";
import AllTableBoard from "../components/stats/AllTableBoard";
import LeaderBoard from "../components/stats/LeaderBoard";

const GENDER_LABELS = {
  female: "Девочки",
  male: "Мальчики",
};

const REQUIRED_FILTER_LABELS = {
  stage: "этап",
  region: "регион",
};

const normalize = (value) =>
  String(value || "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");

const compact = (value) => normalize(value).replace(/\s+/g, "");

const compareGender = (original, secondary) => {
  if (!secondary || secondary === "all") return true;
  if (!original || original === "all") return true;
  return String(original).toLowerCase() === String(secondary).toLowerCase();
};

const formatDate = (date) => {
  if (!date) return "Дата уточняется";
  const dt = new Date(date);
  if (Number.isNaN(dt.getTime())) return date;
  return dt.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const getMissingFilters = (filters) => {
  const missing = ["stage"].filter((key) => !filters?.[key]);

  if (filters?.stage === "regional" && !filters?.region) {
    missing.push("region");
  }

  return missing;
};

export default function GameStats() {
  const [filters, setFilters] = useState({
    stage: null,
    gender: null,
    season: "2024",
    region: null,
    course: null,
    tournamentId: undefined,
  });

  const [activeTournament, setActiveTournament] = useState(null);

  const handleChange = useCallback((next) => {
    setFilters((prev) => ({
      ...prev,
      ...next,
      tournamentId: undefined,
    }));
    setActiveTournament(null);
  }, []);

  const { useLeagueTournaments } = useMtgame();
  const {
    data: tournaments = [],
    status: tournamentsStatus,
  } = useLeagueTournaments();

  const missingFilters = useMemo(() => getMissingFilters(filters), [filters]);
  const isFiltersReady = missingFilters.length === 0;

  const filteredTournaments = useMemo(() => {
    if (!Array.isArray(tournaments) || !isFiltersReady) return [];

    const selectedStage = filters.stage;
    const selectedRegion = normalize(filters.region);
    const selectedCourse = compact(filters.course);
    const selectedSeason = String(filters.season || "");
    const isSuperfinal = selectedStage === "superfinal";
    const isRegional = selectedStage === "regional";

    return tournaments.filter((tournament) => {
      const name = normalize(tournament?.name);
      const location = normalize(tournament?.location);

      const stageMatches = isSuperfinal
        ? name.includes("суперфинал")
        : !isRegional ||
          !selectedRegion ||
          name.includes(selectedRegion) ||
          location.includes(selectedRegion);

      const courseMatches = !selectedCourse || compact(name).includes(selectedCourse);
      const genderMatches = compareGender(
        tournament?.settings?.gender,
        filters.gender
      );
      const seasonMatches =
        !selectedSeason || String(tournament?.date || "").includes(selectedSeason);

      return stageMatches && courseMatches && genderMatches && seasonMatches;
    });
  }, [filters, isFiltersReady, tournaments]);

  useEffect(() => {
    setActiveTournament((prev) => {
      if (!prev) return null;
      const existing = filteredTournaments.find((x) => x.id === prev.id);
      return existing || null;
    });
  }, [filteredTournaments]);

  const handleTournamentSelect = useCallback((tournament) => {
    setActiveTournament(tournament);
    setFilters((prev) => ({
      ...prev,
      tournamentId: tournament?.id,
    }));
  }, []);

  const filtersHint = useMemo(() => {
    if (!missingFilters.length) {
      return "Фильтры заполнены. Выберите подходящий турнир из списка ниже.";
    }

    const labels = missingFilters.map((key) => REQUIRED_FILTER_LABELS[key]);
    return `Чтобы открыть турниры, выберите: ${labels.join(", ")}.`;
  }, [missingFilters]);

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
        <StatsFilterPanel onChange={handleChange} value={filters} />

        <div className="stats-selection-hint" role="status">
          {filtersHint}
        </div>

        <section className={`stats-tournaments ${isFiltersReady ? "is-open" : ""}`}>
          {isFiltersReady ? (
            <div className="stats-tournaments__panel">
              {tournamentsStatus === "loading" ? (
                <div className="stats-tournaments__empty">Загружаем турниры...</div>
              ) : filteredTournaments.length ? (
                <>
                  <div className="stats-tournaments__titleRow">
                    <h2 className="stats-tournaments__title">Выберите турнир</h2>
                    <span className="stats-tournaments__counter">
                      {filteredTournaments.length}
                    </span>
                  </div>

                  <div className="stats-tournaments__list">
                    {filteredTournaments.map((tournament) => {
                      const isActive = activeTournament?.id === tournament.id;

                      return (
                        <button
                          key={tournament.id}
                          type="button"
                          className={`stats-tournament-card ${isActive ? "is-active" : ""}`}
                          onClick={() => handleTournamentSelect(tournament)}
                        >
                          <div className="stats-tournament-card__top">
                            {tournament?.logo?.path ? (
                              <img
                                src={tournament.logo.path}
                                alt={tournament.name}
                                className="stats-tournament-card__logo"
                              />
                            ) : (
                              <div className="stats-tournament-card__logo stats-tournament-card__logo--placeholder">
                                AL
                              </div>
                            )}

                            <div className="stats-tournament-card__content">
                              <h3 className="stats-tournament-card__title">
                                {tournament.name}
                              </h3>
                              <p className="stats-tournament-card__meta">
                                {tournament.location || "Локация уточняется"} ·{" "}
                                {formatDate(tournament.date)}
                              </p>
                            </div>
                          </div>

                          <div className="stats-tournament-card__tags">
                            <span className="stats-tournament-card__tag">
                              {GENDER_LABELS[tournament?.settings?.gender] || "Смешанный"}
                            </span>
                            <span className="stats-tournament-card__tag">
                              Команд: {tournament?.teams_count ?? 0}
                            </span>
                            <span className="stats-tournament-card__tag">
                              {tournament?.status === "in_progress"
                                ? "Идёт сейчас"
                                : "В расписании"}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </>
              ) : (
                <div className="stats-tournaments__empty">
                  По выбранным фильтрам турниры не найдены. Попробуйте изменить регион, сезон или класс.
                </div>
              )}
            </div>
          ) : null}
        </section>
      </div>

      {activeTournament ? (
        <TabPanel
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
                    <AllTableBoard tournament={activeTournament} />
                  </div>
                </div>
              ),
            },
            {
              label: "Лидеры",
              content: (
                <div className="game-stats-page">
                  <div className="container">
                    <LeaderBoard tournament={activeTournament} />
                  </div>
                </div>
              ),
            },
          ]}
        />
      ) : (
        <div className="container">
          <div className="stats-tournaments__wait">
            Выберите турнир, чтобы открыть матчи, таблицу, плей-офф и статистику.
          </div>
        </div>
      )}
    </>
  );
}
