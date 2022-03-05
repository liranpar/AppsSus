import googleBook from "../cmps/google-book.cmp.js";
import { bookService } from "../services/book-service.js";

export default {
  template: `
  <section class="app-main" >
      <router-link class="add-book" to="/book" >Back</router-link>
       <div>HELLO</div>
       <input type="text" @input="filterBooks" v-model="filter" placeholder="search new book" >
       <ul v-if="googleBooksData" >
          <li v-for="book in googleBooksData">
              <google-book @addBook="addBook" :book="book" />
          </li>
       </ul>
  </section>
    <!-- <book-details :currBook="getCurrBook()" /> -->

    `,
  data() {
    return {
      googleBooksData: null,
      filter: "",
      books: null,
    };
  },
  components: {
    googleBook,
  },
  methods: {
    addBook(book) {
      bookService.addGoogleBook(book);
    },
    filterBooks() {
      if (this.filter === "") return;
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?printType=books&q=${this.filter}`
        )
        .then((res) => {
          this.googleBooksData = res.data.items;
          console.log(this.googleBooksData);
        });
    },
  },
  computed: {
    displayBooks() {
      console.log(this.filter);
    },
    booksForDisplay() {
      //   if (!filter) return;
      //   const regex = new RegExp(filter, "i");
      //   return this.googleBooksData.filter((book) => regex.test(book.title));
      return this.googleBooksData;
    },
  },
};
