import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animations";
import { HERO_IMAGES } from "../../config/imagesConfig";

type HeroImageProps = {
  size?: string;
};
const HeroImage: React.FC = ({ size }: HeroImageProps) => {
  // Pick a random image from the array
  const image = HERO_IMAGES[0];

  return (
    <motion.div
      variants={fadeInUp}
      className="flex justify-center md:justify-end"
    >
      <img
        src={image}
        alt="Hero Illustration"
        className={`object-cover ${size} w-64 md:w-96 rounded-lg shadow-lg`}
      />
    </motion.div>
  );
};

export default HeroImage;
