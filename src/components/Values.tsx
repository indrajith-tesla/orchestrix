import { Heart, Award, Eye, TrendingUp } from 'lucide-react';

const values = [
  { icon: Heart, label: 'Commitment' },
  { icon: Award, label: 'Quality' },
  { icon: Eye, label: 'Transparency' },
  { icon: TrendingUp, label: 'Continuous Improvement' },
];

export default function Values() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-black mb-20 tracking-tight">
          Our Values
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-black flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-black">{value.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
