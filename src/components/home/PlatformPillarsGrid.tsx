import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, Cpu, BrainCircuit, Gauge, Network, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { homeContent } from '@/../content/home';

export default function PlatformPillarsGrid() {
  const { platformPillars } = homeContent;

  const pillarIcons: Record<string, typeof Activity> = {
    monitor: Activity,
    analyze: Cpu,
    predict: BrainCircuit,
    optimize: Gauge,
    integrate: Network,
    secure: ShieldCheck
  };

  const pillarAccents: Record<string, { border: string; bg: string; text: string }> = {
    monitor: { border: 'group-hover:border-blue-500', bg: 'bg-blue-500/10', text: 'text-blue-500' },
    analyze: { border: 'group-hover:border-cyan-500', bg: 'bg-cyan-500/10', text: 'text-cyan-500' },
    predict: { border: 'group-hover:border-indigo-500', bg: 'bg-indigo-500/10', text: 'text-indigo-500' },
    optimize: { border: 'group-hover:border-emerald-500', bg: 'bg-emerald-500/10', text: 'text-emerald-500' },
    integrate: { border: 'group-hover:border-amber-500', bg: 'bg-amber-500/10', text: 'text-amber-500' },
    secure: { border: 'group-hover:border-sky-500', bg: 'bg-sky-500/10', text: 'text-sky-500' }
  };

  return (
    <section className="relative w-full py-24 bg-white text-slate-900 overflow-hidden border-b border-slate-200">
      <div className="max-w-content mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-wider text-blue-600 uppercase block mb-3">
              {platformPillars.tag}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              {platformPillars.headline}
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
              {platformPillars.subheadline}
            </p>
          </div>

          <Link
            to="/platform"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 group self-start md:self-end"
          >
            <span>Full Platform Architecture</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 6 Asymmetric Enterprise Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platformPillars.pillars.map((pillar, idx) => {
            const Icon = pillarIcons[pillar.id] || Activity;
            const accent = pillarAccents[pillar.id] || { border: 'group-hover:border-blue-500', bg: 'bg-blue-500/10', text: 'text-blue-500' };

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="group"
              >
                <Link
                  to={pillar.href}
                  className={`block h-full p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${accent.border} relative overflow-hidden`}
                >
                  {/* Top Row: Icon + Badge + Arrow */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl ${accent.bg} ${accent.text} flex items-center justify-center transition-transform group-hover:scale-105`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 font-mono text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
                        {pillar.badge}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors">
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3 group-hover:text-blue-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Micro-Telemetry Bottom Indicator */}
                  <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>PILLAR 0{idx + 1}</span>
                    <span className="text-slate-500 font-medium">VIEW SPECS &rarr;</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
