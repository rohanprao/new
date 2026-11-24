import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, BookOpen, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  {
    category: 'TECHNICAL WHITEPAPER',
    title: 'Deconstructing Compressed Air Inefficiencies: FFT Acoustic Leak Triage at 40 kHz',
    desc: 'An in-depth engineering study examining how high-frequency ultrasonic microphones isolate turbulent orifice air flows from background mechanical plant resonance.',
    date: 'November 2026',
    author: 'Cittagent Engineering Group',
    readTime: '12 min read'
  },
  {
    category: 'OPERATIONAL PLAYBOOK',
    title: 'ISO 50001 Energy Management: Implementing Continuous Electrical Telemetry',
    desc: 'A step-by-step framework for plant directors seeking measurable Scope 1 and Scope 2 carbon abatement via real-time motor harmonic tracking.',
    date: 'October 2026',
    author: 'Industrial IoT Systems Practice',
    readTime: '9 min read'
  },
  {
    category: 'CASE REPORT',
    title: 'Zero Unplanned Outages in Cleanroom Compressors: A 18-Month Case Analysis',
    desc: 'Detailed telemetry telemetry logs demonstrating how predictive vibration acceleration enveloping detected inner-race bearing spalls 11 days prior to mechanical seizure.',
    date: 'September 2026',
    author: 'Reliability Engineering Group',
    readTime: '15 min read'
  },
  {
    category: 'CYBERSECURITY BRIEF',
    title: 'IEC 62443 Compliance Architecture for Air-Gapped Industrial Edge Gateways',
    desc: 'How to deploy third-party IoT gateways across sensitive OT manufacturing subnets without compromising perimeter firewalls or risking plant network breach.',
    date: 'August 2026',
    author: 'Cittagent Security Practice',
    readTime: '8 min read'
  }
];

export default function Insights() {
  const [filter, setFilter] = useState('ALL');

  return (
    <div className="w-full min-h-screen pt-32 pb-24 bg-[#090B10] text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#00B4D8] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <span>TECHNICAL INSIGHTS & WHITE PAPERS</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Industrial Engineering{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0062FF] via-[#00B4D8] to-[#10B981]">
              Knowledge Base
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl mt-6 leading-relaxed">
            Peer-reviewed technical playbooks, empirical sensor research, and field-tested frameworks authored by industrial automation specialists.
          </p>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-28">
        {articles.map((art, i) => (
          <motion.div
            key={art.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-8 md:p-10 rounded-3xl border border-slate-800 bg-[#0F121C] shadow-2xl flex flex-col justify-between hover:border-slate-700 transition-all"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono font-bold text-[#0062FF] uppercase tracking-wider mb-4">
                <span>{art.category}</span>
                <span className="text-slate-500">{art.readTime}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug">
                {art.title}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                {art.desc}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <div>
                <span className="font-semibold text-slate-400">{art.author}</span>
                <span className="block text-[11px] text-slate-500">{art.date}</span>
              </div>
              <button className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00B4D8] hover:text-white transition-colors">
                Read Publication <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
