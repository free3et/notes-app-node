import * as yup from "yup";

enum NoteCategory {
  Task = "Task",
  RandomThought = "Random Thought",
  Idea = "Idea",
  Quote = "Quote",
}

export interface Note {
  id: number;
  name: string;
  timeOfCreation: string;
  category: NoteCategory | string;
  noteContent: string;
  archived: boolean;
}

const noteSchema = yup.object().shape({
  name: yup.string().required(),
  timeOfCreation: yup.string().required(),
  category: yup
    .string()
    .oneOf(["Task", "Random Thought", "Idea", "Quote"])
    .required(),
  noteContent: yup.string().required(),
});

export const validateNote = (note: Note) => {
  try {
    noteSchema.validateSync(note, { abortEarly: false });
    return null;
  } catch (error) {
    const errorMessage = (error as Error).message;
    return errorMessage;
  }
};
