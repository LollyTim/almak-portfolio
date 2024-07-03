import mongoose from "mongoose";
import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";
import authMiddleware from "../../../lib/authMiddleware";
import Education from "../../../models/Education";
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
        const education = await Education.find().sort({ createdAt: -1 });
        res.json(education);
      } catch (err) {
        res.status(500).send("Server Error");
      }
      break;

    case "POST":
      await authMiddleware(req, res);
      const { degree, institution, startYear, endYear, description } = req.body;
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      try {
        const newEducation = new Education({
          degree,
          institution,
          startYear,
          endYear,
          description,
        });
        const savedEducation = await newEducation.save();
        res.json(savedEducation);
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
        const education = await Education.findById(id);
        if (!education) {
          return res.status(404).json({ message: "Education not found" });
        }
        const updatedEducation = await Education.findByIdAndUpdate(id, update, {
          new: true,
        });
        res.json(updatedEducation);
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
      break;

    case "DELETE":
      await authMiddleware(req, res);
      try {
        const { id } = req.query;
        const deletedEducation = await Education.findByIdAndDelete(id);
        if (!deletedEducation) {
          return res.status(404).json({ message: "Education not found" });
        }
        res.json({ message: "Education deleted" });
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
