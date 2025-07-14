import React from 'react';

export default function HeroBanner() {
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
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Alzhan League</h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
          Официальный сайт Alzhan League — платформа для трансляций, новостей и взаимодействия с нашими болельщиками и партнёрами.
        </p>
        <a
          href="#stream"
          style={{
            backgroundColor: '#ff3b3f',
            color: '#fff',
            padding: '0.75rem 2rem',
            borderRadius: '30px',
            textDecoration: 'none',
            fontSize: '1.1rem',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#ff5a5e')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#ff3b3f')}
        >
          Смотреть трансляцию
        </a>
      </div>
    </div>
  );
}
