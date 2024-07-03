import connectDB from "../../../libs/connectDB";
import Blog from "../../../models/Blog";
import authMiddleware from "../../../libs/authMiddleware";
import nextConnect from "next-connect";

const handler = nextConnect();

handler.use(authMiddleware);

handler.post(async (req, res) => {
  await connectDB();
  try {
    const { title, content } = req.body;

    const newBlog = new Blog({
      title,
      content,
      user: req.user.id,
    });

    await newBlog.save();

    res.status(201).json(newBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default handler;
