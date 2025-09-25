import React, { useEffect, useState } from "react";

const SocialIcon = ({ name }) => {
  const p = { fill: "currentColor" };
  switch (name) {
    case "facebook":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
          <path
            {...p}
            d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.5V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
          <path
            {...p}
            d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.8-.9a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"
          />
        </svg>
      );
    case "tiktok":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
          <path
            {...p}
            d="M15 3c.3 2 1.6 3.7 3.4 4.5A7 7 0 0 0 22 8v3a9 9 0 0 1-5.5-2v6.5a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 1 .1V13a2.5 2.5 0 1 0 2 2.4V3h2z"
          />
        </svg>
      );
    case "x":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
          <path
            {...p}
            d="M3 3h4.4L13 11.1 17.6 3H21l-6.7 11.5L21 21h-4.3l-4.8-6.3L6.9 21H3l7.1-12L3 3z"
          />
        </svg>
      );
    case "youtube":
      return (
        <svg width="20" height="18" viewBox="0 0 24 24" aria-hidden>
          <path
            {...p}
            d="M23.5 7.2a4 4 0 0 0-2.8-2.8C18.7 4 12 4 12 4s-6.7 0-8.7.4A4 4 0 0 0 .5 7.2 41 41 0 0 0 0 12a41 41 0 0 0 .5 4.8 4 4 0 0 0 2.8 2.8C5.3 20 12 20 12 20s6.7 0 8.7-.4a4 4 0 0 0 2.8-2.8A41 41 0 0 0 24 12a41 41 0 0 0-.5-4.8zM9.8 15.3V8.7L16 12l-6.2 3.3z"
          />
        </svg>
      );
    case "vk":
      return (
        <svg width="20" height="18" viewBox="0 0 24 24" aria-hidden>
          <path
            {...p}
            d="M3 7c.2 6.7 3.6 10.2 9.9 10.2h.6v-3c2.2.2 3.9 1.9 4.6 3.8H21c-.8-2.6-2.7-4.4-4.1-5 1.4-.8 3.3-2.8 3.7-6h-2.8c-.5 2.2-2 4.2-3.5 4.4V7H12v5.7c-1.6-.4-3.6-2.3-3.7-5.7H5.5c0 1.2.2 2.2.5 3H3z"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default function SiteHeader({
  logoSrc,
  logoAlt = "Logo",
  logoHref = "/",
  linksLeft = [],
  linksRight = [],
  email,
  phone,
  socials = {}, // {facebook:'#', instagram:'#', tiktok:'#', x:'#', youtube:'#', vk:'#'}
  sticky = true,
}) {
  const [open, setOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShadow(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const allLinks = [...linksLeft, ...linksRight];

  return (
    <header
      className={`sh ${sticky ? "sh--sticky" : ""} ${
        shadow ? "sh--shadow" : ""
      }`}
    >
      {/* Top info bar */}
      <div className="sh__topbar">
        <div className="sh__contacts">
          {email && (
            <a href={`mailto:${email}`} className="sh__contact">
              EMAIL: {email}
            </a>
          )}
          {phone && (
            <a href={`tel:${phone}`} className="sh__contact">
              PHONE: {phone}
            </a>
          )}
        </div>
        <div className="sh__socials">
          <span className="sh__follow">FOLLOW US:</span>
          {Object.entries(socials).map(([k, url]) => (
            <a
              key={k}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="sh__social"
              aria-label={k}
            >
              <SocialIcon name={k} />
            </a>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <div className="sh__nav">
        <nav
          className="sh__links sh__links--left"
          aria-label="Главная навигация слева"
        >
          {linksLeft.map((l, i) => (
            <a key={i} className="sh__link" href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <span className="" ></span>

        <a href={logoHref} className="sh__logo" aria-label="Home">
          {logoSrc ? (
            <img src={logoSrc} alt={logoAlt} />
          ) : (
            <div className="sh__logoPlaceholder">LOGO</div>
          )}
        </a>

        <nav
          className="sh__links sh__links--right"
          aria-label="Главная навигация справа"
        >
          {linksRight.map((l, i) => (
            <a key={i} className="sh__link" href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="sh__burger"
          aria-label="Открыть меню"
          onClick={() => setOpen((s) => !s)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sh__mobile" role="dialog" aria-label="Мобильное меню">
          {allLinks.map((l, i) => (
            <a
              key={i}
              className="sh__mLink"
              href={l.href}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
