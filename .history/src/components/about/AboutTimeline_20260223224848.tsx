import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useLanguage } from '../../context/LanguageContext';

const AboutTimeline: React.FC = () => {
  const { t } = useLanguage();

  // Extract experience & education from translation object
  const experience = Object.values(t.aboutPage.timeline.experience || {}) as {
    year: string;
    event: string;
  }[];

  const education = Object.values(t.aboutPage.timeline.education || {}) as {
    year: string;
    event: string;
  }[];

  // Helper component to render a timeline section
  const TimelineSection = ({ title, items }: { title: string; items: { year: string; event: string }[] }) => (
    <div className="relative mb-20">
      {/* Center line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-300 via-teal-400 to-teal-600 dark:from-teal-700 dark:via-teal-600 dark:to-teal-500" />

      <motion.div
        className="space-y-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="text-3xl font-bold text-white text-center mb-10">{title}</h3>
        {items.map((milestone, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} group`}
          >
            {/* Card */}
            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden">
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-100/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl" />
                <h4 className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-3 transition-colors duration-500 group-hover:text-teal-700 dark:group-hover:text-teal-300">
                  {milestone.year}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-lg transition-opacity duration-500 group-hover:opacity-100">
                  {milestone.event}
                </p>
              </div>
            </div>

            {/* Timeline dot */}
            <div className="w-full md:w-2/12 flex justify-center">
              <div className="w-6 h-6 bg-white dark:bg-teal-400 rounded-full border-4 border-teal-300 dark:border-teal-600 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6 shadow-md" />
            </div>

            <div className="hidden md:block w-5/12" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section className="py-24 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 dark:from-gray-800 dark:via-gray-850 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            {t.aboutPage.timeline.title}
          </h2>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto">
            {t.aboutPage.timeline.subtitle}
          </p>
        </motion.div>

        {/* Experience Section */}
        <TimelineSection title={t.common?.experience || 'Experience'} items={experience} />

        {/* Education Section */}
        <TimelineSection title={t.common?.education || 'Education'} items={education} />
      </div>
    </section>
  );
};

export default AboutTimeline;
