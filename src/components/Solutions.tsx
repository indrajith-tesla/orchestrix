import { Code, Cloud, BrainCircuit, RefreshCw } from 'lucide-react';

const solutions = [
  {
    icon: Code,
    title: 'Product & app',
    line: 'New products, new surfaces, calm launches.',
  },
  {
    icon: Cloud,
    title: 'Cloud & platform',
    line: 'Infra, CI/CD, and SRE that stay boring.',
  },
  {
    icon: BrainCircuit,
    title: 'Data & AI',
    line: 'Signals and models wired into the product.',
  },
  {
    icon: RefreshCw,
    title: 'Refine & repair',
    line: 'Modernise, simplify, and make things fast again.',
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          <span className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.24em] text-cyan-200/90">
              Our craft
            </span>
          <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight px-2">
            What we're unusually good at.
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-300 px-2">
            Four lenses we use to move products forward. Most work we do sits somewhere between them.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 px-4 sm:px-5 py-5 sm:py-6 text-left backdrop-blur-xl transition-all duration-400 hover:bg-white/8 hover:border-white/25 hover:-translate-y-0.5"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.16),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(168,85,247,0.18),transparent_55%)]" />
              <div className="relative flex flex-col items-start gap-2 sm:gap-3">
                <div className="mt-1 flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 shadow-md shadow-cyan-500/40">
                  <solution.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-white">
                  {solution.title}
                </h3>
                <p className="text-[11px] sm:text-xs md:text-sm text-gray-300 leading-relaxed">
                  {solution.line}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
