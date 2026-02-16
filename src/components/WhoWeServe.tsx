import { Rocket, Building2, AppWindow, BarChart3, Globe, TrendingUp } from 'lucide-react';

const partners = [
  {
    icon: Rocket,
    label: 'Engineered Startups',
    desc: 'Bespoke frameworks for teams moving at the speed of thought. Built for scale from iteration zero.',
    image: 'https://images.pexels.com/photos/7070155/pexels-photo-7070155.jpeg?auto=compress&cs=tinysrgb&w=800',
    id: 'SEC_01'
  },
  {
    icon: Building2,
    label: 'Strategic SMBs',
    desc: 'Bringing enterprise-grade technical rigor to established organizations demanding modernization.',
    image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
    id: 'SEC_02'
  },
  {
    icon: AppWindow,
    label: 'Bespoke SaaS',
    desc: 'Crafting product-led engines with absolute structural integrity and automated resilience.',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    id: 'SEC_03'
  },
  {
    icon: BarChart3,
    label: 'Data Sovereignty',
    desc: 'Precision analytics and intelligence layers wired directly into the operational core.',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
    id: 'SEC_04'
  },
  {
    icon: Globe,
    label: 'Global Syndicates',
    desc: 'Distributed systems designed for absolute alignment across jurisdictional boundaries.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    id: 'SEC_05'
  },
  {
    icon: TrendingUp,
    label: 'Hyper Scale-ups',
    desc: 'Engineering growth without friction through structural rigor and automated validation.',
    image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800',
    id: 'SEC_06'
  },
];

export default function WhoWeServe() {
  return (
    <section id="partnerships" className="py-24 sm:py-32 relative overflow-hidden bg-[#020617]">
      {/* Global Architectural Grid */}
      <div className="absolute inset-0 architectural-grid opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.24em] text-cyan-200">
            Social Proof
          </span>
          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Built for those <br className="sm:hidden" />
            <span className="text-slate-500">who know the difference.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/5 mx-auto overflow-hidden">
          {partners.map((partner) => (
            <div
              key={partner.label}
              className="group relative border-r border-b border-white/5 transition-all duration-700 hover:bg-white/[0.02]"
            >
              {/* Windowed Image Capture */}
              <div className="relative h-48 overflow-hidden border-b border-white/5">
                <div
                  className="absolute inset-0 grayscale opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-1000 bg-cover bg-center"
                  style={{ backgroundImage: `url(${partner.image})` }}
                />
                <div className="absolute inset-0 bg-cyan-950/20 mix-blend-overlay group-hover:bg-transparent transition-all duration-700" />

                {/* ID Tag overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-2 py-1 bg-[#020617]/80 backdrop-blur-md border border-white/10">
                  <span className="text-[10px] font-mono text-cyan-500/80 tracking-tighter">{partner.id}</span>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/5 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/5 transition-all duration-500">
                    <partner.icon className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                    {partner.label}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="h-px w-6 bg-cyan-500/30 group-hover:w-full transition-all duration-700" />
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light group-hover:text-slate-300 transition-colors duration-500">
                    {partner.desc}
                  </p>
                </div>

                {/* Technical Coordinates */}
                <div className="pt-4 flex items-center justify-between">
                  <span className="text-[8px] font-mono text-slate-800 uppercase tracking-widest group-hover:text-slate-600 transition-colors">
                    REF_CORE // STABLE
                  </span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-slate-900 group-hover:bg-cyan-500/50 transition-colors duration-500" />
                    <div className="w-1 h-1 rounded-full bg-slate-900 group-hover:bg-cyan-500/30 transition-colors duration-700" />
                  </div>
                </div>
              </div>

              {/* Corner Decorations */}
              <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-4 right-4 w-px h-2 bg-cyan-500/30" />
                <div className="absolute top-4 right-4 w-2 h-px bg-cyan-500/30" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
