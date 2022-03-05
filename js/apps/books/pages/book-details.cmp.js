import { bookService } from "../services/book-service.js";
import { eventBus } from "../../../services/eventBus-service.js";
import bookReviews from "../cmps/book-reviews.cmp.js";

export default {
  template: `

<section v-if="currBook" class="book-details-cont app-main" >
  <div class="details-cont">
    <router-link to="/book" >Back</router-link>
    <h2 >{{ getNewOrVeteran }}</h2>
    <h1>{{ currBook.title }}</h1>
    <h2 >{{ getAuthors }}</h2>
    <h3>Published on {{currBook.publishedDate}}</h3>  
    <h2 class="cats" >{{ getCategories }}</h2>
    <h2 class="cats" >{{ getLength }}</h2>
    <p class="sub">{{currBook.subtitle}}</p>
    <p>Description: {{currBook.description}}</p>
    <p class="price" :class="getPriceClass" >{{ getPriceToDisplay }}</p>
    <img :src=getBookImage  />
    <router-link :to="'/book/'+currBook.prevBookId" >Prev</router-link>
    <router-link :to="'/book/'+currBook.nextBookId"  >Next</router-link>
    </div>
    <book-reviews @removeReview="removeReview" @addReview="addReview" :book="currBook" />

</section>

    `,
  data() {
    return {
      currBook: null,
    };
  },
  components: {
    bookReviews,
  },
  created() {
    // var bookId = this.$route.params.bookId;
    bookService.get(this.bookId).then((book) => {
      this.currBook = book;
      console.log(this.currBook);
    });
  },
  computed: {
    bookId() {
      return this.$route.params.bookId;
    },
    getAuthors(book) {
      return this.currBook.authors.join(", ");
    },
    getCategories(book) {
      return this.currBook.categories.join(", ");
    },
    getLength(book) {
      if (this.currBook.pageCount > 500) return "Long Reading";
      if (this.currBook.pageCount > 200) return "Decent Reading";
      if (this.currBook.pageCount < 100) return "Light Reading";
      return;
    },
    getNewOrVeteran(book) {
      if (2022 - this.currBook.publishedDate > 10) return "Vertan";
      if (2022 - this.currBook.publishedDate <= 1) return "New!";
    },
    getPriceToDisplay(book) {
      if (this.currBook.listPrice.currencyCode === "ILS")
        return "₪" + this.currBook.listPrice.amount;
      if (this.currBook.listPrice.currencyCode === "USD")
        return "$" + this.currBook.listPrice.amount;
    },
    getBookImage(book) {
      return this.currBook.thumbnail;
    },
    getPriceClass(book) {
      const shekelPrice =
        this.currBook.listPrice.currencyCode === "ILS"
          ? this.currBook.listPrice.currencyCode
          : this.currBook.listPrice.currencyCode * 3.5;
      return {
        red: shekelPrice > 150,
        green: shekelPrice < 20,
      };
    },
  },
  methods: {
    removeReview(idx) {
      this.currBook.reviews.splice(idx, 1);
      bookService.updateReviews(this.currBook).then((books) => {
        eventBus.emit("show-msg", "Review removed!");
      });
    },

    addReview(currReview) {
      this.currBook.reviews.unshift(currReview);
      bookService.updateReviews(this.currBook).then((books) => {
        eventBus.emit("show-msg", "Review added!");
      });
    },
    loadBook() {
      bookService.get(this.bookId).then((book) => {
        this.currBook = book;
      });
    },
  },

  watch: {
    bookId: {
      handler() {
        this.loadBook();
      },
      immediate: true,
    },
  },
};
