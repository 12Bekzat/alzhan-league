import React, { useMemo, useRef, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";

/**
 * Примечание по данным:
 *  - Ожидаем GeoJSON FeatureCollection по регионам Казахстана.
 *  - Можно взять готовый KZ geojson (adm1) или свой.
 *  - Структура: feature.properties.name (или свой ключ), feature.id
 */

export default function KZMap({
  // GeoJSON FeatureCollection (области РК)
  geoJson,

  // массив меток: [{ id, coordinates: [lng, lat], count?: number, payload?: any }]
  markers = [],

  // управление: можно ли ставить метки кликом
  enablePlaceMarker = true,

  // события
  onRegionClick,   // (regionFeature) => void
  onMarkerClick,   // (marker) => void
  onPlaceMarker,   // ({ lng, lat }) => void – при клике на карту, если enablePlaceMarker
}) {
  const [hoverRegionId, setHoverRegionId] = useState(null);
  const [selectedRegionId, setSelectedRegionId] = useState(null);
  const [tooltip, setTooltip] = useState(null); // { x, y, text }

  // масштаб/центр под Казахстан
  const initial = useMemo(() => ({
    center: [67.0, 47.5],
    zoom: 1.9,
  }), []);

  const svgRef = useRef(null);

  const handleRegionEnter = (geo, evt) => {
    setHoverRegionId(geo.id);
    setTooltip({
      x: evt.clientX,
      y: evt.clientY,
      text: geo.properties?.name || "Регион",
    });
  };
  const handleRegionLeave = () => {
    setHoverRegionId(null);
    setTooltip(null);
  };
  const handleRegionClick = (geo) => {
    setSelectedRegionId(geo.id);
    onRegionClick?.(geo);
  };

  // Клик по свободной области (для установки метки)
  const handleBgClick = (position) => {
    if (!enablePlaceMarker || !onPlaceMarker) return;
    const [lng, lat] = position.coordinates;
    onPlaceMarker({ lng, lat });
  };

  const renderMarker = (m) => (
    <Marker
      key={m.id}
      coordinates={m.coordinates}
      onClick={() => onMarkerClick?.(m)}
    >
      <g className="kzmap-marker">
        <circle r={12} className="kzmap-marker__halo" />
        <circle r={11} className="kzmap-marker__dot" />
        {typeof m.count === "number" && (
          <text className="kzmap-marker__count" y={4} textAnchor="middle">
            {m.count}
          </text>
        )}
        {/* значок «здания/арены» — простая пиктограмма */}
        <path
          className="kzmap-marker__icon"
          d="M-6 3h12v3h-12zM-5 1l5-4 5 4v1h-10z"
        />
      </g>
    </Marker>
  );

  return (
    <div className="kzmap-wrap">
      <ComposableMap
        ref={svgRef}
        projection="geoMercator"
        className="kzmap-svg"
      >
        <ZoomableGroup
          center={initial.center}
          zoom={initial.zoom}
          onMoveEnd={() => setTooltip(null)}
          onClick={handleBgClick}
        >
          <Geographies geography={geoJson}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isHover = geo.id === hoverRegionId;
                const isSelected = geo.id === selectedRegionId;
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    className={`kzmap-geo ${isHover ? "is-hover" : ""} ${isSelected ? "is-selected" : ""}`}
                    onMouseEnter={(evt) => handleRegionEnter(geo, evt)}
                    onMouseLeave={handleRegionLeave}
                    onClick={() => handleRegionClick(geo)}
                  />
                );
              })
            }
          </Geographies>

          {/* Метки */}
          {markers.map(renderMarker)}
        </ZoomableGroup>
      </ComposableMap>

      {/* Тултип */}
      {tooltip && (
        <div
          className="kzmap-tooltip"
          style={{ left: tooltip.x + 12, top: tooltip.y + 12 }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
}
