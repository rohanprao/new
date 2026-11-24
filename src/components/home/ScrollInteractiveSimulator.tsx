import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity,
  Sliders,
  AlertTriangle,
  CheckCircle2,
  Wrench,
  X,
  Maximize2,
  Minimize2,
  ArrowRight,
  Gauge,
  Cpu,
  Flame
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface MachinePreset {
  id: string;
  name: string;
  type: string;
  defaultVib: number;
  defaultPressure: number;
  defaultTemp: number;
  normalFreq: string;
}

const MACHINES: MachinePreset[] = [
  {
    id: 'compressor',
    name: 'Screw Compressor #04',
    type: 'Rotary Air Utility',
    defaultVib: 1.1,
    defaultPressure: 0.04,
    defaultTemp: 44,
    normalFreq: '25.6 kHz'
  },
  {
    id: 'cnc',
    name: '5-Axis CNC Spindle',
    type: 'Precision Milling',
    defaultVib: 0.8,
    defaultPressure: 0.02,
    defaultTemp: 38,
    normalFreq: '48.0 kHz'
  },
  {
    id: 'robot',
    name: 'Robotic Stamping Cell',
    type: 'Hydraulic Stamping',
    defaultVib: 1.6,
    defaultPressure: 0.12,
    defaultTemp: 52,
    normalFreq: '32.0 kHz'
  }
];

