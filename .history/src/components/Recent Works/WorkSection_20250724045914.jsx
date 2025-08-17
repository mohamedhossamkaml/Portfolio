import { useState } from "react";
import { works } from "../../data/workData";
import WorkCard from "./WorkCard";
import WorkPopup from "./WorkPopup";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, zoomIn } from "../../utils/animations";

function WorkSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedWork, setSelectedWork] = useState(null);

  const filters = ["all", "web", "app", "design"];
  const filtered = activeFilter === "all" ? works : works.filter(w => w.type === activeFilter);

  return (
    <motion.section {...fadeUp} id="work" className="py-16 px-6 bg-deepMint-50 dark:bg-deepMint-900 text-deepMint-800 dark:text-deepMint-50">
      <h2 className="text-4xl font-bold text-center mb-10">Recent Works</h2>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-2 rounded ${activeFilter === f
              ? "bg-deepMint-500 text-white"
              : "bg-deepMint-100 dark:bg-deepMint-700 text-deepMint-700 dark:text-deepMint-50"
              }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((work, i) => (
          <WorkCard key={i} work={work} onDemoClick={() => setSelectedWork(work)} />
        ))}
      </div>

      {selectedWork && <WorkPopup work={selectedWork} onClose={() => setSelectedWork(null)} />}
    </motion.section>
  );
}

export default WorkSection;
