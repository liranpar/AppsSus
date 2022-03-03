export default {
  template: `
      <section class="note-filter">  
         <span class="filter-span" >Filter</span>
         <input @input="setFilter" v-model="filterBy.text" type="text" placeholder="Search...">
         <select @change="setFilter" v-model="filterBy.type">
             <option value="">All</option>
             <option value="text">Text</option>
             <option value="image">Image</option>
             <option value="list">List</option>
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
