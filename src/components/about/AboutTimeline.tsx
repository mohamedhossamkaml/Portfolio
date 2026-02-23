import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useLanguage } from '../../context/LanguageContext';

const AboutTimeline: React.FC = () => {
  const { t } = useLanguage();

  const experience = Object.values(t.aboutPage.timeline.experience || {}) as {
    year: string;
    event: string;
  }[];

  const education = Object.values(t.aboutPage.timeline.education || {}) as {
    year: string;
    event: string;
  }[];

  const sortByYear = (items: { year: string; event: string }[], desc = false) => {
    return items.sort((a, b) => {
      const yearA = parseInt(a.year.split(" ")[0]);
      const yearB = parseInt(b.year.split(" ")[0]);
      return desc ? yearB - yearA : yearA - yearB;
    });
  };

  const sortedExperience = sortByYear(experience, true);
  const sortedEducation = sortByYear(education, false);

  const TimelineSection = ({ title, items }: { title: string; items: { year: string; event: string }[] }) => (
    <div className="relative mb-24">
      <h3 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-12 relative z-10">
        {title}
      </h3>

      {/* Center line starts AFTER the title */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1
                      bg-gradient-to-b from-teal-300 via-teal-400 to-teal-600
                      dark:from-teal-700 dark:via-teal-600 dark:to-teal-500
                      z-0 mt-4 h-[calc(100%-3rem)]" />

      <motion.div
        className="space-y-20 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {items.map((milestone, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} group`}
          >
            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} relative z-10`}>
              <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg
                              transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-100/10 to-transparent
                                opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl" />
                <h4 className="text-2xl md:text-3xl font-bold text-teal-600 dark:text-teal-400 mb-4
                               transition-colors duration-500 group-hover:text-teal-700 dark:group-hover:text-teal-300">
                  {milestone.year}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed
                              transition-opacity duration-500 group-hover:opacity-100">
                  {milestone.event}
                </p>
              </div>
            </div>

            <div className="w-full md:w-2/12 flex justify-center relative z-10">
              <div className="w-8 h-8 bg-white dark:bg-teal-400 rounded-full border-4
                              border-teal-300 dark:border-teal-600 transition-transform duration-500
                              group-hover:scale-125 group-hover:rotate-6 shadow-md" />
            </div>

            <div className="hidden md:block w-5/12" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section className="py-28 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800
                        dark:from-gray-800 dark:via-gray-850 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          className="text-center mb-24"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
            {t.aboutPage.timeline.title}
          </h2>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto">
            {t.aboutPage.timeline.subtitle}
          </p>
        </motion.div>

        <TimelineSection title={t.common?.experience || 'Experience'} items={sortedExperience} />
        <TimelineSection title={t.common?.education || 'Education'} items={sortedEducation} />
      </div>
    </section>
  );
};

export default AboutTimeline;
