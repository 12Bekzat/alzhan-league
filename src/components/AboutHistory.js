import React from 'react';
import { Flag, Users, HeartHandshake } from 'lucide-react'; // можешь использовать phosphor-react или react-icons, если нужно

export default function AboutHistory() {
  return (
    <section
      style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        color: '#000',
      }}
    >
      <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', }}>Наша история</h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        <div
          style={{
            flex: '1 1 250px',
            maxWidth: '280px',
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
            transition: 'transform 0.3s',
          }}
        >
          <Flag size={48} color="#5d76fb" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Начало пути</h3>
          <p style={{ color: '#555', lineHeight: '1.5' }}>
            Первые шаги начались с локальных мероприятий и небольших турниров для молодых спортсменов.
          </p>
        </div>

        <div
          style={{
            flex: '1 1 250px',
            maxWidth: '280px',
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
            transition: 'transform 0.3s',
          }}
        >
          <Users size={48} color="#5d76fb" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Сообщество</h3>
          <p style={{ color: '#555', lineHeight: '1.5' }}>
            Мы создали сообщество, которое поддерживает друг друга и двигается вперёд к общим целям.
          </p>
        </div>

        <div
          style={{
            flex: '1 1 250px',
            maxWidth: '280px',
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
            transition: 'transform 0.3s',
          }}
        >
          <HeartHandshake size={48} color="#5d76fb" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Вклад в будущее</h3>
          <p style={{ color: '#555', lineHeight: '1.5' }}>
            Сегодня фонд вдохновляет новые поколения и поддерживает масштабные проекты по всей стране.
          </p>
        </div>
      </div>
    </section>
  );
}
