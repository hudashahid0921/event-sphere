import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
  title: String,
  time: String,
  location: String,
  description: String
}, { timestamps: true });

export default mongoose.model("Schedule", scheduleSchema);
