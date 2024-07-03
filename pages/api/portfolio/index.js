import mongoose from "mongoose";
import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";
import authMiddleware from "../../../lib/authMiddleware";
import Portfolio from "../../../models/Portfolio";
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
        const portfolio = await Portfolio.find().sort({ createdAt: -1 });
        res.json(portfolio);
      } catch (err) {
        res.status(500).send("Server Error");
      }
      break;

    case "POST":
      await authMiddleware(req, res);
      const { title, description, image, link } = req.body;
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      try {
        const newPortfolio = new Portfolio({
          title,
          description,
          image,
          link,
        });
        const savedPortfolio = await newPortfolio.save();
        res.json(savedPortfolio);
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
        const portfolio = await Portfolio.findById(id);
        if (!portfolio) {
          return res.status(404).json({ message: "Portfolio not found" });
        }
        const updatedPortfolio = await Portfolio.findByIdAndUpdate(id, update, {
          new: true,
        });
        res.json(updatedPortfolio);
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
      break;

    case "DELETE":
      await authMiddleware(req, res);
      try {
        const { id } = req.query;
        const deletedPortfolio = await Portfolio.findByIdAndDelete(id);
        if (!deletedPortfolio) {
          return res.status(404).json({ message: "Portfolio not found" });
        }
        res.json({ message: "Portfolio deleted" });
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
