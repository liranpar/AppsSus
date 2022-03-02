import { utilService } from "../../../services/util-service.js";
import { storageService } from "../../../services/async-storage-sevice.js";

const KEY = "notes";
_createNotes();

export const noteService = {
  query,
  remove,
  get,
};

function remove(noteId) {
  return storageService.remove(KEY, noteId);
}

function get(noteId) {
  return storageService.get(KEY, noteId).then((note) => note);
}

function query() {
  return storageService.query(KEY);
}

function _createNotes() {
  let notes = utilService.loadFromStorage(KEY);
  if (!notes || !notes.length) {
    notes = [
      {
        id: "fdSg54HJ",
        info: {
          type: "text",
          content: "my first note!",
        },
        color: "yellow",
      },
      {
        id: "fdSg55HJ",
        info: {
          type: "text",
          content: "nice noteeee",
        },
        color: "aqua",
      },
      {
        id: "fdSg62HJ",
        info: {
          type: "text",
          content: "HELLO",
        },
        color: "lightsalmon",
      },
      {
        id: "fdSg34HJ",
        info: {
          type: "text",
          content: "mission: Go to Oscar Wild",
        },
        color: "lightsalmon",
      },
      {
        id: "fdSg94HJ",
        info: {
          type: "text",
          content:
            "LIDORRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRR RRRRRRRRRRRRRR",
        },
        color: "lightsalmon",
      },
      {
        id: "fdSg58HJ",
        info: {
          type: "text",
          content: "x",
        },
        color: "lightsalmon",
      },
      {
        id: "fdSg44HJ",
        info: {
          type: "text",
          content: "HEY",
        },
        color: "green",
      },
    ];
  }
  utilService.saveToStorage(KEY, notes);
  console.log(notes);
  return notes;
}
