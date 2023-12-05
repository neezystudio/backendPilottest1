// routes.js
const express = require("express");
const router = express.Router();
const {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} = require("./controller");

// Get all items
router.get("/projects", getAllProjects);

// Get a single item by ID
router.get("/projects/:id", getProjectById);

// Create a new item
router.post("/projects", createProject);

// Update an item by ID
router.put("/projects/:id", updateProject);

// Delete an item by ID
router.delete("/projects/:id", deleteProject);

module.exports = router;
