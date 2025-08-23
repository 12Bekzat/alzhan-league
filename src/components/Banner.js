import React from 'react';
import { useTranslation } from 'react-i18next';

export default function HeroBanner() {
  const { t } = useTranslation()
  
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '800px',
        backgroundImage: 'url(https://fs.mtgame.ru/2IFfEEAmcCw.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Переливающийся overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.7))',
          zIndex: 1,
        }}
      />

      {/* Контент поверх */}
      <div style={{ zIndex: 2, maxWidth: '800px', padding: '0 20px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{ t('BannerTitle') }</h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
          Здесь мы верим в силу спорта и командного духа. Каждый матч, каждая тренировка — это шаг к новым победам. Мы создаём условия, где талант раскрывается, а стремление стать лучше превращает игроков в настоящих чемпионов.
        </p>
        <a
          href="#stream"
          style={{
            backgroundColor: '#5d76fb',
            color: '#fff',
            padding: '0.75rem 2rem',
            borderRadius: '30px',
            textDecoration: 'none',
            fontSize: '1.1rem',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#4db8ff')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#5d76fb')}
        >
          Смотреть трансляцию
        </a>
      </div>
    </div>
  );
}
