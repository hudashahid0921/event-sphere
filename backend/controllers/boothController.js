import Booth from "../models/Booth.js";

export const getBooths = async (req, res) => {
  try {
    const booths = await Booth.find().sort({ label: 1 });
    res.json(booths);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

export const createBooth = async (req, res) => {
  try {
    const booth = await Booth.create(req.body);
    res.json(booth);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

export const reserveBooth = async (req, res) => {
  try {
    const booth = await Booth.findById(req.params.id);
    if (!booth) return res.status(404).json({ message: "Booth not found" });
    if (booth.reserved) return res.status(400).json({ message: "Already reserved" });
    booth.reserved = true;
    booth.reservedBy = req.body.exhibitorId || req.user._id;
    await booth.save();
    res.json(booth);
  } catch (err) { res.status(500).json({ message: err.message }); }
};
