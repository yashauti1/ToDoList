
// const outdoorKeywords = ["park", "run", "walk", "hike", "picnic", "cycling"];
// const TaskItem = ({ task, toggleTask, toggleImportant }) => {

//   const isOutdoor = outdoorKeywords.some((word) => task.text.toLowerCase().includes(word));
//   return (
//     <div className="flex items-center justify-between p-2 hover:bg-gray-700 rounded-md transition duration-300">
//       <div className="flex items-center gap-2">
//         {/* Clickable Checkbox */}
//         <input
//           type="checkbox"
//           className="cursor-pointer w-5 h-5 accent-green-500"
//           checked={task.completed}
//           onChange={() => toggleTask(task.id)}
//         />

//         {/* Task Text with Line-Through when completed */}
//         <span className={`text-lg ${task.completed ? "line-through text-gray-400" : ""}`}>
//           {task.text}
//         </span>
//       </div>

// {/* Weather Icon for Outdoor Tasks */}
// {isOutdoor && <span className="text-blue-300 text-sm">🌤️ Outdoor Task</span>}
//       {/* Star Button to toggle importance */}
//       <button 
//         className="text-yellow-500 text-2xl cursor-pointer transition transform duration-200 hover:scale-110"
//         onClick={() => toggleImportant(task.id)}
//       >
//         {task.important ? "★" : "☆"}
//       </button>

//     </div>
//   );
// };

// export default TaskItem;

const outdoorKeywords = ["park", "run", "walk", "hike", "picnic", "cycling"];

const TaskItem = ({ task, toggleTask, toggleImportant, deleteTask }) => {
  const isOutdoor = outdoorKeywords.some((word) =>
    task.text.toLowerCase().includes(word)
  );

  return (
    <div className="flex items-center justify-between p-2 hover:bg-gray-700 rounded-md transition duration-300">
      <div className="flex items-center gap-2">
        {/* Clickable Checkbox */}
        <input
          type="checkbox"
          className="cursor-pointer w-5 h-5 accent-green-500"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        {/* Task Text with Line-Through when completed */}
        <span
          className={`text-lg ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.text}
        </span>
      </div>

      {/* Weather Icon for Outdoor Tasks */}
      {isOutdoor && <span className="text-blue-300 text-sm">🌤️ Outdoor Task</span>}

      {/* Buttons (Star for Importance, Trash for Delete) */}
      <div className="flex gap-2">
        {/* Star Button */}
        <button
          className="text-yellow-500 text-2xl cursor-pointer transition transform duration-200 hover:scale-110"
          onClick={() => toggleImportant(task.id)}
        >
          {task.important ? "★" : "☆"}
        </button>

        {/* Delete Button */}
        <button
          className="text-red-500 text-xl cursor-pointer transition transform duration-200 hover:scale-110"
          onClick={() => deleteTask(task.id)}
        >
          🗑️🚮
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
