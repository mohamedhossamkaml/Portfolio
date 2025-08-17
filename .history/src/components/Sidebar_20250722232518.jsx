import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import NavShare from "./NavShare";
import NavClose from "./NavClose";

function Sidebar({ isOpen, onClose }) {
  return (
    <aside
      className={`sidebar fixed top-0 left-0 h-full w-64 bg-white dark:bg-deepMint-800 z-50 p-6 shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
    >
      <nav className="nav relative">
        <NavLogo />
        <NavMenu />
        <NavShare />
        <NavClose onClick={onClose} />
      </nav>
    </aside>
  );
}

export default Sidebar;
