

import { motion } from "framer-motion";
import {
  UilAward,
  UilSuitcaseAlt,
  UilHeadphonesAlt,
  UilNavigator
} from '@iconscout/react-unicons';
import { fadeUp, fadeLeft, fadeRight, zoomIn } from "../utils/animations";

function AboutSection() {
  const stats = [
    { icon: <UilAward className="text-deepMint-500 text-3xl mx-auto mb-2" />, title: "Experience", subtitle: "10+ Years" },
    { icon: <UilSuitcaseAlt className="text-deepMint-500 text-3xl mx-auto mb-2" />, title: "Completed", subtitle: "60+ Projects" },
    { icon: <UilHeadphonesAlt className="text-deepMint-500 text-3xl mx-auto mb-2" />, title: "Support", subtitle: "Online 24/7" },
  ];

  return (
    <motion.section
      {...fadeUp}
      id="about"
      className="py-16 px-6 bg-deepMint-400 dark:bg-deepMint-800 text-deepMint-100 dark:text-deepMint-50"
    >
      <h2 className="text-4xl font-bold text-center mb-12">About me</h2>

      <motion.div
        {...zoomIn}
        className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center"
      >
        <img
          src="/public/about-photo.png"
          alt="About"
          className="rounded-b-4xl object-top object-cover  m-auto shadow-md"
        />

        <motion.div {...fadeLeft}>
          <h3 className="text-2xl mb-2">Hi, I'm Mohamed Hossam, based in Canada</h3>
          <p className="mb-6">
            A Software Engineer web developer passionate about creating digital solutions that combine high performance with a seamless visual experience.

            I have strong experience developing applications using Laravel on the backend, and React and JavaScript to build interactive and responsive interfaces.

            I focus on designing dynamic and user-friendly interfaces, with a special attention to detail, and I am proficient in tools like TailwindCSS and Frame Motion to enhance visual interaction.
          </p>

          <motion.div
            {...fadeRight}
            className="grid grid-cols-1 sm:grid-cols-3 text-deepMint-800 dark:text-deepMint-50  gap-4 mb-6"
          >
            {stats.map(({ icon, title, subtitle }, i) => (
              <div
                key={title + i}
                className="bg-deepMint-100 dark:bg-deepMint-700 rounded-lg p-4 text-center shadow-sm"
              >
                {icon}
                <h4 className="font-semibold">{title}</h4>
                <span className="text-sm">{subtitle}</span>
              </div>
            ))}
          </motion.div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 bg-deepMint-500 text-white rounded hover:bg-deepMint-600 transition-all duration-300"
          >
            <UilNavigator />
            Contact me
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default AboutSection;
