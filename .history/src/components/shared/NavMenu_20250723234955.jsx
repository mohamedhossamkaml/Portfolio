function NavMenu() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#work", label: "Work" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <ul className="text-deepMint-600 dark:text-deepMint-50 nav-list flex flex-col gap-4 mt-6">
      {links.map(({ href, label }, index) => (
        <li key={index}>
          <a href={href} className="nav-link text-lg hover:text-deepMint-500 transition-colors">
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavMenu