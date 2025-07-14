import React from 'react';

export default function MissionValues() {
    return (
        <div className='container'>
            <section style={{ color: '#fff', padding: '4rem 2rem' }}>
                {/* Миссия */}
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        marginBottom: '4rem',
                    }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=900&q=80"
                        alt="Миссия"
                        style={{
                            flex: '1 1 400px',
                            maxWidth: '500px',
                            borderRadius: '12px',
                            objectFit: 'cover',
                            marginRight: '2rem',
                        }}
                    />
                    <div style={{ flex: '1 1 300px' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#ff3b3f' }}>Наша миссия</h2>
                        <p style={{ lineHeight: 1.6, color: '#ccc' }}>
                            Наша миссия — вдохновлять молодёжь на спортивные достижения, объединять сообщества и создавать пространство для развития талантов. Мы верим, что спорт может изменить жизни и дать каждому шанс раскрыться.
                        </p>
                    </div>
                </div>

                {/* Ценности */}
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        flexDirection: 'row-reverse',
                    }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=900&q=80"
                        alt="Ценности"
                        style={{
                            flex: '1 1 400px',
                            maxWidth: '500px',
                            borderRadius: '12px',
                            objectFit: 'cover',
                            marginLeft: '2rem',
                        }}
                    />
                    <div style={{ flex: '1 1 300px' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#ff3b3f' }}>Наши ценности</h2>
                        <p style={{ lineHeight: 1.6, color: '#ccc' }}>
                            Мы строим лигу на принципах честности, уважения и командного духа. Наша главная ценность — это люди: спортсмены, тренеры, болельщики и партнёры, которые вместе создают уникальное сообщество Alzhan League.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
