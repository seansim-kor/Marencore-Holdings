import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Home } from './pages/Home';
import { WhoWeAre } from './pages/WhoWeAre';
import { Logistics } from './pages/Logistics';
import { BioenergyFeedstock } from './pages/BioenergyFeedstock';
import { AgriTechPage } from './pages/AgriTechPage';
import { ConsultingPage } from './pages/ConsultingPage';

// Scroll Observer Component
const ScrollObserver = () => {
  const location = useLocation();

  useEffect(() => {
    // Small timeout to ensure DOM is ready after route transition
    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before element is fully in view
      });

      const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [location.pathname, location.hash]);

  // Scroll to top on route change if no hash
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <HashRouter>
      <div className="font-sans text-slate-900 bg-white">
        <ScrollObserver />
        {/* Navigation Header */}
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/bioenergy" element={<BioenergyFeedstock />} />
          <Route path="/agritech" element={<AgriTechPage />} />
          <Route path="/consulting" element={<ConsultingPage />} />
        </Routes>

        {/* Footer */}
        <Footer />

        {/* Persistent CTA */}
        <FloatingWhatsApp />
      </div>
    </HashRouter>
  );
}

export default App;