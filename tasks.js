const express = require("express");
const Task = require("../models/Task");
const auth = require("../middleware/auth");

const router = express.Router();

// Create Task (admin only)
router.post("/", auth, async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    const { title, projectId } = req.body;

    const task = new Task({
      title,
      projectId,
      assignedTo: req.user.id
    });

    await task.save();

    res.json(task);

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get Tasks
router.get("/", auth, async (req, res) => {
  const tasks = await Task.find().populate("assignedTo");
  res.json(tasks);
});

// Update Task
router.put("/:id", auth, async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );

  res.json(task);
});

module.exports = router;