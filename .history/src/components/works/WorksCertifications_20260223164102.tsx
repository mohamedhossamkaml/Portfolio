import React from 'react';
import { motion } from 'framer-motion';
import { scaleIn, staggerContainer, fadeInUp } from '../../utils/animations';
import { Star } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const WorksCertifications: React.FC = () => {
  const { t } = useLanguage();

  const certificationsFromT = Object.values(t.worksPage?.certifications || {});

  const certColors = [
    { base: 'text-amber-500 dark:text-amber-400', hover: 'group-hover:text-amber-200', glow: 'group-hover:drop-shadow-[0_0_18px_rgba(245,158,11,1)]' },
    { base: 'text-sky-500 dark:text-sky-400', hover: 'group-hover:text-sky-200', glow: 'group-hover:drop-shadow-[0_0_18px_rgba(14,165,233,1)]' },
    { base: 'text-emerald-500 dark:text-emerald-400', hover: 'group-hover:text-emerald-200', glow: 'group-hover:drop-shadow-[0_0_18px_rgba(16,185,129,1)]' },
  ];

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
            {t.worksPage?.certificationsSection?.title || 'Certifications'}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.worksPage?.certificationsSection?.subtitle || 'Internationally recognized standards we uphold'}
          </p>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {certificationsFromT.map((cert: any, index: number) => {
            const color = certColors[index] || certColors[1];
            return (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.06, rotate: 1 }}
                whileTap={{ scale: 0.96 }}
                className="group bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl" />
                <div className="relative flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 bg-gradient-to-tr from-white/20 to-transparent">
                    <Star
                      size={36}
                      className={`transition-all duration-500 ${color.base} ${color.hover} ${color.glow}`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-500 group-hover:text-sky-600 dark:group-hover:text-sky-300">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 transition-opacity duration-500 group-hover:opacity-100">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WorksCertifications;
