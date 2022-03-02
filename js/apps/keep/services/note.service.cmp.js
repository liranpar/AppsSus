import { storageService } from "../../../services/async-storage-sevice.js";

const KEY = "notes";
_createNotes();

export const noteService = {
  query,
  remove,
  get,
  save,
  getEmptyNote,
  addNewNote,
};

function addNewNote(note) {
  return storageService.post(KEY, note);
}

function remove(noteId) {
  return storageService.remove(KEY, noteId);
}

function getEmptyNote() {
  return {
    type: "text",
    content: "",
    color: "rgb(89, 186, 216);",
  };
}

function get(noteId) {
  return storageService.get(KEY, noteId).then((note) => note);
}

function save(note) {
  return storageService.put(KEY, note);
}

function query() {
  return storageService.query(KEY).then((res) => res);
}

function _createNotes() {
  let notes = storageService.loadFromStorage(KEY);

  if (!notes || !notes.length) {
    notes = [
      {
        id: "fdSg54HJ",
        type: "text",
        content: "my first note!",

        color: "yellow",
      },
      {
        id: "fdSg55HJ",
        type: "text",
        content: "nice noteeee",

        color: "aqua",
      },
      {
        id: "fdSg62HJ",
        type: "list",
        content: ["hummus", "kotege", "ketshop", "milk"],

        color: "lightsalmon",
      },
      {
        id: "fdSg34HJ",
        type: "image",
        content:
          "https://forums-images.oneplus.net/attachments/117/117141-52a3d204ade09459d1180160cfe5df64.gif",
        color: "lightsalmon",
      },
      {
        id: "fdSg94HJ",
        type: "text",
        content:
          "LIDORRRRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRR RRRRRRRRRRRRRRRR RRRRRRRRRRRRRR",

        color: "lightsalmon",
      },
      {
        id: "fdSg58HJ",
        type: "list",
        content: ["make a nice App", "Drink beer", "Sleep 7 hours"],
        color: "lightsalmon",
      },
      // {
      //   id: "fdSg44HJ",
      //   info: {
      //     type: "text",
      //     content: "HEY",
      //   },
      //   color: "green",
      // },
    ];
    storageService.postMany(KEY, notes);
  }
  return notes;
}
