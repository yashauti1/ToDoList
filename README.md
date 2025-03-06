


📌 To do list application
A fully responsive Task Manager App built with React, Tailwind CSS, and custom CSS, supporting task management, authentication, weather integration, and mobile responsiveness.



🚀 Features
✅ Task Management
Add, complete, mark important, and delete tasks.
Tasks are categorized as To-Do and Completed.


✅ Authentication (Session Storage)
Users can log in with their name and profile picture (stored in sessionStorage).
Logout functionality clears session data.


✅ Weather API Integration
Displays real-time weather data based on user location.
Weather updates dynamically using Geolocation API + WeatherStack API.


✅ Responsive UI (Mobile-Friendly)
Sidebar toggles on mobile.
Navbar remains fixed for easy navigation.
Task list auto-scrolls for long lists.


📂 Project Structure
arduino
Copy
Edit
📦 To do list application
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 AddTask.jsx
 ┃ ┃ ┣ 📜 Login.jsx
 ┃ ┃ ┣ 📜 Navbar.jsx
 ┃ ┃ ┣ 📜 Sidebar.jsx
 ┃ ┃ ┣ 📜 Task.jsx
 ┃ ┃ ┣ 📜 TaskInput.jsx
 ┃ ┃ ┣ 📜 TaskItem.jsx
 ┃ ┃ ┗ 📜 TaskList.jsx
 ┃ ┣ 📜 App.jsx
 ┃ ┣ 📜 index.js
 ┃ ┣ 📜 styles.css  // Custom responsive styles
 ┣ 📜 package.json
 ┣ 📜 tailwind.config.js
 ┗ 📜 README.md


🔧 Setup & Installation
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/your-username/task-manager.git

2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Set Up Environment Variables
Create a .env file in the root directory and add:

sh
Copy
Edit
REACT_APP_WEATHER_API_KEY="5ad6be9ea5a82111407dd17de2d2055f"
4️⃣ Start the Development Server
sh
Copy
Edit
npm run dev
The app will be available at http://localhost:5173/ (if using Vite).

📸 Screenshots


**  Visit screenshot folder in src/assets/screenshots



⚙️ Technologies Used
React.js (Vite)
Tailwind CSS (for styling)
Custom CSS (for advanced responsiveness)
Session Storage (for authentication)
WeatherStack API (for real-time weather)
Geolocation API (for auto-location detection)


🤝 Contribution and feedback
Want to improve this project? Feel free to contribute!

Fork the repository.
Create a new branch (feature-branch).
Commit your changes.
Create a pull request.
📜 License
This project is open-source and free to use.

🚀 Enjoy Managing Your Tasks Efficiently!
Let me know if you need any modifications! 😊



created by- Yash Auti 







