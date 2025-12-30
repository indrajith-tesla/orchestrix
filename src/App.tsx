import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Problems from './components/Problems';
import Solutions from './components/Solutions';
import Why from './components/Why';
import WhoWeServe from './components/WhoWeServe';
import Vision from './components/Vision';
import Values from './components/Values';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') return 'dark';
    return (localStorage.getItem('ox-theme') as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    document.body.classList.remove('theme-dark', 'theme-light');
    document.body.classList.add(`theme-${theme}`);
    localStorage.setItem('ox-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-[#0b1021] via-[#0f172a] to-[#050812] text-white theme-dark'
          : 'bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900 theme-light'
      }`}
    >
      <div
        className={`absolute inset-0 grid-overlay pointer-events-none transition-opacity duration-500 ${
          theme === 'dark' ? 'opacity-60' : 'opacity-80'
        }`}
      />
      <div
        className={`absolute -left-32 top-10 w-80 h-80 blur-3xl rounded-full animate-float ${
          theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-400/25'
        }`}
      />
      <div
        className={`absolute -right-20 top-40 w-96 h-96 blur-3xl rounded-full animate-float ${
          theme === 'dark' ? 'bg-cyan-400/20' : 'bg-cyan-300/30'
        }`}
      />
      <div
        className={`absolute left-1/2 bottom-10 w-[540px] h-[540px] -translate-x-1/2 blur-3xl rounded-full animate-float ${
          theme === 'dark' ? 'bg-amber-400/10' : 'bg-amber-300/25'
        }`}
      />

      <div className="fixed top-5 right-5 z-20">
        <button
          type="button"
          onClick={toggleTheme}
          className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium backdrop-blur-md transition shadow-lg ${
            theme === 'dark'
              ? 'border border-white/15 bg-white/10 text-white hover:bg-white/20'
              : 'border border-slate-200 bg-white text-slate-900 hover:bg-slate-50'
          }`}
        >
          {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          {theme === 'dark' ? 'Light mode' : 'Dark mode'}
        </button>
      </div>

      <div className="relative space-y-0">
        <Hero />
        <About className="py-16 md:py-20" />
        <Problems className="py-16 md:py-20" />
        <Solutions className="py-16 md:py-20" />
        <Why className="py-16 md:py-20" />
        <WhoWeServe className="py-16 md:py-20" />
        <Vision className="py-16 md:py-20" />
        <Values className="py-16 md:py-20" />
        <Footer className="mt-0" />
      </div>
    </div>
  );
}

export default App;
