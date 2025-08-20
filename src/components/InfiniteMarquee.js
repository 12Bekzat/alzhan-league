import React from "react";

export default function InfiniteMarquee({
  images = [],          // [{ src, alt }]
  height = 64,          // высота логотипов в px
  gap = 64,             // расстояние между логотипами в px
  duration = 30,        // время полного круга в секундах
  pauseOnHover = true,  // останавливать при наведении
}) {
  // Дублируем набор, чтобы анимация была бесшовной
  const track = [...images, ...images];

  return (
    <div
      className={`marquee ${pauseOnHover ? "marquee--pause-on-hover" : ""}`}
      style={{
        "--marquee-gap": `${gap}px`,
        "--marquee-height": `${height}px`,
        "--marquee-duration": `${duration}s`,
      }}
    >
      <ul className="marquee__track" aria-label="Scrolling logos">
        {track.map((img, i) => (
          <li className="marquee__item" key={`${img.src}-${i}`}>
            <img
              src={img.src}
              alt={img.alt ?? ""}
              height={height}
              loading="lazy"
              draggable="false"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
