import textCmp from "./text-cmp.cmp.js";
import imageCmp from "./image-cmp.cmp.js";
import listCmp from "./list-cmp.cmp.js";

export default {
  props: ["notes"],
  template: `
  <section>
    <ul  class="notes-cont">
        <div class="note-card"  v-for="note in notes" :key="note.id" :style="note.style">
               <component class="card-cmp" :is="note.type+'Cmp'" :note="note" @removeListItem="removeListItem" @addItemToList="addItemToList" ></component>
               <div class="btns-cont" >
                     <!-- <span>A</span> -->
                     <div class="fill-and-stroke-div">
                     <span id="change-stroke-color">🎨</span>
                        <input @input="setColor(note.id)" v-model="color"
                               class="fill-and-stroke-input stroke-color controller"
                               type="color"
                            
                        />
                        </div>
                        <span title="Pin" @click="onPinNote(note.id)" >📌</span>
                        <span class="remov-note-btn" title="Remove" @click="onRemoveNote(note.id)" >❌</span>
                 
               </div>

          
        </div>
   </ul>
  </section>
    `,

  data() {
    return {
      isColorClicked: false,
      color: "",
      filterBy: {
        text: "",
        type: "",
      },
    };
  },

  methods: {
    onPinNote(noteId) {
      this.$emit("onPinNote", noteId);
    },
    onRemoveNote(noteId) {
      this.$emit("onRemoveNote", noteId);
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
    setColor(noteId) {
      this.$emit("setColor", [noteId, this.color]);
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
