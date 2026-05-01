import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, Zap, BarChart3, Shield, Phone, ChevronDown } from 'lucide-react';
import logo from '@/assets/logo.png';
import ImageLoader from '@/components/ImageLoader';

const navLinks = [
  { name: 'FactoryOps', href: '#factoryops', icon: Zap, color: 'text-amber-400' },
  {
    name: 'Company', href: '/about-us', icon: Cpu, color: 'text-blue-400',
    subLinks: [
      { name: 'About Us', href: '/about-us' },
      { name: 'Careers', href: '/careers' },
      { name: 'Partnerships', href: '/partnerships' }
    ]
  },
  {
    name: 'Resources', href: '/all-resources', icon: BarChart3, color: 'text-purple-400',
    subLinks: [
      { name: 'All Resources', href: '/all-resources' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog', href: '/blog' }
    ]
  },
  { name: 'Reviews', href: '#reviews', icon: Shield, color: 'text-emerald-400' },
  { name: 'Contact', href: '#contact', icon: Phone, color: 'text-rose-400' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

    if (href.startsWith('/')) {
      navigate(href);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    } else {
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-[#020c1b]/80 backdrop-blur-xl border-b border-cyan-500/10 py-2'
          : 'bg-gradient-to-b from-[#020c1b]/90 to-transparent py-4'
          }`}
      >
        {/* Ambient Background Particles Container */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle Gradient Overlay */}
          {/* Subtle Gradient Overlay */}
          {isScrolled ? (
            <div className="absolute inset-0 bg-[#020c1b] opacity-90" />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-b from-[#020c1b] to-transparent" />
          )}

          {/* Floating Nodes Animation (Only when header is transparent/top) */}
          {!isScrolled && [...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/20 rounded-full blur-[1px] will-change-transform"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: 0,
              }}
              animate={{
                y: ["0%", "100%"],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 15 + Math.random() * 15,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex items-center justify-between h-20">

            {/* Logo Section - Preserving User Configuration */}
            <motion.a
              href="#"
              className="flex items-center gap-2 group relative z-20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative h-20 w-auto flex items-center justify-center">
                <ImageLoader
                  src={logo}
                  alt="FactoryOps Logo"
                  priority={true}
                  className="h-full w-auto object-contain scale-[3.5] origin-left translate-y-5 -translate-x-12 pointer-events-none will-change-transform"
                  placeholderClassName="scale-[3.5] origin-left translate-y-5 -translate-x-12"
                  style={{ filter: 'brightness(1.8)' }}
                />
              </div>
            </motion.a>

            {/* Desktop Navigation - Right Aligned */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8 mr-8 lg:mr-16">
              {navLinks.map((link, index) => (
                <div key={link.name} className="relative group">
                  <motion.button
                    onClick={() => !link.subLinks && handleNavigation(link.href)}
                    className="relative px-1 py-2 flex items-center"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <span className={`flex items-center gap-2 text-base font-medium text-slate-400 group-hover:${link.color.replace('text-', 'text-')} transition-colors duration-300`}>
                      {/* Icons are optional in this minimal design, but implied by "Minimal icons paired..." */}
                      <link.icon className={`w-5 h-5 ${link.color} opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`} />
                      <span className="-ml-7 group-hover:ml-0 transition-all duration-300 flex items-center gap-1">
                        {link.name}
                        {link.subLinks && <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />}
                      </span>
                    </span>

                    {/* Hover Line */}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-300 group-hover:w-full" />

                    {/* Hover Glow */}
                    <span className="absolute inset-0 bg-cyan-500/5 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                  </motion.button>

                  {/* Dropdown Menu */}
                  {link.subLinks && (
                    <div className="absolute top-full left-0 mt-2 w-48 rounded-xl bg-[#020c1b]/95 backdrop-blur-xl border border-cyan-500/20 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left scale-95 group-hover:scale-100 overflow-hidden z-50">
                      <div className="py-2">
                        {link.subLinks.map(subLink => (
                          <a
                            key={subLink.name}
                            href={subLink.href}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavigation(subLink.href);
                            }}
                            className="block px-5 py-3 text-sm text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                          >
                            {subLink.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-cyan-400 transition-colors z-20"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-20 z-40 md:hidden bg-[#020c1b]/95 backdrop-blur-xl border-b border-cyan-500/10 shadow-2xl overflow-hidden"
          >
            <div className="p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-100px)]">
              {navLinks.map((link, index) => (
                <div key={link.name}>
                  <motion.button
                    onClick={(e) => {
                      e.preventDefault();
                      if (!link.subLinks) handleNavigation(link.href);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between w-full p-4 rounded-xl hover:bg-cyan-500/5 text-slate-300 hover:text-cyan-400 border border-transparent hover:border-cyan-500/10 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <link.icon className={`w-5 h-5 text-slate-500 group-hover:${link.color} transition-colors`} />
                      <span className="font-medium">{link.name}</span>
                    </div>
                    {link.subLinks && <ChevronDown className="w-5 h-5 opacity-50" />}
                  </motion.button>

                  {link.subLinks && (
                    <div className="pl-14 pr-4 py-1 space-y-1">
                      {link.subLinks.map(subLink => (
                        <motion.button
                          key={subLink.name}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavigation(subLink.href);
                          }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 + 0.1 }}
                          className="block w-full text-left py-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                          {subLink.name}
                        </motion.button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
