import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  Activity,
  Thermometer,
  Crosshair,
  CheckCircle2,
  Radio,
  Sliders
} from 'lucide-react';

interface Subsystem {
  id: string;
  name: string;
  tag: string;
  x: number;
  y: number;
  status: 'nominal' | 'optimizing' | 'alert';
  specs: {
    label: string;
    value: string;
    delta?: string;
  }[];
  description: string;
  frequency: string;
  efficiency: string;
}

const subsystems: Subsystem[] = [
  {
    id: 'screw-block',
    name: 'Dual-Stage Rotary Screw Chamber',
    tag: 'ASSET-MOD-01',
    x: 48,
    y: 42,
    status: 'nominal',
    description: 'High-displacement oil-free twin rotors with optical speed encoder and tri-axial acoustic resonance sensors.',
    frequency: '2,980 RPM',
    efficiency: '97.4%',
    specs: [
      { label: 'Discharge Pressure', value: '7.45 bar', delta: '+0.1 bar' },
      { label: 'Vibration RMS', value: '1.24 mm/s', delta: '-0.3 mm/s' },
      { label: 'Discharge Temp', value: '68.2 °C' },
      { label: 'Shaft Alignment', value: '99.8% Coaxial' },
    ]
  },
  {
    id: 'vfd-inverter',
    name: 'Smart VFD Harmonic Drive',
    tag: 'POWER-MOD-02',
    x: 22,
    y: 55,
    status: 'nominal',
    description: 'AI-modulated variable frequency drive dynamically adjusting motor torque to eliminate unloaded idle power draw.',
    frequency: '48.6 Hz',
    efficiency: '98.9%',
    specs: [
      { label: 'Active Power Draw', value: '42.3 kW', delta: '-18% idle' },
      { label: 'Harmonic Distortion', value: '2.1% THD' },
      { label: 'Power Factor (PF)', value: '0.98' },
      { label: 'Bus Voltage', value: '415 V ±0.5%' },
    ]
  },
  {
    id: 'aftercooler',
    name: 'Aftercooler & Heat Exchanger',
    tag: 'THERMAL-MOD-03',
    x: 75,
    y: 35,
    status: 'optimizing',
    description: 'Counter-flow moisture separator with thermal differential sensors to prevent wet air contamination in pneumatic lines.',
    frequency: 'Continuous',
    efficiency: '94.8%',
    specs: [
      { label: 'Cooling Delta ΔT', value: '38.4 °C' },
      { label: 'Condensate Purge', value: 'Auto-Valve Active' },
      { label: 'Pressure Loss', value: '< 0.08 bar' },
      { label: 'Ambient Air Inflow', value: '24.1 °C' },
    ]
  },
  {
    id: 'leak-sensor',
    name: 'Ultrasonic Micro-Leak Sentinel',
    tag: 'ACOUSTIC-MOD-04',
    x: 65,
    y: 72,
    status: 'nominal',
    description: 'High-frequency 40 kHz directional microphone array pinpointing continuous air leak holes down to 0.4 mm.',
    frequency: '40 kHz Scan',
    efficiency: '99.2%',
    specs: [
      { label: 'Detected Leak Volume', value: '0.00 CFM', delta: 'Zero Leaks' },
      { label: 'Estimated Cost Leak', value: '$0.00 / hr' },
      { label: 'Confidence Score', value: '99.4% ML' },
      { label: 'Network Signal', value: '-54 dBm (LoRaWAN)' },
    ]
  }
];

