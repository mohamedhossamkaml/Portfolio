import LogoLoop from './Tools/motion/LogoLoop';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiLaravel,
  SiPhp,
} from 'react-icons/si';

const techLogos = [
  { node: <SiReact className="text-sky-500 group-hover:text-sky-300 transition-colors duration-500" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="text-gray-900 dark:text-white group-hover:text-gray-600 transition-colors duration-500" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className="text-blue-600 group-hover:text-blue-400 transition-colors duration-500" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="text-teal-500 group-hover:text-teal-300 transition-colors duration-500" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiLaravel className="text-red-500 group-hover:text-red-400 transition-colors duration-500" />, title: "Laravel", href: "https://laravel.com" },
  { node: <SiPhp className="text-indigo-500 group-hover:text-indigo-400 transition-colors duration-500" />, title: "PHP", href: "https://www.php.net" },
];

const LogoLoopUsage = () => {
  return (
    <section
      id="logo-loop-usage"
      className="relative py-5 text-white overflow-hidden
                dark:text-gray-100 transition-colors duration-300"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-700/70 via-teal-800/90 to-teal-950/95
                      dark:from-slate-900/80 dark:via-slate-950/80 dark:to-slate-950/95 animate-gradient-x" />

      <div className="relative z-10">
        {/* Horizontal loop with hover effects */}
        <LogoLoop
          logos={techLogos}
          speed={70}
          direction="left"
          logoHeight={70}
          gap={80}
          hoverSpeed={5}
          scaleOnHover
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
};

export default LogoLoopUsage;
