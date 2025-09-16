import express from "express";
import { getBooths, createBooth, reserveBooth } from "../controllers/boothController.js";
import protect from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/", getBooths);
router.post("/", protect, createBooth);
router.post("/:id/reserve", protect, reserveBooth);

export default router;
