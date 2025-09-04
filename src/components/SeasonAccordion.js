import { useState } from "react";

export default function SeasonsAccordion({ seasons, sponsor, setActiveImage }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="seasons-acc">
      {seasons.map((s, i) => (
        <div
          key={s.title}
          className={`seasons-acc__item ${open === i ? "is-open" : ""}`}
        >
          <button
            className="seasons-acc__header"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="seasons-acc__dot" />
            <span className="seasons-acc__title">{s.title}</span>
            <span className="seasons-acc__chevron" aria-hidden="true" />
          </button>
          <div
            className="seasons-acc__panel"
            style={{ height: open === i ? "auto" : 0 }}
          >
            {!s?.isPdf ? (
              <ul className="seasons-acc__list">
                {s.elems.map((e, j) => (
                  <li key={j} className="seasons-acc__li">
                    {e}
                  </li>
                ))}
              </ul>
            ) : (
              <img
                src={sponsor.pdf}
                alt={`Благодарственное письмо ${sponsor.name}`}
                className="thank-image"
                onClick={() => setActiveImage(sponsor.pdf)}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
