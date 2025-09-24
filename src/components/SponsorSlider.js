import React, { useEffect, useMemo, useRef, useState } from "react";

export default function SponsorSlider({
  slides = [], // [{img, alt, href}]
  autoplayDelay = 4500,
  transitionMs = 600,
  showArrows = true,
  showDots = true,
  height = 240,
  borderRadius = 24,
}) {
  const trackRef = useRef(null);
  const timerRef = useRef(null);
  const [index, setIndex] = useState(1); // из-за клонов
  const [isAnimating, setIsAnimating] = useState(false);
  const [paused, setPaused] = useState(false);

  // делаем бесконечную ленту: [last, ...slides, first]
  const loopSlides = useMemo(() => {
    if (!slides.length) return [];
    const first = slides[0];
    const last = slides[slides.length - 1];
    return [last, ...slides, first];
  }, [slides]);

  // автоплей справа->налево (следующий слайд — сдвиг влево)
  useEffect(() => {
    if (!slides.length) return;
    const start = () => {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        if (!paused) goNext();
      }, autoplayDelay);
    };
    start();
    return () => clearInterval(timerRef.current);
  }, [autoplayDelay, paused, slides.length]);

  // пауза, если вкладка скрыта
  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const goNext = () => {
    if (isAnimating || !slides.length) return;
    setIsAnimating(true);
    setIndex((i) => i + 1);
  };

  const goPrev = () => {
    if (isAnimating || !slides.length) return;
    setIsAnimating(true);
    setIndex((i) => i - 1);
  };

  // после анимации перескакиваем с клонов на реальные края без дергания
  const handleTransitionEnd = () => {
    setIsAnimating(false);
    if (index === loopSlides.length - 1) {
      // были на клоне первого -> прыгаем на реальный первый
      setIndex(1);
      disableTransitionOnce();
    }
    if (index === 0) {
      // были на клоне последнего -> прыгаем на реальный последний
      setIndex(loopSlides.length - 2);
      disableTransitionOnce();
    }
  };

  // на один кадр убираем transition, чтобы “телепортнуть” слайд
  const disableTransitionOnce = () => {
    const el = trackRef.current;
    if (!el) return;
    el.style.transition = "none";
    // force reflow
    // eslint-disable-next-line no-unused-expressions
    el.offsetHeight;
    el.style.transition = "";
  };

  // свайп (тач/мышь)
  const startPos = useRef(null);
  const onPointerDown = (e) => {
    startPos.current = { x: e.clientX ?? e.touches?.[0]?.clientX, active: true };
    setPaused(true);
  };
  const onPointerMove = (e) => {
    if (!startPos.current?.active) return;
    const x = e.clientX ?? e.touches?.[0]?.clientX;
    const dx = x - startPos.current.x;
    // если тянем влево — следующий; вправо — предыдущий
    if (Math.abs(dx) > 40) {
      startPos.current.active = false;
      dx < 0 ? goNext() : goPrev();
    }
  };
  const onPointerUp = () => {
    startPos.current = null;
    setPaused(false);
  };

  const widthPercent = 100 * loopSlides.length;
  const translatePercent = (-100 / loopSlides.length) * index;

  return (
    <div
      className="sponsor-slider"
      style={{ height, borderRadius }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onPointerDown}
      onTouchMove={onPointerMove}
      onTouchEnd={onPointerUp}
      onMouseDown={(e) => { e.preventDefault(); onPointerDown(e); }}
      onMouseMove={onPointerMove}
      onMouseUp={onPointerUp}
      role="region"
      aria-label="Слайдер спонсоров"
      tabIndex={0}
    >
      {showArrows && (
        <>
          <button className="nav prev" aria-label="Предыдущий" onClick={goPrev} />
          <button className="nav next" aria-label="Следующий" onClick={goNext} />
        </>
      )}

      <div
        className={`track ${isAnimating ? "animating" : ""}`}
        ref={trackRef}
        style={{
          width: `${widthPercent}%`,
          transform: `translateX(${translatePercent}%)`,
          transitionDuration: isAnimating ? `${transitionMs}ms` : undefined,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {loopSlides.map((s, i) => (
          <a
            key={`${s.href || s.img}-${i}`}
            className="slide"
            href={s.href || "#"}
            target="_blank"
            rel="noreferrer"
            aria-label={s.alt || "Спонсор"}
          >
            {/* декоративный блю-оверлей и маска логотипов по центру, если нужно — можно вставить текст */}
            <img src={s.img} />
            <span className="overlay" />
          </a>
        ))}
      </div>

      {showDots && slides.length > 1 && (
        <div className="dots">
          {slides.map((_, i) => {
            const realIndex = index === 0
              ? slides.length - 1
              : index === loopSlides.length - 1
              ? 0
              : index - 1;
            return (
              <button
                key={i}
                className={`dot ${i === realIndex ? "active" : ""}`}
                aria-label={`Слайд ${i + 1}`}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setIndex(i + 1);
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
