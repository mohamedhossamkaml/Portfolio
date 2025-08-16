import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

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
          <div className="absolute left-0 top-2 w-3 h-3 bg-deepMint-500 rounded-full"></div>
          <h4 className="font-semibold">{item.title}</h4>
          <p className="text-sm">{item.text}</p>
          <span className="text-xs text-deepMint-400 flex items-center gap-1 mt-1">
            <i className="uil uil-calendar-alt"></i> {item.date}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <motion.section {...fadeUp} id="qualifications" className="py-16 px-6 bg-white dark:bg-deepMint-900 text-deepMint-800 dark:text-deepMint-50">
      <h2 className="text-4xl font-bold text-center mb-12">Qualifications</h2>
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
            <i className="uil uil-graduation-cap"></i> Education
          </h3>
          {renderTimeline(education)}
        </div>
        <div>
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
            <i className="uil uil-suitcase"></i> Experience
          </h3>
          {renderTimeline(experience)}
        </div>
      </div>
    </motion.section>
  );
}

export default Qualifications