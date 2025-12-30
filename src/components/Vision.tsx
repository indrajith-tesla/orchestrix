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
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium uppercase tracking-[0.24em] text-purple-200/90">
            Vision
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">
            Engineering that compounds
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-400 to-amber-300">
              every release faster than the last.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {visionPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 px-6 py-8 text-left backdrop-blur-xl transition-all duration-400 hover:bg-white/8 hover:border-white/25 hover:-translate-y-1"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_0%_0%,rgba(168,85,247,0.16),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.18),transparent_55%)]" />
              <div className="relative space-y-4">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${pillar.gradient} shadow-lg shadow-purple-500/30`}>
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
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
