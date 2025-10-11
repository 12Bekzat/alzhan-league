import React, { useMemo, useState } from "react";
import Ball from '../assets/basketball-ball-variant.png'

export default function ContactRibbonForm({
  title = "Свяжитесь с нами",
  subtitle = "Оставьте заявку и получите подборку со спикерами для вашего мероприятия через 10 минут",
  submitText = "Отправить заявку",
  onSubmit,
}) {
  const [form, setForm] = useState({
    fio: "",
    email: "",
    phone: "",
    agree: false,
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const formatPhone = (raw) => {
    const digits = String(raw).replace(/\D/g, "");
    let d = digits;
    if (d.startsWith("8")) d = "7" + d.slice(1);
    if (!d.startsWith("7")) d = "7" + d; // default to +7
    const p = [d.slice(1, 4), d.slice(4, 7), d.slice(7, 9), d.slice(9, 11)];
    let out = "+7";
    if (p[0]) out += ` (${p[0]}` + (p[0].length === 3 ? ")" : "");
    if (p[1]) out += ` ${p[1]}`;
    if (p[2]) out += `-${p[2]}`;
    if (p[3]) out += `-${p[3]}`;
    return out;
  };

  const onPhoneInput = (e) => {
    const formatted = formatPhone(e.target.value);
    e.target.value = formatted;
    setForm((f) => ({ ...f, phone: formatted }));
  };

  const valid = useMemo(() => {
    const emailOk = /.+@.+\..+/.test(form.email.trim());
    const fioOk = form.fio.trim().length >= 3;
    const phoneOk = form.phone.replace(/\D/g, "").length >= 11;
    return emailOk && fioOk && phoneOk && form.agree;
  }, [form]);

  const submit = async (e) => {
    e.preventDefault();
    if (!valid || status === "sending") return;
    setStatus("sending");
    try {
      if (onSubmit) await onSubmit(form);
      else await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      setForm({ fio: "", email: "", phone: "", agree: false });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="crf" aria-label="Форма связи">
      {/* Decorative curve */}
      {/* <svg
        className="crf__curve"
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M10,40 C160,100 270,140 430,120 C630,90 760,190 900,160 C1030,130 1080,120 1190,60" />
        <circle cx="770" cy="120" r="10" />
      </svg> */}

      <div className="crf__left">
        <h2 className="crf__title">{title}</h2>
        <p className="crf__subtitle">{subtitle}</p>
      </div>

      <div className="crf__icon">
        <img src={Ball} alt="dasd" />
      </div>

      <form className="crf__form" onSubmit={submit}>
        <input
          className="crf__input"
          type="text"
          name="fio"
          placeholder="ФИО"
          value={form.fio}
          onChange={handleChange}
          autoComplete="name"
          required
        />
        <input
          className="crf__input"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
          required
        />
        <div className="crf__phoneRow">
          <span className="crf__flag" aria-hidden>
            🇰🇿
          </span>
          <input
            className="crf__input crf__input--phone"
            type="tel"
            name="phone"
            placeholder="+7 (777) 777-77-77"
            value={form.phone}
            onChange={handleChange}
            onInput={onPhoneInput}
            inputMode="tel"
            required
          />
        </div>
        <label className="crf__agree">
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
          />
          <span>
            Согласен(а) на обработку персональных данных и
            <a href="#" onClick={(e) => e.preventDefault()}>
              {" "}
              политику конфиденциальности
            </a>
          </span>
        </label>
        <button
          className="crf__submit"
          type="submit"
          disabled={!valid || status === "sending"}
        >
          {status === "sending"
            ? "Отправка…"
            : status === "success"
            ? "Заявка отправлена"
            : submitText}
        </button>
      </form>
    </section>
  );
}
