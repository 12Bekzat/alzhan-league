import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import SaidenovAnvar from '../assets/anvar.jpeg'
import ShakirovMarat from '../assets/shakirov.jpeg'
import AhtanovErlan from '../assets/employee/Ahtanov.jpeg'
import BekmambetovaAlfira from '../assets/employee/bekmambetova.jpeg'
import DusenbinaElla from '../assets/employee/ella.jpeg'
import PiryaevaNatalya from '../assets/employee/piryaeva.jpeg'

const teamMembers = [
  {
    name: 'Сайденов Анвар Галимуллаевич',
    role: 'Председатель попечительского совета ОФ “Alzhan”',
    image: SaidenovAnvar,
  },
  {
    name: 'Шакиров Марат Сагидович',
    role: 'Директор ОФ “Alzhan”',
    image: ShakirovMarat,
  },
  {
    name: 'Ахтанов Ерлан Кокенаевич',
    role: 'Сооснователь ОФ “Alzhan”',
    image: AhtanovErlan,
  },
  {
    name: 'Альфира Бекмамбетова',
    role: 'Маркетолог ОФ “Alzhan”',
    image: BekmambetovaAlfira,
  },
  {
    name: 'Дюсенбина Элла',
    role: 'Менеджер ОФ “Alzhan”',
    image: DusenbinaElla,
  },
  {
    name: 'Пыряева Наталья Васильевна',
    role: 'Региональный менеджер г. Рудный', 
    image: PiryaevaNatalya,
    additionalStyle: { objectPosition: '0% 18%' }
  },
  {
    name: 'Константин Дмитриевич Зеленков',
    role: 'Региональный менеджер г. Лисаковск',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Сыздыков Жанат Куатович',
    role: 'Региональный менеджер г. Павлодар',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Бегаришева Алина Дисемалиевна ',
    role: 'Региональный менеджер г. Хромтау',
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
      <p className="">
        Лига «Alzhan» — это команда людей, которые работают на результат. Мы отвечаем за организацию турниров, развитие проекта и создание условий, где дети растут чемпионами. 
      </p>
      <div className="slider-container">
        <button className="nav-button" onClick={prevSlide}>
          <FaArrowLeft size={16} />
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
                <img src={member.image} alt={member.name} style={member.additionalStyle} />
                <div className="card-content">
                  <span className='h3'>{member.name}</span>
                  <span className='p'>{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="nav-button" onClick={nextSlide}>
          <FaArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
