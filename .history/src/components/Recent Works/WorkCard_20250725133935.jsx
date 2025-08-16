import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../utils/Icons";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, zoomIn } from "../../utils/animations";

function WorkCard({ work, onDemoClick }) {
  return (
    <motion.div {...zoomIn} className="bg-white dark:bg-deepMint-800 rounded-lg shadow hover:shadow-lg overflow-hidden transition">
      <motion.img {...fadeUp} src={work.image} alt={work.title} className="w-full h-52 object-cover" />
      <motion.div {...fadeLeft} className="p-4">
        <motion.h3 {...fadeRight} className="text-lg font-semibold">{work.title}</motion.h3>
        <button
          onClick={onDemoClick}
          className="inline-flex items-center gap-1 mt-2 text-deepMint-500 hover:underline"
        >
          Demo <i className="uil uil-arrow-right text-sm" />
        </button>
      </motion.div>
    </motion.div>
  );
}

export default WorkCard;
