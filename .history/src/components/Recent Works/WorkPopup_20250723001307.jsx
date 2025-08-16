function WorkPopup({ work, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-deepMint-800 p-6 rounded-lg w-full max-w-3xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-deepMint-500">
          <i className="uil uil-times"></i>
        </button>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <img src={work.image} alt={work.title} className="rounded-lg shadow-md" />
          <div>
            <h3 className="text-xl font-bold mb-2">{work.details.title}</h3>
            <p className="text-sm mb-4">{work.details.description}</p>
            <ul className="text-sm space-y-1">
              <li>Created: <span>{work.details.date}</span></li>
              <li>Technologies: <span>{work.details.tech}</span></li>
              <li>Role: <span>{work.details.role}</span></li>
              <li>View: <a href={work.details.view} target="_blank" className="text-deepMint-500 underline">Link</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WorkPopup