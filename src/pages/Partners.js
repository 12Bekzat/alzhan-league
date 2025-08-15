// src/pages/PartnersPage.jsx
import ERG from '../assets/erg logo.webp'
import Kusto from '../assets/kusto png.png'
import Zhebe from '../assets/zhebe logistics png.jpg'
import Federation from '../assets/federation.png'
import Pbk from '../assets/pbk.png'
import ThanksERG from '../assets/thx-image-erg.png'
import ThanksKusto from '../assets/thx-image-kusto.png'
import ThanksZhebe from '../assets/thanks-zhebe.png'
import React, { useState } from "react";

const partners = [
  {
    name: 'ERG - Eurasian Resources Group',
    logo: ERG,
    description: 'Международная группа компаний, специализирующаяся на добыче и переработке природных ресурсов. Является спонсором "Alzhan league" c 2024 года. ',
    pdf: ThanksERG,
    seasons: [
      {
        title: 'Сезон 2024 (1 сезон)',
        elems: [
          'Возраст: 5-6 классы мальчики и девочки',
          'Актобе – 12 команд мальчиков, 8 команд девочек',
          'Хромтау – 7 команд мальчиков',
          'Лисаковск – 6 команд мальчиков, 5 команд девочек',
          'Рудный – 7 команд мальчиков',
          'Аксу – 11 команд мальчиков',
        ]
      },
      {
        title: 'Сезон 2024-2025 (2 сезон)',
        elems: [
          'Возраст: 5-6 классы мальчики и девочки, 7-8 классы мальчики и девочки',
          'Актобе – 5-6 класс: 6 команд мальчиков, 7 команд девочек; 7-8 класс: 11 команд мальчиков, 6 команд девочек',
          'Хромтау - 5-6 класс: 7 команд мальчиков; 7-8 класс: 7 команд мальчиков',
          'Лисаковск - 5-6 класс: 6 команд мальчиков, 6 команд девочек; 7-8 класс: 7 команд мальчиков, 6 команд девочек',
          'Рудный - 5-6 класс: 7 команд мальчиков; 7-8 класс: 7 команд мальчиков, 4 команды девочек',
          'Аксу - 5-6 класс: 6 команд мальчиков, 5 команд девочек; 7-8 класс: 9 команд мальчиков',
        ]
      },
    ]
  },
  {
    name: 'Kusto Group',
    logo: Kusto,
    description: `Диверсифицированный инвестиционный холдинг, ведущий бизнес в четырех ключевых секторах: сельское хозяйство, строительные материалы и конструкции, недвижимость и розница, нефть и газ. Является спонсором "Alzhan league" c 2025 года. `,
    pdf: ThanksKusto,
    seasons: [
      {
        title: 'Сезон 2024-2025 (2 сезон)',
        elems: [
          'Житикара – 12 команд мальчиков, 8 команд девочек'
        ]
      }
    ]
  },
  {
    name: 'Zhebe logistics',
    description: 'Логистическая компания предоставляющая услуги по железнодорожным, авиа‑фрахт, морским, автомобильным перевозкам и 3PL логистике. Является спонсором "Alzhan league" c 2025 года.',
    logo: Zhebe,
    pdf: ThanksZhebe,
    seasons: [
      {
        title: 'Сезон 2024-2025 (2 сезон)',
        elems: [
          'Абайская обл. - 12 команд мальчиков, 8 команд девочек'
        ]
      }
    ]
  }
];
const friends = [
  {
    name: 'Федерация школьного спорта Казахстана',
    logo: Federation,
  },
  {
    name: 'Kusto Group',
    logo: Pbk,
  }
];

export default function Partners() {
  const [activeImage, setActiveImage] = useState(null);
  return (
    <>
      <div className="sponsors-section">
        <div className="sponsors-grid">
          {partners.map((sponsor, index) => (
            <div key={index} className="sponsor-card">
              <div className='sponsor-line'>
                <div className="sponsor-header">
                  <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
                  <h3 className="sponsor-name">{sponsor.name}</h3>
                  <p className="sponsor-description">{sponsor.description}</p>
                </div>
                {sponsor.pdf ? <img
                  src={sponsor.pdf}
                  alt={`Благодарственное письмо ${sponsor.name}`}
                  className="thank-image"
                  onClick={() => setActiveImage(sponsor.pdf)}
                /> : <div className="thank-placeholder">
                  <span>Нет письма</span>
                </div>}
              </div>
              <div className='sponsor-line'>
                <div className="season-stats">
                  <h4>Сезоны участия</h4>
                  {sponsor.seasons.map((sn, inddd) => <div className="season" key={inddd}>

                    <p><strong>{sn.title}</strong></p>
                    <ul>
                      {sn.elems.map((el, cnt) => <li key={cnt}>{el}</li>)}
                    </ul>
                  </div>)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="sponsors-grid">
          {friends.map((sponsor, index) => (
            <div key={index} className="sponsor-card">
              <div className="sponsor-header">
                <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
                <h3 className="sponsor-name">{sponsor.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      {activeImage && (
        <div className="lightbox" onClick={() => setActiveImage(null)}>
          <img src={activeImage} alt="Увеличенное письмо" className="lightbox-image" />
          <button className="close-btn" onClick={() => setActiveImage(null)}>✖</button>
        </div>
      )}</>
  );
}