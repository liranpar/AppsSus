import { noteService } from "../services/note.service.cmp.js";
import noteFilter from "../cmps/note-filter.cmp.js";
import addNote from "../cmps/add-note.cmp.js";
import noteList from "../cmps/note-list.cmp.js";

export default {
  template: `
  <section>  
      <note-filter  @filtered="setFilter" />
      <add-note @addNote="addNote" />
      <note-list :notes="notes" @removeListItem="removeListItem" @addItemToList="addItemToList" />
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
    addItemToList(data) {
      let itemVal = data[0];
      let noteId = data[1];
      let noteIdx = this.notes.findIndex((note) => note.id === noteId);
      this.notes[noteIdx].content.unshift(itemVal);
      noteService.save(this.notes[noteIdx]).then((res) => {
        console.log("item added");
      });
    },
    removeListItem(data) {
      let idx = data[0];
      let noteId = data[1];
      let noteIdx = this.notes.findIndex((note) => note.id === noteId);
      this.notes[noteIdx].content.splice(idx, 1);
      noteService.save(this.notes[noteIdx]).then((res) => {
        console.log("item removed");
      });
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    addNote(note) {
      this.notes.unshift(note);
      noteService.addNewNote(note).then((res) => {
        console.log("note added");
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
