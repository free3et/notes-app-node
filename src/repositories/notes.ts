import { Note } from "../helpers/validation";

let notes: Note[] = [
  {
    id: 1,
    name: "Shopping list",
    timeOfCreation: "2023-07-25T12:00:00Z",
    category: "Task",
    noteContent: "Tomatoes, bread",
    archived: false,
  },
  {
    id: 2,
    name: "The theory of evolution",
    timeOfCreation: "2023-07-21T12:00:00Z",
    category: "Random Thought",
    noteContent:
      "In biology, evolution is the change in the characteristics of a species over several generations and relies on the process of natural selection.",
    archived: false,
  },
  {
    id: 3,
    name: "New Feauture",
    timeOfCreation: "2023-07-14T12:00:00Z",
    category: "Idea",
    noteContent: "Implement new feautures to my application",
    archived: false,
  },
  {
    id: 4,
    name: "William Gaddis",
    timeOfCreation: "2023-06-25T12:00:00Z",
    category: "Quote",
    noteContent: "Power does not corrupt people; people corrupt power.",
    archived: true,
  },
  {
    id: 5,
    name: "Tattoo",
    timeOfCreation: "2023-06-15T12:00:00Z",
    category: "Task",
    noteContent:
      "I am going to make an appointment with a tattoo artist on 4/06/2023, I postponed it from 5/06/2023",
    archived: false,
  },
  {
    id: 6,
    name: "Books",
    timeOfCreation: "2023-05-28T12:00:00Z",
    category: "Task",
    noteContent: "Read David Flanagan 'JavaScript: The Definitive Guide'",
    archived: false,
  },
  {
    id: 7,
    name: "Dantist",
    timeOfCreation: "2023-07-25T12:00:00Z",
    category: "Task",
    noteContent:
      "I am gonna have a dentist appointment on the 3/05/2023, I moved it from 5/05/2023",
    archived: false,
  },
];

export const notesService = {
  getAll: () => notes,
  getArchivedNotes: () => notes.filter((note) => note.archived),
  findNoteById: (id: number) => notes.find((note) => note.id === id),
  create: (note: Note) => {
    const newId = Date.now();
    const newNote = { ...note, id: newId };
    notes.push(newNote);
    return newNote;
  },
  update: (id: number, updatedNote: Note) => {
    const index = notes.findIndex((note) => note.id === id);
    if (index === -1) return null;

    const updatedItem = { ...notes[index], ...updatedNote };
    notes[index] = updatedItem;
    return updatedItem;
  },
  remove: (id: number) => {
    notes = notes.filter((note) => note.id !== id);
  },
};
