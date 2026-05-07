import { Heart, Award, Eye, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    icon: Heart,
    label: 'Commitment',
    desc: 'Own outcomes, ship like founders.',
    gradient: 'from-amber-400 to-purple-500',
  },
  {
    icon: Award,
    label: 'Quality',
    desc: 'Testing, monitoring, and clarity by default.',
    gradient: 'from-violet-600 to-blue-500',
  },
  {
    icon: Eye,
    label: 'Transparency',
    desc: 'Plan, risks, and progress every week.',
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    icon: TrendingUp,
    label: 'Improvement',
    desc: 'Faster, safer, easier to change.',
    gradient: 'from-violet-600 via-purple-500 to-blue-500',
  },
];

const spring = { type: 'spring' as const, stiffness: 260, damping: 28, mass: 0.85 };

export default function Values() {
  return (
    <section id="values" className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={spring}
        >
          <span className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.24em] text-purple-200/90">
            Our values
          </span>
          <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight px-2">
            Principles that keep us sharp
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#3B82F6]">
              every release trustworthy.
            </span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          {values.map((value, i) => (
            <motion.div
              key={value.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ ...spring, delay: i * 0.09 }}
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 px-4 sm:px-6 py-6 sm:py-8 text-left backdrop-blur-xl transition-all duration-400 hover:bg-white/8 hover:border-white/25 hover:-translate-y-1"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_0%_0%,rgba(251,191,36,0.16),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(168,85,247,0.18),transparent_55%)]" />
              <div className="relative flex items-start gap-3 sm:gap-4">
                <div className={`flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${value.gradient} shadow-lg shadow-purple-500/30`}>
                  <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
                    {value.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
