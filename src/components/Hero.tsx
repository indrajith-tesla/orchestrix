import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tight animate-fade-in">
          OrchestriX
        </h1>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-6 tracking-wide">
          Building Smart, Scalable & Affordable Digital Solutions
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mb-12 font-light">
          Engineering-driven solutions for startups & growing businesses.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#contact"
            className="group px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 min-w-[200px] justify-center"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#solutions"
            className="group px-8 py-4 bg-transparent text-white font-medium rounded-full border-2 border-white hover:bg-white hover:text-black transition-all duration-300 min-w-[200px] justify-center flex items-center"
          >
            Our Services
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
