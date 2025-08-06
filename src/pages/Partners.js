// src/pages/PartnersPage.jsx
import React from 'react';
import ERG from '../assets/erg logo.webp'
import Kusto from '../assets/kusto png.png'
import Zhebe from '../assets/zhebe logistics png.jpg'
import ThanksERG from '../assets/thanks_erg.pdf'
import ThanksKusto from '../assets/thanks_kusto.pdf'

const partners = [
  {
    name: 'ERG - Eurasian Resources Group',
    logo: ERG,
    pdf: ThanksERG
  },
  {
    name: 'Kusto Group',
    logo: Kusto,
    pdf: ThanksKusto
  },
  {
    name: 'Zhebe logistics',
    logo: Zhebe,
  }
];

export default function Partners() {
  const categories = ['Все', 'Госструктуры', 'Бизнес', 'Частные лица'];
  const [activeCategory, setActiveCategory] = React.useState('Все');

  const filteredPartners = activeCategory === 'Все'
    ? partners
    : partners.filter((p) => p.category === activeCategory);

  return (
    <div className="game-stats-page light-theme">
      <div className="container">
        <h1 className="main-title">Партнёры и спонсоры</h1>

        {/* Категории */}

        {/* Сетка партнёров */}
        <div className="partners-grid">
          {filteredPartners.map((partner, i) => (
            <div key={i} className="partner-card">
              <img src={partner.logo} alt={partner.name} className="partner-logo" />
              <h2 className="partner-name">{partner.name}</h2>
              <p className="partner-category">{partner.category}</p>
              <p className="partner-description">{partner.description}</p>
              <blockquote className="partner-quote">{partner.quote}</blockquote>

              {partner.pdf && (
                <a target='_blank' href={partner.pdf}
                    className="view-pdf-btn" rel="noreferrer"
                    // onClick={() => setActivePdf(partner.pdf)}
                  >
                    📄 Благодарственное письмо
                  </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}