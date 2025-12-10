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
    <div className="min-h-screen bg-white">
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
  );
}

export default App;
