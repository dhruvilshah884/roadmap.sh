const Project = require("../../../../models/project");
const dbConnect = require("../../../../utils/dbConnect");

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    const { id } = req.query;
    const project = await Project.findById(id);
    res.status(200).json({ project });
  }
  if (req.method === "PUT") {
    const { id } = req.query;
    const data = req.body;
    const project = await Project.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.status(200).json({ project });
  }
  if (req.method === "DELETE") {
    const { id } = req.query;
    const project = await Project.findByIdAndDelete(id);
    res.status(200).json({ project });
  }
}
