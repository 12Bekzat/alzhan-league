import React, { useState } from 'react';

const teamMembers = [
  {
    name: 'Сайденов Анвар Галимуллаевич',
    role: 'Председатель попечительского совета ОФ “Alzhan”',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Ахтанов Ерлан Кокенаевич',
    role: 'Сооснователь ОФ “Alzhan”',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Шакиров Марат Сагидович',
    role: 'Директор ОФ “Alzhan”',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Жасұланова Айкенже',
    role: 'Руководитель отдела по работе со спонсорами и маркетингу',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Альфира Бекмамбетова',
    role: 'Менеджер ОФ “Alzhan”',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Элла',
    role: 'Менеджер ОФ “Alzhan”',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80',
  },
];

export default function TeamSlider() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 3;
  const cardWidth = 320; // ширина одной карточки (можно подстроить под дизайн)

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  // Подготавливаем дублированный массив для зацикливания
  const extendedMembers = [...teamMembers, ...teamMembers];

  // Вычисляем смещение
  const offset = startIndex * (cardWidth + 16); // 16px — gap

  return (
    <section className="team-slider">
      <h2>Наша команда</h2>
      <div className="slider-container">
        <button className="nav-button" onClick={prevSlide}>
          ‹
        </button>

        <div className="slider-wrapper">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${offset}px)`,
            }}
          >
            {extendedMembers.map((member, index) => (
              <div className="card" key={index}>
                <img src={member.image} alt={member.name} />
                <div className="card-content">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="nav-button" onClick={nextSlide}>
          ›
        </button>
      </div>
    </section>
  );
}
