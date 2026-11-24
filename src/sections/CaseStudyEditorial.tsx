import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, DollarSign, Clock, ShieldCheck, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 'case-automotive',
    sector: 'AUTOMOTIVE TIER-1 POWERTRAIN',
    title: 'Eliminating 40% Unplanned Line Downtime on Robotic Stamping Cells',
    clientProfile: 'Major Tier-1 automotive transmission component supplier running 6 high-speed automated stamping and welding lines.',
    problem: 'Intermittent pressure drops in the centralized compressed air line triggered repeated robotic cell emergency stops, costing approximately $4,200 per idle line hour.',
    solution: 'Cittagent deployed 28 non-intrusive current, vibration, and ultrasonic sensors across 4 rotary screw compressors and critical distribution headers in less than 3 hours with zero line stoppage.',
    results: [
      { metric: '40% Downtime Cut', desc: 'Identified 12 persistent micro-leaks within 48 hours of telemetry' },
      { metric: '22% Idle Power Saved', desc: 'Eliminated uncoordinated compressor load cycling' },
      { metric: '68 Days Payback', desc: 'Hardware, software, and integration cost fully amortized' }
    ],
    verifiedBy: 'Plant Maintenance Manager, Tier-1 Automotive Facility'
  },
  {
    id: 'case-electronics',
    sector: 'PRECISION ELECTRONICS & CLEANROOM',
    title: 'Zero-Defect Cleanroom Chiller & Compressor Reliability via FFT Acoustics',
    clientProfile: 'High-density PCB and semiconductor fabrication facility operating ISO Class-100 cleanroom chambers.',
    problem: 'Air compressor bearing degradation previously went unnoticed until catastrophic failure occurred, risking cleanroom contamination and million-dollar production batch write-offs.',
    solution: 'Installed FactoryOps continuous 25.6 kHz vibration telemetry and automated spectral harmonic analysis directly integrated with the plant’s scada monitoring system.',
    results: [
      { metric: 'Zero Outages in 18 Mos', desc: 'Continuous operation maintained across all cleanroom chambers' },
      { metric: '11 Days Early Warning', desc: 'Inner-race bearing spall detected and replaced during scheduled shift' },
      { metric: '100% ISO Compliance', desc: 'Audited energy and vibration records delivered for quality certification' }
    ],
    verifiedBy: 'Plant Engineering Manager, Electronics Assembly Facility'
  }
];

export default function CaseStudyEditorial() {
  return (
    <section id="case-studies" className="w-full py-28 bg-[#FFFFFF] text-slate-900 border-t border-slate-200">
      <div className="section-content max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>MEASURABLE INDUSTRIAL ROI</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Verified Plant Performance{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0062FF] to-[#10B981]">
                Case Studies
              </span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg mt-4 leading-relaxed">
              Every deployment is backed by measurable electrical meter verification, vibration baseline analysis, and verified OEE uptime improvements.
            </p>
          </div>

          <Link
            to="/case-studies"
            className="self-start md:self-auto inline-flex items-center gap-2 text-sm font-bold text-[#0062FF] hover:text-[#0052CC] transition-colors group"
          >
            Read All Technical Case Studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 2-Column Comprehensive Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-[#F8F9FC] rounded-3xl border border-slate-200 p-8 md:p-12 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Meta Sector Tag */}
                <div className="text-xs font-mono font-bold text-[#0062FF] uppercase tracking-wider mb-3">
                  {cs.sector}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight leading-snug mb-4">
                  {cs.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium mb-6">
                  {cs.clientProfile}
                </p>

                {/* Problem vs Solution Editorial Split */}
                <div className="space-y-4 mb-8 text-sm">
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <span className="text-xs font-mono font-bold uppercase text-red-600 block mb-1">
                      The Operational Problem
                    </span>
                    <p className="text-slate-600 leading-relaxed text-xs">
                      {cs.problem}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <span className="text-xs font-mono font-bold uppercase text-emerald-600 block mb-1">
                      The Engineering Solution
                    </span>
                    <p className="text-slate-600 leading-relaxed text-xs">
                      {cs.solution}
                    </p>
                  </div>
                </div>

                {/* Verified Metrics Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                  {cs.results.map((r, ri) => (
                    <div key={ri} className="p-4 rounded-xl bg-white border border-slate-200 text-center sm:text-left">
                      <div className="text-lg font-black text-slate-900 font-mono text-[#0062FF]">
                        {r.metric}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1 leading-snug">
                        {r.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-700 italic">
                  "{cs.verifiedBy}"
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
