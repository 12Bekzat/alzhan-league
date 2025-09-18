import React from "react";
import {
  FaInstagram,
  FaTelegram,
  FaTiktok,
  FaVk,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const SocialIcon = {
  instagram: FaInstagram,
  youtube: FaYoutube,
  telegram: FaTelegram,
  vk: FaVk,
  whatsapp: FaWhatsapp, // <- добавлен WhatsApp
  tiktok: FaTiktok, // <- добавлен WhatsApp
};

export default function NewFooter({
  backgroundSrc, // опционально: путь к фото фона
  partners = [], // [{src, alt}] логотипы партнёров
  sections = [], // [{title, links:[{label, href}]}]
  bottomNav = [], // [{label, href}]
  orgText, // абзац описания проекта/лиги
  address, // строка адреса
  phone, // строка телефона
  email, // строка email
  copyright = "© Alzhan League",
  privacyHref = "#",
  socials = [], // [{type:'instagram'|'youtube'|'telegram'|'vk', href}]
  developer = { name: "Разработано", href: "#" },
  logo = null, // JSX логотип или текст
}) {
  return (
    <footer className="lf">
      <div
        className="lf__bg"
        style={
          backgroundSrc
            ? { backgroundImage: `url(${backgroundSrc})` }
            : undefined
        }
      />
      <div className="lf__overlay" />

      <div className="lf__container">
        {/* Верх: партнёры */}
        {!!partners.length && (
          <div className="lf__partners-marquee" aria-label="Партнёры">
            <div className="lf__track">
              {[0, 1, 2].map(
                (
                  dup // ← ТРИ копии для бесконечного цикла
                ) => (
                  <div className="lf__seq" key={dup} aria-hidden={dup !== 0}>
                    {partners.map((p, i) => (
                      <a
                        key={`${dup}-${i}`}
                        className="lf__p"
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={p.alt || "Партнёр"}
                      >
                        <span className="lf__p-img">
                          <img
                            className={`lf__img lf__img--mono ${
                              p.colorSrc
                                ? "lf__img--hasColor"
                                : "lf__img--filterWhite"
                            }`}
                            src={p.src}
                            alt={p.alt || ""}
                          />
                          {p.colorSrc && (
                            <img
                              className="lf__img lf__img--color"
                              src={p.colorSrc}
                              alt=""
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </a>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* Секции ссылок */}
        {!!sections.length && (
          <div className="lf__grid">
            {sections.map((s, i) => (
              <nav key={i} className="lf__col" aria-label={s.title}>
                <h4 className="lf__title">{s.title}</h4>
                <ul className="lf__list">
                  {s.links?.map((l, k) => (
                    <li key={k}>
                      <a className="lf__link" href={l.href}>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        )}

        {/* Средний блок: описание */}
        {(orgText || logo) && (
          <div className="lf__about">
            <div className="lf__brand">
              {logo ? logo : <div className="lf__brand-fallback">ALZHAN</div>}
            </div>
            {orgText && <p className="lf__org">{orgText}</p>}
          </div>
        )}

        <hr className="lf__divider" />

        {/* Нижний блок */}
        <div className="lf__bottom">
          {!!bottomNav.length && (
            <ul className="lf__bottom-nav" aria-label="Нижняя навигация">
              {bottomNav.map((x, i) => (
                <li key={i}>
                  <a className="lf__link" href={x.href}>
                    {x.label}
                  </a>
                </li>
              ))}
            </ul>
          )}

          <div className="lf__meta">
            <div className="lf__contacts">
              {address && <div className="lf__meta-row">{address}</div>}
              <div className="lf__meta-row">
                {phone && (
                  <a
                    className="lf__link"
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                  >
                    {phone}
                  </a>
                )}
                {email && (
                  <>
                    <span className="lf__dot">•</span>
                    <a className="lf__link" href={`mailto:${email}`}>
                      {email}
                    </a>
                  </>
                )}
              </div>
            </div>

            <div className="lf__legal">
              <a className="lf__link" href={privacyHref}>
                Политика конфиденциальности
              </a>
              <span className="lf__dot">•</span>
              <span className="lf__muted">{copyright}</span>
            </div>

            {!!socials.length && (
              <div className="lf__socials" aria-label="Социальные сети">
                {socials.map((s, i) => {
                  const Icon = SocialIcon[s.type];
                  return (
                    <a
                      key={i}
                      className="lf__social"
                      href={s.href}
                      aria-label={s.type}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.title || s.type}
                    >
                      {Icon ? (
                        <Icon size={18} aria-hidden="true" />
                      ) : (
                        <span>{s.type}</span>
                      )}
                    </a>
                  );
                })}
              </div>
            )}

            {developer && developer?.name && (
              <div className="lf__dev">
                <span className="lf__muted">Разработано:&nbsp;</span>
                <a className="lf__link" href={developer.href}>
                  {developer.name}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
