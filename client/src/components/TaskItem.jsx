import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const TaskItem = ({ task, fetchTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [dueDate, setDueDate] = useState(task.dueDate ? task.dueDate.split("T")[0] : ""); 

  const handleToggleComplete = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/tasks/${task._id}`,
        { completed: !task.completed },
        { headers: { "x-auth-token": localStorage.getItem("token") } }
      );
      toast.success(task.completed ? "Task marked as pending" : "Task completed!");
      fetchTasks();
    } catch (error) {
      toast.error(error.response?.data?.message || " Something went wrong!");
    }
  };

  const handleDeleteTask = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${task._id}`, {
        headers: { "x-auth-token": localStorage.getItem("token") },
      });
      toast.success(" Task deleted successfully!");
      fetchTasks();
    } catch (error) {
      toast.error(error.response?.data?.message || " Something went wrong!");
    }
  };

  const handleEditTask = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/tasks/${task._id}`,
        { title: newTitle, dueDate },
        { headers: { "x-auth-token": localStorage.getItem("token") } }
      );
      setIsEditing(false);
      toast.success(" Task updated!");
      fetchTasks();
    } catch (error) {
      toast.error(error.response?.data?.message || " Something went wrong!");
    }
  };

  return (
    <li className="flex justify-between items-center p-3 border rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white mb-2 transition">
      {isEditing ? (
        <div className="flex flex-col sm:flex-row gap-2 w-full">
          <input
            type="text"
            className="p-2 border rounded w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            type="date"
            className="p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <button className="text-blue-500 dark:text-blue-300" onClick={handleEditTask}>
            Save
          </button>
        </div>
      ) : (
        <div className="w-full flex justify-between items-center">
          <div>
            <span className={task.completed ? "line-through text-gray-500 dark:text-gray-400" : ""}>{task.title}</span>
            {task.dueDate && <p className="text-sm text-gray-600 dark:text-gray-400">Due: {dueDate}</p>}
          </div>

          <div className="flex space-x-2">
            <button className="text-yellow-600 dark:text-yellow-400" onClick={handleToggleComplete}>
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button className="text-blue-500 dark:text-blue-300" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="text-red-500 dark:text-red-400" onClick={handleDeleteTask}>
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TaskItem;