import { Rocket, Building2, AppWindow, BarChart3, Globe } from 'lucide-react';

const clients = [
  { icon: Rocket, label: 'Startups' },
  { icon: Building2, label: 'SMBs' },
  { icon: AppWindow, label: 'SaaS' },
  { icon: BarChart3, label: 'Data-driven companies' },
  { icon: Globe, label: 'Global clients' },
];

export default function WhoWeServe() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-black mb-20 tracking-tight">
          Who We Serve
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 p-6 group"
            >
              <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <client.icon className="w-10 h-10 text-white" />
              </div>

              <p className="text-center text-gray-700 font-medium">
                {client.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
