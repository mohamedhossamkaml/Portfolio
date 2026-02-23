import { useRef, useEffect } from "react";

const CodeRainBackground = ({
  fontSize = 14,
  speed = 140, // كل ما تزود الرقم الحركة تبقى أبطأ
  density = 0.5, // كثافة الأكواد (0.3 خفيف، 0.8 كثيف)
  darkMode = true, // لو عايز تتحكم في الألوان حسب الثيم
}: {
  fontSize?: number;
  speed?: number;
  density?: number;
  darkMode?: boolean;
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

    // ألوان حسب الثيم
    const colors = darkMode
      ? {
        keyword: "rgba(97,218,251,0.8)",   // أزرق هادي
        string: "rgba(242,139,130,0.7)",   // أحمر باهت
        number: "rgba(251,188,4,0.7)",     // أصفر ناعم
        identifier: "rgba(52,168,83,0.7)", // أخضر مريح
        symbol: "rgba(200,200,200,0.5)",   // رمادي فاتح
      }
      : {
        keyword: "rgba(30,144,255,0.8)",   // أزرق فاتح
        string: "rgba(255,99,71,0.7)",     // برتقالي
        number: "rgba(255,215,0,0.7)",     // ذهبي
        identifier: "rgba(34,139,34,0.7)", // أخضر داكن
        symbol: "rgba(80,80,80,0.5)",      // رمادي غامق
      };

    const columns = Math.floor((canvas.width / fontSize) * density);
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
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [fontSize, speed, density, darkMode]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" />
      {/* طبقة تظليل Gradient علشان النصوص الأمامية تبقى واضحة */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 dark:from-slate-700/60 dark:to-slate-950/90"></div>
    </div>
  );
};

export default CodeRainBackground;
