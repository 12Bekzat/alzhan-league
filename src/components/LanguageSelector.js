import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const [active, setActive] = useState("ru");
  const { t, i18n } = useTranslation()

  const languages = ["ru", "en", "kz"];

  const change = (lng) => {
    setActive(lng);
    i18n.changeLanguage(lng)
  };

  return (
    <div class="paste-button">
      <button class="button" style={{ width: "53px" }}>
        {active.toUpperCase()}
      </button>
      <div class="dropdown-content" style={{ minWidth: 50 }}>
        {languages.map((item) => (
          <div className="child" id="top" href="#" onClick={() => change(item)}>
            {item.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
}
