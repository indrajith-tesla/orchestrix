import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const spring = { type: 'spring' as const, stiffness: 260, damping: 28, mass: 0.85 };

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  const [counts, setCounts] = useState({ year: 2020, weeks: 0, uptime: 0 });

  useEffect(() => {
    if (!inView) return;

    const animateValue = (start: number, end: number, duration: number, key: string) => {
      const startTime = performance.now();
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = start + (end - start) * easeOut;
        setCounts(prev => ({ ...prev, [key]: current }));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    };

    animateValue(2020, 2026, 1200, 'year');
    animateValue(0, 8, 1400, 'weeks');
    animateValue(0, 99.9, 1600, 'uptime');
  }, [inView]);

  const metrics = [
    {
      label: 'Launched',
      value: Math.floor(counts.year),
      suffix: '',
      description: 'With Long Term Vision',
      gradient: 'from-violet-400/20 to-violet-600/10',
    },
    {
      label: 'Speed',
      value: counts.weeks < 6 ? 6 : counts.weeks > 10 ? 10 : Math.floor(counts.weeks),
      suffix: counts.weeks >= 6 && counts.weeks < 10 ? '-10' : '',
      description: 'Weeks to MVP launch',
      gradient: 'from-purple-400/20 to-purple-600/10',
    },
    {
      label: 'Reliability',
      value: counts.uptime.toFixed(1),
      suffix: '%',
      description: 'Uptime targets for prod systems',
      gradient: 'from-amber-400/20 to-amber-600/10',
    },
    {
      label: 'Delivery',
      value: 'Weekly',
      suffix: '',
      description: 'Demos With Clear Iterations',
      gradient: 'from-emerald-400/20 to-emerald-600/10',
      noAnimation: true,
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-12 sm:py-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-end">
          <motion.div
            className="space-y-8 lg:space-y-12"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={spring}
          >
            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-violet-500">
              <span className="w-12 h-px bg-violet-500/40" />
              Architectural Context
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-none">
              Engineers who <br />
              <span className="text-slate-500 italic">orchestrate.</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-lg">
              We are a senior-led engineering collective. Our work is defined by rhythmic symmetry, technical foresight, and a obsessive commitment to the artifact.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-1 border-t border-l border-white/5">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ ...spring, delay: i * 0.09 }}
                className="group p-4 sm:p-5 lg:p-8 border-r border-b border-white/5 transition-colors duration-500 hover:bg-white/[0.02]"
              >
                <div className="space-y-2 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">
                      {metric.label}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-violet-500/50" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tighter">
                      {metric.value}
                    </span>
                    <span className="text-violet-500 font-bold text-sm sm:text-base lg:text-lg">{metric.suffix}</span>
                  </div>
                  <p className="text-[9px] sm:text-[10px] text-slate-600 uppercase tracking-widest leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
