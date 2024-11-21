const mongoose = require("mongoose");
const Project = new mongoose.Schema({
  skills: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Skills",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  type: {
    enum: ["beginner", "intermediate", "advanced"],
    type: String,
    default: "beginner",
  },
  status: {
    enum: ["completed", "inprogress", "notstarted"],
    type: String,
    default: "notstarted",
  },
  link: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.models.Project || mongoose.model("Project", Project);
