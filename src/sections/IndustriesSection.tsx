import { motion } from 'framer-motion';
import { Car, Cpu, Factory, UtensilsCrossed, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
  {
    icon: Car,
    title: 'Automotive & Tier-1 Assembly',
    challenge: 'High-speed stamping presses and continuous compressed air drops driving robotic line bottlenecks.',
    solution: 'Real-time pneumatic line monitoring, continuous air-leak triage, and automated tool-wear alerts.',
    metric: '40% Downtime Reduced',
    metricDetail: 'Major Tier-1 Powertrain Supplier',
    accent: '#0062FF'
  },
  {
    icon: Cpu,
    title: 'Electronics & Cleanroom Fabrication',
    challenge: 'Stringent ISO 14644 cleanroom standards requiring 100% dry air, stable pressure deltas, and zero oil vapors.',
    solution: 'Continuous dew-point analytics, motor harmonic distortion tracking, and predictive air chiller failure alarms.',
    metric: 'Zero Outages',
    metricDetail: 'Class-100 Cleanroom Operations',
    accent: '#00B4D8'
  },
  {
    icon: Factory,
    title: 'Precision Metal & Heavy CNC',
    challenge: 'High tool-spindle vibration wear, unpredictable motor burnout, and massive peak utility demand surcharges.',
    solution: 'High-frequency 25.6 kHz vibration telemetry, dynamic peak-demand shaving, and spindle thermal monitoring.',
    metric: '18%–22% Energy Cut',
    metricDetail: 'Continuous Multi-Axis Milling Plant',
    accent: '#10B981'
  },
  {
    icon: UtensilsCrossed,
    title: 'Food & Beverage Processing',
    challenge: 'High-pressure washdowns, continuous refrigeration compressors, and FDA/FSSAI sanitary compliance requirements.',
    solution: 'Non-intrusive IP67 clamp-on sensors with automated compressor sequencing and cold-storage power optimization.',
    metric: '$180k+ Saved',
    metricDetail: 'Commercial Bottling & Dairy Plant',
    accent: '#6366F1'
  }
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="w-full py-28 bg-[#F8F9FC] text-slate-900 border-t border-slate-200">
      <div className="section-content max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0062FF] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <span>SPECIALIZED SECTOR EXPERTISE</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Engineered for the World's Most Demanding{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0062FF] to-[#00B4D8]">
                Manufacturing Floors
              </span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg mt-4 leading-relaxed">
              Every production environment possesses distinct mechanical dynamics, thermal constraints, and compliance mandates. Our models are pre-trained on domain-specific equipment data.
            </p>
          </div>

          <Link
            to="/industries"
            className="self-start md:self-auto inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-[#0062FF] transition-all shadow-md group"
          >
            Explore All Industry Deployments
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4-Column High-Impact Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl border border-slate-200 p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300"
            >
              <div>
                {/* Icon & Accent Top */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105"
                  style={{ backgroundColor: `${ind.accent}15` }}
                >
                  <ind.icon className="w-7 h-7" style={{ color: ind.accent }} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0062FF] transition-colors">
                  {ind.title}
                </h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Critical Pain Point
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {ind.challenge}
                    </p>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      FactoryOps Deployment
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {ind.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Result Bottom Badge */}
              <div className="pt-4 border-t border-slate-100">
                <div className="text-lg font-black text-slate-900 font-mono" style={{ color: ind.accent }}>
                  {ind.metric}
                </div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                  {ind.metricDetail}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
