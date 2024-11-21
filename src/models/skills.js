const mongoose = require("mongoose");
const Skills = new mongoose.Schema({
  roadmap: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RoadMap",
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
  whatToLearn: {
    type: [String],
    required: true,
  },
  howToLearn: {
    type: [String],
    required: true,
  },
  socials: {
    type: [String],
    required: true,
  },
  timeTaken: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  practice: {
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
module.exports = mongoose.models.Skills || mongoose.model("Skills", Skills);
