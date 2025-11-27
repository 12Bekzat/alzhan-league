// PlayerHero.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";

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

function Counter({
  value,
  suffix = "",
  label,
  trigger,
  size = "lg",
  highlight,
}) {
  const display = useCountUp(value, trigger, { duration: 1400 });
  return (
    <div className={"ph__card" + (highlight ? " ph__card--glass" : "")}>
      <div className="ph__value">
        {formatNum(display)}
        {suffix && <span className="af__suffix">{suffix}</span>}
      </div>
      <div className="ph__label">{label}</div>
    </div>
  );
}

export default function PlayerHero({
  bg = "/images/court-bg.jpg",
  photo, // крупное PNG/JPG с прозрачным фоном — будет поверх
  number = null,
  firstName = "GIANNIS",
  lastName = "ANTETOKOUNMPO",
  team = "MILWAUKEE BUCKS",
  stats = [
    { label: "REBOUNDS PER GAME", value: "13.4" },
    { label: "POINTS PER GAME", value: "29.8", highlight: true },
    { label: "ASSISTS PER GAME", value: "5.0" },
  ],
  lastGame = {
    left: { logo: "/logos/bucks.svg", pts: 119 },
    right: { logo: "/logos/bulls.svg", pts: 112 },
  },
  video = {
    thumb: "/images/video-thumb.jpg",
    url: "https://www.youtube.com/embed/ysz5S6PUM-U",
  },
}) {
  const p2Ref = useRef(null);
  const seen2 = useInView(p2Ref, { threshold: 0.25, once: true });
  return (
    <section className="ph">
      <div className="ph__bg" style={{ backgroundImage: `url(${bg})` }} />
      <div className="ph__glass" />

      <header className="ph__head">
        {number && <div className="ph__number">{number}</div>}
        <div className="ph__name">
          <div className="ph__first">{firstName}</div>
          <div className="ph__last">{lastName}</div>
          <div className="ph__team">{team}</div>
        </div>
      </header>

      {/* мини видео

      {/* фото игрока */}
      {photo && (
        <div className="ph__player">
          <img
            src={photo}
            alt={`${firstName} ${lastName}`}
          />
        </div>
      )}

      {/* панель «последний матч» */}

      {/* карточки со статами */}
      <div className="ph__stats" ref={p2Ref}>
        {stats.map((s, i) => (
          <Counter
            key={i}
            value={s.value}
            highlight={s.highlight}
            suffix={s.suffix || ""}
            label={s?.label ?? "комплектов баскетбольной формы"}
            trigger={seen2}
            size="xl"
          />
        ))}
      </div>
    </section>
  );
}
