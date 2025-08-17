function WorkCard({ work, onDemoClick }) {
  return (
    <div className="bg-white dark:bg-deepMint-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={work.image} alt={work.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{work.title}</h3>
        <button onClick={onDemoClick} className="inline-flex items-center gap-2 text-deepMint-500 hover:text-deepMint-700">
          Demo <i className="uil uil-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
export default WorkCard