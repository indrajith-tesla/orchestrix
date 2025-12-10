import { Heart, Award, Eye, TrendingUp } from 'lucide-react';

const values = [
  { icon: Heart, label: 'Commitment', text: 'We own outcomes, not tickets. We ship like founders.' },
  { icon: Award, label: 'Quality', text: 'Testing, monitoring, and clarity as the default—not an afterthought.' },
  { icon: Eye, label: 'Transparency', text: 'You see the plan, the risks, and the progress, every week.' },
  { icon: TrendingUp, label: 'Continuous Improvement', text: 'We leave systems faster, safer, and easier to change.' },
];

export default function Values() {
  return (
    <section id="values" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-3 mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm uppercase tracking-[0.2em] text-purple-200">
            Our values
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Principles that keep us sharp</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            The guardrails we hold ourselves to, so every release is trustworthy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value) => (
            <div
              key={value.label}
              className="card glass-border p-7 flex gap-5 items-start hover:-translate-y-[2px] transition-transform"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-300 to-purple-500 flex items-center justify-center shrink-0">
                <value.icon className="w-7 h-7 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{value.label}</h3>
                <p className="text-gray-300 mt-2 leading-relaxed">{value.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
