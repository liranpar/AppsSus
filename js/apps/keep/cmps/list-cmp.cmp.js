export default {
  props: ["note"],
  template: `
          <section>  
             <ul>
                 <li v-for="(item, idx) in note.content" >
                   <button @click="removeListItem(idx)" >x</button>
                   {{item}}               
                 </li>
                 <button @click="onAdd" >+</button>
                 <div v-if="isAdding" >
                   <input type="text" v-model="addingVal" >
                   <button @click="addItem" >add</button>
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
