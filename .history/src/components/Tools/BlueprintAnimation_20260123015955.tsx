import { motion, AnimatePresence } from "framer-motion";
import { Highlight } from "prism-react-renderer";
import vsDark from "prism-react-renderer/themes/vsDark";
import { useState, useEffect } from "react";

const codeBlocks = [
  {
    language: "php",
    code: `// Mohamed Hossam: Senior Laravel Expert
class Developer {
  public function build() {
    return Role::create(['name' => 'Senior']);
  }
}`
  },
  {
    language: "jsx",
    code: `// Mastery in React.js & Framer Motion
const Portfolio = () => {
  return <motion.div animate={{ scale: 1 }} />;
};`
  },
  {
    language: "sql",
    code: `-- Database Optimization
SELECT * FROM orders
WHERE status = 'active';`
  }
];

const CodeEditorAnimation = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i + 1) % codeBlocks.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const { code, language } = codeBlocks[index];

  return (
    <div className="flex justify-center p-4">
      <svg viewBox="0 0 600 400" className="w-full max-w-2xl font-mono">
        <rect width="600" height="400" rx="12" fill="#1E1E1E" />
        <rect width="600" height="35" rx="12" fill="#323233" />

        <text x="300" y="22" textAnchor="middle" fill="#969696" fontSize="11">
          mohamed-hossam — VS Code
        </text>

        <foreignObject x="0" y="45" width="600" height="315">
          <div className="h-full px-4 text-[14px] text-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <Highlight theme={vsDark} code={code} language={language}>
                  {({ tokens, getLineProps, getTokenProps }) => (
                    <pre className="bg-transparent m-0">
                      {tokens.map((line, i) => (
                        <div key={i} className="flex">
                          <span className="w-8 text-[#858585] select-none">
                            {i + 1}
                          </span>
                          <span>
                            {line.map((token, key) => (
                              <span key={key} {...getTokenProps({ token })} />
                            ))}
                          </span>
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
              </motion.div>
            </AnimatePresence>
          </div>
        </foreignObject>

        <rect x="0" y="380" width="600" height="20" fill="#007ACC" />
        <text x="10" y="393" fill="#fff" fontSize="10">
          Ready — Vite ⚡ React
        </text>
      </svg>
    </div>
  );
};

export default CodeEditorAnimation;
