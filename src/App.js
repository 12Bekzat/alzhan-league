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
import { FaDonate } from 'react-icons/fa';
import Popup from './components/Popup';
import { useState } from 'react';
import KaspiDonateSection from './components/KaspiDonateSection';
import ManageStreams from './pages/ManageStreams';

function App() {
  const [isOpen, setIsOpen] = useState(false)
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
          <Route path="/secret/page/secret-streams-9257" element={<ManageStreams />} />
        </Routes>
      </div>

      <div className='fast-icons'>
        <a className="always" 
          href="https://wa.me/77017440384"
          target="_blank"
          rel="noopener noreferrer">
          <FaPhone size={20} color='white' />
        </a>
        <div onClick={() => setIsOpen(true)} className="always">
          <FaDonate size={20} color='white' />
        </div>
      </div>

      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <KaspiDonateSection />
      </Popup>

      <Footer />
    </Router>
  );
}

export default App;
