import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">OrchestriX</h3>
            <p className="text-gray-400 leading-relaxed">
              Engineering-driven solutions for startups & growing businesses.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">About</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Vision
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Values
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Product Development
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Cloud & Infrastructure
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Data & AI Solutions
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  System Improvements
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <a
                href="mailto:hello@orchestrix.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                hello@orchestrix.com
              </a>

              <div className="flex gap-4 pt-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; 2024 OrchestriX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
