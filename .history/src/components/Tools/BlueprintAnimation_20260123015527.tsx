import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";

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

const CodeBlock = ({ code, language }) => (
  <Highlight {...defaultProps} theme={theme} code={code} language={language}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre
        className={className}
        style={{
          ...style,
          background: "transparent",
          padding: 0,
          margin: 0
        }}
      >
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line })} className="table-row">
            <span className="table-cell text-[#858585] pr-4 select-none">
              {i + 1}
            </span>
            <span className="table-cell">
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </span>
          </div>
        ))}
      </pre>
    )}
  </Highlight>
);

const CodeEditorAnimation = () => {
  return (
    <div className="flex justify-center p-4">
      <svg
        viewBox="0 0 600 400"
        className="w-full max-w-2xl font-mono drop-shadow-2xl"
      >
        <rect width="600" height="400" rx="12" fill="#1E1E1E" />
        <rect width="600" height="35" rx="12" fill="#323233" />

        <text x="300" y="22" textAnchor="middle" fill="#969696" fontSize="11">
          mohamed-hossam — VS Code
        </text>

        <foreignObject x="0" y="45" width="600" height="315">
          <motion.div
            className="h-full px-4 text-[14px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Typewriter
              words={codeBlocks.map(b => b.code)}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={40}
              deleteSpeed={20}
              delaySpeed={2000}
            />
          </motion.div>
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
