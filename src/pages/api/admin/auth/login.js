const admin = require("../../../../models/admin");
const connectDB = require("../../../../utils/mongodbconnection");
import jwt from "jsonwebtoken";
export default async function handler(req, res) {
  await connectDB();
  if (req.method === "POST") {
    const { email, password } = req.body;

    const admins = await admin.findOne({ email });
    if (!admins) {
      return res.status(400).json({
        message: "Admin not found",
      });
    }

    if (admins.password !== password) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }
    const token = jwt.sign({ admin: admins._id }, "sdcskcsjcnsjan", {
      expiresIn: "1h",
    });
    res.status(200).json({
      message: "Admin logged in successfully",
      token: token,
    });
  }
  if (req.method === "GET") {
    const admins = await admin.find({});
    res.status(200).json({
      admins,
    });
  }
}
