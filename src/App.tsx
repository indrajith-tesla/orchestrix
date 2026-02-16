import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import Why from './components/Why';
import WhoWeServe from './components/WhoWeServe';
import Footer from './components/Footer';
import StructuredData from './components/StructuredData';

function App() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen relative overflow-x-hidden bg-gradient-to-b from-[#0b1021] via-[#0f172a] to-[#050812] text-white theme-dark">
        <div className="absolute inset-0 grid-overlay pointer-events-none opacity-60 transition-opacity duration-500" />
        <div className="absolute -left-32 top-10 w-80 h-80 blur-3xl rounded-full animate-float bg-purple-500/20" />
        <div className="absolute -right-20 top-40 w-96 h-96 blur-3xl rounded-full animate-float bg-cyan-400/20" />
        <div className="absolute left-1/2 bottom-10 w-[540px] h-[540px] -translate-x-1/2 blur-3xl rounded-full animate-float bg-amber-400/10" />
        <div className="noise-texture" />
        <main className="relative space-y-0">
          <Hero />
          <Solutions />
          <Why />
          <WhoWeServe />
          <About />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
