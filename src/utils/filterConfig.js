// helpers/statsMapping.js
export function filtersToApi({ stage, gender, season, region, leagueId, tournamentId }) {
  // leagueId/tournamentId могут прийти из фильтра/селектора — если нет, можно подгрузить первый доступный
  const base = {
    league_id: leagueId || 3, // <-- поставь свою лигу по умолчанию
    tournament_id: tournamentId, // если выбран турнир
  };

  // пример привязок (подстрой под свои значения фильтра):
  // season -> tournament_id (обычно турнир уникален под сезон)
  // region -> можно иметь отдельные турниры по регионам, тогда тоже уходит в tournament_id

  // stage: для «Статистика/Лидеры» — не нужен; для Плей-офф — получаем playoffId по tournament_id
  // gender: если у тебя разные турниры по полу — учти это при выборе tournament_id

  return base;
}

// Группировки/сортировки для агрегированной статистики
export const GROUPS = {
  PLAYERS_IN_TOURNAMENT: "tournament_team_user",
  PLAYERS_IN_LEAGUE: "league_player",
  TEAMS_IN_TOURNAMENT: "tournament_team",
  TEAMS_IN_LEAGUE: "team",
  WIN_LOSSES: "win_loses",
  MONTH: "month",
};

export function makeStatParams({ tournamentId, leagueId, groupBy, perGame = true, orderBy }) {
  const params = {
    tournament_id: tournamentId,
    league_id: leagueId,
    group_by: groupBy,      // см. GROUPS выше
    per_game: perGame ? 1 : 0,
  };
  if (orderBy) params.order_by = orderBy;
  return params;
}
