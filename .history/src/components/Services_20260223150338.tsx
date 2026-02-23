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
    'bg-blue-100 dark:bg-blue-900',
    'bg-purple-100 dark:bg-purple-900',
    'bg-pink-100 dark:bg-pink-900',
    'bg-green-100 dark:bg-green-900',
    'bg-yellow-100 dark:bg-yellow-900',
    'bg-teal-100 dark:bg-teal-900',
  ];

  const iconColors = [
    'text-blue-600 dark:text-blue-400 group-hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.8)]',
    'text-purple-600 dark:text-purple-400 group-hover:drop-shadow-[0_0_8px_rgba(147,51,234,0.8)]',
    'text-pink-600 dark:text-pink-400 group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]',
    'text-green-600 dark:text-green-400 group-hover:drop-shadow-[0_0_8px_rgba(22,163,74,0.8)]',
    'text-yellow-600 dark:text-yellow-400 group-hover:drop-shadow-[0_0_8px_rgba(202,138,4,0.8)]',
    'text-teal-600 dark:text-teal-400 group-hover:drop-shadow-[0_0_8px_rgba(13,148,136,0.8)]',
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
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          <motion.h2
            variants={textVariant}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {t.services.title}
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto ">
            {t.services.subtitle}
          </p>
          <SeeMoreButton to="/services" label={t.common.seeMore} />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg
                           hover:shadow-2xl dark:hover:shadow-teal-900 transition-all hover:-translate-y-1
                           border border-gray-100 dark:border-gray-700"
              >
                <motion.div
                  variants={scaleIn}
                  className={`${bgColors[idx]} w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-all`}
                >
                  <Icon size={28} className={`${iconColors[idx]} transition-all`} />
                </motion.div>
                <motion.h3
                  variants={fadeInUp}
                  className="text-xl font-bold text-gray-900 dark:text-white mb-2"
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  variants={fadeIn}
                  className="text-gray-600 dark:text-gray-400 leading-relaxed"
                >
                  {service.desc}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          onContextMenu={(e) => e.preventDefault()}
          className="flex items-center justify-center mt-10
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
