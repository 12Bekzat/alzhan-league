import { useEffect, useId, useRef, useState } from "react";
import { FaGlobe, FaInstagram } from "react-icons/fa";

/**
 * Пропсы:
 * - logo: string (URL логотипа)
 * - name: string (название компании)
 * - summary: string | JSX (краткий текст под названием)
 * - children: JSX (доп. информация, которая раскрывается)
 * - defaultOpen?: boolean
 */
export default function CompanySpoiler({
  logo,
  name,
  summary,
  socials,
  children,
  defaultOpen = false,
}) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef(null);
  const panelId = useId(); // для aria

  // Анимация высоты: измеряем контент и плавно открываем/закрываем
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const setToHeight = (h) => {
      el.style.height = `${h}px`;
    };

    if (open) {
      // Открытие: от 0 к фактической высоте, затем выставляем auto
      el.style.height = "0px";
      // нужно дождаться следующего кадра для корректной анимации
      requestAnimationFrame(() => {
        setToHeight(el.scrollHeight);
      });

      const onEnd = () => {
        el.style.height = "auto";
      };
      el.addEventListener("transitionend", onEnd, { once: true });
    } else {
      // Закрытие: с текущей высоты к 0
      const current = el.scrollHeight;
      el.style.height = `${current}px`;
      // следующий кадр — к 0
      requestAnimationFrame(() => {
        el.style.height = "0px";
      });
    }
  }, [open]);

  // Если контент меняется в открытом состоянии — подстраиваем высоту
  useEffect(() => {
    const el = contentRef.current;
    if (!el || !open) return;
    // временно выставим конкретную высоту, потом снова auto
    el.style.height = `${el.scrollHeight}px`;
    const onEnd = () => (el.style.height = "auto");
    el.addEventListener("transitionend", onEnd, { once: true });
  });

  const toggle = () => setOpen((v) => !v);

  const ICONS = {
    instagram: FaInstagram,
    web: FaGlobe,
  };

  return (
    <div className={`spoiler ${open ? "spoiler--open" : ""}`}>
      <div
        type="button"
        className="spoiler__header"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={toggle}
      >
        <div className="spoiler__left">
          {logo && (
            <img
              className="spoiler__logo"
              src={logo}
              alt={`${name || "Компания"} — логотип`}
              loading="lazy"
            />
          )}
          <div className="spoiler__titles">
            <div className="spoiler__name">{name}</div>
            {summary && <div className="spoiler__summary">{summary}</div>}
          </div>
          {socials && (
            <div className="socials-content">
              <div className="socials-wrap">
                {socials.map((s, i) => {
                  const Icon = ICONS[s.social] ?? FaGlobe;
                  return (
                    <a
                      key={i}
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="socials-item"
                      title={s.social}
                    >
                      <Icon className="socials-icon" />
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {children && <span className="spoiler__chevron" aria-hidden="true" />}
      </div>

      <div
        id={panelId}
        ref={contentRef}
        className="spoiler__content"
        role="region"
        aria-label={`Подробнее о компании ${name}`}
      >
        {children && <div className="spoiler__content-inner">{children}</div>}
      </div>
    </div>
  );
}
