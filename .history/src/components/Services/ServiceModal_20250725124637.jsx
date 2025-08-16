import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/Icons";

function ServiceModal({ service, onClose }) {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm px-4">
      <div className="bg-white dark:bg-deepMint-900 p-6 rounded-lg max-w-lg relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-deepMint-500">
          <i className="uil uil-times" />
        </button>
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p className="mb-4 text-sm">{service.description}</p>
        <ul className="grid gap-2 text-sm">
          {service.tasks.map((task, i) => (
            <li key={i} className="flex items-center gap-2">
              <i className="uil uil-check-circle text-deepMint-500" />
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServiceModal;
