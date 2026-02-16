
export default function Why() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-start text-left max-w-4xl">
          <span className="flex items-center gap-3 px-0 mb-8 text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-500">
            <span className="w-8 h-px bg-cyan-500/30" />
            Core Philosophy
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter leading-[1.1]">
            Built for teams that care{' '}
            <span className="text-slate-500">
              how things are made, not just that they ship.
            </span>
          </h2>
          <p className="mt-8 text-lg text-slate-400 max-w-2xl font-light leading-relaxed">
            OrchestriX is a small, senior studio that treats your product as an architectural asset—from the initial blueprint to the final deployment.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-sm">
            <div className="absolute inset-0 border border-white/5 architectural-grid" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/10 rounded-full blur-[100px]" />
            <div className="relative h-full w-full flex items-center justify-center border border-white/10 group overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Engineering Precision"
                className="w-full h-full object-cover opacity-30 grayscale group-hover:opacity-50 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
              {/* Architectural Metadata */}
              <div className="absolute top-4 left-4 font-mono text-[8px] text-slate-500 tracking-widest bg-black/40 px-2 py-1 backdrop-blur-sm">OP_CODE: 0x921</div>
              <div className="absolute bottom-4 right-4 font-mono text-[8px] text-slate-500 tracking-widest bg-black/40 px-2 py-1 backdrop-blur-sm">ASSET_REF: PHILOSOPHY_01</div>
            </div>
          </div>

          <div className="space-y-10">
            {[
              { title: "Senior Partnership", desc: "We provide the caliber of engineering you'd hire for your early team: product-minded and quality-focused." },
              { title: "Architectural Rigor", desc: "Every component is built for longevity. We don't just solve today's problems; we secure tomorrow's scale." }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-white flex items-center gap-4">
                  <span className="text-cyan-500/50">0{i + 1}</span>
                  {item.title}
                </h3>
                <p className="text-slate-400 text-base font-light leading-relaxed pl-10 border-l border-white/5">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
