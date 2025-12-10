export default function Vision() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-60 grid-overlay pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="text-center space-y-4 mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm uppercase tracking-[0.2em] text-purple-200">
            Vision
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Engineering that compounds</h2>
          <p className="text-lg text-gray-300">
            We want every release to be faster than the last because the system, the team, and the product get stronger
            together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              title: 'Built to last',
              desc: 'Design choices with clear trade-offs, documentation, and observability baked in.',
            },
            {
              title: 'Inclusive execution',
              desc: 'We work in the open with your founders, PMs, and engineers—no black boxes.',
            },
            {
              title: 'Measurable outcomes',
              desc: 'Shipping velocity, reliability, and product value tracked with real metrics.',
            },
          ].map((item) => (
            <div key={item.title} className="card glass-border p-6 text-left">
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
