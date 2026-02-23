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
      {/* Image Container */}
      <div className="relative">
        <img
          src={image}
          alt="Personal Portrait"
          className="
            w-48 h-48 md:w-96 md:h-auto
            rounded-full md:rounded-lg
            object-cover shadow-lg translate-y-6
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute top-0 left-0 w-full h-full
            rounded-full md:rounded-lg
            bg-gradient-to-tr from-teal-500/40 via-transparent to-black/50
            mix-blend-multiply
          "
        ></div>
      </div>
    </motion.div>
  );
};

export default HeroImage;
