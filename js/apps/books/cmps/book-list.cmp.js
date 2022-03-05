import bookPreview from "./book-preview.cmp.js";

export default {
  props: ["books"],
  template: `
  <section>
    <ul  class="books-cont">
        <li  v-for="book in books" :key="book.id" class="book-card">

               <book-preview :book="book" @selected="bookSelected" />
               <div class="btns-cont" >
                   <button @click="removeBook(book.id)">Remove</button>
                   <router-link :to="'/book/'+book.id" >Details</router-link>
               </div>
        </li>
   </ul>

  </section>
    <!-- <book-details :currBook="getCurrBook()" /> -->

    `,
  data() {
    return {};
  },
  components: {
    bookPreview,
  },
  methods: {
    removeBook(bookId) {
      this.$emit("onRemove", bookId);
    },
    bookSelected(book) {
      this.$emit("onSelected", book.id);
    },
  },
  computed: {
    priceForDisplay(bookId) {
      // console.log(bookId);
      return "hey";
    },
    getCurrBook() {
      console.log("hello");
    },
  },
};
