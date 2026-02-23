// CodeBackgroundCSS.tsx
import React from "react";

const lines = [
  "const greet = (name) => `Hello, ${name}!`",
  "const sum = (a, b) => a + b",
  "export default function App() {}",
];

const CodeBackgroundCSS: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="w-full h-full bg-gradient-to-b from-transparent to-black/40 dark:to-black/60" />
      <div className="absolute inset-0 p-6 md:p-10 font-mono text-[12px] md:text-sm opacity-30 dark:opacity-40">
        {lines.map((line, i) => (
          <div key={i} className="mb-2 text-emerald-300/80 dark:text-emerald-200/80">
            <span
              className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-emerald-300/60 animate-typing"
              style={{ animationDelay: `${i * 0.8}s` }}
            >
              {line}
            </span>
          </div>
        ))}
      </div>
      {/* حبيبات subtle */}
      <div className="absolute inset-0 backdrop-blur-[1px]" />
    </div>
  );
};

export default CodeBackgroundCSS;
