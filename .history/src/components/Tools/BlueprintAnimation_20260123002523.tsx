import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { Typewriter } from "react-simple-typewriter";

const CodeEditorAnimation = () => {
  const { t, language } = useLanguage();
  const isArabic = language === "ar";

  // جملة كود واحدة
  const codeSnippet = [
    "console.log('Hello World!');"
  ];

  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* خلفية نافذة محرر كود */}
      <rect
        width="600"
        height="200"
        rx="8"
        className="fill-current text-gray-900 dark:text-gray-950"
      />

      {/* شريط علوي */}
      <rect
        x="0"
        y="0"
        width="600"
        height="30"
        rx="8"
        className="fill-current text-gray-800 dark:text-gray-700"
      />
      <circle cx="15" cy="15" r="6" className="fill-red-500" />
      <circle cx="35" cy="15" r="6" className="fill-yellow-500" />
      <circle cx="55" cy="15" r="6" className="fill-green-500" />

      {/* جملة الكود مع Typewriter */}
      <foreignObject x="20" y="60" width="560" height="100">
        <div className="font-mono text-lg text-teal-400 dark:text-teal-300">
          <Typewriter
            words={codeSnippet}
            loop={true}          // لوب لا نهائي
            cursor
            cursorStyle="|"
            typeSpeed={80}       // سرعة الكتابة
            deleteSpeed={50}     // سرعة المسح
            delaySpeed={2000}    // وقت الانتظار قبل المسح
          />
        </div>
      </foreignObject>

      {/* عنوان */}
      <motion.text
        x={isArabic ? "580" : "20"}
        y="190"
        textAnchor={isArabic ? "end" : "start"}
        className="text-lg font-bold fill-current text-emerald-500 dark:text-emerald-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        {t.about.blueprint}
      </motion.text>
    </svg>
  );
};

export default CodeEditorAnimation;
