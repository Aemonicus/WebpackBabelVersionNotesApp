
import uuidv4 from 'uuid/v4'
import moment from 'moment'

let notes = []

// Check for existing saved data from Local Storage
const loadNotes = () => {
  const notesJSON = localStorage.getItem("notes");

  try {
    return notesJSON ? JSON.parse(notesJSON) : []
  } catch (e) {
    return []
  }
};

// Save note to Local Storage
const saveNotes = () => {
  localStorage.setItem("notes", JSON.stringify(notes)); // setItem(arg1, arg2). arg1 = la clé dans la bdd locale. arg2 la data/objet que l'on transforme en string pour le stockage
  // Remove a note from the list
};

// Expose notes from module
const getNotes = () => notes

const createNote = () => {
  const id = uuidv4();
  const timestamp = moment().valueOf();
  notes.push({
    id,
    title: "",
    body: "",
    createdAt: timestamp,
    updatedAt: timestamp
  });
  saveNotes()
}

// Remove a note from the list
const removeNote = id => {
  const noteIndex = notes.findIndex(note => note.id === id);

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
    saveNotes()
  }
};

// Sort your notes by one of three ways
const sortNotes = (sortBy) => {
  if (sortBy === "byEdited") {
    return notes.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "byCreated") {
    return notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "alphabetical") {
    return notes.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return notes;
  }
};

const updateNotes = (id, updates) => {
  const note = notes.find((note) => note.id === id)

  if (!note) {
    return
  }

  if (typeof updates.title === 'string') {
    note.title = updates.title
    note.updatedAt = moment().valueOf()
  }

  if (typeof updates.body === 'string') {
    note.body = updates.body
    note.updatedAt = moment().valueOf()
  }

  saveNotes()
  return note
}

notes = loadNotes()

export { getNotes, createNote, removeNote, sortNotes, updateNotes }