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
      {/* الصورة نفسها */}
      <img
        src={image}
        alt="Hero Illustration"
        className="
          w-64 md:w-96 shadow-lg
          rounded-full md:rounded-lg
          object-cover relative z-10
        "
      />

      {/* Overlay*/}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b from-black/40 via-transparent to-black/70
          rounded-full md:rounded-lg
          z-20
        "
      ></div>
    </motion.div>
  );
};

export default HeroImage;
