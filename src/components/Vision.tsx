import { Target, Eye, TrendingUp } from 'lucide-react';

const visionPillars = [
  {
    icon: Target,
    title: 'Built to last',
    desc: 'Clear trade-offs, observability, documentation.',
    gradient: 'from-purple-500 to-cyan-400',
  },
  {
    icon: Eye,
    title: 'Transparent execution',
    desc: 'Open work, no black boxes.',
    gradient: 'from-cyan-400 to-amber-400',
  },
  {
    icon: TrendingUp,
    title: 'Measurable impact',
    desc: 'Velocity, reliability, value—tracked.',
    gradient: 'from-amber-400 to-purple-500',
  },
];

export default function Vision() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.24em] text-purple-200/90">
            Vision
          </span>
          <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight px-2">
            Engineering that compounds
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-400 to-amber-300">
              every release faster than the last.
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {visionPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 px-4 sm:px-6 py-6 sm:py-8 text-left backdrop-blur-xl transition-all duration-400 hover:bg-white/8 hover:border-white/25 hover:-translate-y-1"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_0%_0%,rgba(168,85,247,0.16),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.18),transparent_55%)]" />
              <div className="relative space-y-3 sm:space-y-4">
                <div className={`flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${pillar.gradient} shadow-lg shadow-purple-500/30`}>
                  <pillar.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
