import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;

  mongoose.connect(process.env.CONNECTION_STRING);
};

export default connectDB;
