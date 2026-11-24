import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, LogIn, ChevronDown, ArrowRight } from 'lucide-react';
import { navigationData } from '@/../content/navigation';
import MegaMenu from './MegaMenu';
import MobileDrawer from './MobileDrawer';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import logoBrand from '@/assets/cittagent-logo-clean-white.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setActiveMenu(null);
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <ScrollProgressBar />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
          ? 'bg-[#0B1B3A]/95 backdrop-blur-xl border-b border-white/10 py-3 shadow-enterprise-lg'
          : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-content mx-auto px-6 flex items-center justify-between">
          {/* Brand Identity: Clean, Crisp Proper CittAgent Logo */}
          <Link to="/" className="flex items-center group py-0.5" aria-label="Cittagent Technologies Home">
            <img
              src={logoBrand}
              alt="CittAgent Technologies"
              className={`w-auto object-contain transition-all duration-200 group-hover:opacity-90 ${
                isScrolled ? 'h-9 sm:h-10' : 'h-11 sm:h-12'
              }`}
            />
          </Link>

          {/* Desktop Navigation Links with Mega-Menu Triggers */}
          <nav
            className="hidden lg:flex items-center gap-7"
            onMouseLeave={() => setActiveMenu(null)}
          >
            {navigationData.map((section) => (
              <div
                key={section.title}
                className="relative py-2"
                onMouseEnter={() => setActiveMenu(section.title)}
              >
                <button
                  className={`flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${activeMenu === section.title
                    ? 'text-cyan-400'
                    : 'text-slate-200 hover:text-white'
                    }`}
                  aria-expanded={activeMenu === section.title}
                >
                  <span>{section.title}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === section.title ? 'rotate-180 text-cyan-400' : 'text-slate-400'
                      }`}
                  />
                </button>

                {activeMenu === section.title && (
                  <MegaMenu
                    section={section}
                    onClose={() => setActiveMenu(null)}
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Action Strip: Search, Login & Amber CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <button
              className="text-slate-300 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Search Platform"
            >
              <Search className="w-4 h-4" />
            </button>

            <Link
              to="/contact"
              className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <LogIn className="w-3.5 h-3.5 text-cyan-400" />
              <span>Login</span>
            </Link>

            {/* Amber-500 Primary CTA Button (Strictly Reserved for Primary Action) */}
            <Link
              to="/book-a-demo"
              className="btn-primary-amber text-xs font-bold uppercase tracking-wider"
            >
              Book a Demo
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              to="/book-a-demo"
              className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs uppercase"
            >
              Demo
            </Link>

            <button
              onClick={() => setIsMobileOpen(true)}
              className="p-2 text-slate-200 hover:text-white"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Drawer Navigation */}
      <MobileDrawer
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
}
