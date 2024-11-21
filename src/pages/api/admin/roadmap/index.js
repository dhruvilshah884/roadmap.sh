const RoadMap = require("../../../../models/roadmap");
const dbConnect = require("../../../../utils/dbConnect");

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "POST") {
    const data = req.body;
    const roadmap = new RoadMap(data);
    await roadmap.save();
    res.status(200).json({ message: "Roadmap created successfully" });
  }
  if (req.method === "GET") {
    const roadmaps = await RoadMap.find({});
    res.status(200).json({ roadmaps });
  }
}
