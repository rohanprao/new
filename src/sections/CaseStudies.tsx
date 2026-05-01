import { motion } from 'framer-motion';

const cases = [
  {
    company: 'Global Automotive Corp',
    title: 'Reducing Downtime by 40%',
    desc: 'How one of the largest automotive manufacturers used FactoryOps to streamline their assembly line sensors.',
    img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    stats: '40% Downtime Reduction'
  },
  {
    company: 'Precision Electronics',
    title: 'Optimizing OEE with Real-Time Data',
    desc: 'Implementing FactoryOps insights led to a 20% increase in overall equipment effectiveness within six months.',
    img: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    stats: '20% OEE Increase'
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="w-full min-h-screen pt-32 pb-24 relative z-10 flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-6 w-full text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500 mb-6"
        >
          Case Studies
        </motion.h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-12">
          See how leading manufacturers are transforming their operations with FactoryOps.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          {cases.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer bg-slate-900/50 border border-emerald-500/20 rounded-3xl overflow-hidden backdrop-blur-sm hover:border-emerald-500/50 transition-all shadow-xl"
            >
              <div className="h-64 w-full overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-emerald-400 font-bold text-sm tracking-widest uppercase">{item.company}</span>
                  <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold">{item.stats}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-emerald-400 transition-colors">{item.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{item.desc}</p>
                <div className="flex items-center text-emerald-400 font-semibold group/link">
                  Read Case Study 
                  <span className="ml-2 group-hover/link:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
