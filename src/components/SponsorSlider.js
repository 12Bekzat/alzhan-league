import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * AutoSlider – lightweight, dependency-free carousel
 * - Auto-rotates
 * - Pause on hover / focus
 * - Keeps a fixed aspect ratio so slides don't jump
 * - Images are object-fit 'cover' by default (can switch to 'contain')
 *
 * Props:
 * images: string[] – required list of image urls
 * intervalMs?: number – autoplay interval (default 3500)
 * transitionMs?: number – slide animation duration (default 500)
 * aspectRatio?: string – CSS aspect-ratio (default "21 / 5")
 * objectFit?: 'cover' | 'contain' – how images scale (default 'cover')
 * rounded?: boolean – rounded corners (default true)
 */
export default function SponsorSlider({
  images,
  intervalMs = 3500,
  transitionMs = 500,
  aspectRatio = "21 / 5",
  objectFit = "cover",
  showButtons = false,
  showDots = false,
  rounded = true,
}) {
  const [index, setIndex] = useState(0);
  const [isPaused, setPaused] = useState(false);
  const timerRef = useRef(null);

  // preload once to avoid flicker on first rotation
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  // autoplay
  useEffect(() => {
    if (isPaused || images.length <= 1) return;
    timerRef.current && clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => timerRef.current && clearInterval(timerRef.current);
  }, [images.length, intervalMs, isPaused]);

  // allow keyboard focus to pause
  const pauseHandlers = useMemo(
    () => ({
      onMouseEnter: () => setPaused(true),
      onMouseLeave: () => setPaused(false),
      onFocus: () => setPaused(true),
      onBlur: () => setPaused(false),
    }),
    []
  );

  const goTo = (i) => setIndex(i % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div
      className={"aslider" + (rounded ? " aslider--rounded" : "")}
      {...pauseHandlers}
    >
      <div
        className="aslider__viewport"
        style={{ aspectRatio }}
        aria-roledescription="carousel"
        aria-label="Image slider"
      >
        <div
          className="aslider__track"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${index * (100 / images.length)}%)`,
            transitionDuration: `${transitionMs}ms`,
          }}
        >
          {images.map((src, i) => (
            <div
              className="aslider__slide"
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${images.length}`}
            >
              <img
                src={src}
                alt="slide"
                draggable={false}
                style={{ objectFit }}
              />
            </div>
          ))}
        </div>

        {/* Controls */}
        {showButtons && images.length > 1 && (
          <>
            <button
              className="aslider__nav aslider__nav--prev"
              onClick={prev}
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              className="aslider__nav aslider__nav--next"
              onClick={next}
              aria-label="Next slide"
            >
              ›
            </button>
          </>
        )}
      </div>

      {showDots && images.length > 1 && (
        <div className="aslider__dots" role="tablist">
          {images.map((_, i) => (
            <button
              key={i}
              className={
                "aslider__dot" + (i === index ? " aslider__dot--active" : "")
              }
              onClick={() => goTo(i)}
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
