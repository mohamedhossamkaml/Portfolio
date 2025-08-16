function NavToggle({ onClick }) {
  return (
    <div className="nav-toggle cursor-pointer" onClick={onClick}>
      <i className="fas fa-bars text-xl"></i>
    </div>
  );
}

export default NavToggle;
