import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); // ✅ Task filter
  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, []);

  // ✅ Fetch tasks from API
  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/tasks", {
        headers: { "x-auth-token": localStorage.getItem("token") },
      });
      setTasks(res.data);
    } catch (error) {
      toast.error(error.response?.data?.message || "❌ Something went wrong!");
    }
  };

  // ✅ Logout and navigate to login page
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // ✅ Filter Tasks Based on Status
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="container mx-auto max-w-2xl p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">📌 My Tasks</h2>
        <button onClick={handleLogout} className="bg-red-500 dark:bg-red-700 px-4 py-2 rounded text-white">
          Logout
        </button>
      </div>

      {/* ✅ Task Filtering */}
      <div className="mb-4 flex justify-between">
        <TaskForm fetchTasks={fetchTasks} />
        <select
          className="p-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      {/* ✅ Standard Task List */}
      <ul className="space-y-3">
        {filteredTasks.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-300 text-center">No tasks found.</p>
        ) : (
          filteredTasks.map((task) => <TaskItem key={task._id} task={task} fetchTasks={fetchTasks} />)
        )}
      </ul>
    </div>
  );
};

export default TodoList;
