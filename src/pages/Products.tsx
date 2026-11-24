import { motion } from 'framer-motion';
import { Cpu, Radio, ShieldCheck, MonitorPlay, Zap, ArrowRight, Download, Server, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    tag: 'HARDWARE SENSOR SUITE',
    title: 'Non-Intrusive Industrial Sensor Nodes',
    specs: [
      { label: 'Current Sensing', value: '10A to 1000A Split-Core CT (Class 0.5 Accuracy)' },
      { label: 'Vibration Bandwidth', value: '10 Hz – 10 kHz (Tri-Axial MEMS Accelerometer)' },
      { label: 'Sampling Rate', value: '25.6 kS/s Ultra-High Resolution' },
      { label: 'Ingress Protection', value: 'IP67 Sealed Ruggedized Enclosure' },
      { label: 'Installation Method', value: 'Magnetic / Clamp-on (No Machine Disassembly)' }
    ],
    desc: 'Engineered for extreme factory floor environments with high ambient electrical noise, oil vapors, and mechanical shocks. Captures true electrical current waveforms and high-frequency acoustic emissions.',
    icon: Radio,
    accent: '#0062FF'
  },
  {
    tag: 'EDGE COMPUTING GATEWAY',
    title: 'Cittagent Edge-Sentinel Industrial Gateway',
    specs: [
      { label: 'Processor', value: 'Quad-Core Industrial ARM Cortex with Neural NPU' },
      { label: 'Fieldbus Protocols', value: 'Modbus RTU (RS-485), Modbus TCP, OPC-UA, Ethernet/IP' },
      { label: 'Security Standard', value: 'Hardware TPM 2.0 • IEC 62443 Certified Boundary' },
      { label: 'Uplink Connectivity', value: 'Air-Gapped 4G/5G LTE Cat-M1 + Dual Gigabit LAN' },
      { label: 'Local Buffering', value: '30 Days Onboard Flash Storage for Network Outages' }
    ],
    desc: 'Acts as the impenetrable firewall between your operational plant network and the cloud. Performs local Fast Fourier Transforms (FFT) on raw vibration streams and buffers telemetry during connectivity losses.',
    icon: Server,
    accent: '#00B4D8'
  },
  {
    tag: 'SOFTWARE PLATFORM',
    title: 'FactoryOps AI Platform & Operations Control Room',
    specs: [
      { label: 'Dashboard Latency', value: '< 250 ms Live Telemetry Refresh' },
      { label: 'Integration API', value: 'RESTful API, Webhooks, MQTT broker bridge' },
      { label: 'Role-Based Access', value: 'Enterprise SSO (SAML 2.0, Okta, Azure AD)' },
      { label: 'Compliance Reports', value: 'Automated ISO 50001 & ISO 10816 PDF Generator' },
      { label: 'Platform Deployment', value: 'SOC 2 Type II Certified Cloud or Hybrid On-Premises' }
    ],
    desc: 'The single pane of glass for plant managers, maintenance teams, and corporate energy directors. Delivers automated anomaly triage, OEE tracking, and predictive dispatch workflows.',
    icon: MonitorPlay,
    accent: '#10B981'
  }
];

export default function Products() {
  return (
    <div className="w-full min-h-screen pt-32 pb-24 bg-[#090B10] text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#00B4D8] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <span>HARDWARE & SOFTWARE SPECIFICATIONS</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
            FactoryOps AI{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0062FF] via-[#00B4D8] to-[#10B981]">
              Product Stack
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl mt-6 leading-relaxed">
            A cohesive industrial system combining zero-disruption physical sensors, certified cyber-secure edge gateways, and cloud neural diagnostics.
          </p>
        </div>
      </section>

      {/* Product Spec Modules */}
      <section className="max-w-7xl mx-auto px-6 space-y-16 mb-28">
        {products.map((prod, index) => (
          <motion.div
            key={prod.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-14 rounded-3xl border border-slate-800 bg-[#0F121C] shadow-2xl relative overflow-hidden"
          >
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ backgroundColor: prod.accent }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Product Info (5 Cols) */}
              <div className="lg:col-span-5">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                  {prod.tag}
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-4">
                  {prod.title}
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {prod.desc}
                </p>

                <div className="pt-4 border-t border-slate-800 flex items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0062FF] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#0052CC] transition-all"
                  >
                    Request Evaluation Unit
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Technical Spec Sheet (7 Cols) */}
              <div className="lg:col-span-7 bg-black/50 border border-slate-800 rounded-2xl p-6 md:p-8">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-800 pb-3 flex items-center justify-between">
                  <span>Hardware & Engineering Parameters</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Factory Certified
                  </span>
                </div>

                <div className="space-y-3">
                  {prod.specs.map((s, si) => (
                    <div
                      key={si}
                      className="flex flex-col sm:flex-row sm:items-center justify-between py-2.5 border-b border-slate-800/60 text-xs gap-1"
                    >
                      <span className="text-slate-400 font-medium">{s.label}</span>
                      <span className="font-mono font-bold text-white text-right">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
