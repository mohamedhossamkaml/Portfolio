import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { Target, Users, TrendingUp, ThumbsUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const WorksCapabilities: React.FC = () => {
  const { t } = useLanguage();

  const capabilitiesIcons = [Target, Users, TrendingUp, ThumbsUp];
  const capabilitiesColors = [
    { base: 'text-rose-500 dark:text-rose-400', hover: 'group-hover:text-rose-300', glow: 'group-hover:drop-shadow-[0_0_18px_rgba(244,63,94,1)]' },
    { base: 'text-sky-500 dark:text-sky-400', hover: 'group-hover:text-sky-300', glow: 'group-hover:drop-shadow-[0_0_18px_rgba(14,165,233,1)]' },
    { base: 'text-emerald-500 dark:text-emerald-400', hover: 'group-hover:text-emerald-300', glow: 'group-hover:drop-shadow-[0_0_18px_rgba(16,185,129,1)]' },
    { base: 'text-violet-500 dark:text-violet-400', hover: 'group-hover:text-violet-300', glow: 'group-hover:drop-shadow-[0_0_18px_rgba(139,92,246,1)]' },
  ];

  const capabilitiesFromT = Object.values(t.worksPage?.capabilities || {}) as {
    title: string;
    description: string;
  }[];

  const capabilitiesWithIcons = capabilitiesFromT.map((c, i) => ({
    icon: capabilitiesIcons[i] || Target,
    title: c.title,
    description: c.description,
    ...capabilitiesColors[i],
  }));

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            {t.worksPage?.capabilitiesSection?.title || 'Our Capabilities'}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.worksPage?.capabilitiesSection?.subtitle || 'What makes us industry leaders'}
          </p>
        </motion.div>

        {/* Capabilities */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {capabilitiesWithIcons.map((capability, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.08, rotate: 1 }}
              whileTap={{ scale: 0.96 }}
              className="group bg-white dark:bg-gray-900  dark:hover:shadow-teal-900 p-8 rounded-2xl shadow-lg text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <capability.icon
                className={`mx-auto mb-6 transition-all duration-500 ${capability.base} ${capability.hover} ${capability.glow} group-hover:scale-125 group-hover:rotate-6`}
                size={60}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-500 group-hover:text-sky-600 dark:group-hover:text-sky-300">
                {capability.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 transition-opacity duration-500 group-hover:opacity-100">
                {capability.description}
              </p>
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorksCapabilities;
