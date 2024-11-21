const Skills = require("../../../../models/skills");
const dbConnect = require("../../../../utils/dbConnect");

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "POST") {
    const data = req.body;
    const skill = new Skills(data);
    await skill.save();
    res.status(200).json({ message: "Skill created successfully" });
  }
  if (req.method === "GET") {
    const skills = await Skills.find({});
    res.status(200).json({ skills });
  }
}
