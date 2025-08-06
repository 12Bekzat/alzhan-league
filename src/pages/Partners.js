// src/pages/PartnersPage.jsx
import ERG from '../assets/erg logo.webp'
import Kusto from '../assets/kusto png.png'
import Zhebe from '../assets/zhebe logistics png.jpg'
import ThanksERG from '../assets/thx-image-erg.png'
import ThanksKusto from '../assets/thx-image-kusto.png'
import React, { useState } from "react";

const partners = [
  {
    name: 'ERG - Eurasian Resources Group',
    logo: ERG,
    description: 'jhd jksahdjkhasjk hdjkashjdjhajs hjdhsaj djahsjdh jkasjd akjshdjkaskj',
    pdf: ThanksERG
  },
  {
    name: 'Kusto Group',
    logo: Kusto,
    description: 'jhd jksahdjkhasjk hdjkashjdjhajs hjdhsaj djahsjdh jkasjd akjshdjkaskj',
    pdf: ThanksKusto
  },
  {
    name: 'Zhebe logistics',
    description: 'jhd jksahdjkhasjk hdjkashjdjhajs hjdhsaj djahsjdh jkasjd akjshdjkaskj',
    logo: Zhebe,
  }
];

export default function Partners() {
  const [activeImage, setActiveImage] = useState(null);
  return (
    <>
      <div className="sponsors-section">
        <h2 className="section-title">Благодарим наших спонсоров</h2>
        <div className="sponsors-grid">
          {partners.map((sponsor, index) => (
            <div key={index} className="sponsor-card">
              <div className="sponsor-header">
                <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
                <h3 className="sponsor-name">{sponsor.name}</h3>
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