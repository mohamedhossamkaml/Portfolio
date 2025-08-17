function SidebarToggle({ onClick }) {
  return (
    <div className="nav-toggle cursor-pointer md:hidden" onClick={onClick}>
      <i className="uil uil-bars text-2xl text-deepMint-600 dark:text-deepMint-50"></i>
    </div>
  );
}

export default SidebarToggle