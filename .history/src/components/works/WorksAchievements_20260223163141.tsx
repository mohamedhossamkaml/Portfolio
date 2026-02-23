import React from 'react';
import { motion } from 'framer-motion';
import { scaleIn, staggerContainer, fadeInUp } from '../../utils/animations';
import { Award, Building2, Users, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const WorksAchievements: React.FC = () => {
  const { t } = useLanguage();

  const achievementColors = [
    { gradient: 'from-yellow-400 to-yellow-600', glow: 'group-hover:drop-shadow-[0_0_15px_rgba(202,138,4,1)]' },
    { gradient: 'from-blue-400 to-blue-600', glow: 'group-hover:drop-shadow-[0_0_15px_rgba(37,99,235,1)]' },
    { gradient: 'from-green-400 to-green-600', glow: 'group-hover:drop-shadow-[0_0_15px_rgba(22,163,74,1)]' },
    { gradient: 'from-purple-400 to-purple-600', glow: 'group-hover:drop-shadow-[0_0_15px_rgba(147,51,234,1)]' },
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
    gradient: achievementColors[i]?.gradient || 'from-blue-400 to-blue-600',
    glow: achievementColors[i]?.glow || 'group-hover:drop-shadow-[0_0_15px_rgba(37,99,235,1)]',
  }));

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.worksPage?.achievementsSection?.title || t.works.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.worksPage?.achievementsSection?.subtitle || t.works.subtitle}
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {achievementsWithIcons.map((achievement, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} transition-transform group-hover:scale-105`} />
              <div className="relative p-8 text-white">
                <achievement.icon
                  size={52}
                  className={`mb-4 transition-transform duration-300 ${achievement.glow} group-hover:scale-110`}
                />
                <div className="text-5xl font-bold mb-2 transition-transform duration-300 group-hover:translate-y-1">
                  {achievement.count}
                </div>
                <h3 className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-yellow-200">
                  {achievement.title}
                </h3>
                <p className="text-white/90 transition-opacity duration-300 group-hover:opacity-100">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorksAchievements;
