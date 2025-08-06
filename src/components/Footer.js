/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Mail, Instagram, Youtube, Send, Link } from "lucide-react"; // Можно заменить на любые другие
import Logo from "../assets/Aljan1-3_9R5tx.png";
import { FaInstagram, FaTelegram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaVk } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__row">
        <div className="footer__content">
          <div className="footer__logo">
            <img src={Logo} alt="" />
            <span>
              Alzhan <p>league</p>
            </span>
          </div>
          <div className="footer__copy">&copy; Все права защищены, 2025 г.</div>
          <span style={{ display: "flex", gap: 12 }}>
            <div className="footer__link">Политика безопасности</div>
            <div className="footer__link">Обратная связь</div>
          </span>
        </div>
        <div className="footer__content">
          <div className="footer__title">Контакты</div>
          <div className="footer__text">info@alzhanleague.kz</div>
          <div className="footer__icons" id="socials">
            <a target="_blank" href="https://www.instagram.com/alzhan.league?igsh=MWJhNHcyMGZweXpjZA==" className="footer__icon" rel="noreferrer">
              <FaInstagram size={30} color="white" />
            </a>
            <a target="_blank" href="https://www.instagram.com/alzhan.fund?igsh=NDI4NGtqZXFramVq" className="footer__icon" rel="noreferrer">
              <FaInstagram size={30} color="white" />
            </a>
            <a target="_blank" href="https://vk.com/alzhan_league" className="footer__icon" rel="noreferrer">
              <FaVk size={30} color="white" />
            </a>
            <a target="_blank" href="https://youtube.com/@alzhankz?si=QUqhrpl2CGI77R5H" className="footer__icon" rel="noreferrer">
              <FaYoutube size={30} color="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
