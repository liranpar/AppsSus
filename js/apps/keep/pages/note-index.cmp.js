// import { bookService } from "../services/book-service.js";
// import bookList from "../cmps/book-list.cmp.js";
// import bookFilter from "../cmps/book-filter.cmp.js";
// import { eventBus } from "../services/eventBus-service.js";
import noteFilter from "../cmps/note-filter.cmp.js";

export default {
  template: `
  <section class="app-main">  
      <!-- *Add note-filter component -->
      <note-filter  @filtered="setFilter" />
      <!-- *add note-list component -->
  </section>
  
  `,

  components: {
    noteFilter,
    noteList,
  },

  data() {
    return {
      books: null,
      filterBy: null,
      selectedBook: null,
    };
  },
  created() {
    bookService.query().then((books) => (this.books = books));
  },
  methods: {
    removeBook(bookid) {
      bookService.remove(bookid).then();
      var idx = this.books.findIndex((book) => book.id === bookid);
      this.books.splice(idx, 1);
      eventBus.emit("show-msg", "Book removed!");
    },
    bookSelected(bookId) {
      this.selectedBook = this.books.find((book) => book.id === bookId);
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    closeDetails() {
      this.selectedBook = null;
      this.filterBy = null;
    },
  },
  computed: {
    booksForDisplay() {
      if (!this.filterBy) return this.books;
      const regex = new RegExp(this.filterBy.name, "i");
      return this.books.filter(
        (book) =>
          regex.test(book.title) && book.listPrice.amount <= this.filterBy.price
      );
    },
  },
};
