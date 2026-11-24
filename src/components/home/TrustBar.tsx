import { motion } from 'framer-motion';
import { Factory, ShieldCheck, Cpu, Gauge, Cog, Building2 } from 'lucide-react';
import { homeContent } from '@/../content/home';

export default function TrustBar() {
  const { trustBar } = homeContent;

  const icons = [Factory, Gauge, Cpu, Cog, Building2, ShieldCheck];

  return (
    <section className="relative w-full py-12 bg-[#09152C] border-b border-white/10 overflow-hidden">
      <div className="max-w-content mx-auto px-6">
        {/* Caption Header */}
        <div className="text-center mb-8">
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-400">
            {trustBar.title}
          </p>
        </div>

        {/* Enterprise Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustBar.logos.map((logo, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative flex flex-col items-center justify-center p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all duration-300 text-center"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:scale-105 transition-all mb-2.5">
                  <IconComponent className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors leading-tight">
                  {logo.name}
                </span>
                <span className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-wide">
                  {logo.sector}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
