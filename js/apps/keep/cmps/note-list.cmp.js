export default {
  props: ["notes"],
  template: `
  <section>
    <ul  class="notes-cont">
        <li class="note-card"  v-for="note in notes" :key="note.id">
               
               <p>{{note.info.content}}</p> 
               <div class="btns-cont" >
                     <span>A</span>
                     <span>color</span>
                     <span>pin</span>
                     <span>🗑</span>
               </div>
        </li>
   </ul>

  </section>


    `,
  data() {
    return {};
  },

  methods: {
    removeNote(noteId) {
      this.$emit("onRemove", noteId);
    },
    noteSelected(note) {
      this.$emit("onSelected", note.id);
    },
  },
  computed: {
    getNoteColor() {
      console.log("hello");
    },
  },
};
