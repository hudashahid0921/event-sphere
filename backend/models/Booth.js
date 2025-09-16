import mongoose from "mongoose";

const boothSchema = new mongoose.Schema({
  label: { type: String, required: true },
  reserved: { type: Boolean, default: false },
  reservedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Exhibitor" }
}, { timestamps: true });

export default mongoose.model("Booth", boothSchema);