export default function BlueprintExplorer() {
  const [selectedSubsystem, setSelectedSubsystem] = useState<Subsystem>(subsystems[0]);
  const [viewMode, setViewMode] = useState<'cad' | 'thermal' | 'telemetry'>('cad');
  const [sineOffset, setSineOffset] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSineOffset((prev) => (prev + 1) % 360);
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full py-28 bg-[#06060c] text-white overflow-hidden border-t border-slate-800">
      {/* Blueprint Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 98, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 98, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#00B4D8] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <Crosshair className="w-3.5 h-3.5" />
              DIGITAL TWIN TELEMETRY HUD
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Interactive Machine{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0062FF] via-[#00B4D8] to-[#10B981]">
                CAD Architecture
              </span>
            </h2>
            <p className="text-slate-400 text-base max-w-xl mt-3">
              Click active hardware nodes to inspect live micro-telemetry, FFT vibration velocity, and predictive bearing health.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center bg-[#0d0d1a] border border-slate-800 p-1.5 rounded-xl shadow-lg self-start md:self-auto">
            <button
              onClick={() => setViewMode('cad')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                viewMode === 'cad'
                  ? 'bg-[#0062FF] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              CAD Schematic
            </button>
            <button
              onClick={() => setViewMode('thermal')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                viewMode === 'thermal'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Thermometer className="w-3.5 h-3.5" />
              Thermal Flux
            </button>
            <button
              onClick={() => setViewMode('telemetry')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                viewMode === 'telemetry'
                  ? 'bg-[#00B4D8] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              Live Oscilloscope
            </button>
          </div>
        </div>

        {/* Main Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Blueprint Canvas (8 Cols) */}
          <div className="lg:col-span-8 bg-[#0a0a14] border border-slate-800 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between shadow-2xl min-h-[480px]">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono border-b border-slate-800/80 pb-3 z-20">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  CAD ENGINE: CONNECTED
                </span>
                <span>COORD: X=440.2 Y=782.9</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                1:1 SCALE
              </span>
            </div>

            {/* SVG Machine Schematic */}
            <div className="relative w-full flex-1 my-6 flex items-center justify-center">
              <svg viewBox="0 0 800 450" className="w-full h-full max-h-[360px]">
                <defs>
                  <linearGradient id="cadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0062FF" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00B4D8" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {/* Base bed */}
                <path d="M 120 360 L 680 360 L 740 390 L 60 390 Z" fill="none" stroke="#0062FF" strokeWidth="2" strokeDasharray="4 2" />

                {/* Motor Left */}
                <rect x="140" y="180" width="160" height="160" rx="12" fill="#0e0e1e" stroke="#0062FF" strokeWidth="2.5" />
                {[0, 1, 2, 3, 4].map((i) => (
                  <line key={i} x1={160 + i * 28} y1="195" x2={160 + i * 28} y2="325" stroke="#0062FF" strokeOpacity="0.3" strokeWidth="1.5" />
                ))}

                {/* Coupler */}
                <rect x="300" y="240" width="50" height="40" fill="#1e1e36" stroke="#00B4D8" strokeWidth="2" />

                {/* Compressor Stage Center */}
                <rect x="350" y="150" width="220" height="190" rx="16" fill="#0d1124" stroke="url(#cadGrad)" strokeWidth="3" />
                <circle cx="420" cy="245" r="45" fill="none" stroke="#00B4D8" strokeWidth="2" strokeDasharray="8 4" />
                <circle cx="500" cy="245" r="45" fill="none" stroke="#0062FF" strokeWidth="2" strokeDasharray="8 4" />
                <circle cx="420" cy="245" r="6" fill="#00B4D8" />
                <circle cx="500" cy="245" r="6" fill="#0062FF" />

                {/* Cooler Right */}
                <rect x="590" y="110" width="130" height="230" rx="8" fill="#0d1526" stroke="#00B4D8" strokeWidth="2" />
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                  <line key={i} x1="605" y1={135 + i * 28} x2="705" y2={135 + i * 28} stroke="#00B4D8" strokeOpacity="0.4" strokeWidth="1.5" />
                ))}

                {/* Air Piping */}
                <path d="M 460 150 L 460 90 L 650 90 L 650 110" fill="none" stroke="#00B4D8" strokeWidth="4" strokeLinecap="round" />
                <circle cx={460 + ((sineOffset * 2) % 190)} cy="90" r="4" fill="#ffffff" />
              </svg>

              {/* Hotspot Pins */}
              {subsystems.map((sub) => {
                const isSelected = selectedSubsystem.id === sub.id;
                return (
                  <button
                    key={sub.id}
                    onClick={() => setSelectedSubsystem(sub)}
                    style={{ left: `${sub.x}%`, top: `${sub.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-30 focus:outline-none"
                  >
                    <div className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-bold border shadow-lg backdrop-blur-md transition-all ${
                      isSelected
                        ? 'bg-[#0062FF] text-white border-white scale-110 shadow-blue-500/50'
                        : 'bg-[#101026]/90 text-slate-300 border-slate-700 hover:border-white'
                    }`}>
                      <span className={`w-2 h-2 rounded-full ${sub.status === 'nominal' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                      <span className="font-mono">{sub.tag}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Real-time Oscilloscope Mini-Bar */}
            <div className="bg-[#0e0e1e] border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 z-20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-[#00B4D8]">
                  <Radio className="w-4 h-4 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    Continuous Spectral FFT Vibration Channel
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    25.6 kHz Sampling • 0.08 mm/s Threshold
                  </div>
                </div>
              </div>

              <div className="h-7 w-44 bg-black/60 rounded border border-slate-800 overflow-hidden flex items-center px-2">
                <svg viewBox="0 0 200 40" className="w-full h-full">
                  <path
                    d={`M 0 20 ${Array.from({ length: 40 }).map((_, i) => {
                      const yVal = 20 + Math.sin((i * 18 + sineOffset) * (Math.PI / 180)) * 12 * (i % 2 === 0 ? 1 : 0.6);
                      return `L ${i * 5} ${yVal.toFixed(1)}`;
                    }).join(' ')}`}
                    fill="none"
                    stroke="#00B4D8"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Module Telemetry Inspector (4 Cols) */}
          <div className="lg:col-span-4 bg-[#0a0a14] border border-slate-800 rounded-3xl p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono font-bold text-[#00B4D8] uppercase">
                    {selectedSubsystem.tag}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {selectedSubsystem.name}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {selectedSubsystem.status.toUpperCase()}
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {selectedSubsystem.description}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-[#121226] border border-slate-800 rounded-2xl p-4">
                  <div className="text-xs text-slate-400 font-semibold mb-1">Health Index</div>
                  <div className="text-2xl font-black text-emerald-400 font-mono">
                    {selectedSubsystem.efficiency}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">Baseline: &gt;92%</div>
                </div>
                <div className="bg-[#121226] border border-slate-800 rounded-2xl p-4">
                  <div className="text-xs text-slate-400 font-semibold mb-1">Operating Mode</div>
                  <div className="text-2xl font-black text-[#00B4D8] font-mono">
                    {selectedSubsystem.frequency}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">Dynamic load track</div>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Live Sensor Channels
                </div>
                {selectedSubsystem.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-slate-800 text-xs"
                  >
                    <span className="text-slate-400">{spec.label}</span>
                    <div className="text-right">
                      <span className="font-mono font-bold text-white">{spec.value}</span>
                      {spec.delta && (
                        <span className="ml-2 font-semibold text-emerald-400">
                          ({spec.delta})
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800">
              <button className="w-full py-3.5 px-4 rounded-xl bg-[#0062FF] hover:bg-[#0052CC] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2">
                <Sliders className="w-4 h-4" />
                Configure Real-Time Alarm Thresholds
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

