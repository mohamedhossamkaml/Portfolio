import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/Icons";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, zoomIn } from "../utils/animations";
import { Typewriter } from "react-simple-typewriter";
import { faFacebookMessenger, faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";


function HeroSection() {
  const icons2 = [
    { icon: faFacebookMessenger, title: "Messenger", subtitle: "user.fb123", bg: "bg-blue-100/40", text: "text-blue-600" },
    { icon: faWhatsapp, title: "Whatsapp", subtitle: "999-888-777", bg: "bg-green-100/40", text: "text-green-600" },
    { icon: faTelegram, title: "Telegram", subtitle: "@user_telegram", bg: "bg-cyan-100/40", text: "text-cyan-600" },
  ];

  const [showHero, setShowHero] = useState(true);

  return (
    <AnimatePresence>
      {showHero && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          id="home"
          className="relative py-20 px-6 right-2 bg-my-Body  text-deepMint-50 overflow-hidden  "
        >
          {/* 🟡 Communication Cards */}
          <motion.div className="absolute top-0 overflow-hidden right-0 w-[600px] h-[600px] bg-gradient-to-br from-deepMint-400 to-deepMint-600  md:bg-[url('/public/my-photo.png')] md:bg-no-repeat md:bg-right rounded-full opacity-75  z-20 " />



          {/* 🟣 Social Media */}
          <motion.div  {...fadeLeft} exit="exit" className="max-w-6xl mx-auto mb-12 flex  ">
            <span className="font-semibold text-deepMint-500 text-xl mr-6 mb-2">
              Follow Me
            </span>
            <div className="flex gap-2 text-xl text-deepMint-500">
              <FontAwesomeIcon icon={icons.webMin} />
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={icons.facebook} className="hover:text-blue-500 transition" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={icons.instagram} className="hover:text-pink-500 transition" />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={icons.twitterX} className="hover:text-black transition" />
              </a>
            </div>
          </motion.div>

          {/* 🖼️ Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="md:hidden flex justify-center mb-8"
          >
            <img
              src="/public/my-photo.png"
              alt="Hero"
              className=" w-50 h-50 rounded-b-full  object-top object-cover shadow-lg"
            />
          </motion.div>


          {/* 🔵 Main Content */}
          <motion.div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">


            {/* 🧠 Text Section */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h1 className="text-5xl font-bold mb-4">
                Hi, I'm Mohamed
              </h1>
              <h2 className="text-3xl font-bold mb-4">
                {" "}
                <span className="text-deepMint-500 dark:text-softDark">
                  <Typewriter
                    words={["Frontend Developer", "React.js Developer", "Web Developer", "Software Engineer"]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </h2>
              <p className="text-deepMint-100 mb-6">
                I have high level experience in web design, development knowledge and producing quality work.
              </p>
              <motion.div  {...fadeLeft} exit="exit" className="flex gap-4">
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-deepMint-500 text-white rounded hover:bg-deepMint-600 transition"
                >
                  <FontAwesomeIcon icon={icons.user} /> More About me!
                </a>
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 border border-deepMint-500 text-deepMint-500 rounded hover:bg-deepMint-500 hover:text-white transition"
                >
                  <FontAwesomeIcon icon={icons.download} /> Download CV
                </a>
              </motion.div>
            </motion.div>

          </motion.div>


          {/* 🟡 Communication Cards */}
          <motion.div className=" mt-20 md:flex gap-5 text-left">
            {
              icons2.map((item, i) => (
                <motion.div key={i} {...zoomIn} className="flex items-start gap-2 p-5 rounded-md   cursor-pointer ">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-full ${item.bg} ${item.text}`}>
                    <FontAwesomeIcon icon={item.icon} className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <span className="text-sm text-deepMint-100">{item.subtitle}</span>
                  </div>
                </motion.div>
              ))
            }
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default HeroSection;
