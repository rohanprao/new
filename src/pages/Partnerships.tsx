import { motion } from 'framer-motion';
import { Handshake, Globe, BarChart, ChevronRight } from 'lucide-react';

export default function Partnerships() {
  return (
    <div className="w-full min-h-screen pt-32 pb-24 relative z-10 flex flex-col items-center">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 w-full text-center mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Grow with <br/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-rose-400">
            FactoryOps Partners
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 max-w-2xl mx-auto text-xl leading-relaxed mb-10"
        >
          Join our global ecosystem of technology integrators, consultants, and hardware manufacturers delivering next-generation industrial solutions.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="px-8 py-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-full font-semibold text-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all"
        >
          Become a Partner
        </motion.button>
      </section>

      {/* Partner Types */}
      <section className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-3 gap-8 mb-32">
        {[
          { icon: Handshake, title: 'Solution Integrators', desc: 'Deploy FactoryOps alongside your services. Get certified, access co-marketing funds, and drive new revenue streams.', color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
          { icon: Globe, title: 'Technology Partners', desc: 'Integrate your software or hardware with our platform. Build powerful joint solutions that solve complex customer needs.', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
          { icon: BarChart, title: 'Consulting Partners', desc: 'Leverage our platform to drive digital transformation initiatives for your enterprise manufacturing clients.', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' }
        ].map((tier, i) => (
          <div key={i} className={`bg-[#020c1b]/80 border ${tier.border} rounded-3xl p-8 backdrop-blur-md hover:-translate-y-2 transition-transform duration-300`}>
            <div className={`w-14 h-14 ${tier.bg} rounded-2xl flex items-center justify-center mb-6`}>
              <tier.icon className={`w-7 h-7 ${tier.color}`} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{tier.title}</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              {tier.desc}
            </p>
            <button className={`flex items-center gap-2 ${tier.color} font-medium hover:opacity-80 transition-opacity`}>
              Learn more <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
