import textCmp from "./text-cmp.cmp.js";
import imageCmp from "./image-cmp.cmp.js";
import listCmp from "./list-cmp.cmp.js";

export default {
  props: ["notes"],
  template: `
  <section>
    <ul  class="notes-cont">
        <div class="note-card"  v-for="note in notes" :key="note.id">
               <component class="card-cmp" :is="note.type+'Cmp'" :note="note" @removeListItem="removeListItem" @addItemToList="addItemToList" ></component>
             
               <div class="btns-cont" >
                     <span>A</span>
                     <span>color</span>
                     <span>📌</span>
                     <font-awesome-icon icon="fa-solid fa-thumbtack" />
                     <span>🗑</span>
               </div>
        </div>
   </ul>
  </section>
    `,
  // notes = [
  //   {
  //     id: "fdSg54HJ",
  //     info: {
  //       type: "text",
  //       content: "my first note!",
  //     },
  //     color: "yellow",
  //   },
  //   {
  //     id: "fdSg55HJ",
  //     info: {
  //       type: "text",
  //       content: "nice noteeee",
  //     },
  //     color: "aqua",
  //   },
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
    removeListItem(data) {
      this.$emit("removeListItem", data);
    },
    addItemToList(data) {
      this.$emit("addItemToList", data);
    },
  },
  computed: {
    getNoteColor() {
      console.log("hello");
    },
  },
  components: {
    textCmp,
    imageCmp,
    listCmp,
  },
};
