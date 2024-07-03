import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Portfolio ||
  mongoose.model("Portfolio", PortfolioSchema);
