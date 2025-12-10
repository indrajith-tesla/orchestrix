import { Check } from 'lucide-react';

const reasons = [
  'Affordable. High quality. Zero fluff.',
  'Fast execution by a focused engineering team',
  'Direct collaboration—no middle layers',
  'Engineering-first mindset',
];

export default function Why() {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-black mb-20 tracking-tight">
          Why OrchestriX
        </h2>

        <div className="space-y-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>

              <p className="text-xl md:text-2xl text-black font-medium pt-0.5">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
