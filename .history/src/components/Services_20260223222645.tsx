import { Code2, Plug, Palette, FileText, Gauge, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import SeeMoreButton from './Tools/Buttons/SeeMoreButton';
import {
  fadeInUp,
  fadeIn,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
  textVariant,
} from '../utils/animations';
import { useLanguage } from '../context/LanguageContext';
import VantaBackground from './Tools/VantaBackground';
import Stack from './Tools/motion/Stack';
import { STACK_IMAGES } from '../config/imagesConfig';

const Services = () => {
  const { t } = useLanguage();
  const imageUrls: string[] = [...STACK_IMAGES];

  const stackItems = imageUrls.map((url, idx) => ({
    id: idx,
    img: url,
  }));

  const icons = [Code2, Plug, Palette, FileText, Gauge, MessageSquare];

  const bgColors = [
    'bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800',
    'bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800',
    'bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900 dark:to-pink-800',
    'bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800',
    'bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900 dark:to-yellow-800',
    'bg-gradient-to-br from-teal-100 to-teal-200 dark:from-teal-900 dark:to-teal-800',
  ];

  const iconColors = [
    'text-blue-600 dark:text-blue-400 group-hover:text-blue-500 group-hover:drop-shadow-[0_0_15px_rgba(37,99,235,1)]',
    'text-purple-600 dark:text-purple-400 group-hover:text-purple-500 group-hover:drop-shadow-[0_0_15px_rgba(147,51,234,1)]',
    'text-pink-600 dark:text-pink-400 group-hover:text-pink-500 group-hover:drop-shadow-[0_0_15px_rgba(236,72,153,1)]',
    'text-green-600 dark:text-green-400 group-hover:text-green-500 group-hover:drop-shadow-[0_0_15px_rgba(22,163,74,1)]',
    'text-yellow-600 dark:text-yellow-400 group-hover:text-yellow-500 group-hover:drop-shadow-[0_0_15px_rgba(202,138,4,1)]',
    'text-teal-600 dark:text-teal-400 group-hover:text-teal-500 group-hover:drop-shadow-[0_0_15px_rgba(13,148,136,1)]',
  ];

  return (
    <motion.section
      id="services"
      className="relative h-full min-h-screen flex flex-col justify-between py-20 items-center
                 bg-gradient-to-br from-slate-50 to-white
                 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <VantaBackground enabled={true} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full ">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          <motion.h2
            variants={textVariant}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
          >
            {t.services.title}
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto ">
            {t.services.subtitle}
          </p>
          <SeeMoreButton to="/services" label={t.common.seeMore} />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={staggerContainer}
        >
          {Object.values(t.services.list).map((service: any, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={idx}
                variants={
                  idx % 3 === 0
                    ? fadeInLeft
                    : idx % 3 === 1
                      ? scaleIn
                      : fadeInRight
                }
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.97 }}
                className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg
                           hover:shadow-2xl dark:hover:shadow-teal-900 transition-all hover:-translate-y-2
                           border border-gray-100 dark:border-gray-700 relative overflow-hidden"
              >
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl" />

                <motion.div
                  variants={scaleIn}
                  className={`${bgColors[idx]} w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                >
                  <Icon size={32} className={`${iconColors[idx]} transition-all duration-500`} />
                </motion.div>
                <motion.h3
                  variants={fadeInUp}
                  className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-500 group-hover:text-teal-600 dark:group-hover:text-teal-300"
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  variants={fadeIn}
                  className="text-gray-600 dark:text-gray-400 leading-relaxed transition-opacity duration-500 group-hover:opacity-100"
                >
                  {service.desc}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stack Section */}
        <motion.div
          onContextMenu={(e) => e.preventDefault()}
          className="flex items-center justify-center mt-16
                     overflow-hidden w-full shadow-xl
                     h-[70vh] md:h-[80vh] lg:h-[90vh]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Stack
            randomRotation={true}
            sensitivity={150}
            sendToBackOnClick={true}
            cardsData={stackItems}
            cardDimensions={{ width: 640, height: 420 }}
            aspectRatio="16 / 9"
            className="max-w-4xl w-full h-full"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
