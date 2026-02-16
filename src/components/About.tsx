import { useState, useEffect } from 'react';

export default function About() {
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState({
    year: 2020,
    weeks: 0,
    uptime: 0,
  });

  useEffect(() => {
    setInView(true);
  }, []);

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

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
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
      delay: '0ms',
      gradient: 'from-cyan-400/20 to-cyan-600/10'
    },
    {
      label: 'Speed',
      value: counts.weeks < 6 ? 6 : counts.weeks > 10 ? 10 : Math.floor(counts.weeks),
      suffix: counts.weeks >= 6 && counts.weeks < 10 ? '-10' : '',
      description: 'Weeks to MVP launch',
      delay: '100ms',
      gradient: 'from-purple-400/20 to-purple-600/10'
    },
    {
      label: 'Reliability',
      value: counts.uptime.toFixed(1),
      suffix: '%',
      description: 'Uptime targets for prod systems',
      delay: '200ms',
      gradient: 'from-amber-400/20 to-amber-600/10'
    },
    {
      label: 'Delivery',
      value: 'Weekly',
      suffix: '',
      description: 'Demos With Clear Iterations',
      delay: '300ms',
      gradient: 'from-emerald-400/20 to-emerald-600/10',
      noAnimation: true
    }
  ];

  return (
    <section id="about" className="py-16 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-end">
          <div className="space-y-12">
            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-500">
              <span className="w-12 h-px bg-cyan-500/40" />
              Architectural Context
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
              Engineers who <br />
              <span className="text-slate-500 italic">orchestrate.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-lg">
              We are a senior-led engineering collective. Our work is defined by rhythmic symmetry, technical foresight, and a obsessive commitment to the artifact.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-1 border-t border-l border-white/5">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="group p-8 border-r border-b border-white/5 transition-colors duration-500 hover:bg-white/[0.02]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">
                      {metric.label}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-cyan-500/50" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white tracking-tighter">
                      {metric.value}
                    </span>
                    <span className="text-cyan-500 font-bold text-lg">{metric.suffix}</span>
                  </div>
                  <p className="text-[10px] text-slate-600 uppercase tracking-widest leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      }`}</style>
    </section>
  );
}