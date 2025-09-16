import Exhibitor from "../models/Exhibitor.js";

export const getExhibitors = async (req, res) => {
  try {
    const exhibitors = await Exhibitor.find().sort({ createdAt: -1 });
    res.json(exhibitors);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

export const getExhibitorById = async (req, res) => {
  try {
    const exhibitor = await Exhibitor.findById(req.params.id);
    if (!exhibitor) return res.status(404).json({ message: "Not found" });
    res.json(exhibitor);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

export const createExhibitor = async (req, res) => {
  try {
    const data = { ...req.body, createdBy: req.user._id };
    const exhibitor = await Exhibitor.create(data);
    res.json(exhibitor);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

export const updateExhibitor = async (req, res) => {
  try {
    const exhibitor = await Exhibitor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(exhibitor);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

export const deleteExhibitor = async (req, res) => {
  try {
    await Exhibitor.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) { res.status(500).json({ message: err.message }); }
};
