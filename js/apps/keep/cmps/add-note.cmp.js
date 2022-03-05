export default {
  template: `
        <section class="add-note">  
          <div class="add-input-cont" >
             <label class="new-note-lable" for="new">New note</label>
             <input @keyup.enter="addNote" id="new" v-model="note.content" :placeholder="getPlaceholder">
          </div>
          <div class="add-btns-cont" >
            <span class="type" :class="{ selected: isSelecedType.text }"  @click="setType(txt)" >txt</span>
            <span class="type" :class="{ selected: isSelecedType.image }" @click="setTypeImg" >img</span>
            <span class="type" :class="{ selected: isSelecedType.list }"  @click="setTypeList" >list</span>
            <span @click="addNote" class="add-btn" >Add</span>
          </div>
        </section>
        `,
  data() {
    return {
      note: {
        type: "text",
        content: "",
        style: {
          backgroundColor: "rgb(89, 186, 216)",
        },
      },
      isSelecedType: {
        text: true,
        image: false,
        list: false,
      },
    };
  },
  created() {},
  components: {},
  methods: {
    setType(val) {},

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
    addNote() {
      if (!this.note.content.trim()) return;
      if (this.note.type === "list") {
        this.note.content = this.note.content.split(",");
      }
      this.$emit("addNote", { ...this.note });
      this.setTypeTxt();
      this.note.content = "";
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
