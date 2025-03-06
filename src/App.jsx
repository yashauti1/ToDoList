import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [user, setUser] = useState(null);
  const [profilePic, setProfilePic] = useState(null);

  // Check if user is already logged in
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    const storedPic = sessionStorage.getItem("profilePic");

    if (storedUser) setUser(storedUser);
    if (storedPic) setProfilePic(storedPic);
  }, []);

  // Login function
  const handleLogin = (username, picture) => {
    sessionStorage.setItem("user", username);
    setUser(username);

    if (picture) {
      const reader = new FileReader();
      reader.onload = () => {
        sessionStorage.setItem("profilePic", reader.result);
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(picture);
    }
  };

  // Logout function
  const handleLogout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("profilePic");
    setUser(null);
    setProfilePic(null);
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* <Sidebar /> Sidebar always stays on the left */}
      
      <div className="flex-1 p-6">
        {!user ? (
          <Login onLogin={handleLogin} />
        ) : (
          <>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <img
                  src={profilePic || "/default-avatar.png"} // Default avatar if none uploaded
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <h1 className="text-xl font-bold">Hi, {user} 👋</h1>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-3 py-1 rounded-md"
              >
                Logout
              </button>
            </div>
            <TaskList />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
