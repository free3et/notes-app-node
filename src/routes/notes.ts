import express from "express";
import {
  createNote,
  deleteNote,
  editNote,
  getAllNotes,
  getNote,
  getStats,
} from "../services/notes";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNote);
router.post("/", createNote);
router.delete("/:id", deleteNote);
router.patch("/:id", editNote);

export default router;
