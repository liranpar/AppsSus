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
  return storageService.query(KEY).then((res) => res);
}

function _createNotes() {
  let notes = storageService.query(KEY).then((res) => res);
  console.log(notes);
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
    storageService.postMany(KEY, notes);
  }
  return notes;
}
