import { Cloud, Database, Gauge, Users } from 'lucide-react';

const problems = [
  {
    icon: Gauge,
    title: 'Momentum stalls',
    line: 'Shipping slows, decisions drag, and every release feels heavier than the last.',
  },
  {
    icon: Cloud,
    title: 'Scale feels fragile',
    line: 'Growth exposes all the shortcuts infra and architecture were never meant to carry.',
  },
  {
    icon: Database,
    title: 'Signals go fuzzy',
    line: 'Dashboards disagree, incidents “surprise” you, and nobody fully trusts the charts.',
  },
  {
    icon: Users,
    title: 'No true partner',
    line: 'You have people writing code, but not enough people owning the whole outcome.',
  },
];

export default function Problems() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.24em] text-purple-200/90">
          What we fix
        </span>
        <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight px-2">
          The quiet problems
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-amber-200">
            that make good teams feel slow.
          </span>
        </h2>
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto px-2">
          Most teams we work with aren't "broken". They're just carrying a few subtle constraints that compound over
          every quarter. We remove those.
        </p>

        <div className="mt-8 sm:mt-10 grid gap-3 sm:gap-4 sm:grid-cols-2">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 px-4 sm:px-6 py-5 sm:py-6 text-left backdrop-blur-xl transition-all duration-400 hover:bg-white/8 hover:border-white/25 hover:-translate-y-0.5"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.16),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(168,85,247,0.18),transparent_55%)]" />
              <div className="relative flex items-start gap-3 sm:gap-4">
                <div className="mt-1 flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 shadow-md shadow-purple-500/40">
                  <problem.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="space-y-1 sm:space-y-1.5 flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">
                    {problem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {problem.line}
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
