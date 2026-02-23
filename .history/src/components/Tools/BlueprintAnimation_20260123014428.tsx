
import { Typewriter } from "react-simple-typewriter";

const CodeEditorAnimation = () => {


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
  ->get();`,
    `// Full-Stack Development Expertise
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
  ->get();`,
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
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center p-4 ">
      {/* ستايل مخصص لتلوين الـ Typewriter كأنه VSC */}
      <style>
        {`
          .vsc-highlight span {
            background: linear-gradient(
              to bottom,
              #569CD6 0%,    /* أزرق للكلمات المفتاحية */
              #9CDCFE 25%,   /* سماوي للمتغيرات */
              #CE9178 50%,   /* برتقالي للنصوص */
              #DCDCAA 75%,   /* أصفر للدوال */
              #4EC9B0 100%   /* أخضر للكلاسات */
            );
            background-size: 100% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
          }
        `}
      </style>

      <svg
        viewBox="0 0 600 500"
        className="w-full h-auto max-w-2xl drop-shadow-2xl font-mono"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* نافذة المحرر */}
        <rect width="600" height="500" rx="12" fill="#1E1E1E" />
        <rect width="600" height="35" rx="12" fill="#323233" />

        {/* أزرار الإغلاق والتحكم */}
        <g transform="translate(15, 12)">
          <circle cx="0" cy="5" r="5" fill="#FF5F56" />
          <circle cx="20" cy="5" r="5" fill="#FFBD2E" />
          <circle cx="40" cy="5" r="5" fill="#27C93F" />
        </g>

        <text x="300" y="22" textAnchor="middle" fill="#969696" fontSize="11">
          mohamed-hossam.php — VS Code
        </text>

        <line x1="45" y1="35" x2="45" y2="380" stroke="#333" strokeWidth="1" />

        <foreignObject x="0" y="50" width="600" height="330">
          <div className="flex w-full h-full">
            {/* أرقام الأسطر */}
            <div className="w-[45px] flex flex-col items-center text-[#858585] text-[13px] leading-[26px] pt-1">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => <div key={n}>{n}</div>)}
            </div>

            {/* منطقة الكود مع التلوين الجديد */}
            <div className="pl-4 w-full text-[15px] leading-[26px] vsc-highlight">
              <Typewriter
                words={codeBlocks}
                loop={true}
                cursor
                cursorStyle="|"
                cursorColor="#569CD6"
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={2000}
              />
            </div>
          </div>
        </foreignObject>

        {/* شريط الحالة السفلي */}
        <rect x="0" y="380" width="600" height="30" fill="#007ACC" rx="2" />
        <text x="10" y="393" fill="white" fontSize="10">
          Ready  -- Master* UTF-8  PHP  Laravel
        </text>
      </svg>
    </div>
  );
};

export default CodeEditorAnimation;