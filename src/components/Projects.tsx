import { GraduationCap, ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 'PRJ_01',
    icon: GraduationCap,
    title: 'EduFinder',
    category: 'EdTech Platform',
    desc: 'A premium college discovery platform helping millions of students find the right institution for their entrance exams. Explore elite Indian colleges, compare rankings, fees, placements, and stay updated on 2026–27 admissions.',
    tags: ['College Finder', 'EdTech', 'React'],
    status: 'LIVE',
    href: 'https://edufinder.orchestrix.info/',
    image: 'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16 relative overflow-hidden">
      <div className="absolute inset-0 architectural-grid opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.24em] text-violet-200">
            Live Products
          </span>
          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Products we've{' '}
            <span className="text-slate-500">shipped.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-500 max-w-xl leading-relaxed font-light">
            Real products. Real users. Precision-engineered from concept to deployment.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/5 mx-auto overflow-hidden">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative border-r border-b border-white/5 transition-all duration-700 hover:bg-white/[0.02] block"
            >
              {/* Windowed Image */}
              <div className="relative h-48 overflow-hidden border-b border-white/5">
                <div
                  className="absolute inset-0 grayscale opacity-25 group-hover:opacity-50 group-hover:scale-105 transition-all duration-1000 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-violet-950/30 mix-blend-overlay group-hover:bg-transparent transition-all duration-700" />

                {/* ID Tag */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-2 py-1 bg-[#050816]/80 backdrop-blur-md border border-white/10">
                  <span className="text-[10px] font-mono text-violet-500/80 tracking-tighter">{project.id}</span>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-1 bg-[#050816]/80 backdrop-blur-md border border-violet-500/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                  <span className="text-[9px] font-mono text-violet-400 tracking-widest">{project.status}</span>
                </div>

                {/* External link arrow on hover */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowUpRight className="w-5 h-5 text-violet-400" />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/5 group-hover:border-violet-500/30 group-hover:bg-violet-500/5 transition-all duration-500">
                    <project.icon className="w-4 h-4 text-slate-500 group-hover:text-violet-400 transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                      {project.title}
                    </h3>
                    <p className="text-[10px] font-mono text-slate-600 group-hover:text-slate-500 transition-colors mt-0.5 uppercase tracking-widest">
                      {project.category}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="h-px w-6 bg-violet-500/30 group-hover:w-full transition-all duration-700" />
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light group-hover:text-slate-300 transition-colors duration-500">
                    {project.desc}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 border border-white/5 text-slate-700 group-hover:border-violet-500/10 group-hover:text-slate-500 transition-all duration-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Row */}
                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-700 uppercase tracking-widest group-hover:text-violet-500/70 transition-colors duration-500">
                    <ExternalLink className="w-3 h-3" />
                    <span>View Project</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-slate-900 group-hover:bg-violet-500/50 transition-colors duration-500" />
                    <div className="w-1 h-1 rounded-full bg-slate-900 group-hover:bg-violet-500/30 transition-colors duration-700" />
                  </div>
                </div>
              </div>

              {/* Corner Decorations */}
              <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-4 right-4 w-px h-2 bg-violet-500/30" />
                <div className="absolute top-4 right-4 w-2 h-px bg-violet-500/30" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
