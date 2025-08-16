function NavClose({ onClick }) {
  return (
    <div className="nav-close absolute top-4 right-4 cursor-pointer" onClick={onClick}>
      <i className="fas fa-times text-xl"></i>
    </div>
  );
}

export default NavClose;
