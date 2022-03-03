export default {
  props: ["note"],
  template: `
          <section>  
             <ul>
                 <li v-for="(item, idx) in note.content" >
                   <button class="delet-item" @click="removeListItem(idx)" >x</button>
                   {{item}}               
                 </li>
                 <button  v-if="!isAdding" @click="onAdd" >Add</button>
                 <div v-if="isAdding" >
                   <input type="text" v-model="addingVal" >
                   <button @click="addItem" >add</button><button @click="closeInput" >X</button>
                 </div>
             </ul>
          </section>
          `,
  data() {
    return {
      isAdding: false,
      addingVal: "",
    };
  },
  components: {},
  methods: {
    closeInput() {
      this.isAdding = false;
      this.addingVal = "";
    },
    addItem() {
      this.$emit("addItemToList", [this.addingVal, this.note.id]);
      this.isAdding = false;
      this.addingVal = "";
    },
    onAdd() {
      this.isAdding = true;
    },
    removeListItem(idx) {
      this.$emit("removeListItem", [idx, this.note.id]);
    },
  },
  computed: {},
};
