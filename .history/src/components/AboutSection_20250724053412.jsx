import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, zoomIn } from "../utils/animations";

function AboutSection() {
  return (
    <motion.section {...fadeUp} id="about" className="py-16 px-6 bg-white dark:bg-deepMint-800  text-deepMint-800 dark:text-deepMint-50">
      <h2 className="text-4xl font-bold text-center mb-12">About me</h2>

      <motion.div {...zoomIn} className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
        <img src="https://i.postimg.cc/W1YZxTpJ/about-img.jpg" alt="About" className="rounded-lg shadow-md" />

        <motion.div {...fadeLeft}>
          <h3 className="text-2xl mb-2">Hi, I'm Mohamed Wallas, based in Canada</h3>
          <p className="mb-6">
            I'm a web developer, with extensive knowledge and years of experience, working with quality work in web technologies, UI and UX design.
          </p>

          <motion.div {...fadeRight} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { icon: "uil-award", title: "Experience", subtitle: "10 + Years" },
              { icon: "uil-suitcase-alt", title: "Completed", subtitle: "60 + Projects" },
              { icon: "uil-headphones-alt", title: "Support", subtitle: "Online 24/7" },
            ].map((box, i) => (
              <div key={i} className="bg-deepMint-100 dark:bg-deepMint-700 rounded-lg p-4 text-center shadow-sm">
                <i className={`uil ${box.icon} text-2xl text-deepMint-500`} />
                <h4 className="font-semibold mt-2">{box.title}</h4>
                <span className="text-sm">{box.subtitle}</span>
              </div>
            ))}
          </motion.div>

          <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 bg-deepMint-500 text-white rounded hover:bg-deepMint-600">
            <i className="uil uil-navigator"></i> Contact me
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
export default AboutSection