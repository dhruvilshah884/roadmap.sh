const Skills = require("../../../../models/skills");
const dbConnect = require("../../../../utils/dbConnect");

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    const { id } = req.query;
    const skill = await Skills.findById(id);
    res.status(200).json({ skill });
  }
  if (req.method === "PUT") {
    const { id } = req.query;
    const data = req.body;
    const skill = await Skills.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.status(200).json({ skill });
  }
  if (req.method === "DELETE") {
    const { id } = req.query;
    const skill = await Skills.findByIdAndDelete(id);
    res.status(200).json({ skill });
  }
}
