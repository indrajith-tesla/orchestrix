import { Rocket, Building2, AppWindow, BarChart3, Globe, TrendingUp } from 'lucide-react';

const partners = [
  { icon: Rocket, label: 'Startups', desc: 'Move fast, scale smart.' },
  { icon: Building2, label: 'SMBs', desc: 'Enterprise-grade, accessible.' },
  { icon: AppWindow, label: 'SaaS', desc: 'Product-led growth engines.' },
  { icon: BarChart3, label: 'Data-driven', desc: 'Metrics that matter.' },
  { icon: Globe, label: 'Global teams', desc: 'Distributed, aligned.' },
  { icon: TrendingUp, label: 'Scale-ups', desc: 'Growth without friction.' },
];

export default function WhoWeServe() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium uppercase tracking-[0.24em] text-cyan-200/90">
            Who we partner with
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">
            Teams that move fast
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-amber-200">
              and need senior partners.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {partners.map((partner) => (
            <div
              key={partner.label}
              className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 px-6 py-6 text-left backdrop-blur-xl transition-all duration-400 hover:bg-white/8 hover:border-white/25 hover:-translate-y-1"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.16),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(168,85,247,0.18),transparent_55%)]" />
              <div className="relative flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 shadow-md shadow-purple-500/40">
                  <partner.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-white mb-1">
                    {partner.label}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-300">
                    {partner.desc}
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
