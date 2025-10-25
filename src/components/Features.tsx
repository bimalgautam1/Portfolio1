import { Zap, Shield, Smartphone, Layers } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance ensures your site loads instantly, keeping users engaged and conversion rates high.'
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description: 'Built with security best practices in mind. Your data and your users are protected from day one.'
  },
  {
    icon: Smartphone,
    title: 'Fully Responsive',
    description: 'Perfect on every device. From mobile phones to ultra-wide monitors, your site adapts beautifully.'
  },
  {
    icon: Layers,
    title: 'Modern Stack',
    description: 'Built with cutting-edge technologies. React, TypeScript, and Tailwind CSS power your application.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Everything you need
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features that help you build better, faster, and more efficiently
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
