import { useState } from "react";
import { motion } from "framer-motion";
import { UilBracketsCurly, UilSwatchbook, UilServerNetwork, UilAngleDown } from '@iconscout/react-unicons';
import { fadeUp, fadeLeft, fadeRight, zoomIn } from "../utils/animations";



function SkillsSection() {
  const [activeTab, setActiveTab] = useState("frontend");

  const skillsData = {
    frontend: [
      { name: "HTML", percentage: 90 },
      { name: "CSS", percentage: 80 },
      { name: "JavaScript", percentage: 60 },
      { name: "React", percentage: 85 },
    ],
    design: [
      { name: "Figma", percentage: 90 },
      { name: "Sketch", percentage: 80 },
      { name: "Photoshop", percentage: 70 },
    ],
    backend: [
      { name: "PHP", percentage: 80 },
      { name: "Python", percentage: 80 },
      { name: "MySQL", percentage: 70 },
      { name: "Firebase", percentage: 75 },
    ],
  };

  const iconMap = {
    frontend: UilBracketsCurly,
    design: UilSwatchbook,
    backend: UilServerNetwork,
  };

  // const tabDetails = [
  //   { key: "frontend", icon: "uil-brackets-curly", title: "Frontend Developer", subtitle: "More than 4 years" },
  //   { key: "design", icon: "uil-swatchbook", title: "UI / UX Design", subtitle: "More than 5 years" },
  //   { key: "backend", icon: "uil-server-network", title: "Backend Developer", subtitle: "More than 2 years" },
  // ];

  return (
    <motion.section {...fadeUp} id="skills" className="py-16 px-6 bg-white dark:bg-deepMint-800 text-deepMint-800 dark:text-deepMint-50">
      <h2 className="text-4xl font-bold text-center mb-12">My Experience</h2>

      <motion.div {...zoomIn} className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Tabs */}
        <motion.div {...fadeLeft} className="space-y-4">
          {Object.entries(iconMap).map(([key, Icon]) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center justify-between p-4 rounded-lg cursor-pointer shadow-md transition duration-300 ${activeTab === key
                ? "bg-deepMint-100 dark:bg-deepMint-700" : "hover:bg-deepMint-50 dark:hover:bg-deepMint-900"
                }`}
            >
              <div className="flex items-center gap-4">
                <Icon size="28" color={activeTab === key ? "#f5f7fa" : "#bc5090"} />
                <div>
                  <h4 className="font-semibold capitalize">{key} Developer</h4>
                  <span className="text-sm">Experience varies by focus</span>
                </div>
              </div>
              <UilAngleDown size="20" color={activeTab === key ? "#f5f7fa" : "#bc5090"} />
            </motion.div>
          ))}
        </motion.div>


        {/* Content */}
        <motion.div {...fadeRight} className="space-y-6">
          {skillsData[activeTab].map(({ name, percentage }, i) => (
            <motion.div
              // key={i}
              // initial={{ opacity: 0, x: -20 }}
              // animate={{ opacity: 1, x: 0 }}
              // transition={{ duration: 0.5, delay: i * 0.1 }}
              {...fadeLeft}
            >
              <div className="flex justify-between mb-1">
                <h5 className="font-medium">{name}</h5>
                <span className="text-sm">{percentage}%</span>
              </div>
              <div className="w-full h-2 bg-deepMint-100 dark:bg-deepMint-700 rounded-full overflow-hidden">
                <div
                  className="h-2 bg-deepMint-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default SkillsSection;
