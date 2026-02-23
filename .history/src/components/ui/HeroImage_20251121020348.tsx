import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animations";
import { HERO_IMAGES } from "../../config/imagesConfig";

const HeroImage: React.FC = () => {
  const image = HERO_IMAGES[0]; // صورة شخصية من ملف خارجي

  return (
    <motion.div
      variants={fadeInUp}
      className="relative flex justify-center md:justify-end"
    >
      {/* الصورة نفسها */}
      <img
        src={image}
        alt="Personal Portrait"
        className="
          w-48 h-48 md:w-96 md:h-auto
          rounded-full md:rounded-lg
          object-cover shadow-lg relative z-10
        "
      />


    </motion.div>
  );
};

export default HeroImage;
