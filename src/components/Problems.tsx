import { DollarSign, Cloud, Database, Users } from 'lucide-react';

const problems = [
  {
    icon: DollarSign,
    title: 'Enterprise needs, startup budgets',
    text: 'Full-stack product teams without the bloat or burn.',
  },
  {
    icon: Cloud,
    title: 'Uncertain scalability',
    text: 'Cloud, infra, and performance that won’t crumble under growth.',
  },
  {
    icon: Database,
    title: 'Data chaos',
    text: 'Tame pipelines, clean schemas, and observability that catches issues early.',
  },
  {
    icon: Users,
    title: 'Missing engineering partner',
    text: 'A senior team that ships, communicates, and stays accountable.',
  },
];

export default function Problems() {
  return (
    <section className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm uppercase tracking-[0.2em] text-purple-200">
            What we fix
          </span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">The friction we remove</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We enter when teams feel the drag—launch dates slipping, infra creaking, or strategy missing. We remove the
            noise so execution feels effortless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="card glass-border p-8 relative overflow-hidden group hover:-translate-y-1 transition-transform"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-white/5 via-white/0 to-white/10" />
              <div className="flex items-center justify-between mb-6 relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <problem.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm tracking-[0.3em] text-gray-400">0{index + 1}</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">{problem.title}</h3>
              <p className="text-gray-300 leading-relaxed">{problem.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
