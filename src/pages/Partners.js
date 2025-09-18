// src/pages/PartnersPage.jsx
import ERG from "../assets/erg logo.webp";
import Kusto from "../assets/kusto png.png";
import Zhebe from "../assets/zhebe logistics png.jpg";
import Federation from "../assets/federation.png";
import Pbk from "../assets/pbk.png";
import ThanksERG from "../assets/thx-image-erg.png";
import ThanksKusto from "../assets/thx-image-kusto.png";
import ThanksZhebe from "../assets/thanks-zhebe.png";
import React, { useMemo, useState } from "react";
import CompanySpoiler from "../components/CompanySpoiler";
import SeasonsAccordion from "../components/SeasonAccordion";
import TabPanel from "../components/TabPanel";
import KZMap from "../components/KZMap";
import ObjectInteractive from "../components/ObjectInteractive";
import MapKazakhstan from "../components/MapKazakhstan";
import mapImg from "../assets/map-kz-removebg-preview.png"; // положи свой PNG/SVG

const partners = [
  {
    name: "ERG - Eurasian Resources Group",
    logo: ERG,
    description:
      'Международная группа компаний, специализирующаяся на добыче и переработке природных ресурсов. Является спонсором "Alzhan league" c 2024 года. ',
    pdf: ThanksERG,
    socials: [
      {
        social: "instagram",
        link: "https://www.instagram.com/ergsport",
      },
      {
        social: "instagram",
        link: "https://www.instagram.com/ergkazakhstan",
      },
      {
        social: "web",
        link: "https://www.erg.kz/",
      },
    ],
    seasons: [
      {
        title: "Сезон 2024 ",
        elems: [
          "Возраст: 5-6 классы мальчики и девочки",
          "Актобе – 12 команд мальчиков, 8 команд девочек",
          "Хромтау – 7 команд мальчиков",
          "Лисаковск – 6 команд мальчиков, 5 команд девочек",
          "Рудный – 7 команд мальчиков",
          "Аксу – 11 команд мальчиков",
        ],
      },
      {
        title: "Сезон 2024-2025 ",
        elems: [
          "Возраст: 5-6 классы мальчики и девочки, 7-8 классы мальчики и девочки",
          "Актобе – 5-6 класс: 6 команд мальчиков, 7 команд девочек; 7-8 класс: 11 команд мальчиков, 6 команд девочек",
          "Хромтау - 5-6 класс: 7 команд мальчиков; 7-8 класс: 7 команд мальчиков",
          "Лисаковск - 5-6 класс: 6 команд мальчиков, 6 команд девочек; 7-8 класс: 7 команд мальчиков, 6 команд девочек",
          "Рудный - 5-6 класс: 7 команд мальчиков; 7-8 класс: 7 команд мальчиков, 4 команды девочек",
          "Аксу - 5-6 класс: 6 команд мальчиков, 5 команд девочек; 7-8 класс: 9 команд мальчиков",
        ],
      },
      {
        title: "Благодарственное письмо",
        isPdf: true,
      },
    ],
  },
  {
    name: "Kusto Group",
    logo: Kusto,
    description: `Диверсифицированный инвестиционный холдинг, ведущий бизнес в четырех ключевых секторах: сельское хозяйство, строительные материалы и конструкции, недвижимость и розница, нефть и газ. Является спонсором "Alzhan league" c 2025 года. `,
    pdf: ThanksKusto,
    socials: [
      {
        social: "instagram",
        link: "https://www.instagram.com/kustogroup",
      },
      {
        social: "web",
        link: "https://www.kustogroup.com/kz/",
      },
    ],
    seasons: [
      {
        title: "Сезон 2024-2025 ",
        elems: [
          "Житикара – 12 команд мальчиков, 8 команд девочек",
          "Возраст: 5-6 классы мальчики и девочки",
        ],
      },
      {
        title: "Благодарственное письмо",
        isPdf: true,
      },
    ],
  },
  {
    name: "Zhebe logistics",
    description:
      'Логистическая компания предоставляющая услуги по железнодорожным, авиа‑фрахт, морским, автомобильным перевозкам и 3PL логистике. Является спонсором "Alzhan league" c 2025 года.',
    logo: Zhebe,
    pdf: ThanksZhebe,
    socials: [
      {
        social: "instagram",
        link: "https://www.instagram.com/zhebelogistics.kz",
      },
      {
        social: "web",
        link: "https://zhebelogistics.kz/",
      },
    ],
    seasons: [
      {
        title: "Сезон 2024-2025 ",
        elems: [
          "Абайская обл. - 12 команд мальчиков, 8 команд девочек",
          "Возраст: 5-6 классы мальчики и девочки",
        ],
      },
      {
        title: "Благодарственное письмо",
        isPdf: true,
      },
    ],
  },
];
const friends = [
  {
    name: "Федерация школьного спорта Казахстана",
    logo: Federation,
    socials: [
      {
        social: "instagram",
        link: "https://www.instagram.com/ssports.kz",
      },
      {
        social: "web",
        link: "https://ssports.kz/ru",
      },
    ],
  },
  {
    name: "Профессиональный баскетбольный клуб «Астана»",
    logo: Pbk,
    socials: [
      {
        social: "instagram",
        link: "https://www.instagram.com/astanabasket",
      },
      {
        social: "web",
        link: "https://pbcastana.kz/ru/",
      },
    ],
  },
];

