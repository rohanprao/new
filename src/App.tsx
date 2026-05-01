import { useEffect, useState } from 'react';
import { Toaster } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import Home from './pages/Home';
import AllResources from './sections/AllResources';
import CaseStudies from './sections/CaseStudies';
import Blog from './sections/Blog';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';
import Partnerships from './pages/Partnerships';
import './App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    setIsLoaded(true);

    // Initialize Lenis smooth scroll with lerp-based smoothing
    const lenis = new Lenis({
      lerp: 0.12,
      smoothWheel: true,
      wheelMultiplier: 0.85,
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
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Consolidated Static Gradient Orbs (No Animation) */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] will-change-transform" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] will-change-transform" />

        {/* Simplified Single-Layer Grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />

      </div>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        {isLoaded && (
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 will-change-[opacity]"
          >
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/all-resources" element={<AllResources />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/partnerships" element={<Partnerships />} />
            </Routes>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}

export default App;
