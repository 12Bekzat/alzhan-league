import React from 'react';
// Предполагается, что SCSS импортирован или скомпилирован в основном приложении

// --- Компонент для отображения одного игрока в списке ---
const PlayerStatRow = ({ player }) => {
  const { rank, initials, avatarUrl, name, team, value } = player;

  // Компонент для аватара (картинка или инициалы)
  const AvatarComponent = () => {
      // Запасной URL для placeholder, если фото не загрузится
      const placeholderSrc = `https://placehold.co/100x100/E0E7FF/4F46E5?text=${initials || '?'}`;
      if (avatarUrl) {
           return (
            <img
                src={avatarUrl}
                alt={name}
                className="avatar"
                // Обработчик ошибок, если картинка не загрузится
                onError={(e) => {
                    e.target.onerror = null; // Предотвратить бесконечный цикл
                    e.target.src = placeholderSrc;
                }}
            />
           );
      } else {
          // Отображение инициалов, если нет URL аватара
          return (
              <div className="avatar avatar--initials">
                  {initials || '?'}
              </div>
          );
      }
  };

  return (
    <li className="players-list__item">
      {/* Левая часть: ранг, аватар, имя, команда */}
      <div className="player-info-wrapper">
        <span className="rank">{rank}</span>
         <AvatarComponent />
        <div className="player-details">
          <p className="player-details__name" title={name}>{name}</p>
          <p className="player-details__team" title={team}>{team}</p>
        </div>
      </div>
      {/* Правая часть: значение статистики */}
      <span className="stat-value">{value}</span>
    </li>
  );
};

// --- Компонент для отображения списка лидеров по одной категории ---
const StatCategoryList = ({ title, players }) => {
  // Показываем только топ-5 игроков
  const topPlayers = players.slice(0, 5);

  return (
    <div className="stat-card">
      {/* Заголовок категории */}
      <div className="card-header">
        <h3 className="card-header__title">{title}</h3>
         {/* Кнопка "ВСЕ" */}
      </div>
      {/* Список игроков */}
      {topPlayers.length > 0 ? (
        <ul className="players-list">
          {topPlayers.map(player => (
            // Используем league_player_id для уникального ключа, если он есть
            <PlayerStatRow key={`${title}-${player.id || player.name}`} player={player} />
          ))}
        </ul>
      ) : (
         // Сообщение, если нет данных
        <p className="no-data-message">Нет данных</p>
      )}
    </div>
  );
};

// --- Основной компонент дашборда статистики ---
// Принимает массив необработанных данных playerStatsArray как пропс
export const PlayerStatsDashboard = ({ playerStatsArray }) => {

  // Функция для обработки и сортировки данных по категории
  const processAndSortStats = (data, categoryKey) => {
    if (!data || data.length === 0) return [];

    // 1. Фильтруем игроков, у которых есть значение для данной категории
    // 2. Маппим в нужный формат
    const mappedPlayers = data
        .filter(p => p[categoryKey] !== null && p[categoryKey] !== undefined && p.league_player)
        .map(p => {
             const playerInfo = p.league_player;
             const teamInfo = p.tournament_team_user?.tournament_team;
             // Формируем инициалы из имени и фамилии
             const initials = `${playerInfo.first_name?.[0] || ''}${playerInfo.last_name?.[0] || ''}`.toUpperCase();

             return {
                 id: p.league_player_id, // Уникальный ID игрока
                 initials: initials,
                 avatarUrl: playerInfo.photo?.path || null, // Путь к фото
                 name: `${playerInfo.first_name || ''} ${playerInfo.last_name || ''}`.trim(), // Полное имя
                 team: teamInfo?.name || 'Нет команды', // Название команды
                 value: p[categoryKey] // Статистическое значение
             };
         });

    // 3. Сортируем по значению (убывание)
    mappedPlayers.sort((a, b) => b.value - a.value);

    // 4. Добавляем ранг
    return mappedPlayers.map((player, index) => ({
      ...player,
      rank: index + 1
    }));
  };

  // Обрабатываем данные для каждой категории
  const pointsLeaders = processAndSortStats(playerStatsArray, 'points');
  const reboundsLeaders = processAndSortStats(playerStatsArray, 'rebounds');
  const assistsLeaders = processAndSortStats(playerStatsArray, 'assists');
  const blocksLeaders = processAndSortStats(playerStatsArray, 'blocks');
  const stealsLeaders = processAndSortStats(playerStatsArray, 'steals');
  const turnoversLeaders = processAndSortStats(playerStatsArray, 'turnovers');


  return (
    <div className="stats-dashboard-container">
       {/* Проверка, есть ли вообще данные для отображения */}
       {!playerStatsArray || playerStatsArray.length === 0 ? (
            <p className="no-data-message">Нет данных для отображения статистики.</p>
       ) : (
          /* Сетка для категорий статистики */
          <div className="stats-grid">
            <StatCategoryList title="Очки" players={pointsLeaders} />
            <StatCategoryList title="Подборы" players={reboundsLeaders} />
            <StatCategoryList title="Передачи" players={assistsLeaders} />
            <StatCategoryList title="Блокшоты" players={blocksLeaders} />
            <StatCategoryList title="Перехваты" players={stealsLeaders} />
            <StatCategoryList title="Потери" players={turnoversLeaders} />
            {/* Добавьте сюда другие StatCategoryList, если нужно */}
          </div>
       )}
    </div>
  );
};

