import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/Icons";

function Footer() {
  return (
    <footer className="bg-deepMint-100 dark:bg-deepMint-900 text-center py-6 text-deepMint-800 dark:text-deepMint-100">
      <p>&copy; {new Date().getFullYear()} Mohamed Hossam. All Rights Reserved.</p>
      <div className="mt-2 flex justify-center gap-4 text-xl">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={icons.facebook} className="hover:text-blue-500 transition" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={icons.instagram} className="hover:text-pink-500 transition" />
        </a>
        <a href="https://x.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon="fa-brands fa-x-twitter" className="hover:text-sky-500 transition" />
          <FontAwesomeIcon icon={icons.twitter} className="hover:text-sky-500 transition" />
        </a>
      </div>
    </footer>
  );
}

export default Footer