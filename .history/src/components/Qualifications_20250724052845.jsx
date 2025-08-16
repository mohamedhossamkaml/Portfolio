import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/Icons";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, zoomIn } from "../utils/animations";

function Qualifications() {
  const education = [
    {
      title: "XYZ University (Sometown, NJ)",
      text: "BFA in Graphic Design",
      date: "2011 - 2013",
    },
    {
      title: "ABC University (Sometown. NJ)",
      text: "Diploma in Web Design",
      date: "2013 - 2015",
    },
    {
      title: "KLM University (Sometown, NJ)",
      text: "BS in Web Development",
      date: "2015 - 2017",
    },
  ];

  const experience = [
    {
      title: "Copalopa Inc. (Sometown, NJ)",
      text: "Lead / Senior UX Designer",
      date: "2018 - Present",
    },
    {
      title: "Gabogle Inc. (Somwtown, NJ)",
      text: "Web site / UX Designer",
      date: "2015 - 2018",
    },
    {
      title: "Copalopa Inc. (Sometown, NJ)",
      text: "Junior UX Designer",
      date: "2013 - 2015",
    },
  ];

  const renderTimeline = (items) => (
    <div className="space-y-6">
      {items.map((item, i) => (
        <div key={i} className="relative pl-6">
          <div className="absolute left-0 top-2 w-3 h-3 bg-deepMint-600 rounded-full"></div>
          <h4 className="font-semibold">{item.title}</h4>
          <p className="text-sm">{item.text}</p>
          <span className="text-xs text-deepMint-600 flex items-center gap-1 mt-1">
            <i className="uil uil-calendar-alt"></i> {item.date}
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
            <i className="uil uil-graduation-cap"></i>
            <FontAwesomeIcon icon={icons.suitcase} />
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