import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cable,
  Cpu,
  Activity,
  AlertTriangle,
  CheckCircle2,
  Zap,
  TrendingDown,
  Clock,
  ArrowRight
} from 'lucide-react';
import { homeContent } from '@/../content/home';

export default function HowItWorksPinned() {
  const { howItWorks } = homeContent;
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-cycle through steps if user is not manually interacting, or allow click navigation
  const activeStep = howItWorks.steps[activeStepIndex];

  return (
    <section
      ref={containerRef}
      className="relative w-full py-28 bg-[#0B1B3A] text-white border-b border-white/10 overflow-hidden"
    >
      {/* Background Subtle Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />
      <div className="absolute -top-40 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-content mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase block mb-3">
            {howItWorks.tag}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            {howItWorks.headline}
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-300 leading-relaxed">
            {howItWorks.subheadline}
          </p>
        </div>

        {/* 4 Interactive Progress Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {howItWorks.steps.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`relative text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#0F244C] border-cyan-400/80 shadow-lg shadow-cyan-500/10'
                    : 'bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.06]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold ${isActive ? 'text-cyan-400' : 'text-slate-400'}`}>
                    STAGE {step.number}
                  </span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  )}
                </div>
                <span className="block text-sm font-bold text-white tracking-tight">
                  {step.title}
                </span>

                {/* Progress Underline Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeHowItWorksStep"
                    className="absolute -bottom-px left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-amber-400"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Story Panel: Left Details & Right Telemetry HUD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#071324] border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden backdrop-blur-md">
          {/* Left Column: Stage Copy & Specs */}
          <div className="lg:col-span-6 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.number}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold">
                  <span>STAGE {activeStep.number} OF 04</span>
                  <span>•</span>
                  <span>{activeStep.title.toUpperCase()}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug">
                  {activeStep.subtitle}
                </h3>

                <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                  {activeStep.description}
                </p>

                {/* Technical Specifications Pills */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  {activeStep.specs.map((spec, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-xl bg-white/[0.04] border border-white/10"
                    >
                      <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                        {spec.label}
                      </span>
                      <span className="text-xl font-mono font-bold text-cyan-300 tracking-tight">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Step navigation controls */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  {activeStepIndex < howItWorks.steps.length - 1 ? (
                    <button
                      type="button"
                      onClick={() => setActiveStepIndex((prev) => prev + 1)}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors uppercase"
                    >
                      <span>Advance to Stage 0{activeStepIndex + 2} &rarr;</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActiveStepIndex(0)}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors uppercase"
                    >
                      <span>Restart Journey (Stage 01) &rarr;</span>
                    </button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Dynamic Machine Telemetry Visualizer */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.number}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl bg-[#091830] border border-white/10 p-6 md:p-8 relative overflow-hidden shadow-xl"
              >
                {/* HUD Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="font-mono text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                      STAGE {activeStep.number} TELEMETRY HUD
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-slate-400">
                    STATUS: ACTIVE STREAM
                  </span>
                </div>

                {/* Stage-Specific Visualizations */}
                {activeStepIndex === 0 && (
                  /* Stage 01: Connect (Non-Intrusive Magnetic Clamping) */
                  <div className="space-y-5">
                    <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex flex-col items-center justify-center py-8 text-center">
                      <div className="relative mb-4">
                        <Cable className="w-16 h-16 text-cyan-400" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-black" />
                      </div>
                      <span className="font-mono text-sm font-bold text-white">
                        MAGNETIC SENSOR ARRAY ATTACHED
                      </span>
                      <span className="font-mono text-xs text-slate-400 mt-1">
                        Zero PLC Wiring • Clamp-on 3-Phase CTs Engaged
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                      <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                        <span className="block text-[10px] text-slate-400">LINE DOWN-TIME</span>
                        <span className="text-emerald-400 font-bold">0.00 SECONDS</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                        <span className="block text-[10px] text-slate-400">VOLTAGE HAZARD</span>
                        <span className="text-cyan-400 font-bold">0.0% (GALVANIC ISOLATION)</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeStepIndex === 1 && (
                  /* Stage 02: Learn (Autonomous Baseline Calibration) */
                  <div className="space-y-5">
                    <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                      <div className="flex items-center justify-between font-mono text-xs text-slate-400 mb-2">
                        <span>BASELINE NEURAL CALIBRATION</span>
                        <span className="text-cyan-400 font-bold">72h WINDOW (HOUR 48)</span>
                      </div>
                      {/* Animated Progress Bar */}
                      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden mb-4">
                        <div className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 w-2/3 animate-pulse" />
                      </div>

                      {/* Harmonic Curve Lines */}
                      <div className="h-20 flex items-center justify-between gap-1">
                        {[20, 35, 50, 45, 60, 55, 75, 70, 85, 80, 65, 50, 40, 60, 70, 55, 45, 30].map((v, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-cyan-500/40 rounded-t"
                            style={{ height: `${v}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                      <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                        <span className="block text-[10px] text-slate-400">SAMPLING SPEED</span>
                        <span className="text-cyan-300 font-bold">25.6 kHz PER CHANNEL</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                        <span className="block text-[10px] text-slate-400">OPERATOR INPUT</span>
                        <span className="text-emerald-400 font-bold">ZERO CALIBRATION NEEDED</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeStepIndex === 2 && (
                  /* Stage 03: Predict (Real-Time FFT & Acoustic Leak Scanning) */
                  <div className="space-y-5">
                    <div className="p-4 rounded-xl bg-black/40 border border-amber-500/30">
                      <div className="flex items-center justify-between font-mono text-xs text-slate-400 mb-2">
                        <span className="text-amber-400 font-bold flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          EARLY HARMONIC DRIFT DETECTED
                        </span>
                        <span className="text-slate-300">ISO 10816 ANOMALY</span>
                      </div>

                      <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300 mb-3">
                        Inner-race ball bearing fatigue detected at 2,410 Hz. 14 days before seizure.
                      </div>

                      <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                        <span>CONFIDENCE SCORE:</span>
                        <span className="text-white font-bold">99.4% [REPLACE]</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                      <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                        <span className="block text-[10px] text-slate-400">ADVANCE NOTICE</span>
                        <span className="text-amber-400 font-bold">14 DAYS LEAD TIME</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                        <span className="block text-[10px] text-slate-400">FALSE POSITIVE RATE</span>
                        <span className="text-emerald-400 font-bold">&lt; 0.05% VERIFIED</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeStepIndex === 3 && (
                  /* Stage 04: Act (Automated Work-Order & Power Optimization) */
                  <div className="space-y-5">
                    <div className="p-4 rounded-xl bg-black/40 border border-emerald-500/30">
                      <div className="flex items-center justify-between font-mono text-xs text-slate-400 mb-2">
                        <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          AUTOMATED WORK-ORDER DISPATCHED
                        </span>
                        <span className="text-slate-300">SAP PM #WO-90481</span>
                      </div>

                      <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 mb-3">
                        Work ticket dispatched to Shift Lead: Replace inner bearing seal on Compressor 04 during Tuesday scheduled window.
                      </div>

                      <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                        <span>ISO 50001 PEAK SHEDDING:</span>
                        <span className="text-cyan-400 font-bold">-22% POWER DRAW [REPLACE]</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                      <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                        <span className="block text-[10px] text-slate-400">NET CAPITAL PAYBACK</span>
                        <span className="text-cyan-300 font-bold">&lt; 90 DAYS [REPLACE]</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                        <span className="block text-[10px] text-slate-400">PREVENTED OVERHAUL</span>
                        <span className="text-emerald-400 font-bold">$42,000 SAVED [REPLACE]</span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
