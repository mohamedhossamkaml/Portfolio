import { Highlight, themes } from "prism-react-renderer";
import { useEffect, useState } from "react";

const codeBlocks = [
  {
    language: "php",
    code: `// Mohamed Hossam: Senior Laravel Expert
class Developer {
  public function build() {
    return Role::create(['name' => 'Senior']);
  }
}`,
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

const TYPING_SPEED = 35;
const DELETING_SPEED = 20;
const HOLD_AFTER_TYPING = 1200;

const CodeEditorAnimation = () => {
  const [blockIndex, setBlockIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const fullCode = codeBlocks[blockIndex].code;
  const language = codeBlocks[blockIndex].language;

  useEffect(() => {
    let timeout: number;

    if (!isDeleting && displayedCode.length < fullCode.length) {
      timeout = window.setTimeout(() => {
        setDisplayedCode(fullCode.slice(0, displayedCode.length + 1));
      }, TYPING_SPEED);
    }

    else if (!isDeleting && displayedCode.length === fullCode.length) {
      timeout = window.setTimeout(() => {
        setIsDeleting(true);
      }, HOLD_AFTER_TYPING);
    }

    else if (isDeleting && displayedCode.length > 0) {
      timeout = window.setTimeout(() => {
        setDisplayedCode(fullCode.slice(0, displayedCode.length - 1));
      }, DELETING_SPEED);
    }

    else if (isDeleting && displayedCode.length === 0) {
      setIsDeleting(false);
      setBlockIndex((i) => (i + 1) % codeBlocks.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedCode, isDeleting, fullCode, blockIndex]);

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
            <Highlight
              theme={themes.vsDark}
              code={displayedCode || " "}
              language={language}
            >
              {({ tokens, getLineProps, getTokenProps }) => (
                <pre className="bg-transparent m-0">
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line })} className="flex">
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
          </div>
        </foreignObject>

        <rect x="0" y="380" width="600" height="20" fill="#007ACC" />
        <text x="10" y="393" fill="#fff" fontSize="10">
          Typing… Vite ⚡ React
        </text>
      </svg>
    </div>
  );
};

export default CodeEditorAnimation;
