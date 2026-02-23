// CodeBackgroundCanvas.tsx
import React, { useEffect, useRef } from "react";

type CodeBackgroundCanvasProps = {
  lines?: string[];
  speed?: number;       // سرعة الكتابة لكل حرف بالمللي ثانية
  lineSpacing?: number; // المسافة بين السطور بالبكسل
  opacity?: number;     // شفافية النص
};

const defaultLines = [
  "import React from 'react';",
  "const skills = ['React', 'TypeScript', 'Tailwind'];",
  "const sum = (a: number, b: number) => a + b;",
  "export const Hero = () => <section>Welcome</section>;",
];

const CodeBackgroundCanvas: React.FC<CodeBackgroundCanvasProps> = ({
  lines = defaultLines,
  speed = 40,
  lineSpacing = 22,
  opacity = 0.28,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let mounted = true;

    // حجم الكانفاس
    const resize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // إعدادات الخط
    ctx.font = "14px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace";
    ctx.textBaseline = "top";

    // حالة الكتابة لكل سطر
    const states = lines.map((text, i) => ({
      text,
      shown: 0,
      y: 40 + i * lineSpacing,
      delay: i * 400, // تأخير لكل سطر
      t: 0,
    }));

    const start = performance.now();

    const draw = (now: number) => {
      const elapsed = now - start;
      // خلفية شفافة خفيفة
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grd.addColorStop(0, "rgba(0,0,0,0)");
      grd.addColorStop(1, "rgba(0,0,0,0.35)");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      states.forEach((s, idx) => {
        const localElapsed = elapsed - s.delay;
        if (localElapsed > 0) {
          const charsToShow = Math.min(
            s.text.length,
            Math.floor(localElapsed / speed)
          );
          s.shown = charsToShow;
        }

        // لون متدرج خفيف لكل سطر
        const hue = 150 + idx * 6;
        ctx.fillStyle = `hsla(${hue}, 65%, 70%, ${opacity})`;

        // موشن أفقي خفيف جداً
        const wobble = Math.sin((elapsed + idx * 300) / 1200) * 4;

        // كتابة السطر
        const slice = s.text.slice(0, s.shown);
        ctx.fillText(slice, 24 + wobble, s.y);

        // مؤشر الكتابة
        if (s.shown < s.text.length) {
          const w = ctx.measureText(slice).width;
          ctx.fillRect(24 + wobble + w + 2, s.y, 8, 14);
        }
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    // إيقاف عند التفكيك
    return () => {
      mounted = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [lines, speed, lineSpacing, opacity]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ filter: "blur(0.5px)" }}
      />
    </div>
  );
};

export default CodeBackgroundCanvas;
