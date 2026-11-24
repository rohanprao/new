import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2, ArrowRight, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    facilityType: 'Automotive & Heavy Industry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen pt-32 pb-24 bg-[#090B10] text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#00B4D8] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <span>TECHNICAL CONSULTATION & RFP</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Schedule an On-Site{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0062FF] via-[#00B4D8] to-[#10B981]">
              Industrial Audit
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl mt-6 leading-relaxed">
            Connect directly with Cittagent's industrial IoT systems engineers. We review your machinery line specs and provide a 48-hour pilot proposal.
          </p>
        </div>
      </section>

      {/* Main Grid: Form (7 Cols) + Office Details (5 Cols) */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7 bg-[#0F121C] border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-6 text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Technical Audit Request Received
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you, <span className="font-semibold text-white">{formData.name}</span>. An industrial systems engineer from our Bengaluru center will contact you within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-slate-800 pb-4 mb-6">
                  <h3 className="text-xl font-bold text-white">
                    Request Plant Evaluation Proposal
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill out the form below or contact our engineering desk directly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-2">
                      Full Name *
                    </label>
                    <Input
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-black/50 border-slate-700 text-white rounded-xl focus:border-[#0062FF]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-2">
                      Company / Plant Name *
                    </label>
                    <Input
                      required
                      placeholder="e.g. Automotive Components Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-black/50 border-slate-700 text-white rounded-xl focus:border-[#0062FF]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-2">
                      Corporate Work Email *
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-black/50 border-slate-700 text-white rounded-xl focus:border-[#0062FF]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-2">
                      Phone Number *
                    </label>
                    <Input
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-black/50 border-slate-700 text-white rounded-xl focus:border-[#0062FF]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-2">
                    Primary Manufacturing Sector
                  </label>
                  <select
                    value={formData.facilityType}
                    onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                    className="w-full h-10 px-3 rounded-xl bg-black/50 border border-slate-700 text-white text-sm focus:border-[#0062FF] focus:outline-none"
                  >
                    <option value="Automotive & Heavy Industry">Automotive & Tier-1 Stamping/Welding</option>
                    <option value="Semiconductors & Electronics">Semiconductors, Cleanrooms & High-Tech</option>
                    <option value="Precision Metal & Heavy CNC">Precision Metal & CNC Tooling</option>
                    <option value="Food, Beverage & Cold Storage">Food & Beverage Processing / Refrigeration</option>
                    <option value="Other Manufacturing">Other Industrial Plant</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-2">
                    Scope of Interest / Machine Types
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your machinery (e.g. 4 x 150 kW Rotary Screw Compressors, 6 CNC Stamping lines) and primary challenges (air leaks, bearing wear, power tariffs)."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 rounded-xl bg-black/50 border border-slate-700 text-white text-sm focus:border-[#0062FF] focus:outline-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full py-6 rounded-xl bg-gradient-to-r from-[#0062FF] to-[#00B4D8] hover:from-[#0052CC] hover:to-[#0096C7] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all"
                >
                  Submit Pilot Evaluation Request
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            )}
          </div>

          {/* Corporate Office & Contact Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#0F121C] border border-slate-800 rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-3 text-xs font-mono font-bold text-[#0062FF] uppercase tracking-wider mb-4">
                <Building className="w-4 h-4" />
                <span>CORPORATE HEADQUARTERS</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Cittagent Technologies Private Limited
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                CIN: U72900KA2018PTC110901 • Incorporated March 2018
              </p>

              <div className="space-y-5 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Bengaluru R&D Center</span>
                    <span className="text-slate-400 text-xs leading-relaxed">
                      CA Site, 1, HAL 3rd Stage EXTN,<br />
                      behind Hotel Leela Palace, HAL 2nd Stage,<br />
                      Kodihalli, Bengaluru, Karnataka 560008, India
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#00B4D8] flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Direct Desk</span>
                    <span className="text-slate-400 text-xs">+91 90087 63311</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#00B4D8] flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Official Support</span>
                    <span className="text-slate-400 text-xs">support@cittagent.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0F121C] border border-slate-800 rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-3 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>ENTERPRISE SERVICE COMMITMENT</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>24-Hour response by certified industrial systems engineers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Non-intrusive 48-hour electrical and vibration baseline audits</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Strict mutual Non-Disclosure Agreement (NDA) guarantee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
