import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface AwardType {
  year: string;
  title: string;
  organization: string;
}

const WorksAwards: React.FC = () => {
  const { t } = useLanguage();

  const awardsFromT = Object.values(t.worksPage?.awards || {}) as AwardType[];

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
            {t.worksPage?.awardsSection?.title || 'Awards & Recognition'}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.worksPage?.awardsSection?.subtitle || 'Celebrating our industry accolades'}
          </p>
        </motion.div>

        {/* Awards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {awardsFromT.map((award, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.97 }}
              className="group bg-gradient-to-br from-slate-100 to-white dark:from-gray-800 dark:to-gray-900
                         p-8 rounded-2xl shadow-lg border-l-4 border-sky-500 dark:border-sky-400
                         transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="flex items-start gap-5">
                <div className="bg-sky-100 dark:bg-sky-900 p-4 rounded-xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <Award
                    className="text-sky-600 dark:text-sky-400 transition-colors duration-500 group-hover:text-sky-300"
                    size={28}
                  />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-sky-600 dark:text-sky-400 font-semibold mb-2 transition-colors duration-500 group-hover:text-sky-300">
                    {award.year}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500 group-hover:text-sky-600 dark:group-hover:text-sky-300">
                    {award.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 transition-opacity duration-500 group-hover:opacity-100">
                    {award.organization}
                  </p>
                </div>
              </div>
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorksAwards;
