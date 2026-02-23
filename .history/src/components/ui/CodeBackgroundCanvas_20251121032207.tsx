import { useRef, useEffect } from "react";

const CodeRainBackground = ({
  fontSize = 14, // Font size of the code rain characters (default: 14)
  speed = 140, // Speed of the code rain animation in milliseconds (default: 140)
  darkMode = true, // Dark mode flag (default: true)
}: {
  fontSize?: number;
  speed?: number;
  darkMode?: boolean;
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // List of code tokens
    const codeTokens = [
      "const", "let", "function", "return", "if", "else",
      "React", "TypeScript", "Tailwind", "true", "false",
      `console.log("Hello World");`,
      "'string'", '"text"', "123", "=>", "{}", "[]", "()", ";", ",", ".", "+", "-", "*", "/",
      `print("Hello World")`,
      `System.out.println("Hello World");`,
      "&&", "||", "!", ">", "<", ">=", "<=", "==", "!=", "===", "!==",
      "switch", "case", "default", "break", "continue", "for", "while", "do", "if", "else",
      `printf("Hello World\\n");`,
      `echo "Hello World";`,
      "useEffect(() => {}, []);",
      "<div>Hello World</div>",
      "public static void main(String[] args) {}",
      "def hello(): print('Hello World')",
      "print('Hello World')",
      "println('Hello World')",
      "console.log('Hello World')",
      "import { useRef, useEffect } from 'react';",
      "const code = `console.log('Hello World');`;",
      "System.out.println('Hello World')",
      "System.out.print('Hello World')",
      "System.out.printf('Hello World')",
      "System.out.println('Hello World')",
    ];

    // Colors for different code tokens
    const colors = darkMode
      ? {
        keyword: "rgba(97,218,251,0.8)",
        string: "rgba(242,139,130,0.7)",
        number: "rgba(251,188,4,0.7)",
        identifier: "rgba(52,168,83,0.7)",
        symbol: "rgba(200,200,200,0.5)",
      }
      : {
        keyword: "rgba(30,144,255,0.8)",
        string: "rgba(255,99,71,0.7)",
        number: "rgba(255,215,0,0.7)",
        identifier: "rgba(34,139,34,0.7)",
        symbol: "rgba(80,80,80,0.5)",
      };

    // Calculate the number of columns and initialize drops
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(0);

    function getColor(token: string) {
      if (/^(const|let|function|return|if|else)$/.test(token)) return colors.keyword;
      if (/^['"].*['"]$/.test(token)) return colors.string;
      if (/^\d+$/.test(token)) return colors.number;
      if (/^[a-zA-Z_]\w*$/.test(token)) return colors.identifier;
      return colors.symbol;
    }

    function draw() {
      ctx.fillStyle = darkMode ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const token = codeTokens[Math.floor(Math.random() * codeTokens.length)];
        ctx.fillStyle = getColor(token);
        ctx.fillText(token, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      setTimeout(() => requestAnimationFrame(draw), speed);
    }

    draw();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [fontSize, speed, darkMode]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Canvas */}
      <canvas ref={canvasRef} className="w-full h-full" />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-300/30 via-cyan-500/60  to-cyan-700/90 dark:from-slate-700/50 dark:via-slate-800/60 dark:to-slate-950/90"></div>
    </div>
  );
};

export default CodeRainBackground;
