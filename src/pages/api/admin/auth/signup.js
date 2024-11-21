const admin = require("../../../../models/admin");
const connectDB = require("../../../../utils/mongodbconnection");
export default async function handler(req, res) {
  await connectDB();
  if (req.method === "POST") {
    const { name, email, password } = req.body;
    const newAdmin = new admin({
      name,
      email,
      password,
    });
    await newAdmin.save();
    res.status(200).json({
      message: "Admin created successfully",
    });
  }
  if (req.method === "GET") {
    const admins = await admin.find({});
    res.status(200).json({
      admins,
    });
  }
}
