import { noteService } from "../services/note.service.cmp.js";

// import { eventBus } from "../services/eventBus-service.js";
import noteFilter from "../cmps/note-filter.cmp.js";
import noteList from "../cmps/note-list.cmp.js";

export default {
  template: `
  <section>  
      <note-filter  @filtered="setFilter" />
      <note-list :notes="notes" />
  </section>
  
  `,

  components: {
    noteFilter,
    noteList,
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
    setFilter(filterBy) {
      this.filterBy = filterBy;
      console.log(this.filterBy);
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
