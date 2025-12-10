import { DollarSign, Cloud, Database, Users } from 'lucide-react';

const problems = [
  {
    icon: DollarSign,
    text: 'Custom software needs without enterprise pricing',
  },
  {
    icon: Cloud,
    text: 'Scalability & cloud challenges',
  },
  {
    icon: Database,
    text: 'Data chaos & inefficient pipelines',
  },
  {
    icon: Users,
    text: 'Businesses needing reliable engineering partners',
  },
];

export default function Problems() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-black mb-20 tracking-tight">
          Problem We Solve
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <problem.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-gray-700 leading-relaxed">{problem.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
