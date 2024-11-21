const mongoose = require("mongoose");

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return; // Already connected
  }

  try {
    await mongoose.connect(
      "mongodb+srv://dhruvilshah884:9662178694@cluster0.aeq9bm1.mongodb.net/roadmap_next?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
