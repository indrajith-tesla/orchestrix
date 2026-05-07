import { useState, useRef, useLayoutEffect } from 'react';
import { Globe, Smartphone, Sparkles } from 'lucide-react';
import { motion, PanInfo } from 'framer-motion';

const solutions = [
  {
    icon: Globe,
    title: 'Building Web Applications',
    line: 'Modern, fast and beautiful websites that help you attract customers and grow online.',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    line: 'We build easy to use mobile apps that work smoothly on both Android and iPhone.',
    image: 'https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Sparkles,
    title: 'Generative & Agentic AI',
    line: 'AI that can create content, answer questions, automate workflows, and act independently to complete tasks for you.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const spring = { type: 'spring' as const, stiffness: 260, damping: 28, mass: 0.85 };
const carouselSpring = { type: 'spring' as const, stiffness: 320, damping: 32, mass: 0.75 };

export default function Solutions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (trackRef.current) setCardWidth(trackRef.current.offsetWidth);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -40 && activeIndex < solutions.length - 1) {
      setActiveIndex(i => i + 1);
    } else if (info.offset.x > 40 && activeIndex > 0) {
      setActiveIndex(i => i - 1);
    }
  };

  return (
    <section id="solutions" className="py-12 sm:py-16 relative overflow-hidden">
      <div className="absolute inset-0 architectural-grid opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-8 sm:mb-10 px-4 sm:px-6"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={spring}
        >
          <span className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.24em] text-violet-200">
            Our craft
          </span>
          <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight px-2 text-white">
            What we're unusually good at.
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-300 px-2">
            Crafting digital excellence through three core pillars of modern engineering.
          </p>
        </motion.div>

        {/* ── Mobile swipe carousel (sm and below) ── */}
        <div ref={trackRef} className="sm:hidden overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: cardWidth ? -activeIndex * cardWidth : 0 }}
            transition={carouselSpring}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.08}
            onDragEnd={handleDragEnd}
            style={{ touchAction: 'pan-y' }}
          >
            {solutions.map((solution, i) => {
              const Icon = solution.icon;
              return (
                <div
                  key={i}
                  style={{ width: cardWidth || '100%' }}
                  className="flex-none px-4"
                >
                  <div className="relative overflow-hidden border border-white/8 bg-white/[0.02]">
                    {/* Image — always visible on mobile */}
                    <div className="relative h-44 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-60 scale-105"
                        style={{ backgroundImage: `url(${solution.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07071a] via-[#07071a]/40 to-transparent" />
                      {/* Corner accent */}
                      <div className="absolute top-3 right-3 w-5 h-5">
                        <div className="absolute top-0 right-0 w-3 h-px bg-violet-500/40" />
                        <div className="absolute top-0 right-0 w-px h-3 bg-violet-500/40" />
                      </div>
                      {/* Slide counter badge */}
                      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2 py-0.5 border border-white/10 bg-black/40">
                        <span className="text-[8px] font-mono text-violet-400/70 tracking-widest">
                          {String(i + 1).padStart(2, '0')} / {String(solutions.length).padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-5 pt-5 pb-6 space-y-4">
                      <div className="flex h-10 w-10 items-center justify-center border border-violet-500/30 bg-violet-500/8">
                        <Icon className="w-5 h-5 text-violet-400" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                          {solution.title}
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {solution.line}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Dot navigation */}
          <div className="flex justify-center items-center gap-2.5 mt-6">
            {solutions.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-6 h-1.5 bg-violet-500'
                    : 'w-1.5 h-1.5 bg-white/20'
                }`}
              />
            ))}
          </div>

          {/* Swipe hint — only shows on first load */}
          <p className="text-center text-[9px] font-mono uppercase tracking-[0.3em] text-slate-700 mt-3">
            swipe to explore
          </p>
        </div>

        {/* ── Desktop grid (sm and above) ── */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/5 max-w-6xl mx-auto px-4 sm:px-6">
          {solutions.map((solution, i) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ ...spring, delay: i * 0.09 }}
                className="group relative overflow-hidden border-r border-b border-white/5 text-left transition-all duration-700 hover:bg-white/[0.02]"
              >
                {/* Image — always visible */}
                <div className="relative h-44 overflow-hidden border-b border-white/5">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000"
                    style={{ backgroundImage: `url(${solution.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/70 via-transparent to-transparent" />
                  <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-4 right-4 w-px h-2 bg-violet-400/60" />
                    <div className="absolute top-4 right-4 w-2 h-px bg-violet-400/60" />
                  </div>
                </div>

                {/* Content */}
                <div className="px-5 py-6 sm:px-8 sm:py-8 flex flex-col gap-5">
                  <div className="flex h-11 w-11 items-center justify-center border border-white/10 bg-white/5 transition-all duration-500 group-hover:border-violet-500/50 group-hover:bg-violet-500/10">
                    <Icon className="w-5 h-5 text-slate-400 transition-colors duration-500 group-hover:text-violet-400" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                      {solution.title}
                    </h3>
                    <div className="h-px w-6 bg-violet-500/30 group-hover:w-full transition-all duration-700" />
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {solution.line}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
