import React from 'react';
import { motion } from 'framer-motion';
import { scaleIn, staggerContainer } from '../../utils/animations';
import { Building2, Home, Factory, Hammer, PaintBucket, Wrench, } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

// Services List
const serviceIcons = [Building2, Home, Factory, Hammer, PaintBucket, Wrench];
const serviceColors = [
  { gradient: 'from-blue-500 to-blue-600', glow: 'group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]' },
  { gradient: 'from-teal-500 to-teal-600', glow: 'group-hover:drop-shadow-[0_0_10px_rgba(20,184,166,0.8)]' },
  { gradient: 'from-purple-500 to-purple-600', glow: 'group-hover:drop-shadow-[0_0_10px_rgba(147,51,234,0.8)]' },
  { gradient: 'from-orange-500 to-orange-600', glow: 'group-hover:drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]' },
  { gradient: 'from-pink-500 to-pink-600', glow: 'group-hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]' },
  { gradient: 'from-green-500 to-green-600', glow: 'group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]' },
];

export const ServicesList: React.FC = () => {
  const { t } = useLanguage();
  const detailedServices = Object.values(t.servicesPage?.detailedServices || {}) as {
    title: string;
    description: string;
    features: Record<string, string>;
  }[];

  const servicesWithIcons = detailedServices.map((s, i) => ({
    ...s,
    icon: serviceIcons[i] || Building2,
    gradient: serviceColors[i]?.gradient || 'from-teal-500 to-teal-600',
    glow: serviceColors[i]?.glow || 'group-hover:drop-shadow-[0_0_10px_rgba(20,184,166,0.8)]',
  }));

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesWithIcons.map((service, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className={`bg-gradient-to-r ${service.gradient} p-6 text-white`}>
                <service.icon size={48} className={`mb-4 transition-all ${service.glow}`} />
                <h3 className="text-2xl font-bold">{service.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {Object.values(service.features).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-teal-600 dark:bg-teal-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
