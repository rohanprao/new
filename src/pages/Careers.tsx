import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function Careers() {
  return (
    <div className="w-full min-h-screen pt-32 pb-24 relative z-10 flex flex-col items-center">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 w-full text-center mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Do the best work of <br/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
            your career.
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 max-w-2xl mx-auto text-xl leading-relaxed"
        >
          Join a passionate team dedicated to solving complex hardware and software challenges. We're looking for builders, thinkers, and innovators.
        </motion.p>
      </section>

      {/* Perks & Benefits */}
      <section className="max-w-7xl mx-auto px-6 w-full mb-32">
        <h2 className="text-3xl font-bold text-white text-center mb-16">Why Work With Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Remote-First Culture', desc: 'Work from anywhere. We provide a home office stipend to set you up for success.' },
            { title: 'Health & Wellness', desc: 'Comprehensive medical, dental, and vision coverage for you and your dependents.' },
            { title: 'Unlimited PTO', desc: 'We trust you to manage your time. Take the time you need to recharge and relax.' },
            { title: 'Learning Stipend', desc: '$2,000 annual budget for courses, conferences, and books to fuel your growth.' },
            { title: 'Equity Package', desc: 'Every employee gets equity. We want you to be an owner in what we build together.' },
            { title: 'Team Retreats', desc: 'Twice a year, we fly the entire company to a beautiful location to connect and plan.' }
          ].map((perk, i) => (
            <div key={i} className="bg-[#020c1b]/80 border border-slate-800 rounded-2xl p-8 backdrop-blur-md hover:border-emerald-500/30 transition-colors">
              <h3 className="text-xl font-semibold text-slate-200 mb-3">{perk.title}</h3>
              <p className="text-slate-400 leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="max-w-5xl mx-auto px-6 w-full text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Open Positions</h2>
        <div className="bg-[#020c1b]/80 border border-slate-800 rounded-3xl p-12 backdrop-blur-md">
          <div className="w-16 h-16 bg-slate-800/50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Briefcase className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-2xl font-semibold text-slate-200 mb-3">No Openings Right Now</h3>
          <p className="text-slate-400 max-w-lg mx-auto mb-8">
            We currently don't have any open positions, but we're always on the lookout for talented individuals. Check back later or send us your resume!
          </p>
          <button className="px-8 py-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full font-medium hover:bg-emerald-500/20 transition-all">
            Submit General Application
          </button>
        </div>
      </section>
    </div>
  );
}
