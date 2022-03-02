export default {
  template: `
        <section class="add-note">  
            <label for="new">Add new note</label>
           <input id="new" v-model="note.content" :placeholder="getPlaceholder">
           <span class="type" :class="{ selected: isSelecedType.text }"  @click="setTypeTxt" >txt</span>
           <span class="type" :class="{ selected: isSelecedType.image }" @click="setTypeImg" >img</span>
           <span class="type" :class="{ selected: isSelecedType.list }"  @click="setTypeList" >list</span>
           <span @click="addNote" class="add-btn" >Add</span>
        </section>
        `,
  data() {
    return {
      note: {
        type: "text",
        content: "",
      },
      isSelecedType: {
        text: true,
        image: false,
        list: false,
      },
    };
  },
  components: {},
  methods: {
    setTypeImg() {
      this.note.type = "image";
      this.isSelecedType = {
        text: false,
        image: true,
        list: false,
      };
    },
    setTypeTxt() {
      this.note.type = "text";
      this.isSelecedType = {
        text: true,
        image: false,
        list: false,
      };
    },
    setTypeList() {
      this.note.type = "list";
      this.isSelecedType = {
        text: false,
        image: false,
        list: true,
      };
    },
    setFilter() {
      this.$emit("filtered", { ...this.filterBy });
    },
    addNote() {
      this.$emit("addNote", this.note);
    },
  },
  computed: {
    getPlaceholder() {
      switch (this.note.type) {
        case "text": {
          return "Type text here..";
          break;
        }
        case "image": {
          return "Type image URL";
          break;
        }
        case "list": {
          return "Type comma seperated list";
          break;
        }
      }
    },
  },
};
