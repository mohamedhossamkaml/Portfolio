import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Qualifications from "../components/Qualifications";
import SkillsSection from "../components/SkillsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import WorkSection from "../components/Recent Works/WorkSection";
import ServicesSection from "../components/Services/ServicesSection";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Qualifications />
      <SkillsSection />
      <WorkSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;
