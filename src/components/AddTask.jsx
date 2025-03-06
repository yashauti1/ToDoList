import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faRedo, faClock } from "@fortawesome/free-solid-svg-icons";

const AddTask = () => {
  return (
    <div className="w-[1344px] h-auto border-t-[1.5px] border-[#2F3630] bg-[#2F3630] p-4 flex flex-col gap-2 rounded-lg">
      {/* Input Field */}
      <input
        type="text"
        placeholder="Type something..."
        className="w-full bg-[#3A3F3A] text-white px-4 py-3 rounded-md outline-none placeholder-gray-400"
      />

      {/* Bottom Section */}
      <div className="flex justify-between items-center">
        {/* Left Side Icons */}
        <div className="flex gap-4 text-white">
          <FontAwesomeIcon icon={faBell} className="cursor-pointer hover:text-gray-300" />
          <FontAwesomeIcon icon={faRedo} className="cursor-pointer hover:text-gray-300" />
          <FontAwesomeIcon icon={faClock} className="cursor-pointer hover:text-gray-300" />
        </div>

        {/* Add Task Button */}
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTask;

