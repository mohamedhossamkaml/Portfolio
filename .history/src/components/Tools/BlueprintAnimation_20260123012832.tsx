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
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center p-4 bg-[#0d1117]">
      <svg
        viewBox="0 0 600 400"
        className="w-full h-auto max-w-2xl drop-shadow-2xl font-mono"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* خلفية محرر الأكواد - VSC Dark Plus */}
        <rect width="600" height="400" rx="12" fill="#1E1E1E" />

        {/* شريط العنوان العلوي */}
        <rect width="600" height="35" rx="12" fill="#323233" />
        <g transform="translate(15, 12)">
          <circle cx="0" cy="5" r="5" fill="#FF5F56" />
          <circle cx="20" cy="5" r="5" fill="#FFBD2E" />
          <circle cx="40" cy="5" r="5" fill="#27C93F" />
        </g>
        <text x="300" y="22" textAnchor="middle" fill="#969696" fontSize="11">
          mohamed-hossam.php — VS Code
        </text>

        {/* منطقة أرقام الأسطر */}
        <rect x="0" y="35" width="45" height="345" fill="#1E1E1E" />
        <line x1="45" y1="35" x2="45" y2="380" stroke="#333" strokeWidth="1" />

        <foreignObject x="0" y="50" width="600" height="330">
          <div className="flex w-full h-full">
            {/* أرقام الأسطر */}
            <div className="w-[45px] flex flex-col items-center text-[#858585] text-[13px] leading-[24px] select-none pt-1">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => <div key={n}>{n}</div>)}
            </div>

            {/* منطقة الكتابة - ألوان VSC صريحة */}
            <div className="pl-4 w-full text-[15px] leading-[24px]">
              <div style={{ color: '#9CDCFE', textShadow: '0 0 2px rgba(156, 220, 254, 0.2)' }}>
                <Typewriter
                  words={codeBlocks}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  cursorColor="#569CD6" // اللون الأزرق للكلمات المفتاحية
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={2000}
                />
              </div>
            </div>
          </div>
        </foreignObject>

        {/* شريط الحالة السفلي (Blue Status Bar) */}
        <rect x="0" y="380" width="600" height="20" fill="#007ACC" rx="2" />
        <text x="10" y="393" fill="white" fontSize="10" fontFamily="sans-serif">
          Ready  -- Master* Spaces: 4  UTF-8  PHP
        </text>

        {/* نص توضيحي يظهر بحركة ناعمة */}
        <motion.text
          x={isArabic ? "580" : "550"}
          y="365"
          textAnchor="end"
          fill="#4EC9B0" // لون الـ Types/Classes في VSC
          fontSize="14"
          fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        >
          {t?.about?.blueprint || "Building the Future"}
        </motion.text>
      </svg>
    </div>
  );
};

export default CodeEditorAnimation;