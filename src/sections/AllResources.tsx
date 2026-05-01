import { motion } from 'framer-motion';

const resources = [
  {
    title: 'Industrial IoT Best Practices',
    desc: 'A comprehensive guide on deploying IoT sensors across factory floors efficiently.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Guide'
  },
  {
    title: 'Predictive Maintenance Whitepaper',
    desc: 'Learn how AI can predict machine failures before they happen, saving millions in downtime.',
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Whitepaper'
  },
  {
    title: 'Smart Factory Security',
    desc: 'Ensuring your factory remains secure while connected to the global network.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Security'
  }
];

export default function AllResources() {
  return (
    <section id="all-resources" className="w-full min-h-screen pt-32 pb-24 relative z-10 flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-6 w-full text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6"
        >
          All Resources
        </motion.h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-12">
          Explore our comprehensive library of guides, whitepapers, and documentation designed to help you succeed.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {resources.map((resource, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer bg-slate-900/50 border border-cyan-500/20 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-cyan-500/50 transition-all hover:-translate-y-2"
            >
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={resource.img} 
                  alt={resource.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2 block">{resource.category}</span>
                <h3 className="text-xl font-semibold text-slate-200 mb-2 group-hover:text-cyan-400 transition-colors">{resource.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{resource.desc}</p>
                <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium">
                  Download Now <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
