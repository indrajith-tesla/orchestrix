import { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Eye, Layers, ArrowDown, Cpu } from 'lucide-react';
import PosterModal from './PosterModal';
import CorePhilosophyModal from './CorePhilosophyModal';

const orbs = [
  { left: '8%',  top: '22%', size: 520, color: 'rgba(124,58,237,0.13)', blur: 130, dur: 9,  delay: 0 },
  { left: '72%', top: '58%', size: 400, color: 'rgba(139,92,246,0.09)', blur: 110, dur: 13, delay: 1.8 },
  { left: '42%', top: '88%', size: 560, color: 'rgba(109,40,217,0.07)', blur: 150, dur: 16, delay: 0.9 },
  { left: '87%', top: '10%', size: 290, color: 'rgba(167,139,250,0.06)', blur: 85,  dur: 11, delay: 2.6 },
];

const TITLE = 'OrchestriX.';

export default function Hero() {
  const [visionOpen, setVisionOpen] = useState(false);
  const [philosophyOpen, setPhilosophyOpen] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { stiffness: 35, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 35, damping: 20 });
  const orbX   = useTransform(smoothX, [0, 1], [-28, 28]);
  const orbY   = useTransform(smoothY, [0, 1], [-16, 16]);
  const imgX   = useTransform(smoothX, [0, 1], [10, -10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - r.left) / r.width);
    mouseY.set((e.clientY - r.top) / r.height);
  };

  return (
    <section
      className="relative h-screen flex items-center overflow-hidden bg-[#050816] font-sans"
      onMouseMove={handleMouseMove}
    >
      {/* Noise + grid */}
      <div className="noise-texture" />
      <div className="absolute inset-0 z-0 architectural-grid opacity-[0.14]" />

      {/* Parallax ambient orbs */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ x: orbX, y: orbY }}>
        {orbs.map((o, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: o.left, top: o.top,
              width: o.size, height: o.size,
              background: o.color,
              filter: `blur(${o.blur}px)`,
              translateX: '-50%', translateY: '-50%',
            }}
            animate={{ scale: [1, 1.13, 0.92, 1], opacity: [0.7, 1, 0.6, 0.7] }}
            transition={{ duration: o.dur, repeat: Infinity, ease: 'easeInOut', delay: o.delay }}
          />
        ))}
      </motion.div>

      {/* Right background image — parallax shift */}
      <div className="absolute top-0 right-0 w-[55%] h-full overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-[0.22] grayscale"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            x: imgX,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#050816]/55 to-[#050816]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-[#050816]/25" />
      </div>

      {/* Slow horizontal scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.18) 20%, rgba(167,139,250,0.32) 50%, rgba(139,92,246,0.18) 80%, transparent)',
          boxShadow: '0 0 12px 2px rgba(139,92,246,0.08)',
        }}
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
      />

      {/* ── Top-right metadata ── */}
      <motion.div
        className="absolute top-0 right-0 hidden lg:flex items-center gap-4 px-12 py-6 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="font-mono text-[9px] text-slate-700 uppercase tracking-widest">SYS: NOMINAL</span>
        <span className="text-slate-700 text-xs">·</span>
        <span className="font-mono text-[9px] text-slate-700 uppercase tracking-widest">ORX // 2026</span>
      </motion.div>

      {/* ── Vertical side text ── */}
      <div className="absolute right-7 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 z-10">
        <div className="w-px h-20 bg-gradient-to-b from-transparent to-white/8" />
        <span
          className="text-[8px] font-mono tracking-[0.55em] text-slate-700 uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          ORCHESTRIX — ENGINEERING STUDIO
        </span>
        <div className="w-px h-20 bg-gradient-to-t from-transparent to-white/8" />
      </div>

      {/* ── Bottom-right available badge ── */}
      <motion.div
        className="absolute bottom-10 right-8 hidden lg:flex items-center gap-3 z-10"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="text-[10px] font-mono uppercase tracking-[0.28em] text-slate-500">
          Available for projects
        </span>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10 group hidden sm:flex"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[9px] font-mono uppercase tracking-[0.35em] text-slate-700 group-hover:text-slate-500 transition-colors duration-300">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-3.5 h-3.5 text-slate-700 group-hover:text-slate-500 transition-colors duration-300" />
        </motion.div>
      </motion.button>

      {/* ══════════════ Main content ══════════════ */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-24">
        <div className="max-w-4xl">

          {/* Badge */}
          <motion.div
            className="flex items-center gap-3 mb-8 sm:mb-10"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 backdrop-blur-sm">
              <Layers className="w-3 h-3 text-violet-400" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-violet-300">
                Engineering Studio
              </span>
            </div>
          </motion.div>

          {/* Title — per-character entrance */}
          <div className="overflow-hidden mb-5">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.95]">
              {TITLE.split('').map((char, i) => (
                <motion.span
                  key={i}
                  className={char === 'X' ? 'text-shimmer' : 'text-white'}
                  style={{ display: 'inline-block' }}
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.72, delay: 0.38 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Subtitle */}
          <motion.div
            className="flex items-center gap-5 sm:gap-7 mb-6 sm:mb-7"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 1.02, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="h-[2px] w-16 sm:w-24 bg-gradient-to-r from-violet-500 to-transparent shrink-0" />
            <p className="text-base sm:text-xl md:text-2xl font-medium text-slate-300">
              Beyond standard development.
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-sm sm:text-lg text-slate-400 font-light leading-relaxed max-w-xl mb-10 sm:mb-14"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.16, ease: [0.16, 1, 0.3, 1] }}
          >
            A high-end architectural engineering practice crafting elite digital artifacts
            that define the next decade of product excellence.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.36, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              onClick={() => setVisionOpen(true)}
              className="group flex items-center gap-4 sm:gap-5 text-white bg-transparent border-none cursor-pointer"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 flex items-center justify-center shrink-0 overflow-hidden transition-all duration-500 group-hover:border-violet-400/50">
                <div className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full origin-center" />
                <Eye className="w-5 h-5 relative z-10 text-white group-hover:text-black transition-colors duration-300" />
              </div>
              <div className="space-y-1 text-left">
                <span className="block text-sm font-bold uppercase tracking-widest group-hover:text-violet-300 transition-colors duration-300">
                  Our Vision
                </span>
                <span className="block text-[10px] text-slate-500 uppercase tracking-widest">See What Drives Us</span>
              </div>
            </button>

            <div className="hidden sm:block w-px h-10 self-center" style={{ background: 'rgba(255,255,255,0.07)' }} />

            <button
              onClick={() => setPhilosophyOpen(true)}
              className="group flex items-center gap-4 sm:gap-5 text-white bg-transparent border-none cursor-pointer"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 flex items-center justify-center shrink-0 overflow-hidden transition-all duration-500 group-hover:border-violet-400/50">
                <div className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full origin-center" />
                <Cpu className="w-5 h-5 relative z-10 text-white group-hover:text-black transition-colors duration-300" />
              </div>
              <div className="space-y-1 text-left">
                <span className="block text-sm font-bold uppercase tracking-widest group-hover:text-violet-300 transition-colors duration-300">
                  Core Philosophy
                </span>
                <span className="block text-[10px] text-slate-500 uppercase tracking-widest">How We Build</span>
              </div>
            </button>
          </motion.div>

        </div>
      </div>

      {/* Bottom edge glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none z-10"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(109,40,217,0.3) 35%, rgba(139,92,246,0.5) 50%, rgba(109,40,217,0.3) 65%, transparent)',
        }}
      />

      {/* Large ambient blobs */}
      <div
        className="absolute -bottom-1/3 -left-1/4 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'rgba(124,58,237,0.07)', filter: 'blur(120px)' }}
      />
      <div
        className="absolute -top-1/4 -right-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'rgba(59,130,246,0.04)', filter: 'blur(100px)' }}
      />

      <PosterModal
        isOpen={visionOpen}
        onClose={() => setVisionOpen(false)}
        src="/images/our_vision.png"
        alt="OrchestriX Vision"
        title="Our Vision"
      />
      <CorePhilosophyModal
        isOpen={philosophyOpen}
        onClose={() => setPhilosophyOpen(false)}
      />
    </section>
  );
}
