export default {
  template: `
      <section class="note-filter">  
         <i class="fa-solid fa-filter"></i>
         <input @input="setFilter" v-model="filterBy.text" type="text" placeholder="Search...">
         <select @change="setFilter" v-model="filterBy.type">
             <option value="">All</option>
             <option value="text">Text</option>
             <option value="image">Image</option>
         </select>
      </section>
      `,
  data() {
    return {
      filterBy: {
        text: "",
        type: "",
      },
    };
  },
  components: {},
  methods: {
    setFilter() {
      this.$emit("filtered", { ...this.filterBy });
    },
  },
  computed: {},
};
