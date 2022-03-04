import { mailService } from "../services/mail.service.cmp.js";

export default {
  template: `
<section v-if="currMail" >  
    <h1>{{ currMail.subject }}</h1>
    <!-- <h3>{{ currMail.to }}</h3> -->
    <p>{{ currMail.body }}</p>
    <button class="remove-within-details" @click="removeEmail"> Delete mail </button>
    <button @click="backToList">Back</button>
</section>
`,
  data() {
    return {
      currMail: null,
    };
  },
  created() {
    mailService.get(this.mailId).then((mail) => {
      this.currMail = mail;
      this.currMail.isRead = true;
      mailService.save(this.currMail);
      console.log(this.currMail);
    });
  },
  methods: {
    removeEmail() {
      if (this.currMail.status !== "removed") {
        this.currMail.status = "removed";
        mailService.save(this.currMail);
      } else {
        mailService.remove(this.currMail.id);
      }
      this.$router.push("/mail");
    },
    backToList() {
      this.$router.push("/mail");
    },
  },
  computed: {
    mailId() {
      return this.$route.params.mailId;
    },
  },
};


// TODO: when clicking "back" or deleteing an email - it should go back to the relevant filter 
// (if the mail was in inbox - gp back to inbox, if sent - go back to sent folder)