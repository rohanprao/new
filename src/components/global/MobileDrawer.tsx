import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ArrowRight, ShieldCheck, Search, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navigationData } from '@/../content/navigation';
import logoBrand from '@/assets/cittagent-logo-clean-white.png';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 lg:hidden bg-black/70 backdrop-blur-md"
        >
          {/* Drawer Window */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute top-0 right-0 bottom-0 w-full max-w-md bg-[#0B1B3A] text-white p-6 overflow-y-auto flex flex-col justify-between border-l border-white/10"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <Link to="/" onClick={onClose} className="flex items-center">
                  <img
                    src={logoBrand}
                    alt="CittAgent"
                    className="h-8 sm:h-9 w-auto object-contain"
                  />
                </Link>

                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Accordion */}
              <div className="space-y-3">
                {navigationData.map((sec) => (
                  <div key={sec.title} className="border-b border-white/5 pb-2">
                    <button
                      onClick={() => toggleSection(sec.title)}
                      className="w-full py-2.5 flex items-center justify-between text-sm font-semibold uppercase tracking-wider text-slate-200 hover:text-cyan-400 transition-colors"
                    >
                      <span>{sec.title}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${openSection === sec.title ? 'rotate-180 text-cyan-400' : 'text-slate-400'
                          }`}
                      />
                    </button>

                    <AnimatePresence>
                      {openSection === sec.title && sec.items && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-3 pr-2 py-2 space-y-2 border-l border-cyan-500/30 ml-2"
                        >
                          {sec.items.map((item) => (
                            <Link
                              key={item.title}
                              to={item.href}
                              onClick={onClose}
                              className="block py-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                            >
                              <div className="font-medium text-slate-300">{item.title}</div>
                              <div className="text-[11px] text-slate-500 line-clamp-1">{item.description}</div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-8 border-t border-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                <Link to="/contact" onClick={onClose} className="hover:text-white flex items-center gap-1.5">
                  <LogIn className="w-3.5 h-3.5" /> Customer Portal
                </Link>
                <span className="font-mono text-cyan-400">IEC 62443 Certified</span>
              </div>

              {/* High-Intent Amber Primary CTA */}
              <Link
                to="/book-a-demo"
                onClick={onClose}
                className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-center text-sm uppercase tracking-wider block shadow-amber-cta transition-all"
              >
                Book a Demo
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
