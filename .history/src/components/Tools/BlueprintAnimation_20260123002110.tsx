import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const CodeEditorAnimation = () => {
  const { t, language } = useLanguage();
  const isArabic = language === "ar";

  // أسطر كود تجريبية (ممكن تغيرها حسب اللغة أو المشروع)
  const codeLines = [
    "function greet(name) {",
    "  console.log(`Hello, ${name}`);",
    "}",
    "",
    "greet('Mohamed');",
  ];

  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* خلفية تشبه محرر كود */}
      <rect
        width="600"
        height="400"
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
      {/* أزرار نافذة */}
      <circle cx="15" cy="15" r="6" className="fill-red-500" />
      <circle cx="35" cy="15" r="6" className="fill-yellow-500" />
      <circle cx="55" cy="15" r="6" className="fill-green-500" />

      {/* أسطر الكود */}
      {codeLines.map((line, i) => (
        <motion.text
          key={i}
          x="20"
          y={60 + i * 30}
          textAnchor="start"
          className="font-mono text-sm fill-current text-teal-400"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + i * 0.5, duration: 0.4 }}
        >
          {line}
        </motion.text>
      ))}

      {/* عنوان */}
      <motion.text
        x={isArabic ? "580" : "20"}
        y="380"
        textAnchor={isArabic ? "end" : "start"}
        className="text-lg font-bold fill-current text-emerald-500 dark:text-emerald-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.6 }}
      >
        {t.about.blueprint}
      </motion.text>
    </svg>
  );
};

export default CodeEditorAnimation;
