import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import SaidenovAnvar from '../assets/anvar.jpeg'
import ShakirovMarat from '../assets/shakirov.jpeg'
import AhtanovErlan from '../assets/employee/Ahtanov.jpeg'
import BekmambetovaAlfira from '../assets/employee/bekmambetova.jpeg'
import DusenbinaElla from '../assets/employee/ella.jpeg'
import PiryaevaNatalya from '../assets/employee/piryaeva.jpeg'
import Konstantin from '../assets/employee/constantin.png'

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
    image: Konstantin,
    additionalStyle: { objectPosition: '0 0%' }
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
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const [cardMetrics, setCardMetrics] = useState({ width: 320, gap: 16 });
  const [visibleCount, setVisibleCount] = useState(3);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const nextSlide = () => {
    setStartIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setStartIndex((prev) => prev - 1);
  };

  // Подготавливаем дублированный массив для зацикливания
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    const measure = () => {
      const firstCard = track.querySelector('.card');
      if (!firstCard) return;
      const cardRect = firstCard.getBoundingClientRect();
      const trackStyles = window.getComputedStyle(track);
      const gap = parseFloat(trackStyles.columnGap || trackStyles.gap || '16') || 16;
      const width = Math.round(cardRect.width) || 320;
      const viewportWidth = window.innerWidth;
      const count = viewportWidth < 600 ? 1 : viewportWidth < 900 ? 2 : 3;
      setCardMetrics({ width, gap });
      setVisibleCount(count);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(wrapper);
    return () => ro.disconnect();
  }, []);

  const cloneCount = visibleCount;
  const extendedMembers = useMemo(() => {
    const head = teamMembers.slice(-cloneCount);
    const tail = teamMembers.slice(0, cloneCount);
    return [...head, ...teamMembers, ...tail];
  }, [cloneCount]);

  useEffect(() => {
    setTransitionEnabled(false);
    setStartIndex(cloneCount);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setTransitionEnabled(true));
    });
  }, [cloneCount]);

  const handleTrackTransitionEnd = () => {
    const total = teamMembers.length;
    if (startIndex >= total + cloneCount) {
      setTransitionEnabled(false);
      setStartIndex(cloneCount);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setTransitionEnabled(true));
      });
    } else if (startIndex < cloneCount) {
      setTransitionEnabled(false);
      setStartIndex(total + cloneCount - 1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setTransitionEnabled(true));
      });
    }
  };

  const offset = startIndex * (cardMetrics.width + cardMetrics.gap);

  return (
    <section className="team-slider" style={{ '--ts-cols': visibleCount }}>
      <h2>Наша команда</h2>
      <p className="">
        Лига «Alzhan» — это команда людей, которые работают на результат. Мы отвечаем за организацию турниров, развитие проекта и создание условий, где дети растут чемпионами. 
      </p>
      <div className="slider-container">
        <button className="nav-button" onClick={prevSlide} aria-label="Previous">
          <FaArrowLeft size={16} />
        </button>

        <div className="slider-wrapper" ref={wrapperRef}>
          <div
            className="slider-track"
            ref={trackRef}
            style={{
              transform: `translateX(-${offset}px)`,
              transition: transitionEnabled ? undefined : 'none',
            }}
            onTransitionEnd={handleTrackTransitionEnd}
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

        <button className="nav-button" onClick={nextSlide} aria-label="Next">
          <FaArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}


