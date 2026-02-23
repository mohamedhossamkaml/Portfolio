import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { Typewriter } from "react-simple-typewriter";

const CodeEditorAnimation = () => {
  const { t, language } = useLanguage();
  const isArabic = language === "ar";

  // بلوكات أكواد متعددة (كل عنصر عبارة عن أكثر من سطر)
  const codeBlocks = [
    `function greet(name) {
  console.log("Hello, " + name);
}
greet("Mohamed");`,

    `const skills = ["Laravel", "React", "Node.js"];
skills.forEach(skill => {
  console.log("Expert in " + skill);
});`,

    `class Developer {
  constructor(name) {
    this.name = name;
  }
  introduce() {
    return "Hi, I'm " + this.name + " and I build web apps!";
  }
}
const dev = new Developer("Mohamed Hossam");
console.log(dev.introduce());`,
    `// Building RESTful API with Express.js
const express = require('express');
const app = express();
app.get('/users', (req, res) => {
  res.json({ users: ['User 1', 'User 2', 'User 3'] });
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});`,

    `// Building RESTful API with Express.js
const express = require('express');
const app = express();
app.get('/users', (req, res) => {
  res.json({ users: ['User 1', 'User 2', 'User 3'] });
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});`
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
      <circle cx="15" cy="15" r="6" className="fill-red-500" />
      <circle cx="35" cy="15" r="6" className="fill-yellow-500" />
      <circle cx="55" cy="15" r="6" className="fill-green-500" />

      {/* بلوكات الكود مع Typewriter */}
      <foreignObject x="20" y="60" width="560" height="300">
        <div className="font-mono text-sm text-teal-400 dark:text-teal-300 whitespace-pre">
          <Typewriter
            words={codeBlocks}
            loop={true}          // لوب لا نهائي
            cursor
            cursorStyle="|"
            typeSpeed={60}       // سرعة الكتابة
            deleteSpeed={40}     // سرعة المسح
            delaySpeed={2500}    // وقت الانتظار قبل المسح
          />
        </div>
      </foreignObject>

      {/* عنوان */}
      <motion.text
        x={isArabic ? "580" : "20"}
        y="380"
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
