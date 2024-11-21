const Project = require("../../../../models/project");
const dbConnect = require("../../../../utils/dbConnect");

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "POST") {
    const data = req.body;
    const project = new Project(data);
    await project.save();
    res.status(200).json({ message: "Project created successfully" });
  }
  if (req.method === "GET") {
    const projects = await Project.find({});
    res.status(200).json({ projects });
  }
}
