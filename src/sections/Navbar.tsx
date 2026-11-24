import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, ShieldCheck } from 'lucide-react';
import logo from '@/assets/logo.png';
import ImageLoader from '@/components/ImageLoader';
import ThemeToggle from '@/components/ThemeToggle';
import ScrollProgressBar from '@/components/ScrollProgressBar';

const navLinks = [
  { name: 'Solutions', href: '/solutions' },
  { name: 'Products', href: '/products' },
  { name: 'Industries', href: '/industries' },
  { name: 'Architecture', href: '/#architecture' },
  { name: 'Insights', href: '/insights' },
  {
    name: 'Company',
    href: '/about-us',
    subLinks: [
      { name: 'About Cittagent', href: '/about-us' },
      { name: 'Careers', href: '/careers' },
      { name: 'Partnerships', href: '/partnerships' },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);

    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '#');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        const el = document.querySelector(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    navigate(href);
  };

  return (
    <>
      <ScrollProgressBar />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090B10]/95 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Brand Cluster */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-10 w-auto flex items-center">
              <ImageLoader
                src={logo}
                alt="Cittagent Technologies Logo"
                priority={true}
                className="h-9 w-auto object-contain"
                style={{ filter: 'brightness(1.8)' }}
              />
            </div>
            <div className="hidden sm:flex flex-col border-l border-slate-700 pl-3">
              <span className="text-xs font-mono font-bold tracking-wider text-slate-300 uppercase">
                CITTAGENT
              </span>
              <span className="text-[10px] text-slate-500 font-mono tracking-tight">
                FactoryOps Enterprise AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.subLinks && setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  onClick={() => handleNavigation(link.href)}
                  className={`flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    location.pathname === link.href
                      ? 'text-[#00B4D8]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {link.subLinks && (
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
                  )}
                </button>

                {/* Submenu Dropdown */}
                {link.subLinks && openDropdown === link.name && (
                  <div className="absolute top-full -left-4 pt-3 w-52 z-50">
                    <div className="bg-[#0F121C] border border-slate-800 rounded-2xl p-2 shadow-2xl">
                      {link.subLinks.map((sub) => (
                        <button
                          key={sub.name}
                          onClick={() => handleNavigation(sub.href)}
                          className="w-full text-left px-4 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                        >
                          {sub.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action Button & Controls */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-[#0062FF] hover:bg-[#0052CC] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-blue-600/25 flex items-center gap-1.5"
            >
              Request Plant Audit
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#090B10] border-b border-slate-800 px-6 py-6"
            >
              <div className="space-y-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className="w-full text-left py-2 text-sm font-semibold uppercase tracking-wider text-slate-300 hover:text-white"
                    >
                      {link.name}
                    </button>
                    {link.subLinks && (
                      <div className="pl-4 space-y-2 mt-1 border-l border-slate-800">
                        {link.subLinks.map((sub) => (
                          <button
                            key={sub.name}
                            onClick={() => handleNavigation(sub.href)}
                            className="w-full text-left py-1 text-xs text-slate-400 hover:text-white"
                          >
                            {sub.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-slate-800">
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full py-3 rounded-xl bg-[#0062FF] text-white text-center text-xs font-bold uppercase tracking-wider block"
                  >
                    Request Plant Audit
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
