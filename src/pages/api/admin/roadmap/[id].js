const RoadMap = require("../../../../models/roadmap");
const dbConnect = require("../../../../utils/dbConnect");

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    const { id } = req.query;
    const roadmap = await RoadMap.findById(id);
    res.status(200).json({ roadmap });
  }

  if (req.method === "PUT") {
    const { id } = req.query;
    const data = req.body;
    const roadmap = await RoadMap.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.status(200).json({ roadmap });
  }
  if (req.method === "DELETE") {
    const { id } = req.query;
    const roadmap = await RoadMap.findByIdAndDelete(id);
    res.status(200).json({ roadmap });
  }
}
