import React from 'react';
import { motion } from 'framer-motion';
import { scaleIn, staggerContainer } from '../../utils/animations';
import { Building2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const AboutCards: React.FC = () => {
  const { t } = useLanguage();

  const cardColors = [
    { base: 'text-blue-600 dark:text-blue-400', hover: 'group-hover:text-blue-500', glow: 'group-hover:drop-shadow-[0_0_15px_rgba(37,99,235,1)]' },
    { base: 'text-purple-600 dark:text-purple-400', hover: 'group-hover:text-purple-500', glow: 'group-hover:drop-shadow-[0_0_15px_rgba(147,51,234,1)]' },
    { base: 'text-teal-600 dark:text-teal-400', hover: 'group-hover:text-teal-500', glow: 'group-hover:drop-shadow-[0_0_15px_rgba(13,148,136,1)]' },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {Object.values(t.about.cards).map((card: any, index) => {
            const color = cardColors[index % cardColors.length];
            return (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.97 }}
                className="group bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg
                           hover:shadow-2xl dark:hover:shadow-teal-800 transition-all hover:-translate-y-2
                           border border-gray-100 dark:border-gray-700 relative overflow-hidden"
              >
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl" />

                <Building2
                  size={52}
                  className={`mb-6 transition-all duration-500 ${color.base} ${color.hover} ${color.glow} group-hover:scale-110 group-hover:rotate-6`}
                />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-500 group-hover:text-teal-600 dark:group-hover:text-teal-300">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-opacity duration-500 group-hover:opacity-100">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCards;
