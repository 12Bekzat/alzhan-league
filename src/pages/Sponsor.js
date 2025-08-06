// src/pages/SponsorForm.jsx
import React, { useState } from 'react';

export default function Sponsor() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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

        <form onSubmit={handleSubmit} className="sponsor-form">
          <div className="form-group">
            <label htmlFor="name">Имя</label>
            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="company">Компания</label>
            <input type="text" id="company" name="company" value={form.company} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Комментарий</label>
            <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="submit-button">Отправить</button>
        </form>
    
        <div className="donate-section">
          <h2 className="section-title">Поддержать фонд</h2>
          <p className="donate-text">Если вы хотите поддержать нас напрямую, вы можете воспользоваться кнопкой ниже или перевести средства по реквизитам.</p>
          <button className="donate-button">Оплатить</button>
          <div className="donate-details">
            <p><strong>Фонд:</strong>Alzhan League</p>
            <p><strong>БИН:</strong> 123456789012</p>
            <p><strong>IBAN:</strong> KZ123456789012345678</p>
            <p><strong>Банк:</strong> Народный Банк Казахстана</p>
            <p><strong>Назначение платежа:</strong> Благотворительный взнос</p>
          </div>
        </div>
      </div>
    </div>
  );
}
