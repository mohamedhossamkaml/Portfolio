import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { CheckCircle, Users, Heart, Target, Award, Eye } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const valueIcons = [CheckCircle, Users, Heart, Target, Award, Eye];

const AboutValues: React.FC = () => {
  const { t } = useLanguage();

  const values = Object.values(t.aboutPage.values) as {
    title: string;
    description: string;
  }[];

  const iconColors = [
    'text-blue-600 dark:text-blue-400 group-hover:text-blue-500 group-hover:drop-shadow-[0_0_15px_rgba(37,99,235,1)]',
    'text-purple-600 dark:text-purple-400 group-hover:text-purple-500 group-hover:drop-shadow-[0_0_15px_rgba(147,51,234,1)]',
    'text-pink-600 dark:text-pink-400 group-hover:text-pink-500 group-hover:drop-shadow-[0_0_15px_rgba(236,72,153,1)]',
    'text-green-600 dark:text-green-400 group-hover:text-green-500 group-hover:drop-shadow-[0_0_15px_rgba(22,163,74,1)]',
    'text-yellow-600 dark:text-yellow-400 group-hover:text-yellow-500 group-hover:drop-shadow-[0_0_15px_rgba(202,138,4,1)]',
    'text-teal-600 dark:text-teal-400 group-hover:text-teal-500 group-hover:drop-shadow-[0_0_15px_rgba(13,148,136,1)]',
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            {t.aboutPage.coreValues.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.aboutPage.coreValues.subtitle}
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((value, index) => {
            const Icon = valueIcons[index] || CheckCircle;
            const color = iconColors[index % iconColors.length];
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.97 }}
                className="group bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg
                           hover:shadow-2xl dark:hover:shadow-teal-900 transition-all hover:-translate-y-2
                           border border-gray-100 dark:border-gray-700 relative overflow-hidden"
              >
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-100/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl" />

                <Icon
                  size={44}
                  className={`mb-6 transition-all duration-500 ${color} group-hover:scale-110 group-hover:rotate-6`}
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-500 group-hover:text-teal-600 dark:group-hover:text-teal-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 transition-opacity duration-500 group-hover:opacity-100">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutValues;
