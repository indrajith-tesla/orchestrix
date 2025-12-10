export default function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold text-black tracking-tight">
              Who We Are
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                A young engineering-led startup building{' '}
                <span className="font-semibold text-black">
                  high-quality, scalable, and affordable digital solutions
                </span>
                .
              </p>

              <p>
                Founded by <span className="font-semibold text-black">three passionate engineers</span>{' '}
                with a commitment to clean code, smart systems, and real-world impact.
              </p>
            </div>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Engineering team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
