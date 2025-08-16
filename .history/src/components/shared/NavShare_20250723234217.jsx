import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/Icons";

function NavShare() {
  return (
    <div className="btn-share mt-4">
      <FontAwesomeIcon icon={icons.Share} className="uil uil-share-alt text-xl text-deepMint-500 dark:text-deepMint-100 cursor-pointer" />
      <i className="uil uil-share-alt text-xl text-deepMint-500 dark:text-deepMint-100 cursor-pointer"></i>
    </div>
  );
}
export default NavShare