import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { homeContent } from '@/../content/home';
import VideoModal from '@/components/VideoModal';
import videoSrc from '@/assets/video/Energy_Intelligence.mp4';
import cncLaserVideo from '@/assets/video/cnc_laser_cutting.mp4';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { hero } = homeContent;

  useEffect(() => {
    if (prefersReducedMotion && videoRef.current) {
      videoRef.current.pause();
    }
  }, [prefersReducedMotion]);

  return (
    <section className="relative w-full min-h-[92vh] flex flex-col justify-between pt-36 pb-16 md:pt-44 md:pb-20 bg-[#0B1B3A] text-white overflow-hidden border-b border-white/10">

      {/* 1. Real Industrial Machine Laser Cutting Video Background */}
      <div className="absolute top-0 right-0 w-full lg:w-[60%] xl:w-[54%] h-full overflow-hidden pointer-events-none select-none">
        <video
          ref={videoRef}
          autoPlay={!prefersReducedMotion}
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-[center_40%] opacity-90 transition-opacity duration-700 filter contrast-110 brightness-100"
          src={cncLaserVideo}
        />
        {/* Left-edge smooth fade into dark navy text section */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-44 xl:w-64 bg-gradient-to-r from-[#0B1B3A] via-[#0B1B3A]/70 to-transparent" />
        {/* Top fade into sticky navbar */}
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#0B1B3A] to-transparent" />
        {/* Bottom fade into live-stats bar */}
        <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#0B1B3A] to-transparent" />
      </div>

      {/* Mobile scrim overlay for contrast */}
      <div className="lg:hidden absolute inset-0 bg-[#0B1B3A]/80 pointer-events-none" />

      {/* 2. Blueprint Grid Line Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      {/* 3. Hero Content Container */}
      <div className="relative z-10 max-w-content mx-auto px-6 w-full my-auto">
        <div className="max-w-3xl space-y-8 text-left">

          {/* Compliance & Security Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#08162B]/80 border border-cyan-500/30 backdrop-blur-md shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[11px] font-mono font-medium tracking-wider text-cyan-300 uppercase">
              {hero.badge}
            </span>
          </motion.div>

          {/* Main Editorial Headline (< 10 words, display scale) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.06] drop-shadow-md"
          >
            Transform your<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              production line
            </span>{' '}
            with AI
          </motion.h1>

          {/* Concise Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed max-w-2xl font-normal drop-shadow"
          >
            {hero.subheadline}
          </motion.p>

          {/* Action Group: Amber Primary CTA + Outline Video Modal Trigger */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            {/* Primary Amber CTA Button */}
            <Link
              to={hero.ctaPrimary.href}
              className="btn-primary-amber inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-200 group"
            >
              <span>{hero.ctaPrimary.text}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Secondary Video Modal Button */}
            <button
              type="button"
              onClick={() => setIsVideoOpen(true)}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-medium text-sm text-slate-200 border border-white/20 bg-[#0B1B3A]/60 hover:bg-[#0B1B3A]/90 hover:text-white transition-all duration-200 backdrop-blur-md cursor-pointer group"
            >
              <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              <span>{hero.ctaSecondary.text}</span>
            </button>
          </motion.div>

          {/* Deployment Guarantees Micro-Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-4 text-xs font-mono text-slate-300 border-t border-white/10"
          >
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Zero Production Line Halts</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Non-Intrusive Clip-on Sensors</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>15-Minute Install</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* 4. Live-Stats Strip Beneath Hero */}
      <div className="relative z-10 max-w-content mx-auto px-6 w-full pt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {hero.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#08152C]/75 border border-white/10 backdrop-blur-md hover:border-cyan-500/40 transition-colors group cursor-default"
            >
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl lg:text-4xl font-mono font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                  {stat.value}
                </span>
              </div>
              <span className="block mt-1 text-xs font-semibold uppercase tracking-wider text-slate-300">
                {stat.label}
              </span>
              {stat.detail && (
                <span className="block mt-1 text-[11px] font-mono text-slate-400">
                  {stat.detail}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Video Modal Component (for user when clicking "Watch 2-Min Demo") */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoSrc={videoSrc}
      />
    </section>
  );
}
