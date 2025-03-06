

import { useState, useEffect } from "react";
import TaskItem from "./TaskItem";

// Weather Component (Separate)
const API_KEY = "5ad6be9ea5a82111407dd17de2d2055f"; // Replace with your actual key

const WeatherComponent = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${latitude},${longitude}`
          );

          if (!response.ok) {
            throw new Error("Failed to fetch weather data");
          }

          const data = await response.json();

          if (data.error) {
            throw new Error(data.error.info);
          }

          setWeather(data.current); // Set only current weather details
          setLocation(data.location); // Store location separately
        } catch (err) {
          setError(err.message);
        }
      },
      (err) => {
        setError("Unable to retrieve location: " + err.message);
      }
    );
  }, []);

  return (
    <div className="mb-4 p-3 bg-gray-700 rounded-md text-white">
      <h3 className="text-lg font-semibold">Current Weather</h3>
      {error ? (
        <p className="text-red-400">{error}</p>
      ) : weather && location ? (
        <p>
          📍 {location.name}: 🌡️ {weather.temperature}°C,{" "}
          {weather.weather_descriptions?.[0] || "N/A"}
        </p>
      ) : (
        <p className="text-gray-400">Loading weather data...</p>
      )}
    </div>
  );
};

// Task List Component
const TaskList = () => {
  const [tasks, setTasks] = useState([]); // Stores all tasks
  const [taskText, setTaskText] = useState(""); // Input field state

  // Add a new task
  const addTask = () => {
    if (!taskText.trim()) return; // Prevent empty tasks

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
      important: false,
    };
    setTasks([...tasks, newTask]);
    setTaskText(""); // Clear input field after adding
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Toggle task importance
  const toggleImportant = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, important: !task.important } : task
      )
    );
  };

  // Delete task function
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)); // Remove task by filtering out the matching id
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md text-white">
      <h2 className="text-xl font-semibold mb-2">TO DO</h2>

      {/* Weather Section */}
      <WeatherComponent />

      {/* Input Field for Typing Tasks */}
      <div className="flex gap-2 mb-3 border-amber-300">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter task..."
          className="p-2 rounded-md w-full text-white border-amber-300"
        />
        <button
          onClick={addTask}
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
          Add Task
        </button>
      </div>

      {/* Pending Tasks */}
      <h3 className="text-lg font-semibold mt-4">To-Do</h3>
      {tasks.filter((task) => !task.completed).length === 0 ? (
        <p className="text-gray-400">No pending tasks.</p>
      ) : (
        tasks
          .filter((task) => !task.completed)
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              toggleImportant={toggleImportant}
              deleteTask={deleteTask} // Pass deleteTask function
            />
          ))
      )}

      {/* Completed Tasks */}
      <h3 className="text-lg font-semibold mt-4">Completed</h3>
      {tasks.filter((task) => task.completed).length === 0 ? (
        <p className="text-gray-400">No completed tasks yet.</p>
      ) : (
        tasks
          .filter((task) => task.completed)
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              toggleImportant={toggleImportant}
              deleteTask={deleteTask} // Pass deleteTask function
            />
          ))
      )}
    </div>
  );
};

export default TaskList;

