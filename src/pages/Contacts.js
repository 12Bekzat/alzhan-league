import React from "react";
import { Phone, Mail, Instagram, Link as LinkIcon } from "lucide-react"; // Или react-icons, если хочешь
import Logo from "../assets/Logo.png";
import RegionalRepresentatives from "../components/RegionalRepresentatives";

const data = [
  {
    region: "Костанайская область (Рудный)",
    manager: "Пыряева Наталья Васильевна",
    phone: "+7 747 697 4306",
  },
  {
    region: "Костанайская область (Лисаковск)",
    manager: "Бойко Владислав Вячеславович",
    phone: "+7 777 173 5258",
  },
  {
    region: "Костанайская область (Житикара)",
    manager: "Жан Тулубаев",
    phone: "+7 701 726 1329",
  },
  {
    region: "Павладарская область (Аксу)",
    manager: "Сыздыков Жанат Куатович",
    phone: "+7 701 743 3347",
  },
  {
    region: "Актюбинская область (Актобе)",
    manager: "Сейлханова Нурайна Досымовна",
    phone: "+7 700 681 4002",
  },
  {
    region: "Актюбинская область (Хромтау)",
    manager: "Бегаришева Алина Дисемалиевна",
    phone: "+7 707 483 4677",
  },
  {
    region: "Абайская область (Семей)",
    manager: "Талгат Нурсаинович",
    phone: "+7 747 445 6083",
  },
];

export default function Contacts() {
  return (
    <>
    <div className="docs-wrap" style={{ paddingBottom: 0}}>
        <div className="docs-header">
          <div className="docs-breadcrumbs">
            Главная — <span>Контакты</span>
          </div>
        </div>
      </div>
      <div className="container">
        <section className="contacts">
          <h2>Контакты</h2>
          <div className="contacts-card">
            <div className="contacts-logo">
              <img src={Logo} alt="Alzhan League" />
            </div>
            <div className="contacts-info">
              <span className="contacts-badge">ЛИГА</span>
              <h3>Alzhan Basketball Fund</h3>
              <p className="contacts-subtitle">Школьная Лига «Alzhan»</p>

              <div className="contacts-item">
                <Phone size={18} />
                <span>Телефон</span>
                <p>+7 705 667 0405</p>
              </div>

              <div className="contacts-item">
                <Mail size={18} />
                <span>Email</span>
                <p>kazbasket.fund@gmail.com</p>
              </div>

              <div className="contacts-item">
                <Instagram size={18} />
                <span>Instagram</span>
                <p>
                  https://www.instagram.com/alzhan.league
                </p>
              </div>
            </div>
          </div>
          <RegionalRepresentatives items={data} />
        </section>
      </div>
    </>
  );
}
