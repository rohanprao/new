import { motion } from 'framer-motion';
import { ShieldAlert, Zap, Activity, Cpu, ArrowRight, CheckCircle2, Wrench, BarChart3, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    id: 'downtime-prevention',
    icon: ShieldAlert,
    category: 'RELIABILITY ENGINEERING',
    title: 'Autonomous Downtime & Mechanical Fault Prevention',
    overview:
      'Eliminate catastrophic bearing failures, motor burnouts, and unpredicted assembly line stoppages through high-frequency continuous FFT vibration analysis and thermal modeling.',
    features: [
      'Continuous 25.6 kHz vibration velocity and acceleration enveloping',
      'Automated ISO 10816 vibration severity compliance grading',
      'Inner and outer bearing race defect frequency identification',
      'Instant SMS, Email, and Webhook dispatch to maintenance teams'
    ],
    metric: '40% Reduction in Unplanned Line Stoppages',
    accent: '#0062FF'
  },
  {
    id: 'energy-optimization',
    icon: Zap,
    category: 'ENERGY & UTILITY INTELLIGENCE',
    title: 'Compressed Air & Motor Electrical Load Optimization',
    overview:
      'Industrial air compressors often consume 20% to 35% of a factory’s total electrical bill, with up to 30% lost to continuous micro-leaks and unloaded compressor idling. FactoryOps detects and eliminates this waste in real time.',
    features: [
      'Directional ultrasonic 40 kHz leak detection mapping',
      'True power factor (PF), total harmonic distortion (THD), and active kW monitoring',
      'Automated multi-compressor sequencing to eliminate idle running',
      'Direct carbon abatement reporting (Scope 1 & 2 GHG metrics)'
    ],
    metric: '18%–22% Verified Utility Spend Reduction',
    accent: '#10B981'
  },
  {
    id: 'oee-intelligence',
    icon: BarChart3,
    category: 'FRONT-LINE OPERATIONS',
    title: 'Shop-Floor Overall Equipment Effectiveness (OEE)',
    overview:
      'Transform manual shift logs and gut feelings into automated, indisputable operational telemetry. Track true line availability, actual cycle rate, and scrap rates automatically.',
    features: [
      'Automated root-cause downtime classification (Mechanical vs Electrical vs Operator)',
      'Sub-second cycle time deviation tracking against rated nameplate speed',
      'Mobile digital SOP and work-order management for shift technicians',
      'Native bidirectional integration with SAP PM, IBM Maximo, and Oracle NetSuite'
    ],
    metric: '+5.3% to +8.2% Direct OEE Improvement',
    accent: '#00B4D8'
  }
];

export default function Solutions() {
  return (
    <div className="w-full min-h-screen pt-32 pb-24 bg-[#090B10] text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#00B4D8] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <span>ENTERPRISE SOLUTIONS</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Targeted Solutions for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0062FF] via-[#00B4D8] to-[#10B981]">
              Zero-Downtime Manufacturing
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl mt-6 leading-relaxed">
            Whether your mandate is preventing high-consequence machine failures, cutting massive electricity bills, or digitizing shop-floor operations, Cittagent delivers proven industrial solutions.
          </p>
        </div>
      </section>

      {/* Solutions Detailed Stack */}
      <section className="max-w-7xl mx-auto px-6 space-y-16 mb-28">
        {solutions.map((sol, index) => (
          <motion.div
            key={sol.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-14 rounded-3xl border border-slate-800 bg-[#0F121C] shadow-2xl relative overflow-hidden"
          >
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ backgroundColor: sol.accent }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column (7 Cols) */}
              <div className="lg:col-span-7">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                  {sol.category}
                </div>
                <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                  {sol.title}
                </h2>
                <p className="text-slate-300 text-base leading-relaxed mb-8">
                  {sol.overview}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Key Technical Deliverables
                  </div>
                  {sol.features.map((f, fi) => (
                    <div key={fi} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Verified Metric Card (5 Cols) */}
              <div className="lg:col-span-5 bg-black/50 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Verified Benchmark Impact
                  </span>
                  <div className="text-3xl font-black text-white font-mono mb-3" style={{ color: sol.accent }}>
                    {sol.metric}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Measured across automotive, precision metal, and food processing facilities with third-party electrical power loggers.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800">
                  <Link
                    to="/contact"
                    className="w-full py-3.5 px-4 rounded-xl bg-white text-slate-900 font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
                  >
                    Request Technical Deployment Scope
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-6 text-center">
        <div className="p-12 rounded-3xl border border-slate-800 bg-[#0F121C]">
          <h3 className="text-3xl font-bold text-white mb-4">
            Need a Customized Industrial Assessment?
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
            Our engineering team conducts non-invasive, 48-hour electrical and vibration baseline audits on your machinery with full executive reporting.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0062FF] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#0052CC] transition-all shadow-lg shadow-blue-600/30"
          >
            Schedule a Technical Walkthrough
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
