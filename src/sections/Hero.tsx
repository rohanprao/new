import { useRef, useEffect, useState, memo } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring, useInView } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Activity, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const words = [
  { text: 'Factory Ops', color: 'text-gradient' },
  { text: 'Production Line', color: 'text-gradient-gold' },
  { text: 'Factory Floor', color: 'text-cyan-400' },
];

// Particle Network — purple/teal palette
const ParticleNetwork = memo(function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isInView = useInView(canvasRef, { margin: '100px' });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      colorIndex: number;
    }> = [];

    // Purple & teal colors
    const particleColors = ['rgba(124, 58, 237, 0.7)', 'rgba(6, 182, 212, 0.7)'];
    const connectionColor = (opacity: number) => `rgba(124, 58, 237, ${opacity})`;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const createParticles = () => {
      particles = [];
      const isMobile = window.innerWidth < 768;
      const particleCount = isMobile ? 8 : 15;
      const count = Math.min(particleCount, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 25000));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          colorIndex: Math.floor(Math.random() * particleColors.length),
        });
      }
    };

    const draw = () => {
      if (!isInView) {
        animationId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const opacity = (1 - dist / 150) * 0.3;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = connectionColor(opacity);
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.offsetWidth) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColors[p.colorIndex];
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    createParticles();
    draw();

    const handleResize = () => {
      resize();
      createParticles();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isInView, prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full will-change-transform"
      style={{ opacity: 0.6 }}
    />
  );
});

// Floating Card Component — purple/teal accent
function FloatingCard({
  icon: Icon,
  title,
  value,
  trend,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  trend: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="relative"
    >
      <div className="glass-enhanced rounded-2xl p-5 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-teal-500/20 flex items-center justify-center">
            <Icon className="w-5 h-5 text-purple-400" />
          </div>
          <span className="text-sm text-white/60">{title}</span>
        </div>
        <div className="text-2xl font-bold text-white mb-1">{value}</div>
        <div className="text-xs text-teal-400 flex items-center gap-1">
          <TrendingUp className="w-3 h-3" />
          {trend}
        </div>
      </div>
    </motion.div>
  );
}

import VideoModal from '@/components/VideoModal';
import videoUrl from '@/assets/video/Energy_Intelligence.mp4';

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  const bgX1 = useTransform(springX, (value) => value * 30);
  const bgY1 = useTransform(springY, (value) => value * 30);

  const bgX2 = useTransform(springX, (value) => -value * 20);
  const bgY2 = useTransform(springY, (value) => -value * 20);

  const bgX3 = useTransform(springX, (value) => value * 15);
  const bgY3 = useTransform(springY, (value) => value * 15);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    let rafId: number;
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
          const ny = (e.clientY - rect.top - rect.height / 2) / rect.height;

          if (Math.abs(x - lastX) > 0.01 || Math.abs(ny - lastY) > 0.01) {
            mouseX.set(x);
            mouseY.set(ny);
            lastX = x;
            lastY = ny;
          }
        }
        rafId = 0;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 bg-[#080810]"
    >
      {/* Background Layer */}
      <motion.div className="absolute inset-0" style={{ y, opacity }}>
        <ParticleNetwork />

        {/* Purple orb — top-left */}
        <motion.div
          className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[200px] will-change-transform"
          style={{ x: bgX1, y: bgY1 }}
        />

        {/* Teal orb — bottom-right */}
        <motion.div
          className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-[200px] will-change-transform"
          style={{ x: bgX2, y: bgY2 }}
        />

        {/* Centre accent */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[80px] will-change-transform"
          style={{ x: bgX3, y: bgY3 }}
        />
      </motion.div>

      {/* Content */}
      <div className="section-content relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column */}
          <div className="text-center lg:text-left">

            {/* Overline label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span className="label-overline">Industrial Intelligence Platform</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-white mb-6"
              style={{
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
              }}
            >
              <span className="block">Transform Your</span>
              <span className="inline-block h-[1.2em] overflow-visible whitespace-nowrap w-auto">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index].text}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className={`inline-block ${words[index].color}`}
                  >
                    {words[index].text}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="block">with AI</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="body-large text-white/60 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Harness the power of artificial intelligence to monitor, analyze, and optimize
              your industrial equipment in real-time. Reduce downtime, cut costs, and maximize efficiency.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* Primary CTA */}
              <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                <PopoverTrigger asChild>
                  <Button
                    size="lg"
                    onClick={() => {
                      setIsPopoverOpen(true);
                      setTimeout(() => setIsPopoverOpen(false), 1500);
                    }}
                    className="bg-gradient-to-r from-[#0066FF] to-[#7C3AED] hover:opacity-90 text-white border-0 px-8 py-6 text-lg font-semibold group transition-opacity"
                  >
                    Get Started Free
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-80 bg-white/95 dark:bg-[rgba(8,8,16,0.95)] backdrop-blur-xl border border-slate-200 dark:border-purple-500/20 text-slate-800 dark:text-white shadow-xl"
                  side="top"
                  sideOffset={10}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                      <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Coming Soon!</h4>
                      <p className="text-sm text-slate-600 dark:text-white/70">Free trials will be available shortly.</p>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              {/* Secondary CTA */}
              <Button
                size="lg"
                variant="outline"
                onClick={() => setIsVideoOpen(true)}
                className="border-white/25 text-white hover:bg-white/10 hover:border-white/40 px-8 py-6 text-lg font-semibold group bg-transparent"
              >
                <Play className="w-5 h-5 mr-2 text-purple-400" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { value: '99.9%', label: 'Uptime' },
                { value: '40%', label: 'Cost Reduction' },
                { value: '15 Min', label: 'Setup Time' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column — 3D Visualization */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="relative">
                {/* Rotating Rings */}
                <motion.div
                  className="relative mx-auto w-64 h-64 lg:w-80 lg:h-80 will-change-transform"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                >
                  {/* Outer Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-400/30" />

                  {/* Middle Ring */}
                  <div className="absolute inset-8 rounded-full border border-blue-500/40" />

                  {/* Inner Ring */}
                  <div className="absolute inset-16 rounded-full border-2 border-teal-500/50" />

                  {/* Center */}
                  <div className="absolute inset-24 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                    <Activity className="w-12 h-12 text-white" />
                  </div>

                  {/* Orbiting Dots */}
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-4 h-4 rounded-full will-change-transform"
                      style={{
                        top: `${50 + 45 * Math.sin((angle * Math.PI) / 180)}%`,
                        left: `${50 + 45 * Math.cos((angle * Math.PI) / 180)}%`,
                        transform: 'translate(-50%, -50%)',
                        background: i % 2 === 0 ? '#7C3AED' : '#06B6D4',
                      }}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                  ))}
                </motion.div>

                {/* Floating Cards */}
                <div className="absolute -left-4 top-0 lg:-left-8">
                  <FloatingCard
                    icon={Activity}
                    title="Live Monitoring"
                    value="2,847"
                    trend="+12.5%"
                    delay={0.5}
                  />
                </div>

                <div className="absolute -right-4 top-1/4 lg:-right-8">
                  <FloatingCard
                    icon={TrendingUp}
                    title="Efficiency"
                    value="94.2%"
                    trend="+5.3%"
                    delay={0.6}
                  />
                </div>

                <div className="absolute -left-4 bottom-0 lg:-left-8">
                  <FloatingCard
                    icon={Shield}
                    title="Alerts"
                    value="0"
                    trend="All Clear"
                    delay={0.7}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080810] to-transparent pointer-events-none" />

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoSrc={videoUrl}
      />
    </section>
  );
}
