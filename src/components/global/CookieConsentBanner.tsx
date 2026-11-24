import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Cookie, Settings, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always required
    analytics: true,
    telemetry: true,
    marketing: false,
  });

  useEffect(() => {
    // Check if user already consented
    const consent = localStorage.getItem('cittagent_cookie_consent');
    if (!consent) {
      // Delay appearance slightly for smooth experience
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const fullConsent = { essential: true, analytics: true, telemetry: true, marketing: true };
    localStorage.setItem('cittagent_cookie_consent', JSON.stringify(fullConsent));
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    const essentialConsent = { essential: true, analytics: false, telemetry: false, marketing: false };
    localStorage.setItem('cittagent_cookie_consent', JSON.stringify(essentialConsent));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cittagent_cookie_consent', JSON.stringify(preferences));
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.96 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 left-5 right-5 sm:right-auto sm:max-w-md z-50 rounded-2xl bg-[#09162B]/95 border border-white/15 p-6 text-white shadow-2xl backdrop-blur-xl"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Cookie className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight">
                  Privacy & Cookie Preferences
                </h4>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                  IEC 62443 COMPLIANT PRIVACY
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={handleEssentialOnly}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Dismiss cookie notice"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Description */}
          <p className="text-xs text-slate-300 leading-relaxed mb-4">
            Cittagent Technologies uses essential cookies for secure authentication and non-intrusive operational telemetry to analyze shop-floor platform performance. Read our{' '}
            <Link to="/legal/privacy" className="text-cyan-400 hover:underline">
              Privacy Policy
            </Link>.
          </p>

          {/* Expandable Preferences Drawer */}
          {showPreferences && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-2.5 pt-2 pb-4 border-t border-white/10 mb-4 text-xs font-mono"
            >
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
                <div>
                  <span className="text-white font-semibold block text-xs">Essential System Cookies</span>
                  <span className="text-[10px] text-slate-400">Security tokens & core session state</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                  REQUIRED
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
                <div>
                  <span className="text-white font-semibold block text-xs">Telemetry & Performance</span>
                  <span className="text-[10px] text-slate-400">Sub-second latency & gateway diagnostics</span>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.telemetry}
                  onChange={(e) => setPreferences({ ...preferences, telemetry: e.target.checked })}
                  className="w-4 h-4 rounded text-cyan-500 focus:ring-cyan-400 cursor-pointer accent-cyan-500"
                />
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
                <div>
                  <span className="text-white font-semibold block text-xs">Operational Analytics</span>
                  <span className="text-[10px] text-slate-400">Aggregated usage patterns & load stats</span>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="w-4 h-4 rounded text-cyan-500 focus:ring-cyan-400 cursor-pointer accent-cyan-500"
                />
              </div>
            </motion.div>
          )}

          {/* Buttons Row */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              type="button"
              onClick={handleAcceptAll}
              className="flex-1 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition-all shadow-md shadow-amber-500/20 text-center cursor-pointer"
            >
              Accept All
            </button>

            {showPreferences ? (
              <button
                type="button"
                onClick={handleSavePreferences}
                className="px-4 py-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-semibold text-xs hover:bg-cyan-500/30 transition-all cursor-pointer"
              >
                Save Choices
              </button>
            ) : (
              <button
                type="button"
                onClick={handleEssentialOnly}
                className="px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white font-medium text-xs transition-all cursor-pointer"
              >
                Essential Only
              </button>
            )}

            <button
              type="button"
              onClick={() => setShowPreferences(!showPreferences)}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white transition-all cursor-pointer"
              title="Configure preferences"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