export default function ScrollInteractiveSimulator() {
  const [hasScrolledTrigger, setHasScrolledTrigger] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissedPermanently, setIsDismissedPermanently] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState<MachinePreset>(MACHINES[0]);

  // Interactive slider controls
  const [vibration, setVibration] = useState(selectedMachine.defaultVib);
  const [pressureDelta, setPressureDelta] = useState(selectedMachine.defaultPressure);
  const [temperature, setTemperature] = useState(selectedMachine.defaultTemp);
  const [isSimulatingFault, setIsSimulatingFault] = useState(false);
  const [dispatchedTicket, setDispatchedTicket] = useState<string | null>(null);

  // Trigger popup when user scrolls down (~450px)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450 && !hasScrolledTrigger && !isDismissedPermanently) {
        setHasScrolledTrigger(true);
        setIsOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolledTrigger, isDismissedPermanently]);

  // When switching machine preset
  const handleSelectMachine = (machine: MachinePreset) => {
    setSelectedMachine(machine);
    setVibration(machine.defaultVib);
    setPressureDelta(machine.defaultPressure);
    setTemperature(machine.defaultTemp);
    setIsSimulatingFault(false);
    setDispatchedTicket(null);
  };

  // Trigger anomaly simulation
  const handleTriggerFault = () => {
    setIsSimulatingFault(true);
    setVibration(5.4);
    setPressureDelta(0.48);
    setTemperature(78);
  };

  // Reset to normal baseline
  const handleResetBaseline = () => {
    setIsSimulatingFault(false);
    setVibration(selectedMachine.defaultVib);
    setPressureDelta(selectedMachine.defaultPressure);
    setTemperature(selectedMachine.defaultTemp);
    setDispatchedTicket(null);
  };

  // Dispatch mock work order
  const handleDispatchTicket = () => {
    setDispatchedTicket(`WO-${Math.floor(10000 + Math.random() * 90000)}`);
  };

  // ISO 10816 Alarm Classification logic
  const getSeverityStatus = () => {
    if (vibration < 1.8) {
      return {
        label: 'Zone A: Normal Baseline',
        color: 'text-emerald-400',
        bg: 'bg-emerald-500/10 border-emerald-500/30',
        action: 'Optimal Operation'
      };
    }
    if (vibration < 4.5) {
      return {
        label: 'Zone B: Acceptable Operation',
        color: 'text-cyan-400',
        bg: 'bg-cyan-500/10 border-cyan-500/30',
        action: 'Routine Monitoring'
      };
    }
    if (vibration < 7.1) {
      return {
        label: 'Zone C: Bearing Degradation Warning',
        color: 'text-amber-400',
        bg: 'bg-amber-500/10 border-amber-500/30',
        action: '14-Day Advance Maintenance Window'
      };
    }
    return {
      label: 'Zone D: Critical Failure Imminent',
      color: 'text-rose-400',
      bg: 'bg-rose-500/15 border-rose-500/30',
      action: 'Automated Line Halt Recommended'
    };
  };

  const status = getSeverityStatus();

  return (
    <>
      {/* 1. Minimized Floating Trigger Pill (always accessible once scrolled) */}
      {hasScrolledTrigger && !isOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#091830] text-white border border-cyan-500/40 shadow-2xl backdrop-blur-xl hover:border-cyan-400 hover:scale-105 transition-all cursor-pointer group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          <div className="text-left font-mono">
            <span className="text-[10px] text-cyan-400 uppercase tracking-wider block font-semibold">
              INTERACTIVE SANDBOX
            </span>
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-cyan-400" />
              <span>Simulate Plant Equipment</span>
            </span>
          </div>
          <span className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] text-slate-300 font-mono">
            OPEN
          </span>
        </motion.button>
      )}

      {/* 2. Interactive Scroll-Triggered Floating Modal / Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[480px] max-h-[85vh] overflow-y-auto rounded-2xl bg-[#08152C]/95 border border-cyan-500/40 p-5 sm:p-6 text-white shadow-2xl backdrop-blur-2xl"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 block">
                    FACTORYOPS LAB · SCROLL TRIAGE
                  </span>
                  <h3 className="text-sm font-bold text-white tracking-tight">
                    Interactive Shop-Floor Simulator
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title="Minimize sandbox"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setIsDismissedPermanently(true);
                  }}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-white/10 transition-colors cursor-pointer"
                  title="Close popup"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Machine Selection Tabs */}
            <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-white/5 border border-white/5 mb-4 font-mono text-[11px]">
              {MACHINES.map((machine) => {
                const isSelected = machine.id === selectedMachine.id;
                return (
                  <button
                    key={machine.id}
                    type="button"
                    onClick={() => handleSelectMachine(machine)}
                    className={`py-1.5 px-2 rounded-lg font-medium transition-all text-center truncate cursor-pointer ${
                      isSelected
                        ? 'bg-cyan-500/25 border border-cyan-400/50 text-cyan-300 font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {machine.name.split(' ')[0]} {machine.name.split(' ')[1]}
                  </button>
                );
              })}
            </div>

            {/* Dynamic ISO 10816 Telemetry Status Card */}
            <div className={`p-3.5 rounded-xl border mb-4 font-mono transition-all ${status.bg}`}>
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs font-bold uppercase tracking-wide ${status.color}`}>
                  {status.label}
                </span>
                <span className="text-[10px] text-slate-300">
                  {selectedMachine.normalFreq}
                </span>
              </div>
              <p className="text-[11px] text-slate-300">
                Action: <span className="font-semibold text-white">{status.action}</span>
              </p>
            </div>

            {/* Real-Time FFT Spectral Waveform (reacts to vibration slider) */}
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 mb-4 font-mono text-[10px]">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span>FFT HARMONIC RESONANCE (0 - 5000 Hz)</span>
                <span className="text-cyan-400 font-bold">{vibration.toFixed(1)} mm/s RMS</span>
              </div>
              
              {/* Dynamic Animated Bars */}
              <div className="h-16 flex items-end gap-1 pt-1">
                {[15, 25, 40, 30, 50, 75, 45, 60, 90, 40, 55, 70, 35, 48, 65, 80, 50, 35].map((baseHeight, idx) => {
                  // Scale bar height dynamically with vibration slider
                  const multiplier = Math.min(2.5, vibration / 1.5);
                  const dynamicHeight = Math.min(100, Math.max(10, baseHeight * multiplier));
                  const isSpike = idx === 8 || idx === 15;

                  return (
                    <div
                      key={idx}
                      className="flex-1 rounded-t transition-all duration-300"
                      style={{
                        height: `${dynamicHeight}%`,
                        backgroundColor:
                          isSpike && vibration > 4.5
                            ? '#F43F5E'
                            : isSpike && vibration > 2.5
                            ? '#F59E0B'
                            : '#06B6D4'
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Interactive Sliders */}
            <div className="space-y-3 mb-5 font-mono text-xs">
              {/* Slider 1: Vibration */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Tri-Axial Vibration</span>
                  </span>
                  <span className="font-bold text-cyan-300">{vibration.toFixed(1)} mm/s</span>
                </div>
                <input
                  type="range"
                  min="0.4"
                  max="8.0"
                  step="0.1"
                  value={vibration}
                  onChange={(e) => setVibration(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              {/* Slider 2: Pressure Delta */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Gauge className="w-3.5 h-3.5 text-blue-400" />
                    <span>Pneumatic Pressure Sag</span>
                  </span>
                  <span className="font-bold text-blue-300">{pressureDelta.toFixed(2)} bar</span>
                </div>
                <input
                  type="range"
                  min="0.01"
                  max="1.50"
                  step="0.02"
                  value={pressureDelta}
                  onChange={(e) => setPressureDelta(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-blue-400"
                />
              </div>

              {/* Slider 3: Bearing Temp */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-amber-400" />
                    <span>Bearing Temperature</span>
                  </span>
                  <span className="font-bold text-amber-300">{temperature}°C</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="105"
                  step="1"
                  value={temperature}
                  onChange={(e) => setTemperature(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </div>
            </div>

            {/* Quick Actions (Simulate Anomaly / Dispatch) */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {isSimulatingFault ? (
                <button
                  type="button"
                  onClick={handleResetBaseline}
                  className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-slate-200 font-mono text-[11px] font-semibold transition-colors cursor-pointer text-center"
                >
                  Reset Baseline
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleTriggerFault}
                  className="px-3 py-2 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 font-mono text-[11px] font-semibold transition-colors cursor-pointer text-center"
                >
                  ⚡ Inject Anomaly
                </button>
              )}

              {dispatchedTicket ? (
                <div className="px-3 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono text-[11px] font-semibold flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{dispatchedTicket}</span>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleDispatchTicket}
                  className="px-3 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 font-mono text-[11px] font-semibold transition-colors cursor-pointer text-center"
                >
                  Dispatch Work Order
                </button>
              )}
            </div>

            {/* Primary Demo Link */}
            <Link
              to="/book-a-demo"
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 group"
            >
              <span>Test FactoryOps AI on Your Machinery</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

