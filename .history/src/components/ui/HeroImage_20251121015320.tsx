import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animations";
import { HERO_IMAGES } from "../../config/imagesConfig";

const HeroImage: React.FC = () => {
  const image = HERO_IMAGES[0];

  return (
    <motion.div
      variants={fadeInUp}
      className="relative flex justify-center md:justify-end"
    >
      {/* الصورة */}
      <img
        src={image}
        alt="Hero Illustration"
        className="w-64 md:w-96 rounded-lg shadow-lg relative z-10"
      />

      {/* Overlay */}
      <div
        className="
          absolute inset-0 flex items-center justify-center
          sm:block md:block lg:hidden
        "
      >
        <div
          className="
            w-[300px] h-[300px] md:w-[400px] md:h-[400px]
            rounded-full bg-teal-500/30
            absolute -top-10 -left-10 z-0
          "
        ></div>
      </div>
    </motion.div>
  );
};

export default HeroImage;
