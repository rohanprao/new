import { motion } from 'framer-motion';
import { Users, Target, Shield, Zap } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="w-full min-h-screen pt-32 pb-24 relative z-10 flex flex-col items-center">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 w-full text-center mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Building the Future of <br/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Manufacturing
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 max-w-3xl mx-auto text-xl leading-relaxed"
        >
          Founded in 2023, FactoryOps is on a mission to bring modern software engineering principles to the factory floor. We build intuitive, powerful tools that help manufacturers optimize their operations in real-time.
        </motion.p>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-8 mb-32">
        <div className="bg-[#020c1b]/80 border border-cyan-500/20 rounded-3xl p-10 backdrop-blur-md">
          <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
            <Target className="w-7 h-7 text-blue-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            To eliminate unplanned downtime and empower plant managers with actionable, real-time data that drives efficiency and sustainability across all manufacturing sectors.
          </p>
        </div>
        <div className="bg-[#020c1b]/80 border border-purple-500/20 rounded-3xl p-10 backdrop-blur-md">
          <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6">
            <Zap className="w-7 h-7 text-purple-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            A world where every machine communicates seamlessly, and manufacturing facilities operate at absolute peak performance with zero waste.
          </p>
        </div>
      </section>


    </div>
  );
}
