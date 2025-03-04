import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const TaskForm = ({ fetchTasks }) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      toast.error("Task title cannot be empty!");
      return;
    }
    try {
      await axios.post(
        "http://localhost:5000/api/tasks",
        { title, dueDate },
        { headers: { "x-auth-token": localStorage.getItem("token") } }
      );
      setTitle("");
      setDueDate(""); 
      toast.success(" Task added successfully!");
      fetchTasks();
    } catch (error) {
      toast.error(error.response?.data?.message || "❌ Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleAddTask} className="flex flex-col sm:flex-row gap-2">
      <input
        type="text"
        className="border p-2 w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        placeholder="Enter a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        className="border p-2 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button className="bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 transition">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
