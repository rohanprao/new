import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Activity, TrendingUp, ShieldAlert, Cpu } from 'lucide-react';
import { homeContent } from '@/../content/home';

export default function SolutionOutcomesTabs() {
  const { outcomesBySolution } = homeContent;
  const [activeTabId, setActiveTabId] = useState(outcomesBySolution.tabs[0].id);

  const activeTab = outcomesBySolution.tabs.find((t) => t.id === activeTabId) || outcomesBySolution.tabs[0];

  return (
    <section className="relative w-full py-24 bg-[#F8FAFC] text-slate-900 overflow-hidden border-b border-slate-200">
      <div className="max-w-content mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold tracking-wider text-blue-600 uppercase block mb-3">
            {outcomesBySolution.tag}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
            {outcomesBySolution.headline}
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
            {outcomesBySolution.subheadline}
          </p>
        </div>

        {/* Tab Selection Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-slate-200 scrollbar-none">
          {outcomesBySolution.tabs.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTabId(tab.id)}
                className={`relative px-5 py-3 rounded-xl font-semibold text-sm whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-blue-700 bg-blue-50 shadow-sm border border-blue-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeSolutionTab"
                    className="absolute -bottom-4 left-0 right-0 h-0.5 bg-blue-600"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm"
          >
            {/* Left Column: Outcomes & Bullets */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-mono text-xs font-semibold">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeTab.accent }} />
                <span>{activeTab.label}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                {activeTab.headline}
              </h3>

              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                {activeTab.description}
              </p>

              {/* Verified Outcome Checklist */}
              <ul className="space-y-3.5 pt-2">
                {activeTab.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Exploration Link */}
              <div className="pt-4">
                <Link
                  to={`/solutions#${activeTab.id}`}
                  className="btn-link-arrow inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 group"
                >
                  <span>Explore {activeTab.label} Architecture</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Column: Live High-Fidelity Telemetry Card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl bg-[#0B1B3A] text-white p-6 md:p-8 border border-white/10 shadow-xl overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                {/* Top Telemetry Header */}
                <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
                      LIVE SHOP-FLOOR TELEMETRY
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-slate-400">
                    CHANNEL #04 • 25.6 kHz
                  </span>
                </div>

                {/* Large Impact Metric */}
                <div className="relative z-10 mb-6">
                  <div className="text-4xl md:text-5xl font-mono font-bold text-white tracking-tight">
                    {activeTab.mockupMetric}
                  </div>
                  <p className="text-xs text-slate-300 mt-1 font-mono uppercase tracking-wider">
                    {activeTab.mockupSub}
                  </p>
                </div>

                {/* Visual Chart / Telemetry Waveform */}
                <div className="relative z-10 p-4 rounded-xl bg-black/40 border border-white/10 mb-6">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                    <span>SPECTRAL DENSITY [FFT]</span>
                    <span className="text-emerald-400 font-bold">NORMAL SPECTRUM</span>
                  </div>
                  
                  {/* Simulated Dynamic Sound/Vibration Waveform */}
                  <div className="h-24 w-full flex items-end gap-1.5 pt-2">
                    {[45, 60, 35, 70, 85, 40, 50, 95, 30, 65, 80, 55, 45, 90, 75, 60, 40, 85, 50, 70].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t transition-all duration-500"
                        style={{
                          height: `${h}%`,
                          backgroundColor: i === 7 || i === 13 ? activeTab.accent : '#1E293B'
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Bottom Micro-Pills */}
                <div className="relative z-10 grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <span className="block text-[10px] text-slate-400 uppercase">ISO 10816 Status</span>
                    <span className="font-semibold text-emerald-400">Zone A (Excellent)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <span className="block text-[10px] text-slate-400 uppercase">Remaining Useful Life</span>
                    <span className="font-semibold text-cyan-300">4,280 Hours</span>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
