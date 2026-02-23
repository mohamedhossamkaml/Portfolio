import { Highlight, themes } from "prism-react-renderer";
import { useEffect, useState } from "react";

const codeBlocks = [
  {
    language: "html",
    label: "HTML • CSS",
    typingSpeed: 30,
    deletingSpeed: 10,
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Welcome to My Portfolio</h1>
  <p>Check out my projects and contact me for collaboration!</p>
</body>
</html>`
  },
  {
    language: "php",
    label: "PHP • Laravel",
    typingSpeed: 40,
    deletingSpeed: 20,
    code: `// Mohamed Hossam: Senior Laravel Expert
class Developer {
  public function build() {
    return Role::create(['name' => 'Senior']);
  }
}`
  },
  {
    language: "jsx",
    label: "React • Framer Motion",
    typingSpeed: 35,
    deletingSpeed: 18,
    code: `// Mastery in React.js & Framer Motion
const Portfolio = () => {
  return <motion.div animate={{ scale: 1 }} />;
};`
  },
  {
    language: "sql",
    label: "SQL • Optimization",
    typingSpeed: 45,
    deletingSpeed: 22,
    code: `-- Database Optimization
SELECT * FROM orders
WHERE status = 'active';`
  }
];

const HOLD_AFTER_TYPING = 1200;
const CURSOR_BLINK_SPEED = 500;

const CodeEditorAnimation = () => {
  const [blockIndex, setBlockIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  const current = codeBlocks[blockIndex];
  const fullCode = current.code;

  /* Cursor blinking */
  useEffect(() => {
    const blink = setInterval(
      () => setCursorVisible(v => !v),
      CURSOR_BLINK_SPEED
    );
    return () => clearInterval(blink);
  }, []);

  /* Typing / Deleting engine */
  useEffect(() => {
    let timeout: number;

    if (!isDeleting && displayedCode.length < fullCode.length) {
      timeout = window.setTimeout(() => {
        setDisplayedCode(fullCode.slice(0, displayedCode.length + 1));
      }, current.typingSpeed);
    }

    else if (!isDeleting && displayedCode.length === fullCode.length) {
      timeout = window.setTimeout(() => {
        setIsDeleting(true);
      }, HOLD_AFTER_TYPING);
    }

    else if (isDeleting && displayedCode.length > 0) {
      timeout = window.setTimeout(() => {
        setDisplayedCode(fullCode.slice(0, displayedCode.length - 1));
      }, current.deletingSpeed);
    }

    else if (isDeleting && displayedCode.length === 0) {
      setIsDeleting(false);
      setBlockIndex(i => (i + 1) % codeBlocks.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedCode, isDeleting, fullCode, blockIndex]);

  return (
    <div className="flex justify-center p-4">
      <svg viewBox="0 0 600 400" className="w-full max-w-2xl font-mono">
        {/* Editor */}
        <rect width="600" height="400" rx="12" fill="#1E1E1E" />
        <rect width="600" height="35" rx="12" fill="#323233" />

        {/* Title */}
        <text x="300" y="22" textAnchor="middle" fill="#969696" fontSize="11">
          mohamed-hossam — VS Code
        </text>

        {/* Code Area */}
        <foreignObject x="0" y="45" width="600" height="315">
          <div className="h-full px-4 text-[14px] text-white">
            <Highlight
              theme={themes.vsDark}
              code={displayedCode || " "}
              language={current.language}
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
                        {cursorVisible && i === tokens.length - 1 && (
                          <span className="text-[#569CD6]">|</span>
                        )}
                      </span>
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
        </foreignObject>

        {/* Status Bar */}
        <rect x="0" y="380" width="600" height="20" fill="#007ACC" />
        <text x="10" y="393" fill="#fff" fontSize="10">
          Ready — {current.label}
        </text>
      </svg>
    </div>
  );
};

export default CodeEditorAnimation;
