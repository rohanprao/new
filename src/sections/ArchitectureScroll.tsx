import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Radio, ShieldCheck, Cpu, MonitorPlay, CheckCircle2, ArrowRight } from 'lucide-react';

const layers = [
  {
    step: '01',
    category: 'PHYSICAL INSTRUMENTATION',
    title: 'Non-Intrusive Plug & Play Sensor Deployment',
    tagline: 'Zero line stoppage • Under 15 minutes per critical asset',
    description:
      'Clip-on split-core current transformers, magnetic tri-axial high-bandwidth vibration accelerometers, and 40 kHz ultrasonic acoustic pucks snap directly onto legacy and modern machinery without altering your existing PLC wiring or warranty.',
    metrics: [
      { label: 'Deployment Downtime', value: '0.0 Hours' },
      { label: 'Legacy Compatibility', value: '99.4%' },
      { label: 'Sampling Rate', value: '25.6 kHz' },
    ],
    icon: Radio,
    accent: '#0062FF',
    badge: 'Hardware Tier'
  },
  {
    step: '02',
    category: 'EDGE TELEMETRY & AIR-GAPPING',
    title: 'Industrial Gateway & Zero-Trust Protocol Bridge',
    tagline: 'IEC 62443 architecture • Isolated OT/IT network boundary',
    description:
      'The ruggedized edge compute gateway unifies Modbus RTU/TCP, OPC-UA, and proprietary sensor protocols. Telemetry is encrypted via TLS 1.3 over an isolated cellular or dedicated VLAN link with zero inbound ports, guaranteeing plant cybersecurity.',
    metrics: [
      { label: 'Data Encryption', value: 'AES-256 / TLS 1.3' },
      { label: 'Inbound Ports', value: '0 (Strictly Blocked)' },
      { label: 'Network Latency', value: '< 15 ms' },
    ],
    icon: ShieldCheck,
    accent: '#00B4D8',
    badge: 'Security Tier'
  },
  {
    step: '03',
    category: 'MACHINE LEARNING & ACOUSTICS',
    title: 'Neural Diagnostics & Continuous FFT Spectral AI',
    tagline: 'Early fault detection 14 days before mechanical failure',
    description:
      'High-speed Fast Fourier Transform algorithms decompose raw acoustic and vibration signatures to isolate inner-race bearing spalls, unbalance, harmonic distortion, and continuous pneumatic micro-leaks, scoring equipment health in real time.',
    metrics: [
      { label: 'Early Warning Lead', value: '10–14 Days' },
      { label: 'False Positive Rate', value: '< 0.08%' },
      { label: 'Continuous Analysis', value: '24/7/365' },
    ],
    icon: Cpu,
    accent: '#10B981',
    badge: 'Algorithm Tier'
  },
  {
    step: '04',
    category: 'OPERATIONAL CONTROL ROOM',
    title: 'FactoryOps Enterprise Dashboard & Automated Dispatch',
    tagline: 'Instant mobile alerts • ISO 50001 energy intelligence',
    description:
      'Plant managers and reliability engineers access a unified operational interface displaying real-time OEE, compressed air consumption, and predictive maintenance schedules. Integrates seamlessly with SAP, Maximo, and existing CMMS software.',
    metrics: [
      { label: 'Typical Energy Cut', value: '18% – 22%' },
      { label: 'OEE Improvement', value: '+4.8% to +8.2%' },
      { label: 'Payback Horizon', value: '< 90 Days' },
    ],
    icon: MonitorPlay,
    accent: '#6366F1',
    badge: 'Application Tier'
  },
];

export default function ArchitectureScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      id="architecture"
      className="relative w-full py-28 bg-[#090B10] text-white border-t border-slate-800/80 overflow-hidden"
    >
      {/* Background Architectural Blueprint Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="section-content relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#00B4D8] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <span>END-TO-END INDUSTRIAL ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            How Cittagent Transforms{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0062FF] via-[#00B4D8] to-[#10B981]">
              Physical Assets into Intelligence
            </span>
          </h2>
          <p className="text-slate-400 text-lg mt-4 leading-relaxed">
            From the factory floor’s mechanical vibrations to enterprise-wide executive visibility, explore the four interconnected layers of our technology stack.
          </p>
        </div>

        {/* Scroll-Linked Technical Stack Cards */}
        <div className="space-y-12">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.step}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative rounded-3xl border border-slate-800 bg-[#0F121C]/90 p-8 md:p-12 hover:border-slate-700 transition-all shadow-xl backdrop-blur-md overflow-hidden"
            >
              {/* Top Accent Indicator Line */}
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-all duration-500 group-hover:h-1.5"
                style={{ backgroundColor: layer.accent }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Meta & Step (4 Cols) */}
                <div className="lg:col-span-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl font-mono font-black text-slate-700 group-hover:text-white transition-colors">
                        {layer.step}
                      </span>
                      <span className="px-2.5 py-1 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-800 text-slate-300 border border-slate-700">
                        {layer.badge}
                      </span>
                    </div>
                    <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                      {layer.category}
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight leading-snug">
                      {layer.title}
                    </h3>
                    <p className="text-xs font-semibold mt-2" style={{ color: layer.accent }}>
                      {layer.tagline}
                    </p>
                  </div>
                </div>

                {/* Right Description & Metrics (8 Cols) */}
                <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                  <p className="text-slate-300 text-base leading-relaxed">
                    {layer.description}
                  </p>

                  {/* High-Precision Spec Metric Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
                    {layer.metrics.map((m, mi) => (
                      <div
                        key={mi}
                        className="p-4 rounded-2xl bg-black/40 border border-slate-800/60"
                      >
                        <div className="text-xs text-slate-400 font-medium mb-1">{m.label}</div>
                        <div className="text-xl font-mono font-extrabold text-white">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
