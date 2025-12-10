import { Code, Cloud, BrainCircuit, RefreshCw } from 'lucide-react';

const solutions = [
  {
    icon: Code,
    title: 'Product & App Development',
    description: 'From idea to launch-ready products with clean, modern stacks.',
    highlights: ['MVPs & v1.0s', 'Web & mobile', 'Design systems', 'Performance-first'],
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    description: 'Resilient, observable infra that scales without drama.',
    highlights: ['Well-architected reviews', 'IaC & CI/CD', 'Cost optimization', 'SRE practices'],
  },
  {
    icon: BrainCircuit,
    title: 'Data & AI Solutions',
    description: 'Data foundations and ML that ship value, not just models.',
    highlights: ['Analytics stacks', 'Pipelines & orchestration', 'Feature stores', 'Responsible AI'],
  },
  {
    icon: RefreshCw,
    title: 'Code & System Improvements',
    description: 'Refactors that unblock velocity and unlock reliability.',
    highlights: ['Legacy modernization', 'Performance tuning', 'Testing strategies', 'DX upgrades'],
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-14">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm uppercase tracking-[0.2em] text-cyan-200">
              Our craft
            </span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Precision-built solutions that stay elegant under pressure
            </h2>
            <p className="text-lg text-gray-300">
              Whether you need a zero-to-one build or a modernization rescue, we architect with longevity, ship with
              speed, and layer in observability so the next release is faster than the last.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Design-to-code', 'Secure by default', 'Performance budgets', 'Runbooks & SLOs'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm text-gray-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="card glass-border p-6 w-full lg:w-[360px]">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-300 mb-4">Engagement rhythm</p>
            <ul className="space-y-3 text-gray-100">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-cyan-300" />
                Weekly demos & decision logs
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-purple-400" />
                Design + architecture first, then execution
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-amber-300" />
                Instrumented releases with guardrails
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="card glass-border p-8 relative overflow-hidden group hover:-translate-y-1 transition-transform"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-4 mb-4 relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">{solution.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">{solution.description}</p>
              <div className="flex flex-wrap gap-2">
                {solution.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-100"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
