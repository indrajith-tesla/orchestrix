import { useState } from 'react';
import { Mail, Linkedin, Twitter, Github, Instagram, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import PosterModal from './PosterModal';

const spring = { type: 'spring' as const, stiffness: 260, damping: 28, mass: 0.85 };

export default function Footer() {
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);

  return (
    <footer id="contact" className="pt-10 sm:pt-14 pb-8 sm:pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="card glass-border p-6 sm:p-8 md:p-10 mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={spring}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8">
            <div className="space-y-2 sm:space-y-3">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-violet-300">Ready to build?</p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Let's ship the next release together.
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                Tell us what you're building and we'll share a plan, risks, and a timeline in days, not weeks.
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
              <button
                onClick={() => setCapabilitiesOpen(true)}
                className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition text-sm sm:text-base text-center"
              >
                View capabilities
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ ...spring, delay: 0.12 }}
        >
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
                <a href="#about" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
              </li>
              <li>
                <a href="#values" className="hover:text-white transition-colors">Values</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <a
                  href="/AWS-Hosting-Cost-Estimate.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <FileText className="w-3 h-3 shrink-0" />
                  Hosting Estimate
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h5 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-400">Connect</h5>
            <div className="flex gap-2 sm:gap-3">
              {/* Inactive — LinkedIn */}
              <span
                aria-label="OrchestriX on LinkedIn (coming soon)"
                title="Coming soon"
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center opacity-30 cursor-default"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" aria-hidden="true" />
              </span>
              {/* Active — Instagram */}
              <a
                href="https://www.instagram.com/orchestrix_tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit OrchestriX on Instagram"
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 transition"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" aria-hidden="true" />
              </a>
              {/* Inactive — Twitter */}
              <span
                aria-label="OrchestriX on Twitter (coming soon)"
                title="Coming soon"
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center opacity-30 cursor-default"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-white" aria-hidden="true" />
              </span>
              {/* Active — GitHub */}
              <a
                href="https://github.com/orchestrix-technologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit OrchestriX on GitHub"
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 transition"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 text-white" aria-hidden="true" />
              </a>
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
        </motion.div>

        <div className="pt-4 sm:pt-6 border-t border-white/10 text-center text-gray-500 text-xs sm:text-sm">
          <p>&copy; 2026 OrchestriX. Crafted with care.</p>
        </div>
      </div>

      <PosterModal
        isOpen={capabilitiesOpen}
        onClose={() => setCapabilitiesOpen(false)}
        src="/images/our_capabilities.png"
        alt="OrchestriX Capabilities"
        title="Capabilities"
      />
    </footer>
  );
}
