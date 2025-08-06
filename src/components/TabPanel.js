import React, { useState } from "react";

export default function TabPanel({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="tab-panel">
      {/* Заголовки вкладок */}
      <div className="tab-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-btn ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Содержимое активной вкладки */}
      <div className="tab-content">{tabs[activeIndex].content}</div>
    </div>
  );
}