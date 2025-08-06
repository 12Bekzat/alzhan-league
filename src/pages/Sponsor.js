// src/pages/SponsorForm.jsx
import React, { useState } from 'react';
import emailjs from "emailjs-com";

export default function Sponsor() {
  const [form, setForm] = useState({
    name: '',
    user_company: '',
    user_phone: '',
    user_email: '',
    message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_3zp03cr",      // ID вашего сервиса из EmailJS
        "template_xic563c",     // ID шаблона письма
        form,
        "mdmpwDIRnuWqY6H4W"  // Публичный ключ из EmailJS
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
        },
        (error) => {
          console.error("Ошибка:", error.text);
        }
      );
  };

  const handleChangeName = (e) => {
    setForm({ ...form, name: e.target.value });
  };
  const handleChangeCompany = (e) => {
    setForm({ ...form, user_company: e.target.value });
  };
  const handleChangePhone = (e) => {
    setForm({ ...form, user_phone: e.target.value });
  };
  const handleChangeEmail = (e) => {
    setForm({ ...form, user_email: e.target.value });
  };
  const handleChangeMessage = (e) => {
    setForm({ ...form, message: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Отправка формы:', form);
    // здесь можно добавить отправку данных на сервер
  };

  return (
    <div className="game-stats-page">
      <div className="container">
        <h1 className="main-title">Хочу стать спонсором</h1>

        <form className="sponsor-form">
          <div className="form-group">
            <label htmlFor="name">Имя</label>
            <input type="text" id="name" name="name" value={form.name} onChange={handleChangeName} required />
          </div>
          <div className="form-group">
            <label htmlFor="company">Компания</label>
            <input type="text" id="company" name="company" value={form.company} onChange={handleChangeCompany} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChangePhone} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChangeEmail} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Комментарий</label>
            <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChangeMessage}></textarea>
          </div>
          <button className="submit-button" onClick={sendEmail}>Отправить</button>
        </form>
      </div>
    </div>
  );
}
