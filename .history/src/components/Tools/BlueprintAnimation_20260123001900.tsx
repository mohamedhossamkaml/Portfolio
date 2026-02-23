import { motion } from "framer-motion";
import { blueprintDraw } from "../../utils/animations";
import { useLanguage } from "../../context/LanguageContext";

const CodeBlueprintAnimation = () => {
  const { t, language } = useLanguage();
  const isArabic = language === "ar";

  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Grid Background - IDE style */}
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-gray-600 dark:text-gray-800"
            opacity="0.2"
          />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="url(#grid)" />

      {/* Code Window Outline */}
      <motion.rect
        x="50"
        y="50"
        width="300"
        height="200"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-emerald-500 dark:text-emerald-400"
        variants={blueprintDraw}
        initial="hidden"
        animate="visible"
      />

      {/* Code Lines */}
      {[0, 1, 2, 3, 4, 5].map((line) => (
        <motion.line
          key={`code-line-${line}`}
          x1="70"
          y1={80 + line * 25}
          x2="330"
          y2={80 + line * 25}
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-teal-400 dark:text-teal-300"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1 + line * 0.2, duration: 0.5 }}
        />
      ))}

      {/* Curly Braces Symbol */}
      <motion.text
        x="200"
        y="180"
        textAnchor="middle"
        className="text-4xl font-mono fill-current text-teal-600 dark:text-teal-400"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
      >
        {"{ }"}
      </motion.text>

      {/* Measurement Text - Lines of Code */}
      <motion.text
        x="200"
        y="260"
        textAnchor="middle"
        className="text-sm font-mono fill-current text-yellow-500 dark:text-yellow-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 0.5 }}
      >
        120 lines
      </motion.text>

      {/* Title */}
      <motion.text
        x={isArabic ? "380" : "20"}
        y="30"
        textAnchor={isArabic ? "end" : "start"}
        className="text-lg font-bold fill-current text-emerald-600 dark:text-emerald-300"
        initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 5, duration: 0.5 }}
      >
        {t.about.blueprint}
      </motion.text>
    </svg>
  );
};

export default CodeBlueprintAnimation;
