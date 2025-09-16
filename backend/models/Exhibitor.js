import mongoose from "mongoose";

const exhibitorSchema = new mongoose.Schema({
  company: { type: String, required: true },
  category: { type: String },
  booth: { type: String },
  description: { type: String },
  contact: { type: String },
  logo: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

export default mongoose.model("Exhibitor", exhibitorSchema);
