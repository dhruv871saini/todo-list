import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import TodoList from "./pages/TodoList";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? "dark" : ""} bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <nav className="p-4 flex justify-between bg-gray-800 dark:bg-gray-700 text-white">
          <h1 className="text-lg">Task Manager</h1>
          <Toaster />
          <button
            onClick={toggleTheme}
            className="bg-gray-600 dark:bg-gray-500 px-3 py-1 rounded hover:bg-gray-700 dark:hover:bg-gray-400 transition"
          >
            {darkMode ? "Light Mode ☀" : "Dark Mode 🌙"}
          </button>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tasks" element={<ProtectedRoute component={TodoList} />} />
        </Routes>
      </div>
    </Router>
  );
};

const ProtectedRoute = ({ component: Component }) => {
  return localStorage.getItem("token") ? <Component /> : <Navigate to="/login" />;
};

export default App;
