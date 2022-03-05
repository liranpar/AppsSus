export default {
  template: `
    <section class="book-filter">
       <input @input="setFilter" v-model="filterBy.name" type="text" placeholder="Search...">
       <input @input="setFilter" type="range" min="0" max="200" step="1" v-model="filterBy.price">
       <span>max price: {{ filterBy.price }}</span>
    </section>
    `,
  data() {
    return {
      filterBy: {
        name: "",
        price: 200,
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
