import { Check } from 'lucide-react';

const reasons = [
  'Founder-style urgency with engineering depth',
  'Senior builders only — strategy through delivery',
  'Clear playbooks: architecture, QA, observability, runbooks',
  'Design systems and DX that keep velocity compounding',
];

export default function Why() {
  return (
    <section className="py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center space-y-4 mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm uppercase tracking-[0.2em] text-amber-200">
            Why OrchestriX
          </span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            A studio built for decisive teams
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We ship at startup speed with enterprise guardrails. Every engagement pairs design clarity with strong
            technical governance.
          </p>
        </div>

        <div className="space-y-4">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="card glass-border p-6 flex items-center gap-4 hover:-translate-y-[2px] transition-transform"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 to-purple-500 flex items-center justify-center">
                <Check className="w-5 h-5 text-black" />
              </div>
              <p className="text-xl text-white font-medium leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
