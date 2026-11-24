import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Youtube,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { footerColumns } from '@/../content/navigation';
import { siteConfig } from '@/../content/site-config';
import logoBrand from '@/assets/cittagent-logo-clean-white.png';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-[#0B1B3A] text-white border-t border-white/10 pt-20 pb-12 overflow-hidden cyan-glow-line">
      <div className="max-w-content mx-auto px-6">
        {/* Newsletter & Executive Briefing Strip */}
        <div className="rounded-2xl border border-white/10 bg-[#0F244C]/60 p-8 md:p-12 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-md">
          <div className="max-w-xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400 block mb-2">
              INDUSTRIAL INTELLIGENCE BRIEFING
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Get peer-reviewed FFT acoustics and ISO 50001 playbooks
            </h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Curated by Cittagent’s industrial IoT systems engineers. Delivered once monthly to plant managers and energy directors.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Subscribed to engineering briefs. Welcome!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter corporate work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-navy-950/80 border border-white/15 text-white placeholder:text-slate-400 text-xs focus:border-cyan-400 focus:outline-none min-w-[280px]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 6-Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16 text-xs">
          {/* Brand Col (2 Cols) */}
          <div className="col-span-2">
            <Link to="/" className="inline-block mb-5 group" aria-label="Cittagent Technologies Home">
              <img
                src={logoBrand}
                alt="CittAgent Technologies"
                className="h-9 sm:h-10 w-auto object-contain transition-opacity group-hover:opacity-90"
              />
            </Link>

            <p className="text-slate-300 text-xs leading-relaxed mb-6 max-w-sm">
              Industrial AI and sensor engineering company. Developers of the FactoryOps mission-critical manufacturing operations platform.
            </p>

            {/* Verified Bangalore HQ Coordinates */}
            <div className="space-y-2.5 text-slate-300 text-xs mb-6">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {siteConfig.contact.address}, {siteConfig.contact.city}, {siteConfig.contact.state} {siteConfig.contact.postalCode}, {siteConfig.contact.country}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="font-mono">{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{siteConfig.contact.supportEmail}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Cittagent LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Cittagent Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Cittagent YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Dynamic Navigation Columns */}
          {footerColumns.slice(0, 4).map((col) => (
            <div key={col.title}>
              <h4 className="font-mono font-bold uppercase tracking-wider text-white mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications Row [REPLACE] */}
        <div className="py-6 border-y border-white/10 mb-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2 font-mono text-cyan-400">
            <ShieldCheck className="w-4 h-4" />
            <span>ENTERPRISE COMPLIANCE BENCHMARKS:</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 font-mono text-[11px]">
            {siteConfig.certifications.map((cert) => (
              <span key={cert} className="px-3 py-1 rounded bg-white/5 border border-white/10">
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Cittagent Technologies Private Limited. All rights reserved. CIN: U72900KA2018PTC110901.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/legal/cookies" className="hover:text-white transition-colors">Cookie Preferences</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
