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
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1021] via-[#0f172a] to-[#050812] text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-60 pointer-events-none" />
      <div className="absolute -left-32 top-10 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full animate-float" />
      <div className="absolute -right-20 top-40 w-96 h-96 bg-cyan-400/20 blur-3xl rounded-full animate-float" />
      <div className="absolute left-1/2 bottom-10 w-[540px] h-[540px] -translate-x-1/2 bg-amber-400/10 blur-3xl rounded-full animate-float" />

      <div className="relative">
        <Hero />
        <About />
        <Problems />
        <Solutions />
        <Why />
        <WhoWeServe />
        <Vision />
        <Values />
        <Footer />
      </div>
    </div>
  );
}

export default App;
