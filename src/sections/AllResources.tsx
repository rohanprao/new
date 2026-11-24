import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, BookOpen, Shield, FileText, CheckCircle2 } from 'lucide-react';

const categories = ['All', 'Guide', 'Whitepaper', 'Security'];

const resources = [
  {
    title: 'Industrial IoT Best Practices',
    desc: 'A comprehensive playbook on deploying non-intrusive IoT sensors across factory floors efficiently without line shutdown.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Guide',
    pages: '24 Pages',
    icon: BookOpen
  },
  {
    title: 'Predictive Maintenance Whitepaper',
    desc: 'Learn how vibration and current signature analytics predict machine failures up to 14 days before breakdown.',
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Whitepaper',
    pages: '18 Pages',
    icon: FileText
  },
  {
    title: 'Smart Factory Security Architecture',
    desc: 'A practical framework for ensuring plant telemetry remains air-gapped, encrypted, and compliant with IEC 62443 standards.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Security',
    pages: '15 Pages',
    icon: Shield
  }
];

export default function AllResources() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredResources = activeCategory === 'All'
    ? resources
    : resources.filter(r => r.category === activeCategory);

  return (
    <section id="all-resources" className="w-full min-h-screen pt-32 pb-24 relative z-10 flex flex-col items-center bg-slate-50 dark:bg-[#07070e] transition-colors">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header (Vention style typography + Tulip accent) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Knowledge Base & Field Guides
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4"
          >
            Engineering{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500">
              Resource Library
            </span>
          </motion.h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            Technical guides, security architectures, and executive whitepapers created by industrial automation specialists.
          </p>
        </div>

        {/* Category Filter Chips (Vention style) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/25 scale-105'
                  : 'bg-white dark:bg-[#121226] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-purple-900/30 hover:border-purple-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3-Column Grid (Vention clean cards + Tulip elevation & border) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource, i) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col bg-white dark:bg-[#101024] rounded-2xl border border-slate-200 dark:border-purple-900/30 shadow-sm hover:shadow-xl hover:border-purple-500/40 transition-all duration-300 overflow-hidden"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-black/40">
                <img
                  src={resource.img}
                  alt={resource.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 dark:bg-black/80 text-purple-700 dark:text-purple-300 backdrop-blur-sm shadow-sm border border-slate-200/50 dark:border-purple-500/30">
                    <resource.icon className="w-3.5 h-3.5" />
                    {resource.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-4 text-xs font-medium px-2.5 py-1 rounded-md bg-black/70 text-white backdrop-blur-sm">
                  {resource.pages}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-snug">
                    {resource.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {resource.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-purple-900/20 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Free PDF
                  </span>
                  <button className="inline-flex items-center gap-1.5 text-sm font-bold text-purple-600 dark:text-purple-400 group-hover:text-purple-700 transition-colors">
                    Download Report
                    <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
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
