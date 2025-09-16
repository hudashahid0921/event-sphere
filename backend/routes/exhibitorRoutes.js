import express from "express";
import {
  getExhibitors, createExhibitor, getExhibitorById, updateExhibitor, deleteExhibitor
} from "../controllers/exhibitorController.js";
import protect from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/", getExhibitors);
router.get("/:id", getExhibitorById);
router.post("/", protect, createExhibitor);
router.put("/:id", protect, updateExhibitor);
router.delete("/:id", protect, deleteExhibitor);

export default router;
