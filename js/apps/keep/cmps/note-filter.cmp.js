export default {
  template: `
      <section>
         <input @input="setFilter" v-model="filterBy.text" type="text" placeholder="Search...">
         <select @input="setFilter" v-model="filterBy.type">
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
