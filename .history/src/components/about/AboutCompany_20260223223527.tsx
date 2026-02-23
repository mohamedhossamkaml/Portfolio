import React from 'react';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer } from '../../utils/animations';
import { useLanguage } from '../../context/LanguageContext';
import ConstructionBackground from '../Tools/ConstructionBackground';

const AboutCompany: React.FC = () => {
  const { t } = useLanguage();
  const [svgVisible, setSvgVisible] = React.useState(false);

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
            {t.aboutPage.company.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.aboutPage.company.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Text Section */}
          <motion.div variants={fadeInLeft} className="space-y-6">
            {(Object.values(t.aboutPage.company.paragraphs) as string[]).map((p, i) => (
              <p
                key={i}
                className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed transition-opacity duration-500 group-hover:opacity-100"
              >
                {p}
              </p>
            ))}
          </motion.div>

          {/* Construction Background Section */}
          <motion.div
            variants={fadeInRight}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.97 }}
            className="group relative w-full bg-gradient-to-br from-teal-50 via-teal-100 to-teal-200
                      dark:from-gray-800 dark:via-gray-850 dark:to-gray-900
                      rounded-2xl p-10 shadow-lg hover:shadow-2xl dark:hover:shadow-teal-900
                      transition-all duration-500 ease-in-out overflow-hidden min-h-[320px] md:min-h-[420px]"
            onAnimationComplete={() => setSvgVisible(true)}
          >
            {/* Decorative overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl" />

            {svgVisible && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <div className="w-full h-full flex items-center justify-center animate-pulse">
                  <ConstructionBackground />
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCompany;
