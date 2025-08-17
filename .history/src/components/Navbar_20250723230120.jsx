import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/Icons";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar({ toggleSidebar }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
    const userTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialMode = userTheme === "dark" || (!userTheme && prefersDark);
    setIsDark(initialMode);
    document.documentElement.classList.toggle("dark", initialMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  const navItems = [
    "home",
    "about",
    "skills",
    "work",
    "services",
    "testimonials",
    "contact",
  ];

  return (
    <header data-aos="fade-down" className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-deepMint-900 shadow-md">
      <nav className="container mx-auto flex items-center  dark:text-deepMint-100 justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-deepMint-600 dark:text-deepMint-100">
          Mohamed Hossam
        </a>

        {/* Links */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-sm font-medium hover:text-deepMint-500 transition active-link"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-4">
          {/* Toggle Dark Mode */}
          <button
            onClick={toggleDarkMode}
            className="text-xl text-deepMint-500 dark:text-deepMint-100 transition"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? "☀️" : "🌙"}
            <FontAwesomeIcon icon={isDark ? icons.sun : icons.moon} />
          </button>

          {/* Sidebar Toggle for Mobile */}
          <button onClick={toggleSidebar} title="Open Menu" className="md:hidden text-2xl text-deepMint-600 dark:text-deepMint-50">
            <i className="uil uil-bars" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
