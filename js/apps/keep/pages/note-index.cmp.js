import { noteService } from "../services/note.service.cmp.js";
import { eventBus } from "../../../services/eventBus-service.js";

import noteFilter from "../cmps/note-filter.cmp.js";
import addNote from "../cmps/add-note.cmp.js";
import noteList from "../cmps/note-list.cmp.js";

export default {
  template: `
  <section>  
      <note-filter  @filtered="setFilter" />
      <add-note @addNote="addNote" />
      <note-list :notes="notesForDisplay" @removeListItem="removeListItem" @addItemToList="addItemToList" @onRemoveNote="removeNote" @onPinNote="pinNote" @setColor="setColor" />
  </section>
  
  `,

  components: {
    noteFilter,
    noteList,
    addNote,
  },

  data() {
    return {
      notes: null,
      filterBy: null,
    };
  },
  created() {
    noteService.query().then((notes) => {
      this.notes = notes;
      console.log(this.notes);
    });
  },
  methods: {
    setColor(data) {
      let noteId = data[0];
      let color = data[1];
      let noteIdx = this.notes.findIndex((note) => note.id === noteId);
      this.notes[noteIdx].style.backgroundColor = color;
      noteService.save(this.notes[noteIdx]).then();
    },
    pinNote(noteId) {
      let noteIdx = this.notes.findIndex((note) => note.id === noteId);
      let noteCopy = { ...this.notes[noteIdx] };
      this.notes.splice(noteIdx, 1);
      this.notes.unshift(noteCopy);
      noteService.pinNote(noteId, noteCopy).then((res) => {
        eventBus.emit("show-msg", "Note pinned");
      });
    },
    removeNote(noteId) {
      let noteIdx = this.notes.findIndex((note) => note.id === noteId);
      noteService.remove(noteId).then((res) => {
        eventBus.emit("show-msg", "Note removed");
      });
      this.notes.splice(noteIdx, 1);
      console.log(noteIdx);
    },

    addItemToList(data) {
      let itemVal = data[0];
      let noteId = data[1];
      let noteIdx = this.notes.findIndex((note) => note.id === noteId);
      this.notes[noteIdx].content.unshift(itemVal);
      noteService.save(this.notes[noteIdx]).then((res) => {
        eventBus.emit("show-msg", "Item added to list");
      });
    },
    removeListItem(data) {
      let idx = data[0];
      let noteId = data[1];
      let noteIdx = this.notes.findIndex((note) => note.id === noteId);
      this.notes[noteIdx].content.splice(idx, 1);
      noteService.save(this.notes[noteIdx]).then((res) => {
        eventBus.emit("show-msg", "Item removed from list");
      });
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    addNote(note) {
      this.notes.unshift(note);
      noteService.addNewNote(note).then((res) => {
        eventBus.emit("show-msg", "Note added");
      });
    },
  },
  computed: {
    notesForDisplay() {
      if (!this.filterBy) return this.notes;
      const regex = new RegExp(this.filterBy.text, "i");
      console.log(this.filterBy);
      return this.notes.filter((note) => {
        if (note.type === "list") {
          let listText = note.content.join(" ");
          return (
            regex.test(listText) &&
            (!this.filterBy.type ? true : note.type === this.filterBy.type)
          );
        }
        return (
          regex.test(note.content) &&
          (!this.filterBy.type ? true : note.type === this.filterBy.type)
        );
      });
    },
  },

  //   methods: {
  //     removeNote(noteId) {
  //       noteService.remove(noteId).then();
  //       var idx = this.notes.findIndex((note) => note.id === noteId);
  //       this.notes.splice(idx, 1);
  //       eventBus.emit("show-msg", "Note removed!");
  //     },

  //     setFilter(filterBy) {
  //       this.filterBy = filterBy;
  //     },
  //     closeDetails() {
  //       this.selectedNote = null;
  //       this.filterBy = null;
  //     },
  //   },
  //   computed: {
  //     notesForDisplay() {
  //       if (!this.filterBy) return this.notes;
  //       const regex = new RegExp(this.filterBy.name, "i");
  //       return this.notes.filter(
  //         (notes) =>
  //           regex.test(note.info.content) && note.type.amount === this.filterBy.type
  //       );
  //     },
  //   },
};
