import React, { useState } from "react";

export default function Documents({ docs, documents, title, filters }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [years, setYears] = useState('2025');

  return (
    <section className="documents">
      {filters && <div className="filters" style={{ margin: '0 0 12px'}}>
        <select
            value={years}
            onChange={(e) => setYears(e.target.value)}
          >
            <option value="">Все годы</option>
            {filters.map((y, i) => (
              <option key={i} value={y}>
                {y}
              </option>
            ))}
          </select>
      </div>}
      {title && <h2>{title}</h2>}
      <div className="docs-list">
        {docs.filter(doc => doc.includes(years)).map((doc, index) => (
          <a
            download
            key={index}
            href={documents && documents[index]}
            className={`doc-card`}
            onClick={() => setActiveIndex(index)}
          >
            {doc}
          </a>
        ))}
      </div>
    </section>
  );
}
