import LogoLoop from './Tools/motion/LogoLoop';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiLaravel,
  SiPhp,
  SiJavascript,
  SiLaravelhorizon,
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiFirebase,
  SiMysql,
  SiMongodb,
} from 'react-icons/si';

const techLogos = [
  { node: <SiReact className="text-sky-500 group-hover:text-sky-300 transition-colors duration-500" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="text-gray-900 dark:text-white group-hover:text-gray-600 transition-colors duration-500" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className="text-blue-600 group-hover:text-blue-400 transition-colors duration-500" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="text-teal-500 group-hover:text-teal-300 transition-colors duration-500" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiLaravel className="text-red-500 group-hover:text-red-400 transition-colors duration-500" />, title: "Laravel", href: "https://laravel.com" },
  { node: <SiPhp className="text-indigo-500 group-hover:text-indigo-400 transition-colors duration-500" />, title: "PHP", href: "https://www.php.net" },
  { node: <SiJavascript className="text-yellow-500 group-hover:text-yellow-300 transition-colors duration-500" />, title: "JavaScript", href: "https://www.javascript.com" },
  { node: <SiLaravelhorizon className="text-red-600 group-hover:text-red-400 transition-colors duration-500" />, title: "Laravel Horizon", href: "https://laravel.com/horizon" },
  { node: <SiFigma className="text-pink-500 group-hover:text-pink-300 transition-colors duration-500" />, title: "Figma", href: "https://www.figma.com" },
  { node: <SiAdobexd className="text-purple-500 group-hover:text-purple-300 transition-colors duration-500" />, title: "Adobe XD", href: "https://www.adobe.com/products/xd.html" },
  { node: <SiAdobephotoshop className="text-blue-700 group-hover:text-blue-400 transition-colors duration-500" />, title: "Adobe Photoshop", href: "https://www.adobe.com/products/photoshop.html" },
  { node: <SiHtml5 className="text-orange-500 group-hover:text-orange-300 transition-colors duration-500" />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss3 className="text-blue-600 group-hover:text-blue-400 transition-colors duration-500" />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiGit className="text-orange-600 group-hover:text-orange-400 transition-colors duration-500" />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub className="text-gray-800 dark:text-gray-200 group-hover:text-gray-500 transition-colors duration-500" />, title: "GitHub", href: "https://github.com" },
  { node: <SiFirebase className="text-yellow-700 group-hover:text-yellow-400 transition-colors duration-500" />, title: "Firebase", href: "https://firebase.google.com" },
];

// left and right logos for two separate loops
const leftLogos = techLogos.slice(0, Math.ceil(techLogos.length / 2));
const rightLogos = techLogos.slice(Math.ceil(techLogos.length / 2));

const LogoLoopUsage = () => {
  return (
    <section
      id="logo-loop-usage"
      className="relative py-10 text-white overflow-hidden
                dark:text-gray-100 transition-colors duration-300"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-700/70 via-teal-800/90 to-teal-950/95
                      dark:from-slate-900/80 dark:via-slate-950/80 dark:to-slate-950/95 animate-gradient-x" />

      <div className="relative z-10 space-y-10">
        {/* Loop From left to right */}
        <LogoLoop
          logos={leftLogos}
          speed={70}
          direction="left"
          logoHeight={70}
          gap={80}
          hoverSpeed={5}
          scaleOnHover
          ariaLabel="Frontend & Backend Technologies"
        />

        {/* Loop From right to left */}
        <LogoLoop
          logos={rightLogos}
          speed={70}
          direction="right"
          logoHeight={70}
          gap={80}
          hoverSpeed={5}
          scaleOnHover
          ariaLabel="Design & Tools"
        />
      </div>
    </section>
  );
};

export default LogoLoopUsage;
