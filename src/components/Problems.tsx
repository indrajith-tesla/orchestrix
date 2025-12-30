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
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <span className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium uppercase tracking-[0.24em] text-purple-200/90">
          What we fix
        </span>
        <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">
          The quiet problems
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-amber-200">
            that make good teams feel slow.
          </span>
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
          Most teams we work with aren’t “broken”. They’re just carrying a few subtle constraints that compound over
          every quarter. We remove those.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 px-6 py-6 text-left backdrop-blur-xl transition-all duration-400 hover:bg-white/8 hover:border-white/25 hover:-translate-y-0.5"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.16),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(168,85,247,0.18),transparent_55%)]" />
              <div className="relative flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 shadow-md shadow-purple-500/40">
                  <problem.icon className="w-5 h-5 text-white" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base md:text-lg font-semibold text-white">
                    {problem.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
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
