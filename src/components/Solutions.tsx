import { Code, Cloud, BrainCircuit, RefreshCw } from 'lucide-react';

const solutions = [
  {
    icon: Code,
    title: 'Product & App Development',
    description: 'Web, Mobile, MVPs, End-to-End Products',
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    description: 'Architecture, Deployment, Scalable Hosting',
  },
  {
    icon: BrainCircuit,
    title: 'Data & AI Solutions',
    description: 'Databases, Pipelines, BI, AI/ML',
  },
  {
    icon: RefreshCw,
    title: 'Code & System Improvements',
    description: 'Refactoring, Optimization, Modernization',
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 tracking-tight">
          Our Solutions
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group p-10 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl hover:from-gray-800 hover:to-gray-700 transition-all duration-300 border border-gray-700 hover:border-gray-600"
            >
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <solution.icon className="w-8 h-8 text-black" />
              </div>

              <h3 className="text-2xl font-bold mb-3 tracking-tight">
                {solution.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
