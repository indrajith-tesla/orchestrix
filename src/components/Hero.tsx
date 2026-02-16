import { ArrowRight, Terminal, Layers } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-[#020617] font-sans">
      {/* Noise and Grid Layers */}
      <div className="absolute inset-0 z-0 architectural-grid opacity-20" />
      <div className="noise-texture" />

      {/* Background Media with Architectural Masking */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-40 grayscale group overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[3s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-110"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#020617]/50 to-[#020617]" />
      </div>

      {/* Engineering Metadata Accents */}
      <div className="absolute top-12 left-12 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-slate-500 font-medium">
      </div>

      <div className="absolute bottom-12 right-12 text-right hidden lg:block">
        <div className="text-[10px] uppercase tracking-[0.4em] text-slate-500 mb-2">Architectural coordinates</div>
        <div className="font-mono text-[10px] text-slate-600">34.0522° N, 118.2437° W // ORX_PRIMARY</div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-12 md:px-24">
        <div className="max-w-4xl space-y-12">
          {/* Badge */}
          <div className="flex items-center gap-3 opacity-0 animate-[rise_1s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white">Engineering Studio</span>
          </div>

          {/* Asymmetric Header */}
          <div className="space-y-4">
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-black text-white tracking-tighter leading-none animate-reveal">
              OrchestriX.
            </h1>
            <div className="flex items-center gap-6 opacity-0 animate-[rise_1.2s_cubic-bezier(0.16,1,0.3,1)_0.6s_forwards]">
              <span className="h-[2px] w-24 bg-cyan-500" />
              <p className="text-xl md:text-2xl font-medium text-slate-300">
                Beyond standard development.
              </p>
            </div>
          </div>

          <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-xl opacity-0 animate-[rise_1.4s_cubic-bezier(0.16,1,0.3,1)_0.8s_forwards]">
            A high-end architectural engineering practice crafting elite digital artifacts
            that define the next decade of product excellence.
          </p>

          <div className="pt-8 flex flex-wrap gap-8 opacity-0 animate-[rise_1.6s_cubic-bezier(0.16,1,0.3,1)_1s_forwards]">
            <a
              href="#contact"
              className="group flex items-center gap-6 text-white no-underline"
            >
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                <ArrowRight className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="block text-sm font-bold uppercase tracking-widest">Start Consultation</span>
                <span className="block text-[10px] text-slate-500 uppercase tracking-widest">Available for Q1 2026</span>
              </div>
            </a>

            <a
              href="#solutions"
              className="hidden sm:flex items-center gap-4 text-slate-500 hover:text-white transition-colors cursor-pointer group/service"
            >
              <Terminal className="w-5 h-5 group-hover/service:text-cyan-400 transition-colors" />
              <span className="text-sm font-medium uppercase tracking-[0.2em]">View Technical Capabilities</span>
            </a>
          </div>
        </div>
      </div>

      {/* Luminous Sharp Accent */}
      <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full glow-sharp" />
    </section>
  );
}
