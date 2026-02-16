import { Globe, Smartphone, Sparkles } from 'lucide-react';

const solutions = [
  {
    icon: Globe,
    title: 'Building Web Applications',
    line: 'Modern, Fast and beautiful website that help you attract customers and grow online.',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    line: 'We build easy to use mobile apps that work smoothly on both Android and iPhone.',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    icon: Sparkles,
    title: 'Generative & Agentic AI',
    line: 'AI that can create content, answer question, automate workflows, and even act independently to complete tasks for you.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 architectural-grid opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          <span className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.24em] text-cyan-200">
            Our craft
          </span>
          <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight px-2 text-white">
            What we're unusually good at.
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-300 px-2">
            Crafting digital excellence through three core pillars of modern engineering.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/5 max-w-6xl mx-auto">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group relative overflow-hidden border-r border-b border-white/5 px-8 py-10 text-left transition-all duration-700"
            >
              {/* Hover Image Reveal */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-1000 scale-110 group-hover:scale-100 bg-cover bg-center grayscale"
                style={{ backgroundImage: `url(${solution.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

              <div className="relative flex flex-col items-start gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-none border border-white/10 bg-white/5 transition-all duration-500 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10">
                  <solution.icon className="w-5 h-5 text-slate-400 transition-colors duration-500 group-hover:text-cyan-400" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed max-w-[280px]">
                    {solution.line}
                  </p>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-4 right-4 w-px h-2 bg-cyan-500/50" />
                <div className="absolute top-4 right-4 w-2 h-px bg-cyan-500/50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
