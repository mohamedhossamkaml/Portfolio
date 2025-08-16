import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import NavClose from "./shared/NavClose";
import NavShare from "./NavShare";

function Sidebar({ isOpen, onClose }) {
  return (
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
  );
}

export default Sidebar