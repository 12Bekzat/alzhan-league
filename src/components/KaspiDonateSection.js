import React from "react";
import qrImage from "../assets/kaspiqr.png"; // сюда положи свой QR
import qrLog from "../assets/16_114.png"; // сюда положи свой QR
import qrGold from "../assets/gold.png"; // сюда положи свой QR

export default function KaspiDonateSection() {
  return (
    <div className="kaspi-donate">
      <div className="kaspi-content">
        <h2 className="donate-title">Поддержите наш фонд</h2>
        <p className="donate-text">
          Поддержите школьную баскетбольную лигу «Alzhan». Каждый ваш взнос —
          это новые мячи, форма и возможность для школьников бесплатно играть в
          Лиге. Просто отсканируйте QR-код и сделайте донат
        </p>
        <div className="qr-container">
          <img src={qrImage} alt="Kaspi QR" className="qr-image" />
        </div>
        {/* <button className="donate-btn">Скопировать номер</button> */}
      </div>
    </div>
  );
}
