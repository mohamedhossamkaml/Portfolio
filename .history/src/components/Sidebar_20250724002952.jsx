import NavLogo from "./shared/NavLogo";
import NavMenu from "./shared/NavMenu";
import NavClose from "./shared/NavClose";
import NavShare from "./shared/NavShare";

function Sidebar({ isOpen, onClose }) {
  const Sidebar = ({ isOpen, onClose }) => {
    const navItems = ["home", "about", "skills", "work", "services", "testimonials", "contact"];
    return (
      <>
        <aside
          className={`fixed top-0 left-0 h-full w-64 z-50 bg-white dark:bg-deepMint-800 p-6 shadow-md transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <nav className="flex flex-col justify-between h-full">
            <NavLogo />
            <NavMenu />
            <NavShare />
            <NavClose onClick={onClose} />
          </nav>
        </aside>

        <motion.aside
          initial={{ x: "-100%" }}
          animate={{ x: isOpen ? 0 : "-100%" }}
          transition={{ type: "tween", duration: 0.4 }}
          className="fixed top-0 left-0 w-64 h-screen bg-white dark:bg-baseDark shadow-lg z-50"
        >
          <div className="p-6 flex flex-col gap-6">
            {navItems.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={onClose}
                className="text-sm font-medium px-2 py-1 rounded hover:bg-accentDark hover:text-white transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}
          </div>
        </motion.aside>
      </>

    );
  }

  export default Sidebar