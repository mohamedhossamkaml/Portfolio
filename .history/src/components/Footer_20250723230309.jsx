import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/Icons";

function Footer() {
  return (
    <footer className="bg-baseLight dark:bg-baseDark text-deepMint-800 dark:text-softDark text-center py-6">
      <p>&copy; {new Date().getFullYear()} Mohamed Hossam. All rights reserved.</p>
      <div className="mt-2 flex justify-center gap-6 text-xl">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={icons.facebook} className="hover:text-blue-500 transition" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={icons.instagram} className="hover:text-pink-500 transition" />
        </a>
        <a href="https://x.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={icons.twitter} className="hover:text-sky-500 transition" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
