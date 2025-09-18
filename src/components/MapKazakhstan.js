import React from "react";

export default function MapKazakhstan({
  mapSrc,
  markers = [],
  onMarkerClick,
  // высота/ширина контейнера: по умолчанию широкая «панорама»
  aspectRatio = 9 / 16,
}) {
  return (
    <div
      className="kz-map"
      style={{ paddingTop: `${aspectRatio * 100}%` }}
      aria-label="Карта Казахстана"
    >
      <img className="kz-map__img" src={mapSrc} alt="Карта" />

      {markers.map((m) => (
        <button
          key={m.id}
          className="kz-map__marker"
          style={{ left: `${m.x}%`, top: `${m.y}%` }}
          title={m.title}
          onClick={() => onMarkerClick && onMarkerClick(m)}
          aria-label={m.title || `Точка ${m.id}`}
        >
          <span className="kz-map__marker-inner">
            {/* Иконка (можно заменить на любую) */}
            <svg className="kz-map__marker-icon" viewBox="0 0 24 24">
              <path d="M12 2L1 7l11 5 9-4.09V14h2V7L12 2zm-7 9.27V14c0 2.76 4.03 5 7 5s7-2.24 7-5v-2.73l-7 3.18-7-3.18z" />
            </svg>
          </span>

          {typeof m.count === "number" && (
            <span className="kz-map__badge">{m.count}</span>
          )}
        </button>
      ))}
    </div>
  );
}
