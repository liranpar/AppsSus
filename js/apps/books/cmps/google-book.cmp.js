export default {
  props: ["book"],
  template: `
    <section >
        <p>{{book.volumeInfo.title}}</p>
        <button @click="addBook(book)">Add</button>
    </section>
      <!-- <book-details :currBook="getCurrBook()" /> -->
  
      `,
  data() {
    return {};
  },
  //   created() {
  //     console.log(filteredBooks);
  //   },
  methods: {
    addBook(book) {
      this.$emit("addBook", book);
    },
  },
  computed: {
    booksForDisplay() {
      //   if (!this.filterBy) return this.books;
      //   const regex = new RegExp(this.filterBy.name, "i");
      //   return this.books.filter(
      //     (book) =>
      //       regex.test(book.title) && book.listPrice.amount <= this.filterBy.price
      //   );
    },
  },
};
