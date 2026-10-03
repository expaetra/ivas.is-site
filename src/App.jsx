import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainContent from './routes/MainContent';


const App = () => {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <Router>
        <ScrollToTop />
        <Header />

        <Routes>
            {/* Main Page */}
            <Route path="/" element={<MainContent />} />
        </Routes>

        <Footer />
    </Router>
  );
};

export default App;
