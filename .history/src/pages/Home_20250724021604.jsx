import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Qualifications from "../components/Qualifications";
import SkillsSection from "../components/SkillsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import WorkSection from "../components/Recent Works/WorkSection";
import ServicesSection from "../components/Services/ServicesSection";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, offset: 100, once: true });
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      setShowScrollBtn(scrollY > 400);

      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");
        const link = document.querySelector(`.nav a[href*=${sectionId}]`);
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          link?.classList.add("active-link");
        } else {
          link?.classList.remove("active-link");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

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

      {showScrollBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-deepMint-500 text-white p-3 rounded-full shadow-lg hover:bg-deepMint-600 transition"
        >
          ↑
        </button>
      )}
    </>
  );
}

export default Home;
