import { Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SeeMoreButton from './Tools/Buttons/SeeMoreButton';
import {
  fadeInUp,
  fadeIn,
  scaleIn,
  staggerContainer,
  textVariant,
  cardVariants,
  fadeInLeft,
  fadeInRight,
} from '../utils/animations';
import { useLanguage } from '../context/LanguageContext';
import BlueprintAnimation from './Tools/BlueprintAnimation';
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
  const { t } = useLanguage();

  // Precision points
}
