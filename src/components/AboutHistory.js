import React from 'react';
import { Flag, Users, HeartHandshake } from 'lucide-react'; // можешь использовать phosphor-react или react-icons, если нужно

export default function AboutHistory() {
  return (
    <section
      style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        color: '#fff',
      }}
    >
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Наша история</h2>
      <p
        style={{
          fontSize: '1.1rem',
          maxWidth: '800px',
          margin: '0 auto 3rem',
          color: '#ccc',
          lineHeight: '1.6',
        }}
      >
        Фонд «Alzhan League» был создан для того, чтобы поддерживать молодёжь, вдохновлять на спортивные достижения
        и формировать сильное сообщество. Мы начинали с локальных инициатив и за несколько лет выросли в мощную лигу,
        которая объединяет тысячи людей по всей стране.
      </p>

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
            backgroundColor: '#242531',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
            transition: 'transform 0.3s',
          }}
        >
          <Flag size={48} color="#ff3b3f" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Начало пути</h3>
          <p style={{ color: '#aaa', lineHeight: '1.5' }}>
            Первые шаги начались с локальных мероприятий и небольших турниров для молодых спортсменов.
          </p>
        </div>

        <div
          style={{
            flex: '1 1 250px',
            maxWidth: '280px',
            backgroundColor: '#242531',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
            transition: 'transform 0.3s',
          }}
        >
          <Users size={48} color="#ff3b3f" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Сообщество</h3>
          <p style={{ color: '#aaa', lineHeight: '1.5' }}>
            Мы создали сообщество, которое поддерживает друг друга и двигается вперёд к общим целям.
          </p>
        </div>

        <div
          style={{
            flex: '1 1 250px',
            maxWidth: '280px',
            backgroundColor: '#242531',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
            transition: 'transform 0.3s',
          }}
        >
          <HeartHandshake size={48} color="#ff3b3f" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Вклад в будущее</h3>
          <p style={{ color: '#aaa', lineHeight: '1.5' }}>
            Сегодня фонд вдохновляет новые поколения и поддерживает масштабные проекты по всей стране.
          </p>
        </div>
      </div>
    </section>
  );
}
