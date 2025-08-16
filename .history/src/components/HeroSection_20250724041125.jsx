import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/Icons";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, zoomIn } from "../utils/animations";
import { Typewriter } from "react-simple-typewriter";
import { faFacebookMessenger, faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons";

function HeroSection() {
  const icons2 = [
    { icon: faFacebookMessenger, title: "Messenger", subtitle: "user.fb123", bg: "bg-blue-100", text: "text-blue-600" },
    { icon: faWhatsapp, title: "Whatsapp", subtitle: "999-888-777", bg: "bg-green-100", text: "text-green-600" },
    { icon: faTelegram, title: "Telegram", subtitle: "@user_telegram", bg: "bg-cyan-100", text: "text-cyan-600" },
  ];



  return (
    <section
      id="home"
      className="relative py-20 px-6 bg-my-Body  text-deepMint-800 dark:text-deepMint-50 overflow-hidden md:bg-[url('https://i.postimg.cc/W1YZxTpJ/about-img.jpg')] md:bg-no-repeat md:bg-right md:bg-contain"
    >
      {/* 🌊 */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-deepMint-400 to-deepMint-600 rounded-full opacity-20 blur-3xl animate-pulse -z-10" />

      {/* 🟣 Social Media */}
      <div className="max-w-6xl mx-auto mb-12 flex  ">
        <span className="font-semibold mb-2">Follow Me</span>
        <div className="flex gap-4 text-xl text-deepMint-500">
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
      </div>


      {/* 🖼️ Image Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="md:hidden flex justify-center mb-8"
      >
        <img
          src="https://i.postimg.cc/3NgvPcZD/home-img.png"
          alt="Hero"
          className="w-72 object-contain"
        />
      </motion.div>


      {/* 🔵 Main Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">


        {/* 🧠 Text Section */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h1 className="text-4xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="text-deepMint-500 dark:text-softDark">
              <Typewriter
                words={["Mohamed", "Frontend Developer", "UI/UX Enthusiast"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
          <p className="text-deepMint-600 dark:text-deepMint-100 mb-6">
            I have high level experience in web design, development knowledge and producing quality work.
          </p>
          <div className="flex gap-4">
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
          </div>
        </motion.div>

      </div>

      {/* 🟡 Communication Cards */}
      <div className="  grid md:grid-cols-2 gap-1 items-center">
        <div className="mt-20 grid md:grid-cols-3 gap-12 text-left">
          {
            icons2.map((item, i) => (
              <motion.div key={i} {...zoomIn} className="flex overflow-visible items-start gap-4 p-5 rounded-md shadow-md cursor-pointer bg-deepMint-100 dark:bg-deepMint-900">
                <div className={`w-12 h-12 flex items-center justify-center rounded-full ${item.bg} ${item.text}`}>
                  <FontAwesomeIcon icon={item.icon} className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <span className="text-sm text-deepMint-600 dark:text-deepMint-100">{item.subtitle}</span>
                </div>
              </motion.div>
            ))
          }
        </div>
      </div>


    </section>
  );
}

export default HeroSection;
