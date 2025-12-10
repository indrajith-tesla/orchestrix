export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm uppercase tracking-[0.2em] text-cyan-200">
              Who We Are
            </span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Engineers who orchestrate{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-amber-200">
                products that feel inevitable
              </span>
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              We are three builders obsessed with clarity, velocity, and craft. We pair deep engineering rigor with
              product instincts to deliver software that is elegant, stable, and ready to scale from day zero.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Full-stack product builds, from whiteboard to launch',
                'Modern cloud and data foundations that stay maintainable',
                'Lean teams, direct collaboration, zero bureaucracy',
                'Quality-first culture: testing, observability, and documentation',
              ].map((item) => (
                <div
                  key={item}
                  className="card glass-border p-4 flex items-start gap-3 hover:translate-y-[-2px] transition-transform"
                >
                  <div className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-cyan-300 to-purple-400" />
                  <p className="text-sm text-gray-100">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 via-purple-500/15 to-amber-300/20 rounded-[28px] blur-3xl" />
            <div className="card glass-border p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(124,58,237,0.18),transparent_32%)]" />
              <div className="relative grid grid-cols-2 gap-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-2">Launched</p>
                  <p className="text-4xl font-bold text-white">30+</p>
                  <p className="text-sm text-gray-400">Products & platforms shipped</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-2">Speed</p>
                  <p className="text-4xl font-bold text-white">6-10</p>
                  <p className="text-sm text-gray-400">Weeks to MVP launch</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-2">Reliability</p>
                  <p className="text-4xl font-bold text-white">99.9%</p>
                  <p className="text-sm text-gray-400">Uptime targets for prod systems</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-2">Coverage</p>
                  <p className="text-4xl font-bold text-white">85%+</p>
                  <p className="text-sm text-gray-400">Typical automated test coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
