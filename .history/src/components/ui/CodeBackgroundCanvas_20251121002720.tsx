import { useRef, useEffect } from "react";

const CodeBackgroundCanvas = ({
  lines = [
    "const name = 'Mohamed Hossam';",
    "const role = 'Frontend Engineer';",
    "const stack = ['React', 'TypeScript', 'Tailwind'];",
    "export const contact = () => '/#contact';",
  ],
  speed = 50, // سرعة الكتابة لكل حرف
  lineSpacing = 28, // المسافة بين السطور
  skewAngle = -0.25, // الميل (بالراديان، سالب يعني ميل لليسار)
}: {
  lines?: string[];
  speed?: number;
  lineSpacing?: number;
  skewAngle?: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const resize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    ctx.font =
      "16px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Courier New', monospace";
    ctx.textBaseline = "top";

    const states = lines.map((text, i) => ({
      text,
      shown: 0,
      y: 40 + i * lineSpacing,
      delay: i * 600, // تأخير لكل سطر
    }));

    const start = performance.now();

    const draw = (now: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      // إضافة الميل
      ctx.setTransform(1, skewAngle, 0, 1, 0, 0);

      states.forEach((s) => {
        const elapsed = now - start - s.delay;
        if (elapsed > 0) {
          const charsToShow = Math.min(
            s.text.length,
            Math.floor(elapsed / speed)
          );
          s.shown = charsToShow;
        }

        const slice = s.text.slice(0, s.shown);
        ctx.fillStyle = "rgba(100, 255, 200, 0.7)";
        ctx.fillText(slice, 40, s.y);

        // مؤشر الكتابة
        if (s.shown < s.text.length) {
          const w = ctx.measureText(slice).width;
          ctx.fillRect(40 + w + 2, s.y, 8, 16);
        }
      });

      ctx.restore();

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [lines, speed, lineSpacing, skewAngle]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full bg-black/80" />
    </div>
  );
};

export default CodeBackgroundCanvas;
