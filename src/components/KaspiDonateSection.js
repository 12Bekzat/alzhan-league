import React from "react";
import qrImage from "../assets/qrImage.webp"; // сюда положи свой QR

export default function KaspiDonateSection() {
  return (
    <div className="kaspi-donate">
      <div className="kaspi-content">
        <h2 className="donate-title">Поддержите наш фонд</h2>
        <p className="donate-text">
          Ваши пожертвования помогают нам развивать спорт, организовывать турниры и поддерживать молодёжные инициативы.
          Сканируйте QR-код через приложение <strong>Kaspi</strong> для быстрого перевода.
        </p>
        <div className="qr-container">
          <img src={qrImage} alt="Kaspi QR" className="qr-image" />
        </div>
        {/* <button className="donate-btn">Скопировать номер</button> */}
      </div>
    </div>
  );
}