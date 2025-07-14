import './assets/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Header } from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contacts from './pages/Contacts';

function App() {
  return (
    <Router>
      <Header />

      <div className='main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
