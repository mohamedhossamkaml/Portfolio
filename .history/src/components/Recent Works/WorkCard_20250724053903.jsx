
import { fadeUp, fadeLeft, fadeRight, zoomIn } from "../../utils/animations";

function WorkCard({ work, onDemoClick }) {
  return (
    <div className="bg-white dark:bg-deepMint-800 rounded-lg shadow hover:shadow-lg overflow-hidden transition">
      <img src={work.image} alt={work.title} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{work.title}</h3>
        <button
          onClick={onDemoClick}
          className="inline-flex items-center gap-1 mt-2 text-deepMint-500 hover:underline"
        >
          Demo <i className="uil uil-arrow-right text-sm" />
        </button>
      </div>
    </div>
  );
}

export default WorkCard;
