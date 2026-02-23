import { motion } from "framer-motion";
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
  textVariant,
  fadeIn,
} from "../utils/animations";
import CodeRainBackground from "./ui/CodeBackgroundCanvas";
import { useLanguage } from "../context/LanguageContext";
import HeroImage from "./ui/HeroImage";
import { Typewriter } from "react-simple-typewriter";

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      id="hero"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="min-h-screen flex items-center relative overflow-hidden
                  bg-black dark:bg-gray-950"
    >
      {/*Background*/}
      <CodeRainBackground fontSize={20} speed={120} />

      {/*  */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <HeroImage />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8 order-2 md:order-1 text-center md:text-left"
          >
            <div className="space-y-4">
              {/* Title */}
              <motion.h1
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                className="text-4xl md:text-6xl font-bold text-white leading-tight"
              >
                {t?.hero?.titleStart}{" "}
                <motion.span
                  className="text-teal-400"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {t?.hero?.titleHighlight}
                </motion.span>{" "}
                {t?.hero?.titleEnd}
              </motion.h1>

              {/* Typewriter */}
              <motion.h2
                variants={fadeIn}
                className="text-2xl md:text-3xl leading-tight font-semibold text-teal-400"
              >
                <Typewriter
                  words={t?.hero?.typewriterWords || []}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                variants={fadeIn}
                className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl mx-auto md:mx-0"
              >
                {t?.hero?.subtitle}
              </motion.p>
            </div>

            {/* Buttons */}
            <motion.div
              variants={scaleIn}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold shadow hover:bg-teal-600 transition"
              >
                {t?.hero?.cta}
              </a>
              <a
                href="/cv.pdf"
                download="Mohamed Hossam Resume.pdf"
                className="px-6 py-3 border border-teal-400 text-teal-400 rounded-lg font-semibold hover:bg-teal-400 hover:text-white transition"
              >
                {t?.hero?.downloadCV}
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
