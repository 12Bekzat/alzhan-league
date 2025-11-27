import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaPhone, FaTiktok, FaVk, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const SocialIcon = ({ name }) => {
  const p = { fill: "currentColor" };
  switch (name) {
    case "facebook":
      return (
        <FaFacebook size={18} />
      );
    case "instagram":
      return (
        <FaInstagram size={18} />
      );
    case "tiktok":
      return (
        <FaTiktok size={18} />
      );
    case "x":
      return (
        <FaX size={18} />
      );
    case "youtube":
      return (
        <FaYoutube size={18} />
      );
    case "vk":
      return (
        <FaVk size={18} />
      );
    case "whatsapp":
      return (
        <FaWhatsapp size={18} />
      );

    case "phone":
      return (
        <FaPhone size={18} />
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

  function isExternal(href = "") {
    return /^https?:\/\//i.test(href);
  }

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
          <span className="sh__follow">Следите за нами в соцсетях:</span>
          {Object.entries(socials).map(([k, url]) => (
            <a
              key={k}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="sh__social"
              aria-label={k}
            >
              <SocialIcon name={k.replace(/\d/g, "")} />
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
                end={l.href === "/"} // чтобы Главная активировалась только на /
                className={({ isActive }) =>
                  "sh__link " + (isActive ? "is-active" : "")
                }
              >
                {l.label}
              </NavLink>
            )
          )}
        </nav>

        <span />

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
          {linksRight.map((l, i) =>
            l.click ? (
              <button
                key={i}
                className="sh__link sh__link--btn"
                onClick={l.click}
              >
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
                className={({ isActive }) =>
                  "sh__link " + (isActive ? "is-active" : "")
                }
              >
                {l.label}
              </NavLink>
            )
          )}
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
