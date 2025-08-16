import { icons } from "../utils/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function SidebarToggle({ onClick }) {
  return (
    <div className="nav-toggle cursor-pointer md:hidden" onClick={onClick}>
      <FontAwesomeIcon icon={icons.Bars} className=" text-2xl text-deepMint-600 dark:text-deepMint-50" />
    </div>
  );
}

export default SidebarToggle