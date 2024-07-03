import mongoose from "mongoose";
import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";
import authMiddleware from "../../../lib/authMiddleware";
import Service from "../../../models/Service";
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
        const services = await Service.find().sort({ createdAt: -1 });
        res.json(services);
      } catch (err) {
        res.status(500).send("Server Error");
      }
      break;

    case "POST":
      await authMiddleware(req, res);
      const { name, description } = req.body;
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      try {
        const newService = new Service({
          name,
          description,
        });
        const savedService = await newService.save();
        res.json(savedService);
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
        const service = await Service.findById(id);
        if (!service) {
          return res.status(404).json({ message: "Service not found" });
        }
        const updatedService = await Service.findByIdAndUpdate(id, update, {
          new: true,
        });
        res.json(updatedService);
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
      break;

    case "DELETE":
      await authMiddleware(req, res);
      try {
        const { id } = req.query;
        const deletedService = await Service.findByIdAndDelete(id);
        if (!deletedService) {
          return res.status(404).json({ message: "Service not found" });
        }
        res.json({ message: "Service deleted" });
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
