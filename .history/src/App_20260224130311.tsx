import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/Tools/ScrollToTopButton";
import ScrollToTop from "./components/Tools/ScrollToTop";
import Contact from "./components/Contact";
import SocialContact from "./components/SocialContact/SocialContact";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
// import GalleryPage from "./pages/GalleryPage";
import WorksPage from "./pages/WorksPage";
import ProjectPage from "./pages/ProjectPage";
import NotFoundPage from "./pages/NotFoundPage";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <>
      {/* Scroll to top on route change */}
      <ScrollToTop />

      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        {/* Navbar */}
        <Navbar />

        {/* Social icons on the left side */}
        <SocialContact position="left" />

        {/* Main content */}
        <div className="pt-32">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<ComingSoon />} /> {/* Replace with GalleryPage when ready */}
            <Route path="/projects/:id" element={<ProjectPage />} />
            <Route path="/works" element={<WorksPage />} />
            <Route path="/contact" element={<Contact />} />

            {/* catch-all route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />

        {/* Scroll to top button */}
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default App;
