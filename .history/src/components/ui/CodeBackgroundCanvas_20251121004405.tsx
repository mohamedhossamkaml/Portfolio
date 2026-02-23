import { useRef, useEffect } from "react";

const CodeRainBackground = ({
  fontSize = 16,
  speed = 50,
  colors = {
    keyword: "#61dafb",
    string: "#f28b82",
    number: "#fbbc04",
    identifier: "#34a853",
    symbol: "#e8eaed",
  },
}: {
  fontSize?: number;
  speed?: number;
  colors?: {
    keyword: string;
    string: string;
    number: string;
    identifier: string;
    symbol: string;
  };
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const codeTokens = [
      "const", "let", "function", "return", "if", "else",
      "React", "TypeScript", "Tailwind", "true", "false",
      "'string'", '"text"', "123", "=>", "{}", "[]", "()", ";", ",", ".", "+", "-", "*", "/",
      "&&", "||", "!", ">", "<", ">=", "<=", "==", "!=", "===", "!==", "&&&", "|||", "&&&&", "||||",
    ];

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
      ctx.fillStyle = "rgba(0,0,0,0.1)";
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
      requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [fontSize, speed, colors]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none bg-slate-700">
      <canvas ref={canvasRef} className="w-full h-full " />
      {/* طبقة تظليل */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0)_60%,rgba(0,0,0,1)_100%)]"></div>
    </div>
  );
};

export default CodeRainBackground;
