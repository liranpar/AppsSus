import { utilService } from ".../services/util-service.js";
import { storageService } from ".../services/async-storage-sevice.js";

const KEY = "notes";
// _createNotes();

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
    books = [
      {
        id: "fdSg54HJ",
        info: {
          type: "text",
        },
      },
    ];
  }
  utilService.saveToStorage(KEY, books);
  console.log(books);
  return books;
}
