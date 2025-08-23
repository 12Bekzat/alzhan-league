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
          Ваши пожертвования помогают нам развивать спорт, организовывать турниры и поддерживать молодёжные инициативы.
          Сканируйте QR-код через приложение <strong>Kaspi</strong> для быстрого перевода.
        </p>
        <div className="qr-container">
          <img src={qrImage} alt="Kaspi QR" className="qr-image" />
          <img src={qrLog} alt="" className="qr-logo" />
          <div className="qr-title">ОФ "Alzhan"</div>
          <div className="qr-title">Способы оплаты</div>
          <img src={qrGold} alt="" className="qr-gold" />
        </div>
        {/* <button className="donate-btn">Скопировать номер</button> */}
      </div>
    </div>
  );
}