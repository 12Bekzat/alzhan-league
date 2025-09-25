import { useEffect, useMemo, useState } from "react";

// ожидаемый формат поста
// { id, imageUrl, caption, date, likes, comments, permalink, author }

export default function InstaFeed({ posts = [] }) {
  const [view, setView] = useState("mosaic"); // mosaic | magazine | timeline
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    console.log(posts);
    
  }, [])

  const sorted = useMemo(
    () => [...posts],
    [posts]
  );

  const open = (idx) => setLightbox(idx);
  const close = () => setLightbox(null);
  const prev = () => setLightbox((i) => (i > 0 ? i - 1 : i));
  const next = () => setLightbox((i) => (i < sorted.length - 1 ? i + 1 : i));

  return (
    <div className="insta">
      {/* toolbar */}
      {/* <div className="insta__toolbar">
        <div className="insta__title">Новости</div>
        <div className="insta__views">
          {["mosaic", "magazine", "timeline"].map((v) => (
            <button
              key={v}
              className={`insta__view ${view === v ? "is-active" : ""}`}
              onClick={() => setView(v)}
              title={v}
            >
              {v}
            </button>
          ))}
        </div>
      </div> */}

      {/* layouts */}
      {view === "mosaic" && (
        <div className="mosaic">
          {sorted.map((p, i) => (
            <Card key={p.id || i} p={p} onClick={() => open(i)} />
          ))}
        </div>
      )}

      {view === "magazine" && (
        <div className="mag">
          <div className="mag__grid">
            {sorted.map((p, i) => (
              <Card key={p.id || i + 1} p={p} onClick={() => open(i + 1)} compact />
            ))}
          </div>
        </div>
      )}

      {view === "timeline" && (
        <div className="timeline">
          {groupByDay(sorted).map(([d, items]) => (
            <section key={d} className="timeline__day">
              <div className="timeline__date">{formatDate(d)}</div>
              <div className="timeline__list">
                {items.map((p, i) => (
                  <Row key={p.id || i} p={p} onClick={() => open(posts.indexOf(p))} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      {/* lightbox */}
      {lightbox !== null && (
        <div className="lightbox" onClick={close}>
          <button className="lightbox__nav left" onClick={(e)=>{e.stopPropagation(); prev();}}>&lsaquo;</button>
          <figure className="lightbox__body" onClick={(e)=>e.stopPropagation()}>
            <img src={sorted[lightbox].images?.[0]} alt="" />
            <figcaption>
              <div className="cap">{sorted[lightbox].caption}</div>
              <a className="link" href={sorted[lightbox].urk} target="_blank" rel="noreferrer">
                Открыть в Instagram →
              </a>
            </figcaption>
          </figure>
          <button className="lightbox__nav right" onClick={(e)=>{e.stopPropagation(); next();}}>&rsaquo;</button>
          <button className="lightbox__close" onClick={close}>✕</button>
        </div>
      )}
    </div>
  );
}

function Card({ p, onClick, compact = false }) {
    console.log('p', p)
  return (
    <article className={`card ${compact ? "card--compact" : ""}`} onClick={onClick} role="button" tabIndex={0}>
      <img className="card__img" src={p.images?.[0]} alt="" loading="lazy" />
      <div className="card__grad" />
      <div className="card__meta">
        <div className="card__caption">{p.caption}</div>
        <div className="card__stats">
          <span>❤ {abbr(p.likes)}</span>
          <span>💬 {abbr(p.comments)}</span>
          <span>{formatDate(p.published_at)}</span>
        </div>
      </div>
    </article>
  );
}

function Hero({ p, onClick }) {
  return (
    <article className="hero" onClick={onClick} role="button" tabIndex={0}>
      <img className="hero__img" src={p.imageUrl} alt="" />
      <div className="hero__grad" />
      <div className="hero__meta">
        <h3 className="hero__title">{p.caption}</h3>
        <div className="hero__stats">
          ❤ {abbr(p.likes)} • 💬 {abbr(p.comments)} • {formatDate(p.date)}
        </div>
      </div>
    </article>
  );
}

function Row({ p, onClick }) {
  return (
    <article className="row" onClick={onClick} role="button" tabIndex={0}>
      <img className="row__thumb" src={p.imageUrl} alt="" loading="lazy" />
      <div className="row__text">
        <div className="row__cap">{p.caption}</div>
        <div className="row__sub">
          ❤ {abbr(p.likes)} • 💬 {abbr(p.comments)} • {formatDate(p.date)}
        </div>
      </div>
    </article>
  );
}

// helpers
function groupByDay(arr) {
  const map = new Map();
  arr.forEach((p) => {
    const key = new Date(p.date).toISOString().slice(0,10);
    map.set(key, (map.get(key) || []).concat(p));
  });
  return [...map.entries()];
}
const formatDate = (d) =>
  new Date(d).toLocaleDateString("ru-RU", { day: "2-digit", month: "short" }).replace(".", "");
const abbr = (n) => (n >= 1000 ? (n/1000).toFixed(1).replace(".0","") + "k" : n);
