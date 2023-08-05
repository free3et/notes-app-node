import { Request, Response } from "express";
import { formatDate } from "../helpers/formatDate";
import { validateNote, Note } from "../helpers/validation";
import { notesService } from "../repositories/notes";

type Stats = {
  [category: string]: {
    active: number;
    archived: number;
  };
};

export const createNote = (req: Request, res: Response) => {
  try {
    const note: Note = req.body;
    const validationError = validateNote(note);
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    const createdNote = notesService.create(note);
    return res.status(201).json(createdNote);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteNote = (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    notesService.remove(id);
    return res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const editNote = (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const updatedNote: Note = req.body;
    const validationError = validateNote(updatedNote);
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    const editedNote = notesService.update(id, updatedNote);
    if (!editedNote) {
      return res.status(404).json({ error: "Note not found" });
    }

    return res.status(200).json(editedNote);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getNote = (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const note = notesService.findNoteById(id);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }

    const formattedDate = formatDate(note.timeOfCreation);
    const formattedNote = { ...note, timeOfCreation: formattedDate };

    return res.status(200).json(formattedNote);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllNotes = (_req: Request, res: Response) => {
  try {
    const allNotes = notesService.getAll().map((note) => ({
      ...note,
      timeOfCreation: formatDate(note.timeOfCreation),
    }));
    return res.status(200).json(allNotes);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getStats = (_req: Request, res: Response) => {
  try {
    console.log("Calculating statistics...");
    const activeNotes = notesService.getAll();
    console.log("Active Notes:", activeNotes);
    const archivedNotes = notesService.getArchivedNotes();
    console.log("Archived Notes:", archivedNotes);
    const categories = ["Task", "Random Thought", "Idea", "Quote"];
    const stats: Stats = categories.reduce((acc: Stats, category: string) => {
      acc[category] = {
        active: activeNotes.filter((note) => note.category === category).length,
        archived: archivedNotes.filter((note) => note.category === category)
          .length,
      };
      return acc;
    }, {});

    console.log("Statistics:", stats);

    return res.status(200).json(stats);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
