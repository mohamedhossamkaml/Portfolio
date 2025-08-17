function Navbar({ toggleSidebar }) {
  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-deepMint-900 shadow-md z-50">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="text-2xl font-bold text-deepMint-600 dark:text-deepMint-100">
          Mohamed
        </a>

        {/* الروابط - تظهر فقط على الشاشات الكبيرة */}
        <ul className="hidden md:flex gap-6">
          {["home", "about", "skills", "work", "services", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="text-sm font-medium hover:text-deepMint-500 transition active-link"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* زر فتح الـ Sidebar - يظهر فقط في الشاشات الصغيرة */}
        <button onClick={toggleSidebar} className="md:hidden text-2xl text-deepMint-600 dark:text-deepMint-50">
          <i className="uil uil-bars" />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
