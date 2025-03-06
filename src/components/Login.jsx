import { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState(""); // for setting up the username 
  const [picture, setPicture] = useState(null);// for setting up profile pic of a user

  const handleSubmit = (e) => {     // function to handle submit by the user where e.preventDefault() default prevent default submission by user
    e.preventDefault();
    if (!username.trim()) return;   
    onLogin(username, picture);  // on login 
  };

  return (
    <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md">   {/*  div container for login title */}
      <h2 className="text-xl font-semibold mb-3">Login</h2>   {/*  login title*/}

      {/*  input field for user to enter his name*/}
      <input 
        type="text"
        value={username}                                                                      
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your name"
        className="p-2 rounded-md mb-3 w-64 text-white border border-yellow-500"
      />
      {/*  input field for user to upload his profile picture. Here we are useing localstorage to upload profile pic*/}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setPicture(e.target.files[0])}
        className="mb-3 hover:bg-green-600 cursor-pointer rounded-2xl"
      />
      {/* created login button */}
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-4 py-2 rounded-md"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
