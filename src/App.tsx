import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import AboutMe from './views/AboutMe';
import AboutTherapy from './views/AboutTherapy';
import MyOffer from './views/MyOffer';
import Prices from './views/Prices';
import Contact from './views/Contact';
import CompanyInfo from './views/CompanyInfo';

const App: React.FC = () => {
  return (
    <div id="app">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moja-oferta" element={<MyOffer />} />
          <Route path="/o-mnie" element={<AboutMe />} />
          <Route path="/o-terapii" element={<AboutTherapy />} />
          <Route path="/cennik" element={<Prices />} />
          <Route path="/dane-firmy" element={<CompanyInfo />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
