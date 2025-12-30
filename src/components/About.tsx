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

    animateValue(2020, 2025, 1200, 'year');
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-14 items-center">
          <div className="space-y-4 sm:space-y-6">
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm uppercase tracking-[0.2em] text-cyan-200 backdrop-blur-sm animate-[slideIn_0.6s_ease-out]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] animate-[slideIn_0.8s_ease-out]">
              Engineers who orchestrate{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-amber-200 animate-[gradient_3s_ease-in-out_infinite]">
                products that feel inevitable
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed animate-[slideIn_1s_ease-out]">
              A product focused engineering team building elegant, reliable software designed to scale from day one
            </p>
          </div>

          <div className="relative animate-[slideIn_1.2s_ease-out]">
            {/* Outer glow */}
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-cyan-400/20 via-purple-500/15 to-amber-300/20 rounded-[28px] blur-3xl animate-[pulse_3s_ease-in-out_infinite]" />
            
            {/* Card */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-4 sm:p-6 md:p-8 shadow-2xl">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(124,58,237,0.18),transparent_32%)] animate-[gradient_6s_ease-in-out_infinite]" />
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_ease-in-out_infinite]" />
              </div>

              <div className="relative grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="group p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-xl relative overflow-hidden"
                    style={{ 
                      animation: `fadeInUp 0.6s ease-out ${metric.delay} both`,
                    }}
                  >
                    {/* Hover gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Content */}
                    <div className="relative">
                      <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-300 mb-2 sm:mb-3 flex items-center gap-1 sm:gap-2">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse" />
                        {metric.label}
                      </p>
                      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 transition-all duration-300 group-hover:scale-110">
                        {metric.value}{metric.suffix}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                        {metric.description}
                      </p>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
            </div>
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