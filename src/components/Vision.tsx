export default function Vision() {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-700 rounded-full filter blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
          Our Vision
        </h2>

        <p className="text-2xl md:text-3xl leading-relaxed font-light text-gray-300">
          To become a trusted engineering partner that helps businesses build, scale, and succeed through{' '}
          <span className="text-white font-medium">
            innovative and affordable technology
          </span>
          .
        </p>
      </div>
    </section>
  );
}
