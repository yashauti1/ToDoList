import { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input.trim()) {
      addTask(input);
      setInput("");
    }
  };

  return (
    <div className="flex items-center bg-gray-800 p-3 rounded-md">
      <input
        type="text"
        placeholder="Add A Task"
        className="bg-transparent flex-1 outline-none text-white p-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-500" onClick={handleAddTask}>
        ADD TASK
      </button>
    </div>
  );
};

export default TaskInput;
