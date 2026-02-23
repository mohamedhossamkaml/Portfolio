import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { Typewriter } from "react-simple-typewriter";
// import { useEffect, useState } from "react";

const CodeEditorAnimation = () => {
  const { t, language } = useLanguage();
  const isArabic = language === "ar";

  // أكواد تعبر عن مهاراتك (Laravel & React) لتناسب وظيفة SIDEUP
  const codeBlocks = [
    `// Mohamed Hossam: Senior Laravel Expert
class Developer {
  public function build() {
    return Role::create(['name' => 'Senior']);
  }
}`,
    `// Mastery in React.js & Framer Motion
const Portfolio = () => {
  return <motion.div animate={{ scale: 1 }} />;
};`,
    `// Database Optimization & SQL
$orders = Order::with('courier')
  ->where('status', 'active')
  ->get();`
  ];

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center p-4">
      <svg
        viewBox="0 0 600 400"
        className="w-full h-full drop-shadow-2xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* خلفية النافذة */}
        <rect
          width="600"
          height="400"
          rx="12"
          className="fill-[#0d1117] stroke-gray-700 stroke-1"
        />

        {/* شريط التحكم (Mac Style) */}
        <g>
          <rect
            width="600"
            height="40"
            rx="12"
            className="fill-[#161b22]"
          />
          <circle cx="25" cy="20" r="6" className="fill-[#ff5f56]" />
          <circle cx="45" cy="20" r="6" className="fill-[#ffbd2e]" />
          <circle cx="65" cy="20" r="6" className="fill-[#27c93f]" />
          <text x="300" y="25" textAnchor="middle" className="fill-gray-500 text-[12px] font-mono">
            mohamed-hossam.php
          </text>
        </g>

        {/* منطقة الكود */}
        <foreignObject x="20" y="60" width="560" height="300">
          <div className="font-mono text-[16px] leading-relaxed text-emerald-400">
            {/* أرقام الأسطر */}
            <div className="absolute left-0 top-0 text-gray-600 pr-4 border-r border-gray-800 h-full select-none text-[14px]">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>

            {/* النص المتحرك */}
            <div className="pl-10 text-emerald-400">
              <Typewriter
                words={codeBlocks}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={3000}
              />
            </div>
          </div>
        </foreignObject>

        {/* العنوان السفلي */}
        <motion.text
          x={isArabic ? "580" : "20"}
          y="375"
          textAnchor={isArabic ? "end" : "start"}
          className="text-lg font-bold fill-emerald-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {t?.about?.blueprint || "Building Scalable Systems"}
        </motion.text>
      </svg>
    </div>
  );
};

export default CodeEditorAnimation;