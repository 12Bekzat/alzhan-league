import React, { useState } from 'react';

const docs = [
  'Устав Alzhan League',
  'Положение об организации турниров',
  'Реквизиты',
  'Справка о гос. регистрации',
  'Меморандум о сотрудничестве с партнёрами',
];

export default function Documents() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="documents">
      <h2>Документы</h2>
      <div className="docs-list">
        {docs.map((doc, index) => (
          <div
            key={index}
            className={`doc-card ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            {doc}
          </div>
        ))}
      </div>
    </section>
  );
}
