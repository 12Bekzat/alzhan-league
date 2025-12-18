import React, { useEffect, useMemo, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTiktok,
  FaVk,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";

const SocialIcon = ({ name }) => {
  switch (name) {
    case "facebook":
      return <FaFacebook size={18} />;
    case "instagram":
      return <FaInstagram size={18} />;
    case "tiktok":
      return <FaTiktok size={18} />;
    case "x":
      return <FaX size={18} />;
    case "youtube":
      return <FaYoutube size={18} />;
    case "vk":
      return <FaVk size={18} />;
    case "whatsapp":
      return <FaWhatsapp size={18} />;
    case "phone":
      return <FaPhone size={18} />;
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
  const location = useLocation();

  function isExternal(href = "") {
    return /^https?:\/\//i.test(href);
  }

  useEffect(() => {
    const onScroll = () => setShadow(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const allLinks = useMemo(() => [...linksLeft, ...linksRight], [linksLeft, linksRight]);

  return (
    <header
      className={`sh ${sticky ? "sh--sticky" : ""} ${shadow ? "sh--shadow" : ""}`}
    >
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
          <span className="sh__follow">Следите за нами в соцсетях:</span>
          {Object.entries(socials).map(([key, url]) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="sh__social"
              aria-label={key}
            >
              <SocialIcon name={key.replace(/\d/g, "")} />
            </a>
          ))}
        </div>
      </div>

      <div className="sh__nav">
        <nav className="sh__links sh__links--left" aria-label="Основное меню (слева)">
          {linksLeft.map((l, i) =>
            isExternal(l.href) ? (
              <a
                key={i}
                className="sh__link"
                href={l.href}
                target="_blank"
                rel="noreferrer"
              >
                {l.label}
              </a>
            ) : (
              <NavLink
                key={i}
                to={l.href}
                end={l.href === "/"}
                className={({ isActive }) => "sh__link " + (isActive ? "is-active" : "")}
              >
                {l.label}
              </NavLink>
            )
          )}
        </nav>

        <span />

        <a href={logoHref} className="sh__logo" aria-label="Home">
          {logoSrc ? <img src={logoSrc} alt={logoAlt} /> : <div className="sh__logoPlaceholder">LOGO</div>}
        </a>

        <nav className="sh__links sh__links--right" aria-label="Основное меню (справа)">
          {linksRight.map((l, i) =>
            l.click ? (
              <button key={i} className="sh__link sh__link--btn" onClick={l.click} type="button">
                {l.label}
              </button>
            ) : isExternal(l.href) ? (
              <a
                key={i}
                className="sh__link"
                href={l.href}
                target="_blank"
                rel="noreferrer"
              >
                {l.label}
              </a>
            ) : (
              <NavLink
                key={i}
                to={l.href}
                className={({ isActive }) => "sh__link " + (isActive ? "is-active" : "")}
              >
                {l.label}
              </NavLink>
            )
          )}
        </nav>

        <button
          className="sh__burger"
          type="button"
          aria-label="Меню"
          aria-expanded={open}
          aria-controls="sh-mobile"
          onClick={() => setOpen((s) => !s)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <>
          <div className="sh__backdrop" aria-hidden="true" onClick={() => setOpen(false)} />

          <div id="sh-mobile" className="sh__mobile" role="dialog" aria-modal="true" aria-label="Меню">
            <button
              className="sh__close"
              type="button"
              aria-label="Закрыть меню"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            {allLinks.map((l, i) =>
              l.click ? (
                <button
                  key={i}
                  type="button"
                  className="sh__mLink sh__mLink--btn"
                  onClick={() => {
                    setOpen(false);
                    l.click();
                  }}
                >
                  {l.label}
                </button>
              ) : isExternal(l.href) ? (
                <a
                  key={i}
                  className="sh__mLink"
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ) : (
                <NavLink
                  key={i}
                  to={l.href}
                  className={({ isActive }) => "sh__mLink " + (isActive ? "is-active" : "")}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </NavLink>
              )
            )}
          </div>
        </>
      )}
    </header>
  );
}
