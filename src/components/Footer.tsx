import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="card glass-border p-6 sm:p-8 md:p-10 mb-8 sm:mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8">
            <div className="space-y-2 sm:space-y-3">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-amber-200">Ready to build?</p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Let's ship the next release together.
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                Tell us what you're building—we'll share a plan, risks, and a timeline in days, not weeks.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="mailto:contact.orchestrix@gmail.com"
                className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-black font-medium flex items-center gap-2 justify-center hover:opacity-90 transition text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span className="truncate">contact.orchestrix@gmail.com</span>
              </a>
              <a
                href="#solutions"
                className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition text-sm sm:text-base text-center"
              >
                View capabilities
              </a>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-8 sm:mb-10">
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-xl sm:text-2xl font-bold text-white">OrchestriX</h4>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              An engineering studio that blends velocity with rigor for founders and product teams.
            </p>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <h5 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-400">Explore</h5>
            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#values" className="hover:text-white transition-colors">
                  Values
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h5 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-400">Connect</h5>
            <div className="flex gap-2 sm:gap-3">
              {[
                { Icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/company/orchestrix' },
                { Icon: Twitter, name: 'Twitter', url: 'https://twitter.com/orchestrix' },
                { Icon: Github, name: 'GitHub', url: 'https://github.com/orchestrix' }
              ].map(({ Icon, name, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit OrchestriX on ${name}`}
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 transition"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" aria-hidden="true" />
                </a>
              ))}
            </div>
            <div className="space-y-1 text-xs sm:text-sm text-gray-300">
              <p>
                Email:{' '}
                <a className="hover:text-white transition-colors break-all" href="mailto:contact.orchestrix@gmail.com">
                  contact.orchestrix@gmail.com
                </a>
              </p>
              <p>
                Phone:{' '}
                <a className="hover:text-white transition-colors" href="tel:9778254068">
                  9778254068
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-4 sm:pt-6 border-t border-white/10 text-center text-gray-500 text-xs sm:text-sm">
          <p>&copy; 2026 OrchestriX. Crafted with care.</p>
        </div>
      </div>
    </footer>
  );
}
