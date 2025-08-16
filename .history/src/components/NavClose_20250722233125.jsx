function NavClose({ onClick }) {
  return (
    <div className="nav-close absolute top-4 right-4 cursor-pointer" onClick={onClick}>
      <i className="uil uil-times text-2xl text-deepMint-600 dark:text-deepMint-50"></i>
    </div>
  );
}
export default