import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, Shield, Clock, Award } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useLanguage } from '../../context/LanguageContext';

const whyIcons = [HardHat, Shield, Clock, Award];
const whyColors = [
  'text-indigo-600 dark:text-indigo-400 group-hover:drop-shadow-[0_0_15px_rgba(99,102,241,1)]',
  'text-red-600 dark:text-red-400 group-hover:drop-shadow-[0_0_15px_rgba(239,68,68,1)]',
  'text-yellow-600 dark:text-yellow-400 group-hover:drop-shadow-[0_0_15px_rgba(234,179,8,1)]',
  'text-green-600 dark:text-green-400 group-hover:drop-shadow-[0_0_15px_rgba(34,197,94,1)]',
];

const ServicesWhy: React.FC = () => {
  const { t } = useLanguage();

  const whyChooseUs = Object.values(t.servicesPage?.whyChooseUs || {}) as {
    title: string;
    description: string;
  }[];

  const whyWithIcons = whyChooseUs.map((w, i) => ({
    ...w,
    icon: whyIcons[i] || HardHat,
    color: whyColors[i] || 'text-teal-600 dark:text-teal-400 group-hover:drop-shadow-[0_0_15px_rgba(20,184,166,1)]',
  }));

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.servicesPage.sections.achievementsTitle}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.servicesPage.sections.achievementsSubtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {whyWithIcons.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group bg-gradient-to-br from-teal-50 to-white dark:from-gray-800 dark:to-gray-900
                         p-6 rounded-xl shadow-lg text-center transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              <item.icon
                className={`mx-auto mb-4 transition-transform duration-300 ${item.color} group-hover:scale-110`}
                size={56}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-white">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesWhy;
