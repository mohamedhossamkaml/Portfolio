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
      className="py-20 bg-white dark:bg-gray-900"
    >

      <div className="">
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