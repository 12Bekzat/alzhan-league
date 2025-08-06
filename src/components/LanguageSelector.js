import React, { useState } from "react";

export default function LanguageSelector() {
  const [active, setActive] = useState("RU");

  const languages = ["RU", "EN", "KZ"];

  const change = (lng) => {
    setActive(lng);
  };

  return (
    <div class="paste-button">
      <button class="button" style={{ width: "53px" }}>
        {active}
      </button>
      <div class="dropdown-content" style={{ minWidth: 50 }}>
        {languages.map((item) => (
          <div className="child" id="top" href="#" onClick={() => change(item)}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
