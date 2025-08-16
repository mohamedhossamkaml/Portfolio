import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar({ toggleSidebar }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDark(initialDark);
    document.documentElement.classList.toggle("dark", initialDark);
  }, []);

  const handleThemeToggle = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
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
    <header
      className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-baseDark shadow-md"
      data-aos="fade-down"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-accent dark:text-softDark">
          Mohamed
        </a>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-sm font-medium hover:text-accent transition active-link"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={handleThemeToggle}
            className="text-xl transition hover:text-accent text-accent dark:text-softDark"
            title={isDark ? "Light Mode" : "Dark Mode"}
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          {/* Sidebar Toggle (Mobile) */}
          <button
            onClick={toggleSidebar}
            className="md:hidden text-2xl text-accent dark:text-softDark"
            title="Open Menu"
          >
            <i className="uil uil-bars" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
