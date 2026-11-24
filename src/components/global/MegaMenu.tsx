import { NavSection } from '@/../content/navigation';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MegaMenuProps {
  section: NavSection;
  onClose: () => void;
}

export default function MegaMenu({ section, onClose }: MegaMenuProps) {
  if (!section.items) return null;

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-4xl pt-3 z-50">
      <div className="bg-[#0B1B3A]/98 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl grid grid-cols-12 gap-8 text-left">
        {/* Main Links Column (7 or 8 Cols) */}
        <div className={section.featured ? "col-span-8" : "col-span-12"}>
          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400 mb-4 border-b border-white/10 pb-2">
            {section.title} Architecture & Modules
          </div>
          <div className="grid grid-cols-2 gap-4">
            {section.items.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                onClick={onClose}
                className="group p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </span>
                    {item.badge && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Card Column (4 Cols) */}
        {section.featured && (
          <div className="col-span-4 bg-[#0F244C]/80 border border-white/10 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-600/30 text-blue-300 border border-blue-500/40 mb-3">
                {section.featured.tag}
              </span>
              <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                {section.featured.title}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {section.featured.description}
              </p>
            </div>

            <Link
              to={section.featured.href}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors group"
            >
              Explore Architecture
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
