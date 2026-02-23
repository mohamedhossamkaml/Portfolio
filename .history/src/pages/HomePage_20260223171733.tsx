import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Works from '../components/Works';
import Contact from '../components/Contact';
import LogoLoopUsage from '../components/LogoLoopUsage';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <LogoLoopUsage />
      <Services />
      <Gallery />
      <Works />
      <Contact />
    </>
  );
};

export default HomePage;
