import { Zap } from 'lucide-react';

export default function Why() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.24em] text-amber-200/90">
            Why OrchestriX
          </span>
          <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight px-2">
            Built for teams that care
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-purple-400 to-cyan-300">
              how things are made, not just that they ship.
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto px-2">
            OrchestriX is a small, senior studio that treats your product like our own — from the first diagram to the
            last deployment.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 card glass-border px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10 flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6 md:gap-10">
          <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl sm:rounded-3xl bg-gradient-to-br from-amber-400 via-purple-500 to-cyan-400 shadow-2xl shadow-amber-500/40">
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/25 to-transparent" />
            <Zap className="relative w-7 h-7 sm:w-9 sm:h-9 text-white drop-shadow-lg" />
          </div>
          <div className="space-y-2 sm:space-y-3 text-left max-w-xl w-full">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.24em] text-amber-200/90">
              Why teams stay with us
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
              We bring the kind of engineers you'd hire as your own early team: product‑minded, opinionated about
              quality, and calm under pressure.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
              The result is work that feels inevitable when you see it — from the UX details to the way the system
              behaves on a busy Monday.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
