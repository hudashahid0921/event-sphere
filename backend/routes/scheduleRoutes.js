import express from "express";
import { getSchedule, createSession } from "../controllers/scheduleController.js";
import protect from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/", getSchedule);
router.post("/", protect, createSession);

export default router;
