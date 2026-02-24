import React from 'react';
import { motion } from 'framer-motion';
import { scaleIn, staggerContainer, fadeInUp } from '../../utils/animations';
import { Award, Building2, Users, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const WorksAchievements: React.FC = () => {
  const { t } = useLanguage();

  // Define styles and icons for achievements
  const achievementStyles = [
    { gradient: 'from-amber-500 to-amber-700', iconColor: 'text-amber-200', hoverColor: 'group-hover:text-amber-100', glow: 'group-hover:drop-shadow-[0_0_20px_rgba(245,158,11,1)]' },
    { gradient: 'from-sky-500 to-sky-700', iconColor: 'text-sky-200', hoverColor: 'group-hover:text-sky-100', glow: 'group-hover:drop-shadow-[0_0_20px_rgba(14,165,233,1)]' },
    { gradient: 'from-emerald-500 to-emerald-700', iconColor: 'text-emerald-200', hoverColor: 'group-hover:text-emerald-100', glow: 'group-hover:drop-shadow-[0_0_20px_rgba(16,185,129,1)]' },
    { gradient: 'from-violet-500 to-violet-700', iconColor: 'text-violet-200', hoverColor: 'group-hover:text-violet-100', glow: 'group-hover:drop-shadow-[0_0_20px_rgba(139,92,246,1)]' },
    { gradient: 'from-rose-500 to-rose-700', iconColor: 'text-rose-200', hoverColor: 'group-hover:text-rose-100', glow: 'group-hover:drop-shadow-[0_0_20px_rgba(244,63,94,1)]' },
    { gradient: 'from-amber-500 to-amber-700', iconColor: 'text-amber-200', hoverColor: 'group-hover:text-amber-100', glow: 'group-hover:drop-shadow-[0_0_20px_rgba(245,158,11,1)]' },
    { gradient: 'from-sky-500 to-sky-700', iconColor: 'text-sky-200', hoverColor: 'group-hover:text-sky-100', glow: 'group-hover:drop-shadow-[0_0_20px_rgba(14,165,233,1)]' },
    { gradient: 'from-emerald-500 to-emerald-700', iconColor: 'text-emerald-200', hoverColor: 'group-hover:text-emerald-100', glow: 'group-hover:drop-shadow-[0_0_20px_rgba(16,185,129,1)]' },
  ];

  const achievementIcons = [Award, Building2, Users, Globe, Award, Building2, Users, Globe];

  const achievementsFromT = Object.values(t.worksPage?.achievements || {}) as {
    title: string;
    count: string | number;
    description: string;
  }[];

  const achievementsWithIcons = achievementsFromT.map((a, i) => ({
    icon: achievementIcons[i] || Award,
    title: a.title,
    count: a.count,
    description: a.description,
    ...achievementStyles[i],
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
            {t.worksPage?.achievementsSection?.title || t.works.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.worksPage?.achievementsSection?.subtitle || t.works.subtitle}
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {achievementsWithIcons.map((achievement, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.08, rotate: 1 }}
              whileTap={{ scale: 0.96 }}
              className="group relative overflow-hidden  dark:hover:shadow-teal-900 rounded-2xl shadow-lg transition-all duration-500"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} transition-transform duration-500 group-hover:scale-110`}
              />
              <div className="relative p-10 text-white flex flex-col items-center justify-center text-center">
                <achievement.icon
                  size={60}
                  className={`mb-6 transition-all duration-500 ${achievement.iconColor} ${achievement.hoverColor} ${achievement.glow} group-hover:scale-125 group-hover:rotate-6`}
                />
                <div className="text-5xl font-extrabold mb-3 transition-transform duration-500 group-hover:translate-y-1">
                  {achievement.count}
                </div>
                <h3 className="text-2xl font-bold mb-3 transition-colors duration-500 group-hover:text-white">
                  {achievement.title}
                </h3>
                <p className="text-white/90 text-base transition-opacity duration-500 group-hover:opacity-100">
                  {achievement.description}
                </p>
              </div>
              {/* Decorative overlay animation */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorksAchievements;