const regions = [
  { id: "r-nw", name: "Северо-Запад", d: "M80,120 h230 v140 h-230 z" },
  { id: "r-ne", name: "Северо-Восток", d: "M330,80 h260 v180 h-260 z" },
  { id: "r-c", name: "Центр", d: "M240,240 h220 v140 h-220 z" },
  { id: "r-sw", name: "Юго-Запад", d: "M120,380 h260 v150 h-260 z" },
  { id: "r-se", name: "Юго-Восток", d: "M420,370 h260 v160 h-260 z" },
];

export default function Partners() {
  const [activeImage, setActiveImage] = useState(null);

  const [markers, setMarkers] = useState([
    { id: "m1", x: 420, y: 160, count: 3 },
    { id: "m2", x: 550, y: 440, count: 1 },
  ]);

  const handlePlaceMarker = ({ x, y }) => {
    const id = `m-${Date.now()}`;
    setMarkers((arr) => [...arr, { id, x, y, count: 1 }]);
  };

  return (
    <div className="back">
      <div className="sponsors-section">
        <TabPanel
          headerStyle={{ borderBottom: "none" }}
          tabs={[
            {
              label: "Спонсоры",
              content: (
                <div className="sponsors-grid">
                  {partners.map((sponsor, index) => (
                    <CompanySpoiler
                      logo={sponsor.logo}
                      name={sponsor.name}
                      summary={sponsor.description}
                      socials={sponsor.socials}
                      defaultOpen={false}
                    >
                      <SeasonsAccordion
                        seasons={sponsor.seasons}
                        sponsor={sponsor}
                        setActiveImage={(img) => setActiveImage(img)}
                      />
                      {/* {sponsor.pdf ? (
                        <img
                          src={sponsor.pdf}
                          alt={`Благодарственное письмо ${sponsor.name}`}
                          className="thank-image"
                          onClick={() => setActiveImage(sponsor.pdf)}
                        />
                      ) : (
                        <div className="thank-placeholder">
                          <span>Нет письма</span>
                        </div>
                      )} */}
                    </CompanySpoiler>
                  ))}
                </div>
              ),
            },
            {
              label: "Партнеры",
              content: (
                <div className="sponsors-grid">
                  {friends.map((sponsor, index) => (
                    <CompanySpoiler
                      logo={sponsor.logo}
                      name={sponsor.name}
                      socials={sponsor.socials}
                      defaultOpen={false}
                    ></CompanySpoiler>
                  ))}
                </div>
              ),
            },
            {
              label: "На карте",
              content: (
                <div className="sponsors-grid">
                  <MapKazakhstan
                    mapSrc={mapImg}
                    aspectRatio={9 / 21} // под широкую панораму
                    markers={[
                      {
                        id: 1,
                        x: 24,
                        y: 28,
                        count: 2,
                        title: "Костанайская обл.",
                      },
                      {
                        id: 2,
                        x: 29,
                        y: 34,
                        count: 1,
                        title: "Акмолинская обл.",
                      },
                      {
                        id: 3,
                        x: 62,
                        y: 31,
                        count: 9,
                        title: "Павлодарская обл.",
                      },
                      { id: 4, x: 73, y: 24, count: 4, title: "ВКО" },
                      { id: 5, x: 69, y: 40, count: 2, title: "СКО" },
                      {
                        id: 6,
                        x: 83,
                        y: 73,
                        count: 1,
                        title: "Мангистауская обл.",
                      },
                      {
                        id: 7,
                        x: 53,
                        y: 58,
                        count: 1,
                        title: "Кызылординская обл.",
                      },
                      {
                        id: 8,
                        x: 44,
                        y: 78,
                        count: 1,
                        title: "Туркестанская обл.",
                      },
                    ]}
                    onMarkerClick={(m) => console.log("marker", m)}
                  />
                </div>
              ),
            },
          ]}
        />
      </div>
      {activeImage && (
        <div className="lightbox" onClick={() => setActiveImage(null)}>
          <span></span>
          <img
            src={activeImage}
            alt="Увеличенное письмо"
            className="lightbox-image"
          />
          <button className="close-btn" onClick={() => setActiveImage(null)}>
            ✖
          </button>
        </div>
      )}
    </div>
  );
}
