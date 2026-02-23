import LogoLoop from './Tools/motion/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiLaravel, SiPhp } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com" },
  { node: <SiPhp />, title: "PHP", href: "https://www.php.net" },
];



const LogoLoopUsage = () => {

  return (
    <section
      id="logo-loop-usage"
      className="relative py-5 text-white overflow-hidden
                dark:text-gray-100 transition-colors duration-300"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-700/65 via-teal-800/90 to-teal-950/95
                      dark:from-slate-900/80 dark:via-slate-950/80 dark:to-slate-950/95" />

      <div className=" relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Basic horizontal loop */}
        <LogoLoop
          logos={techLogos}
          speed={70}
          direction="left"
          logoHeight={60}
          gap={60}
          hoverSpeed={5}
          scaleOnHover
          fadeOut
          fadeOutColor=""
          ariaLabel="Technology partners"
        />
      </div>

    </section>  // overflow-hidden"
  );
  // Precision points
}

export default LogoLoopUsage;