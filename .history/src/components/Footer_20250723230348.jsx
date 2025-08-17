function Footer() {
  return (
    <footer className="bg-deepMint-100 dark:bg-deepMint-900 text-center py-6 text-deepMint-800 dark:text-deepMint-100">
      <p>&copy; {new Date().getFullYear()} Mohamed Hossam. All Rights Reserved.</p>
      <div className="mt-2 flex justify-center gap-4 text-xl">
        <a href="https://facebook.com" target="_blank">
          <i className="uil uil-facebook-f" /></a>
        <a href="https://instagram.com" target="_blank">
          <i className="uil uil-instagram" /></a>
        <a href="https://x.com" target="_blank">
          <i className="uil uil-twitter" /></a>
      </div>
    </footer>
  );
}

export default Footer