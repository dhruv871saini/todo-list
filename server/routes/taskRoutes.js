import express from "express";
import Task from "../models/Task.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

//get all task
router.get('/tasks', authMiddleware, async (req, res) => {
    try {
      const status = req.query.status;
      let filter = { userId: req.user.id };
  
      if (status === "completed") filter.completed = true;
      if (status === "pending") filter.completed = false;
  
      const tasks = await Task.find({ userId: req.user.id }).sort({ createdAt: -1 });
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ message: " Error fetching tasks", error });
    }
  });

// Add a Task
router.post('/tasks', authMiddleware, async (req, res) => {
  try {
    const { title, dueDate } = req.body;
    if (!title) return res.status(400).json({ message: " Task title is required" });

    const newTask = new Task({ title, userId: req.user.id,dueDate });
    await newTask.save();
    res.json({ message: " Task added successfully!", task: newTask });
  } catch (error) {
    res.status(500).json({ message: " Error adding task", error });
  }
});

// Update Task Status
router.put('/tasks/:id', authMiddleware, async (req, res) => {
  try {
    const { title, completed,dueDate } = req.body;
    
    // Find the task
    let task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: " Task not found" });

    // Update fields only if provided
    if (title !== undefined) task.title = title;
    if (completed !== undefined) task.completed = completed;
    if(dueDate!==undefined) task.dueDate=dueDate;

    await task.save(); // Save the updated task

    res.json({ message: " Task updated successfully!", task });
  } catch (error) {
    res.status(500).json({ message: " Error updating task", error });
  }
});


// Delete a Task
router.delete('/tasks/:id', authMiddleware, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) return res.status(404).json({ message: " Task not found" });

    await task.deleteOne();
    res.json({ message: " Task deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: " Error deleting task", error });
  }
});

export default router;
