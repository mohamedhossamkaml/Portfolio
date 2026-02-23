import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '../../utils/animations';
import { useLanguage } from '../../context/LanguageContext';
import { Building2, Home, Factory, Hammer, PaintBucket, Wrench, HardHat, Shield, Clock, Award } from 'lucide-react';


const serviceIcons = [Building2, Home, Factory, Hammer, PaintBucket, Wrench];
const serviceColors = [
  { gradient: 'from-blue-500 to-blue-600', glow: 'group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]' },
  { gradient: 'from-teal-500 to-teal-600', glow: 'group-hover:drop-shadow-[0_0_10px_rgba(20,184,166,0.8)]' },
  { gradient: 'from-purple-500 to-purple-600', glow: 'group-hover:drop-shadow-[0_0_10px_rgba(147,51,234,0.8)]' },
  { gradient: 'from-orange-500 to-orange-600', glow: 'group-hover:drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]' },
  { gradient: 'from-pink-500 to-pink-600', glow: 'group-hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]' },
  { gradient: 'from-green-500 to-green-600', glow: 'group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]' },
];
export const ServicesProcess: React.FC = () => {
  const { t } = useLanguage();
  const processSteps = Object.values(t.servicesPage?.processSteps || {}) as { number: string; title: string; description: string; }[];
  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-800 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.servicesPage.sections.processTitle}
          </h2>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            {t.servicesPage.sections.processSubtitle}
          </p>
        </motion.div>
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} >
          {processSteps.map((step, index) => (
            <motion.div key={index} variants={scaleIn}
              className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg relative ltr:border-l-4 rtl:border-r-4 border-teal-500 dark:border-teal-400 hover:shadow-xl transition-all" >
              <div className="text-6xl font-bold text-teal-100 dark:text-gray-700 absolute top-6 opacity-50 ltr:right-6 rtl:left-6">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 relative z-10 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-all">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 relative z-10">
                {step.description}
              </p>
            </motion.div>
          )
          )
          }
        </motion.div>
      </div>
    </section>);
};
