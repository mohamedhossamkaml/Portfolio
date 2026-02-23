import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { Star } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const WorksTestimonials: React.FC = () => {
  const { t } = useLanguage();
  const testimonialsFromT = Object.values(t.worksPage?.testimonials || {});

  const starColors = [
    { base: 'text-yellow-400 fill-yellow-400', hover: 'group-hover:text-amber-300 group-hover:fill-amber-300', glow: 'group-hover:drop-shadow-[0_0_12px_rgba(250,204,21,1)]' },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-teal-600 to-teal-800 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            {t.worksPage?.testimonialsSection?.title || 'Client Testimonials'}
          </h2>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto">
            {t.worksPage?.testimonialsSection?.subtitle || 'What our clients say about working with us'}
          </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="grid md:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonialsFromT.map((testimonial: any, index: number) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.97 }}
              className="group bg-white  dark:hover:shadow-teal-900 dark:bg-gray-800 p-10 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-100/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl" />

              <div className="relative">
                <div className="flex gap-1 mb-6  justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => {
                    const color = starColors[0];
                    return (
                      <Star
                        key={i}
                        size={22}
                        className={`transition-all duration-500 ${color.base} ${color.hover} ${color.glow} group-hover:scale-110 group-hover:rotate-6`}
                      />
                    );
                  })}
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic mb-6 transition-opacity duration-500 group-hover:opacity-100">
                  "{testimonial.quote}"
                </p>
                <div className="text-center">
                  <div className="font-bold text-gray-900 dark:text-white transition-colors duration-500 group-hover:text-teal-600 dark:group-hover:text-teal-300">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-500 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorksTestimonials;
