import { useRef, useEffect } from "react";

const CodeRainBackground = ({
  fontSize = 14,
  speed = 60,
  colors = {
    keyword: "rgba(97,218,251,0.8)",   // أزرق هادي
    string: "rgba(242,139,130,0.7)",   // أحمر باهت
    number: "rgba(251,188,4,0.7)",     // أصفر ناعم
    identifier: "rgba(52,168,83,0.7)", // أخضر مريح
    symbol: "rgba(200,200,200,0.5)",   // رمادي فاتح
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
      "&&", "||", "!", ">", "<", ">=", "<=", "==", "!=", "===", "!==",
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
      // خلفية شفافة علشان يدي إحساس ضبابي
      ctx.fillStyle = "rgba(0,0,0,0.15)";
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
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [fontSize, speed, colors]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none bg-black">
      <canvas ref={canvasRef} className="w-full h-full" />
      {/* طبقة تظليل Gradient علشان النصوص الأمامية تبقى واضحة */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
    </div>
  );
};

export default CodeRainBackground;
