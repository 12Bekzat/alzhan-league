import React, { useEffect, useMemo, useRef, useState } from "react";

// ——— Helpers: in‑view + count‑up (copied from StatsCounters style)
function useInView(ref, { threshold = 0.2, once = true } = {}) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          if (once) io.unobserve(el);
        } else if (!once) setInView(false);
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, threshold, once]);
  return inView;
}
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
function useCountUp(target, start, { duration = 1200, decimals = 0 } = {}) {
  const [value, setValue] = useState(0);
  const rafRef = useRef();
  const t0 = useRef();
  useEffect(() => {
    if (!start) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const d = media.matches ? 0 : duration;
    const to = Number(target) || 0;
    if (d === 0) {
      setValue(to);
      return;
    }
    const step = (now) => {
      if (!t0.current) t0.current = now;
      const t = Math.min(1, (now - t0.current) / d);
      setValue(to * easeOutCubic(t));
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [start, target, duration]);
  return useMemo(() => value.toFixed(decimals), [value, decimals]);
}
const formatNum = (n, decimals = 0) =>
  Number(n).toLocaleString("ru-RU", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

function Counter({ value, suffix = "", label, trigger, size = "lg", place = 'left', isFormat = true }) {
  const display = useCountUp(value, trigger, { duration: 1400 });
  return (
    <div className={`af__item af__item--${size} af__item--${place}`}>
      <div className="af__num">
        {isFormat ? formatNum(display) : display}
        {suffix && <span className="af__suffix">{suffix}</span>}
      </div>
      <div className="af__label">{label}</div>
    </div>
  );
}

export default function AlzhanFacts() {
  // triggers for each panel
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);
  const seen1 = useInView(p1Ref, { threshold: 0.25, once: true });
  const seen2 = useInView(p2Ref, { threshold: 0.25, once: true });

  return (
    <section className="af" aria-label="Лига Alzhan в цифрах">
      {/* Panel 1 – blue card with 3 stats */}
      <div className="af__panel af__panel--primary" ref={p1Ref}>
        <div className="af__panelTitle">Лига «Alzhan в цифрах»</div>
        <div className="af__grid af__grid--three af__grid--loose">
          <Counter
            value={3000}
            suffix="+"
            label="детей участников"
            trigger={seen1}
          />
          <Counter value={100} suffix="+" label="школ" trigger={seen1} />
          <Counter
            value={7}
            suffix=""
            label="городов Казахстана"
            trigger={seen1}
          />
        </div>
      </div>

      {/* Panel 2 – light card with secondary caption and 3 stats */}
      <div className="af__panel af__panel--secondary" ref={p2Ref}>
        <div className="af__subtitle">
          Школам и участникам Школьной Лиги «Alzhan» с 2024 по 2025 год
          безвозмездно передано:
        </div>
        <div className="af__grid af__grid--three af__grid--sup">
          <Counter
            value={1740}
            label="комплектов баскетбольной формы"
            trigger={seen2}
            isFormat={false}
            place="center"
            size="xl"
          />
          <Counter
            value={450}
            label="баскетбольных мячей"
            place="center"
            trigger={seen2}
            size="xl"
          />
          <Counter
            value={250}
            label="разминочных футболок"
            place="center"
            trigger={seen2}
            size="xl"
          />
        </div>
      </div>
    </section>
  );
}
