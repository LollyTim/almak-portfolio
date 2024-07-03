import mongoose from "mongoose";
import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";
import authMiddleware from "../../../lib/authMiddleware";
import Experience from "../../../models/Experience";
import connectDB from "../../../lib/connectDB";

const cors = initMiddleware(
  Cors({
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

const handler = async (req, res) => {
  await cors(req, res);
  await connectDB();

  switch (req.method) {
    case "GET":
      try {
        const experience = await Experience.find().sort({ createdAt: -1 });
        res.json(experience);
      } catch (err) {
        res.status(500).send("Server Error");
      }
      break;

    case "POST":
      await authMiddleware(req, res);
      const { jobTitle, company, startYear, endYear, description } = req.body;
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      try {
        const newExperience = new Experience({
          jobTitle,
          company,
          startYear,
          endYear,
          description,
        });
        const savedExperience = await newExperience.save();
        res.json(savedExperience);
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
      break;

    case "PUT":
      await authMiddleware(req, res);
      const { id } = req.query;
      const update = req.body;
      try {
        const experience = await Experience.findById(id);
        if (!experience) {
          return res.status(404).json({ message: "Experience not found" });
        }
        const updatedExperience = await Experience.findByIdAndUpdate(
          id,
          update,
          { new: true }
        );
        res.json(updatedExperience);
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
      break;

    case "DELETE":
      await authMiddleware(req, res);
      try {
        const { id } = req.query;
        const deletedExperience = await Experience.findByIdAndDelete(id);
        if (!deletedExperience) {
          return res.status(404).json({ message: "Experience not found" });
        }
        res.json({ message: "Experience deleted" });
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
};

export default handler;
