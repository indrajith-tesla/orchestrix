import { Rocket, Building2, AppWindow, BarChart3, Globe } from 'lucide-react';

const clients = [
  { icon: Rocket, label: 'Startups' },
  { icon: Building2, label: 'SMBs' },
  { icon: AppWindow, label: 'SaaS' },
  { icon: BarChart3, label: 'Data-driven companies' },
  { icon: Globe, label: 'Global teams' },
];

export default function WhoWeServe() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 space-y-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm uppercase tracking-[0.2em] text-cyan-200">
            Who we partner with
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Teams that move fast</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Builders, operators, and innovators who want a senior crew that can co-own outcomes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {clients.map((client) => (
            <div
              key={client.label}
              className="card glass-border p-5 flex items-center gap-4 hover:-translate-y-[2px] transition-transform"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center">
                <client.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-lg font-medium text-white">{client.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
