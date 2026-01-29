import "./assets/style.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Statistic from "./pages/Statistic";
import Sponsor from "./pages/Sponsor";
import NewsPage from "./pages/News";
import Projects from "./pages/Projects";
import Partners from "./pages/Partners";
import Popup from "./components/Popup";
import { useState } from "react";
import KaspiDonateSection from "./components/KaspiDonateSection";
import ManageStreams from "./pages/ManageStreams";
import "./utils/i18n";
import Documents from "./pages/Documents";
import NewFooter from "./components/NewFooter";
import Logo from "./assets/Aljan1-3_9R5tx.png";
import LogoColor from "./assets/Logo.png";
import bg from "./assets/footer-bg.jpg";
import ERG from "./assets/erg logo.png";
import Kusto from "./assets/kusto png.png";
import Zhebe from "./assets/zhebe logistics png.png";
import PBK from "./assets/pbk.png";
import PBKAstana from "./assets/pbc_astana.png";
import Politics from "./assets/politics.docx";
import SiteHeader from "./components/NewHeader";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <SiteHeader
        logoSrc={LogoColor}
        logoAlt="Alzhan League"
        logoHref="/"
        email="alzhan.fund@gmail.com"
        phone="+7 (707) 164 57-57"
        socials={{
          instagram: "https://www.instagram.com/alzhan.fund",
          instagram2: "https://www.instagram.com/alzhan.league",
          youtube: "https://youtube.com/@alzhankz",
          vk: "https://vk.com/alzhan_league",
          phone: "tel:+77071645757",
          whatsapp: "https://wa.me/77071645757",
        }}
        linksLeft={[
          { label: "Кто мы на площадке", href: "/about" },
          { label: "Цифры не врут", href: "/statistics" },
          { label: "Наши моменты", href: "/projects" },
        ]}
        linksRight={[
          { label: "Свежие победы", href: "/news" },
          { label: "Те, кто с нами", href: "/partners" },
          {
            label: "Поддержи игру!",
            click: () => {
              setIsOpen(true);
            },
          },
        ]}
      />

      <div className={"main"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/statistics" element={<Statistic />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/documents" element={<Documents />} />
          <Route
            path="/secret/page/secret-streams-9257"
            element={<ManageStreams />}
          />
        </Routes>
      </div>

      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <KaspiDonateSection />
      </Popup>

      <NewFooter
        backgroundSrc={bg}
        partners={[
          {
            href: "https://www.erg.kz",
            src: ERG,
          },
          {
            href: "https://www.kustogroup.com/kz/",
            src: Kusto,
          },
          // можно и без colorSrc: будет эффект «из белого → цветной» через CSS-фильтр
          {
            href: "https://zhebelogistics.kz",
            src: Zhebe,
          },
          {
            href: "https://pbcastana.kz/ru/",
            src: PBKAstana,
          },
          {
            href: "https://ssports.kz/ru",
            src: PBK,
          },
        ]}
        sections={[
          {
            title: "О лиге",
            links: [
              { label: "Команда фонда", href: "/about" },
              { label: "Генеральный спонсор", href: "/partners" },
              { label: "Партнеры ", href: "/partners" },
              { label: "Статистика игр", href: "/statistics" },
            ],
          },
          {
            title: "Проекты фонда",
            links: [
              { label: "Школьная баскетбольная лига", href: "/about" },
              { label: "Тренерские семинары", href: "/about" },
              { label: "Судейские семинары", href: "/about" },
            ],
          },
          {
            title: "Медиа",
            links: [
              { label: "Фото", href: "/projects" },
              { label: "Новости", href: "/news" },
              { label: "Трансляции игр", href: "/projects" },
            ],
          },
          {
            title: "Контакты",
            links: [
              { label: "Связаться с фондом", href: "/contacts" },
              { label: "Партнерское сотрудничество", href: "/partners" },
              { label: "Политика конфиденциальности", href: Politics },
            ],
          },
        ]}
        orgText="Школьная Баскетбольная Лига «Alzhan» — это крупнейший социально-спортивный проект Казахстана, который объединяет школьников разных регионов страны и не имеет аналогов в национальном школьном спорте. Главная цель проекта — развитие баскетбола среди учащихся общеобразовательных школ, создание единого движения, где спорт становится частью культуры подростков и их повседневной жизни. "
        address="© 2014-2025 Alzhan Basketball Fund. Все права защищены "
        phone="+7 (707) 164 57-57"
        email="alzhan.fund@gmail.com"
        privacyHref={Politics}
        socials={[
          {
            type: "instagram",
            href: "https://www.instagram.com/alzhan.league",
          },
          { type: "tiktok", href: "https://www.tiktok.com/@.alzhan1?_t=ZM-90oTWBaVYbc&_r=1" },
          { type: "whatsapp", href: "https://wa.me/77056670405" },
          {
            type: "youtube",
            href: "https://youtube.com/@alzhankz?si=QUqhrpl2CGI77R5H",
          },
        ]}
        logo={<img src={Logo} alt="Alzhan League" style={{ height: 72 }} />}
        developer={null}
      />
    </Router>
  );
}

export default App;
