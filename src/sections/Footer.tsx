import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Youtube,
  ArrowRight,
  Shield,
  FileText,
  HelpCircle,
  Building2,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';
import ImageLoader from '@/components/ImageLoader';

const footerLinks = {
  solutions: [
    { name: 'Downtime Prevention', href: '/solutions' },
    { name: 'Energy & Utility Intelligence', href: '/solutions' },
    { name: 'Compressed Air Audit', href: '/solutions' },
    { name: 'Shop-Floor OEE Tracking', href: '/solutions' },
  ],
  products: [
    { name: 'Hardware Sensor Nodes', href: '/products' },
    { name: 'Edge-Sentinel Gateway', href: '/products' },
    { name: 'Neural Diagnostics Engine', href: '/products' },
    { name: 'Operations Control Room', href: '/products' },
  ],
  industries: [
    { name: 'Automotive & Tier-1', href: '/industries' },
    { name: 'Semiconductors & Cleanrooms', href: '/industries' },
    { name: 'Precision CNC & Metal', href: '/industries' },
    { name: 'Food & Beverage', href: '/industries' },
  ],
  company: [
    { name: 'About Cittagent', href: '/about-us' },
    { name: 'Technical Insights', href: '/insights' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partnerships', href: '/partnerships' },
    { name: 'Contact & RFP', href: '/contact' },
  ],
};

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <footer
      ref={containerRef}
      id="contact-footer"
      className="relative pt-24 pb-12 bg-[#05060A] text-white border-t border-slate-800"
    >
      <div className="section-content max-w-7xl mx-auto px-6 relative z-10">
        {/* Executive Banner */}
        <div className="rounded-3xl border border-slate-800 bg-[#0A0D15] p-8 md:p-14 mb-20 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#00B4D8] text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <span>PILOT ASSESSMENT INITIATION</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Begin Your Plant’s 48-Hour Baseline Electrical & Vibration Audit
            </h2>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed">
              Non-invasive, clamp-on sensors deployed without production stoppage. Receive verified energy waste calculations and machine health analysis.
            </p>
          </div>

          <Link
            to="/contact"
            className="flex-shrink-0 px-8 py-4 rounded-xl bg-[#0062FF] hover:bg-[#0052CC] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2"
          >
            Schedule Assessment
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 5-Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-20 text-xs">
          {/* Brand Info (2 Cols) */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="h-10 w-auto flex items-center">
                <ImageLoader
                  src={logo}
                  alt="Cittagent Technologies Logo"
                  priority={true}
                  className="h-9 w-auto object-contain"
                  style={{ filter: 'brightness(1.8)' }}
                />
              </div>
              <div className="flex flex-col border-l border-slate-700 pl-3">
                <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                  CITTAGENT
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  Technologies Private Limited
                </span>
              </div>
            </Link>

            <p className="text-slate-400 leading-relaxed text-xs mb-6 max-w-sm">
              Industrial AI and IoT systems engineering company. Developers of the FactoryOps mission-critical manufacturing operations platform.
            </p>

            <div className="space-y-2.5 text-slate-400 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                <span>
                  CA Site 1, HAL 3rd Stage Extn, behind Hotel Leela Palace, Kodihalli, Bengaluru, Karnataka 560008, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00B4D8] flex-shrink-0" />
                <span>+91 90087 63311</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00B4D8] flex-shrink-0" />
                <span>support@cittagent.com</span>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-white font-mono font-bold uppercase tracking-wider mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              {footerLinks.solutions.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-slate-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-white font-mono font-bold uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-2.5">
              {footerLinks.products.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-slate-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h4 className="text-white font-mono font-bold uppercase tracking-wider mb-4">Industries</h4>
            <ul className="space-y-2.5">
              {footerLinks.industries.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-slate-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-mono font-bold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-slate-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Cittagent Technologies Private Limited. All rights reserved. CIN: U72900KA2018PTC110901.
          </p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400 font-mono">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              IEC 62443 Cyber-Compliant Architecture
            </span>
            <span className="font-mono">ISO 50001 Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
