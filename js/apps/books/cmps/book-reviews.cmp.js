import { eventBus } from "../../../services/eventBus-service.js";

export default {
  props: ["book"],
  template: `
<section class="reviews-cont">
      <div v-for="(review, idx) in book.reviews" :key="review.content" class="book-rev">
      <p>Review by <span> {{review.readerName }}</span></p><button @click="removeReview(review, idx)" >X</button>
      <p>Date: {{review.readDate}}</p>
      <p>Rate: {{getStars(review.rate)}}</p>

      <p>"{{review.content}}"</p>
      </div>
      <button v-if="!isAdding"  @click="openForm">Add review</button>
      <div v-if="isAdding" class="rev-form">
          <p>Add you review</p>
          <input v-model="currRev.readerName" type="text" placeholder="Your name" />
          <input v-model="currRev.readDate"  type="date" />
          <section  class="rate">
            <label for="rate">Rate</label>
            <select v-model="currRev.rate"  id="rate">
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
          </section>
          <textarea v-model="currRev.content"  cols="30" rows="10"></textarea>
          <button @click="onAddReview" >Add review</button><button @click="closeForm" >Cancel</button>
      </div>
</section>
    `,
  data() {
    return {
      isAdding: false,
      currRev: {
        readerName: "",
        rate: 5,
        readDate: "",
        content: "",
      },
    };
  },

  methods: {
    getStars(rate) {
      console.log("rate", rate);
      return "⭐".repeat(rate);
    },
    callBus() {
      eventBus.emit("test", "test dataaaaaa");
    },
    openForm() {
      this.isAdding = !this.isAdding;
    },
    closeForm() {
      this.isAdding = !this.isAdding;
      this.currRev.readerName = "";
      this.currRev.rate = 5;
      this.currRev.readDate = "";
      this.currRev.content = "";
    },

    removeReview(idx) {
      // console.log(review);
      // console.log(idx);
      // this.book.reviews.splice(idx, 1);
      // console.log(this.book);
      this.$emit("removeReview", idx);
    },
    onAddReview() {
      if (
        this.currRev.readerName.trim() === "" ||
        this.currRev.readDate === "" ||
        this.currRev.content === ""
      )
        return;
      this.$emit("addReview", { ...this.currRev });
      this.currRev.readerName = "";
      this.currRev.rate = 5;
      this.currRev.readDate = "";
      this.currRev.content = "";
      this.isAdding = false;
    },
  },
};

// readerName: "Popo",
// rate: 5,
// readDate: "12.6.2002",
// reviewContent: "Wowwwwwwwwwwwwwwww!!",
