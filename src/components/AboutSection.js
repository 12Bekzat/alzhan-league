import React from 'react';
import { Target, Users, Trophy } from 'lucide-react'; // если используешь lucide-react

export default function AboutSection() {
  return (
    <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>О нас</h2>
      <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 3rem', color: '#fff' }}>
        «Alzhan league» — это современная спортивная лига, объединяющая людей, вдохновляющая на развитие и создающая новые возможности для молодых спортсменов.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>
        {/* Миссия */}
        <div style={{ flex: '1 1 250px', maxWidth: '300px', backgroundColor: '#242531', padding: '2rem', borderRadius: '12px', boxShadow: '0 8px 20px rgba(0,0,0,0.05)' }}>
          <Target size={48} color="#ff3b3f" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>Наша миссия</h3>
          <p style={{ color: '#ccc' }}>
            Поддерживать молодых спортсменов, продвигать здоровый образ жизни и формировать сильное комьюнити.
          </p>
        </div>

        {/* Цели */}
        <div style={{ flex: '1 1 250px', maxWidth: '300px', backgroundColor: '#242531', padding: '2rem', borderRadius: '12px', boxShadow: '0 8px 20px rgba(0,0,0,0.05)' }}>
          <Trophy size={48} color="#ff3b3f" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>Наши цели</h3>
          <p style={{ color: '#ccc' }}>
            Развивать новые спортивные проекты, расширять аудиторию, вдохновлять на личные победы и рост.
          </p>
        </div>

        {/* Ценности */}
        <div style={{ flex: '1 1 250px', maxWidth: '300px', backgroundColor: '#242531', padding: '2rem', borderRadius: '12px', boxShadow: '0 8px 20px rgba(0,0,0,0.05)' }}>
          <Users size={48} color="#ff3b3f" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>Наши ценности</h3>
          <p style={{ color: '#ccc' }}>
            Единство, честность и поддержка. Мы верим, что вместе можно достичь великих результатов.
          </p>
        </div>
      </div>
    </section>
  );
}
