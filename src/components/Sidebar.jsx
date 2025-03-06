const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 p-4 flex flex-col">
      
      <nav className="mt-4">
        <ul>
          {["All Tasks", "Today", "Important", "Planned", "Assigned to me"].map((item, index) => (
            <li key={index} className="p-2 rounded-md cursor-pointer hover:bg-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </nav>
      <button className="mt-auto p-2 bg-green-600 rounded-md hover:bg-green-500">+ Add List</button>
    </aside>
  );
};


export default Sidebar;

