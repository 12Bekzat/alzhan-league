import './assets/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Header } from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Statistic from './pages/Statistic';
import Sponsor from './pages/Sponsor';
import NewsPage from './pages/News';
import Projects from './pages/Projects';
import { FaArrowDown, FaPhone } from 'react-icons/fa6';
import Partners from './pages/Partners';

function App() {
  return (
    <Router>
      <Header />

      <div className='main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/statistics" element={<Statistic />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
      </div>

      <a href='#socials' className="always">
        <FaPhone size={20} color='white' />
      </a>

      <Footer />
    </Router>
  );
}

export default App;
