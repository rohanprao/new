import { motion } from 'framer-motion';
import { Building, Target, Shield, Zap, Award, CheckCircle2, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <div className="w-full min-h-screen pt-32 pb-24 bg-[#090B10] text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#00B4D8] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <span>ABOUT CITTAGENT TECHNOLOGIES</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Engineering the Digital Operating System for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0062FF] via-[#00B4D8] to-[#10B981]">
              Mission-Critical Industry
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl mt-6 leading-relaxed">
            Headquartered in Bengaluru, Cittagent Technologies Private Limited delivers non-intrusive industrial IoT hardware and artificial intelligence platforms that eliminate unplanned machine downtime and reduce industrial energy waste.
          </p>
        </div>
      </section>

      {/* Corporate Overview Grid */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
        <div className="p-8 rounded-3xl border border-slate-800 bg-[#0F121C]">
          <div className="w-12 h-12 rounded-xl bg-[#0062FF]/15 border border-[#0062FF]/30 flex items-center justify-center mb-6 text-[#0062FF]">
            <Building className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Enterprise Heritage</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Incorporated in March 2018 in Bengaluru, India, Cittagent was founded with a singular focus: solving the pervasive mechanical and energy blindspots across heavy manufacturing machinery.
          </p>
        </div>

        <div className="p-8 rounded-3xl border border-slate-800 bg-[#0F121C]">
          <div className="w-12 h-12 rounded-xl bg-[#00B4D8]/15 border border-[#00B4D8]/30 flex items-center justify-center text-[#00B4D8] mb-6">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">The Zero-Downtime Mission</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            We reject the notion that complex machinery must fail unexpectedly. By pairing continuous 25.6 kHz vibration sensing with neural models, we provide plant teams with 10–14 days of fault lead time.
          </p>
        </div>

        <div className="p-8 rounded-3xl border border-slate-800 bg-[#0F121C]">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Industrial Security (IEC 62443)</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Our edge systems are engineered with physical hardware air-gapping and zero inbound firewall ports, keeping proprietary plant automation and SCADA networks strictly isolated.
          </p>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="max-w-7xl mx-auto px-6 mb-28">
        <div className="p-10 md:p-14 rounded-3xl border border-slate-800 bg-[#0F121C]">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-3">
              Our Core Engineering Commitments
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Every system built by Cittagent adheres to three non-negotiable operational tenets:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <span className="text-3xl font-mono font-black text-slate-700">01</span>
              <h4 className="text-lg font-bold text-white">Zero Production Line Disruption</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Sensor deployment takes under 15 minutes per asset. We clip around conductors and magnetically couple to motor casings—no electrical shutoffs, no PLC re-coding.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-3xl font-mono font-black text-slate-700">02</span>
              <h4 className="text-lg font-bold text-white">Audited & Verified Electrical ROI</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                We never ask clients to believe theoretical savings. Every dollar saved on compressed air or motor idling is empirically verified with calibrated power meters.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-3xl font-mono font-black text-slate-700">03</span>
              <h4 className="text-lg font-bold text-white">Hardware Agnosticism</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Whether monitoring 30-year-old Atlas Copco compressors or state-of-the-art Fanuc robotic milling centers, our protocol bridges seamlessly harmonize all machine dialects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bengaluru R&D Facility Banner */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="p-8 md:p-12 rounded-3xl border border-slate-800 bg-gradient-to-r from-[#0F121C] to-[#121626] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#00B4D8] uppercase tracking-wider mb-2">
              <MapPin className="w-4 h-4" />
              <span>BENGALURU ADVANCED INDUSTRIAL R&D CENTER</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Visit Our Engineering & Testing Laboratory
            </h3>
            <p className="text-slate-300 text-sm max-w-xl leading-relaxed">
              CA Site 1, HAL 3rd Stage Extn, behind Hotel Leela Palace, Kodihalli, Bengaluru 560008. Experience live hardware stress-testing and sensor calibration.
            </p>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 px-8 py-4 rounded-xl bg-[#0062FF] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#0052CC] transition-all"
          >
            Arrange a Corporate Visit
          </Link>
        </div>
      </section>
    </div>
  );
}
