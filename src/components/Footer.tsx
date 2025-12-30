import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="card glass-border p-8 md:p-10 mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-amber-200">Ready to build?</p>
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Let’s ship the next release together.
              </h3>
              <p className="text-gray-300">
                Tell us what you’re building—we’ll share a plan, risks, and a timeline in days, not weeks.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:contact.orchestrix@gmail.com"
                className="px-6 py-3 rounded-full bg-white text-black font-medium flex items-center gap-2 justify-center hover:opacity-90 transition"
              >
                <Mail className="w-5 h-5" />
                contact.orchestrix@gmail.com
              </a>
              <a
                href="#solutions"
                className="px-6 py-3 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition"
              >
                View capabilities
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-white">OrchestriX</h4>
            <p className="text-gray-300 leading-relaxed">
              An engineering studio that blends velocity with rigor for founders and product teams.
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="text-sm uppercase tracking-[0.2em] text-gray-400">Explore</h5>
            <ul className="space-y-2 text-gray-300">
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

          <div className="space-y-4">
            <h5 className="text-sm uppercase tracking-[0.2em] text-gray-400">Connect</h5>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Github].map((Icon) => (
                <a
                  key={Icon.displayName || Icon.name}
                  href="#"
                  className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 transition"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
            <div className="space-y-1 text-gray-300">
              <p>
                Email:{' '}
                <a className="hover:text-white transition-colors" href="mailto:contact.orchestrix@gmail.com">
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

        <div className="pt-6 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>&copy; 2024 OrchestriX. Crafted with care.</p>
        </div>
      </div>
    </footer>
  );
}
