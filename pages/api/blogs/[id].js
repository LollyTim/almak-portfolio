import connectDB from "../../../libs/connectDB";
import Blog from "../../../models/Blog";
import authMiddleware from "../../../libs/authMiddleware";
import Cors from "cors";
import { runMiddleware } from "../../../libs/runMiddleware";

const cors = Cors({
  methods: ["GET", "PUT", "DELETE", "OPTIONS"],
});

const handler = async (req, res) => {
  await connectDB();
  await runMiddleware(req, res, cors);
  await runMiddleware(req, res, authMiddleware);

  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      try {
        const blog = await Blog.findById(id);
        if (!blog) {
          return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json(blog);
      } catch (err) {
        res.status(500).json({ message: "Server error" });
      }
      break;
    case "PUT":
      try {
        const { title, content } = req.body;
        const blog = await Blog.findById(id);
        if (!blog) {
          return res.status(404).json({ message: "Blog not found" });
        }

        if (title) blog.title = title;
        if (content) blog.content = content;

        await blog.save();
        res.status(200).json(blog);
      } catch (err) {
        res.status(500).json({ message: "Server error" });
      }
      break;
    case "DELETE":
      try {
        const blog = await Blog.findById(id);
        if (!blog) {
          return res.status(404).json({ message: "Blog not found" });
        }
        await blog.remove();
        res.status(200).json({ message: "Blog removed" });
      } catch (err) {
        res.status(500).json({ message: "Server error" });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
};

export default handler;
