export default {
  props: ["note"],
  template: `
          <section>  
             <ul>
                 <li v-for="(item, idx) in note.content" >
                   <span class="delete-item" @click="removeListItem(idx)" >x</span>
                   {{item}}               
                 </li>
                 <span  v-if="!isAdding"  class="list-btn" @click="onAdd" >Add to list</span>
                 <div v-if="isAdding" class="adding-item-to-list-cont"  >
                   <input type="text"  @keyup.enter="addItem" v-model="addingVal" ref="input">
                   <span class="list-btn"  @click="addItem" >add</span><span class="list-btn"  @click="closeInput" >X</span>
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
      if (!this.addingVal.trim()) return;
      this.$emit("addItemToList", [this.addingVal, this.note.id]);
      this.isAdding = false;
      this.addingVal = "";
    },
    onAdd() {
      this.isAdding = true;
      setTimeout(()=>{
        this.$refs.input.focus();
      }, 50)

    },
    removeListItem(idx) {
      this.$emit("removeListItem", [idx, this.note.id]);
    },
  },
  computed: {},
};
