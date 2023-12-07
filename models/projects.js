const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  projectStatus: { type: Number, required: true },
  projectCost: { type: Number, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
