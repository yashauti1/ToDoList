const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">DoIt</h1>
      <div className="flex gap-4">
        <button>🔍</button>
        <button>📂</button>
        <button>⚙️</button>
      </div>
    </nav>
  );
};

export default Navbar;
