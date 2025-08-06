import React, { useState } from "react";

export default function Documents({ docs, documents, title }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="documents">
      {title && <h2>{title}</h2>}
      <div className="docs-list">
        {docs.map((doc, index) => (
          <a
            download
            key={index}
            href={documents && documents[index]}
            className={`doc-card ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            {doc}
          </a>
        ))}
      </div>
    </section>
  );
}
