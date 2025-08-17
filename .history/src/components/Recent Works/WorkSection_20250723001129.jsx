import { useState } from "react";
import WorkCard from "./WorkCard";
import WorkPopup from "./WorkPopup";

const filters = ["all", "web", "app", "design"];

function WorkSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedWork, setSelectedWork] = useState(null);

  const works = [ /* بيانات المشاريع هنا */];

  const filteredWorks = activeFilter === "all"
    ? works
    : works.filter(work => work.type === activeFilter);

  return (
    <section id="work" className="py-16 px-6 bg-white dark:bg-deepMint-900">
      <h2 className="text-4xl font-bold text-center mb-10 text-deepMint-800 dark:text-deepMint-50">Recent Works</h2>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded ${activeFilter === filter
              ? "bg-deepMint-500 text-white"
              : "bg-deepMint-100 dark:bg-deepMint-700 text-deepMint-700 dark:text-deepMint-50"
              }`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {/* Work Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredWorks.map((work, i) => (
          <WorkCard key={i} work={work} onDemoClick={() => setSelectedWork(work)} />
        ))}
      </div>

      {/* Popup */}
      {selectedWork && <WorkPopup work={selectedWork} onClose={() => setSelectedWork(null)} />}
    </section>
  );
}

export default WorkSection