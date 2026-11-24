import { useEffect, useState } from 'react';
import { Toaster } from './components/ui/sonner';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/global/Header';
import Footer from './components/global/Footer';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Products from './pages/Products';
import Industries from './pages/Industries';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';
import Partnerships from './pages/Partnerships';
import AllResources from './sections/AllResources';
import CaseStudies from './sections/CaseStudies';
import Blog from './sections/Blog';
import CookieConsentBanner from './components/global/CookieConsentBanner';
import Chatbot from './components/global/Chatbot';
import './App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    setIsLoaded(true);

    // Initialize Lenis smooth scroll engine
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#090B10] text-slate-100 selection:bg-[#0062FF] selection:text-white overflow-x-hidden">
      {/* Main App Layout */}
      <AnimatePresence mode="wait">
        {isLoaded && (
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col min-h-screen justify-between"
          >
            <Header />
            <div className="flex-1">
              <Routes>
                {/* Core Enterprise Pages */}
                <Route path="/" element={<Home />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/products" element={<Products />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/partnerships" element={<Partnerships />} />

                {/* Legacy & Resource Deep Links */}
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/all-resources" element={<AllResources />} />
              </Routes>
            </div>
            <Footer />
            {/* Global Cookie Consent Banner */}
            <CookieConsentBanner />
            {/* Global AI Chatbot */}
            <Chatbot />
          </motion.div>
        )}
      </AnimatePresence>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
