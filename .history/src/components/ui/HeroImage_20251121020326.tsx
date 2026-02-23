import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animations";
import { HERO_IMAGES } from "../../config/imagesConfig";

const HeroImage: React.FC = () => {
  const image = HERO_IMAGES[0]; // صورة شخصية من ملف خارجي

  return (
    <motion.div
      variants={fadeInUp}
      className="
        relative flex justify-center md:justify-end
        w-48 h-48 md:w-96 md:h-[400px]
        rounded-full md:rounded-lg
        shadow-lg overflow-hidden
      "
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay فوق الخلفية */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b from-black/30 via-transparent to-black/60
          rounded-full md:rounded-lg
        "
      ></div>
    </motion.div>
  );
};

export default HeroImage;
