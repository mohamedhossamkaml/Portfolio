function NavMenu() {
  const navItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Skills", link: "#skills" },
    { label: "Work", link: "#work" },
    { label: "Services", link: "#services" },
    { label: "Contact", link: "#contact" },
  ];

  return (
    <div className="nav-menu mt-6">
      <ul className="nav-list flex flex-col gap-4">
        {navItems.map((item, i) => (
          <li key={i} className="nav-item">
            <a href={item.link} className="nav-link hover:text-deepMint-400">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavMenu;
