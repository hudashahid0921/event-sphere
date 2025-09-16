import Schedule from "../models/Schedule.js";

export const getSchedule = async (req, res) => {
  try {
    const sessions = await Schedule.find().sort({ time: 1 });
    res.json(sessions);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

export const createSession = async (req, res) => {
  try {
    const s = await Schedule.create(req.body);
    res.json(s);
  } catch (err) { res.status(500).json({ message: err.message }); }
};
