import { motion } from 'framer-motion';
import { Car, Cpu, Factory, UtensilsCrossed, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const sectors = [
  {
    icon: Car,
    name: 'Automotive & Tier-1 Powertrain',
    stats: '40% Downtime Cut',
    context:
      'High-speed robotic welding cells, continuous stamping lines, and automated transfer presses depend on rock-solid air line pressure and zero hydraulic motor trips.',
    deployments: [
      'Multi-compressor header pressure stabilization',
      'Ultrasonic leak pin-pointing on robotic pneumatic actuators',
      'Continuous cooling water flow and temperature telemetry',
      'Predictive motor bearing monitoring on high-tonnage stamping presses'
    ]
  },
  {
    icon: Cpu,
    name: 'Semiconductors, PCB & Cleanrooms',
    stats: 'Class-100 Uptime',
    context:
      'Cleanroom environments cannot tolerate pressure drops or hydrocarbon oil mist leaks. Chillers, scrubbers, and rotary screw compressors must run without vibration surges.',
    deployments: [
      'Fast Fourier Transform (FFT) vibration harmonics on cleanroom fans',
      'Compressed dry air (CDA) dew point and particulate telemetry',
      'Total harmonic distortion (THD) filtering on cleanroom power buses',
      'Automated ISO 14644 environmental compliance audit logs'
    ]
  },
  {
    icon: Factory,
    name: 'Precision CNC & Heavy Fabrication',
    stats: '22% Idle Power Cut',
    context:
      'Milling spindles, laser cutting assist gas lines, and continuous hydraulic packs drive massive electrical peak demand surcharges if not actively orchestrated.',
    deployments: [
      'Spindle vibration telemetry to prevent tooling burn-out and part scrap',
      'Dynamic peak-shaving to minimize utility demand penalties',
      'High-pressure nitrogen and air assist line pressure optimization',
      'Shift-by-shift machine tool utilization and OEE benchmarks'
    ]
  },
  {
    icon: UtensilsCrossed,
    name: 'Food, Beverage & Dairy Processing',
    stats: '15% Utility Savings',
    context:
      'Refrigeration ammonia compressors, bottling lines, and continuous washdowns require ruggedized, IP67-rated instrumentation with automated compliance logs.',
    deployments: [
      'Washdown-resistant IP67 non-intrusive current transformers',
      'Chiller and blast freezer compressor sequencing',
      'Continuous pneumatic bottling valve leak identification',
      'Automated energy efficiency reporting for sustainability audits'
    ]
  }
];

export default function Industries() {
  return (
    <div className="w-full min-h-screen pt-32 pb-24 bg-[#090B10] text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#00B4D8] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <span>SECTOR-SPECIFIC DEPLOYMENTS</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Tailored for Mission-Critical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0062FF] via-[#00B4D8] to-[#10B981]">
              Industrial Sectors
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl mt-6 leading-relaxed">
            Our models are trained on hundreds of thousands of hours of real industrial equipment telemetry, understanding the unique thermal and mechanical fingerprints of your sector.
          </p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-28">
        {sectors.map((sec, i) => (
          <motion.div
            key={sec.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-8 md:p-10 rounded-3xl border border-slate-800 bg-[#0F121C] shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#0062FF]/15 border border-[#0062FF]/30 flex items-center justify-center">
                  <sec.icon className="w-7 h-7 text-[#0062FF]" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                  {sec.stats}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white mb-3">
                {sec.name}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {sec.context}
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Standard FactoryOps Deployments
                </div>
                {sec.deployments.map((d, di) => (
                  <div key={di} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <Link
                to="/contact"
                className="w-full py-3 px-4 rounded-xl bg-white/5 border border-slate-700 hover:border-[#0062FF] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group"
              >
                Inquire for Your Plant Profile
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
