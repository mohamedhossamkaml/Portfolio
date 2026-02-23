import React from 'react';
import { motion } from 'framer-motion';
import { scaleIn, staggerContainer, fadeInUp } from '../../utils/animations';
import { Award, Building2, Users, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const WorksAchievements: React.FC = () => {
  const { t } = useLanguage();

  const achievementColors = [
    { gradient: 'from-amber-500 to-amber-700', glow: 'group-hover:drop-shadow-[0_0_18px_rgba(245,158,11,1)]' },
    { gradient: 'from-sky-500 to-sky-700', glow: 'group-hover:drop-shadow-[0_0_18px_rgba(14,165,233,1)]' },
    { gradient: 'from-emerald-500 to-emerald-700', glow: 'group-hover:drop-shadow-[0_0_18px_rgba(16,185,129,1)]' },
    { gradient: 'from-violet-500 to-violet-700', glow: 'group-hover:drop-shadow-[0_0_18px_rgba(139,92,246,1)]' },
  ];
  const achievementIcons = [Award, Building2, Users, Globe];

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
    gradient: achievementColors[i]?.gradient || 'from-sky-500 to-sky-700',
    glow: achievementColors[i]?.glow || 'group-hover:drop-shadow-[0_0_18px_rgba(14,165,233,1)]',
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
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} transition-transform duration-500 group-hover:scale-110`}
              />
              <div className="relative p-10 text-white flex flex-col items-center justify-center text-center">
                <achievement.icon
                  size={56}
                  className={`mb-6 transition-transform duration-500 ${achievement.glow} group-hover:scale-125`}
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
