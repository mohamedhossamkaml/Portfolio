import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/Icons";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, zoomIn } from "../utils/animations";

function Qualifications() {
  const education = [
    {
      title: "Abbassia Institute. (Science and Technology)",
      text: "Bachelor of Management Information Systems (MIS)",
      date: "2017 - 2021",
    },
    {
      title: "MEC Academy. (FrontEnd | React.js)",
      text: "Diploma in Web Design and Development",
      date: "2023 - 2024",
    },
    {
      title: "MEC Academy. (BackEnd | Laravel)",
      text: "Diploma in Web Development",
      date: "2023 - 2024",
    },
  ];

  const experience = [
    {
      title: "Freelance. (FrontEnd | React.js)",
      text: "Lead / Maid-Level Frontend Developer",
      date: "2024 - Present",
    },
    {
      title: "MEC Academy. (Somwtown, NJ)",
      text: "Junior Frontend Developer | React.js",
      date: "2015 - 2018",
    },
    {
      title: "MEC Academy. (Sometown, NJ)",
      text: "Junior Backend Developer",
      date: "2019 - 2021",
    },
  ];

  const renderTimeline = (items) => (
    <div className="space-y-6">
      {items.map((item, i) => (
        <div key={i} className="relative pl-6">
          <div className="absolute left-0 top-2 w-3 h-3 bg-deepMint-500 rounded-full"></div>
          <h4 className="font-semibold">{item.title}</h4>
          <p className="text-sm">{item.text}</p>
          <span className="text-xs text-deepMint-500 flex items-center gap-1 mt-1">
            <FontAwesomeIcon icon={icons.calendar} /> {item.date}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <motion.section {...fadeUp} id="qualifications" className="py-16 px-6 bg-deepMint-50 dark:bg-deepMint-900 text-deepMint-800 dark:text-deepMint-50">
      <h2 className="text-4xl font-bold text-center mb-12">Qualifications</h2>
      <motion.div  {...zoomIn} className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div {...fadeLeft}>
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
            <FontAwesomeIcon icon={icons.graduation} />
            Education
          </h3>
          {renderTimeline(education)}
        </motion.div>
        <motion.div {...fadeRight}>
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
            <FontAwesomeIcon icon={icons.suitcase} />
            Experience
          </h3>
          {renderTimeline(experience)}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Qualifications