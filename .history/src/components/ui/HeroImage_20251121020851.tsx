import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animations";
import { HERO_IMAGES } from "../../config/imagesConfig";

const HeroImage: React.FC = () => {
  const image = HERO_IMAGES[0]; // صورة شخصية PNG من ملف خارجي

  return (
    <motion.div
      variants={fadeInUp}
      className="relative flex justify-center md:justify-end"
    >
      {/* الصورة نفسها */}
      <img
        src={image}
        alt="Personal Portrait"
        className="w-48 h-48 md:w-96 md:h-auto
          rounded-full md:rounded-lg
          object-cover md:object-contain"
      />

      {/* Overlay فوق الصورة */}
      <div
        className="
          absolute inset-0
          rounded-full md:rounded-lg
          bg-gradient-to-tr from-teal-500/40 via-transparent to-black/50
          mix-blend-multiply
          z-20
        "
      ></div>
    </motion.div>
  );
};

export default HeroImage;
