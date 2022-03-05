import bookDetails from "../pages/book-details.cmp.js";

export default {
  props: ["book"],
  template: `
    <section class="books-preview">
        <h3>{{book.title}}</h3>
        <img :src=getBookImageUrl  />
        <p>{{getFormatedPrice}}</p>
    </section>
    <!-- <book-details @closeDetails="closeDetails" :currBook="book" :formatPrice="getFormatedPrice" /> -->
    `,
  data() {
    return {
      //   selectedBook: undefined,
      //   isSelected: false,
    };
  },
  components: {
    bookDetails,
  },
  methods: {
    onSelectBook(book) {
      this.$emit("selected", this.book);
    },
  },
  computed: {
    getFormatedPrice(book) {
      if (this.book.listPrice.currencyCode === "ILS")
        return "₪" + this.book.listPrice.amount;
      if (this.book.listPrice.currencyCode === "USD")
        return "$" + this.book.listPrice.amount;
    },
    getBookImageUrl(book) {
      return this.book.thumbnail;
    },
  },
};
