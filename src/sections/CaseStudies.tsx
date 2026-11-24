import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, ShieldCheck, Factory, Award } from 'lucide-react';

const cases = [
  {
    company: 'Global Automotive Corp',
    industry: 'Automotive Manufacturing',
    title: 'Reducing Compressed Air Line Downtime by 40%',
    desc: 'How one of North America\'s largest automotive Tier-1 suppliers deployed non-intrusive current & vibration sensors across 6 stamping lines, identifying persistent pressure drops in under 48 hours.',
    img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    stats: '40% Downtime Reduction',
    secondaryMetric: '$340k Annual Energy Saved'
  },
  {
    company: 'Precision Electronics Facility',
    industry: 'High-Tech & Semiconductor',
    title: 'Optimizing Cleanroom Compressor OEE with Real-Time ML',
    desc: 'Implementing FactoryOps automated condition monitoring eliminated unplanned compressor trips, achieving a 20% increase in overall equipment effectiveness within the first two quarters.',
    img: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    stats: '20% OEE Increase',
    secondaryMetric: 'Zero Unplanned Outages'
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="w-full min-h-screen pt-32 pb-24 relative z-10 flex flex-col items-center bg-slate-50 dark:bg-[#07070e] transition-colors">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header (Vention clean hierarchy + Tulip punchy gradient) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-emerald-500" />
            Proven Industrial ROI
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4"
          >
            Customer{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600">
              Case Studies
            </span>
          </motion.h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            See how manufacturing and engineering leaders leverage FactoryOps AI to eliminate costly downtime and hit net-zero targets.
          </p>
        </div>

        {/* 2-Column High-Impact Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {cases.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="group bg-white dark:bg-[#101024] rounded-3xl border border-slate-200 dark:border-purple-900/30 overflow-hidden shadow-sm hover:shadow-2xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col"
            >
              {/* Feature Image with Badge Overlays */}
              <div className="relative h-72 w-full overflow-hidden bg-slate-100 dark:bg-black/50">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 dark:bg-black/80 text-emerald-700 dark:text-emerald-400 backdrop-blur-sm border border-emerald-500/30">
                    {item.industry}
                  </span>
                </div>
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                  <span className="font-bold text-lg">{item.company}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Highlight Metrics Bar */}
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 text-emerald-700 dark:text-emerald-300 font-extrabold text-sm">
                      <TrendingUp className="w-4 h-4 text-emerald-500" />
                      {item.stats}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/40 text-blue-700 dark:text-blue-300 font-semibold text-xs">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                      {item.secondaryMetric}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 dark:border-purple-900/20 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-400 dark:text-slate-500">
                    5 min read
                  </span>
                  <button className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 transition-colors">
                    Read Customer Story
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
