function WorkPopup({ work, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm px-6">
      <div className="bg-white dark:bg-deepMint-900 p-6 rounded-lg max-w-3xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-deepMint-500">
          <i className="uil uil-times" />
        </button>
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <img src={work.image} alt="Preview" className="rounded-lg" />
          <div>
            <div className="text-sm mb-2">Featured - <span>{work.type}</span></div>
            <h3 className="font-bold text-xl mb-2">{work.details.title}</h3>
            <p className="mb-4 text-sm">{work.details.description}</p>
            <ul className="text-sm space-y-1">
              <li>Created: <span>{work.details.date}</span></li>
              <li>Technologies: <span>{work.details.tech}</span></li>
              <li>Role: <span>{work.details.role}</span></li>
              <li>View: <a href={work.details.view} className="text-deepMint-500 underline">Visit</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkPopup;
