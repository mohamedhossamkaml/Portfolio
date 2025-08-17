import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/Icons";

function ServiceCard({ service, onOpen }) {
  return (
    <div className="bg-white dark:bg-deepMint-800 shadow rounded-lg p-6 text-center flex flex-col justify-between">
      <div>
        <i className={`uil ${service.icon} text-4xl text-deepMint-500 mb-3`} />
        <FontAwesomeIcon icon={icons.facebook} />
        <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
      </div>
      <button
        onClick={() => onOpen(service)}
        className="inline-flex items-center justify-center gap-2 text-deepMint-600 dark:text-deepMint-100 hover:underline mt-4"
      >
        View More
        <i className="uil uil-arrow-right" />
        <FontAwesomeIcon icon={icons.facebook} />
      </button>
    </div>
  );
}

export default ServiceCard;
