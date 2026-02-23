import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { Typewriter } from "react-simple-typewriter";

const CodeEditorAnimation = () => {
  const { t, language } = useLanguage();
  const isArabic = language === "ar";

  const codeBlocks = [
    `class Developer {
  public function build() {
    return Role::create(['name' => 'Senior']);
  }
}`,
    `const skills = ["Laravel", "React", "Node.js"];
skills.forEach(skill => {
  console.log("Expert in " + skill);
});`,
    `$orders = Order::with('courier')
  ->where('status', 'active')
  ->get();`
  ];

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center p-4">
      <svg
        viewBox="0 0 600 400"
        className="w-full h-full drop-shadow-2xl font-mono"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* نافذة المحرر - VS Code Theme Background */}
        <rect width="600" height="400" rx="12" fill="#1e1e1e" />

        {/* شريط العنوان */}
        <rect width="600" height="40" rx="12" fill="#2d2d2d" />
        <g transform="translate(15, 15)">
          <circle cx="0" cy="5" r="5" fill="#ff5f56" />
          <circle cx="20" cy="5" r="5" fill="#ffbd2e" />
          <circle cx="40" cy="5" r="5" fill="#27c93f" />
        </g>
        <text x="300" y="25" textAnchor="middle" fill="#969696" fontSize="12">
          mohamed_hossam.php — Visual Studio Code
        </text>

        {/* منطقة الأسطر */}
        <rect x="0" y="40" width="40" height="360" fill="#1e1e1e" />
        <line x1="40" y1="40" x2="40" y2="400" stroke="#333" strokeWidth="1" />

        <foreignObject x="0" y="55" width="600" height="340">
          <div className="flex w-full h-full">
            {/* أرقام الأسطر بتنسيق VSC */}
            <div className="w-10 flex flex-col items-center text-[#858585] text-xs leading-[22px] select-none pt-1">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => <div key={n}>{n}</div>)}
            </div>

            {/* النص البرمجي بألوان VSC */}
            <div className="pl-4 w-full">
              <style>
                {`
                  .vsc-code span {
                    color: #ce9178; /* لون النصوص Strings */
                  }
                  .typewriter-container {
                    color: #9cdcfe; /* لون المتغيرات الافتراضي */
                  }
                  /* جعل الكلمات المفتاحية تظهر بلون مختلف عبر Gradient وهمي */
                  .vsc-code {
                    background: linear-gradient(to right, #569cd6 20%, #dcdcaa 40%, #ce9178 60%, #4ec9b0 80%);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    display: inline-block;
                  }
                `}
              </style>
              <div className="typewriter-container leading-[22px] text-[15px]">
                <Typewriter
                  words={codeBlocks}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  cursorColor="#569cd6" // لون مؤشر VSC الأزرق
                  typeSpeed={40}
                  deleteSpeed={20}
                  delaySpeed={2500}
                />
              </div>
            </div>
          </div>
        </foreignObject>

        {/* Footer info */}
        <rect x="0" y="380" width="600" height="20" fill="#007acc" rx="2" ry="0" />
        <text x="10" y="394" fill="white" fontSize="10">Spaces: 4  UTF-8  PHP</text>
        <motion.text
          x={isArabic ? "580" : "550"}
          y="370"
          textAnchor="end"
          className="text-xs font-bold fill-[#4ec9b0]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {t?.about?.blueprint || "Full Stack Engineer"}
        </motion.text>
      </svg>
    </div>
  );
};

export default CodeEditorAnimation;