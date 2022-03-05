import { mailService } from "../services/mail.service.cmp.js";

export default {
  template: `
<section v-if="currMail" class="mail-details">  
    <div class="btns-details-cont" >
      <span class="details-btn" @click="backToList">Back</span>
      <span class="details-btn remove-within-details" @click="removeEmail">Delete</span>
    </div>
    <h1 class="subject">{{ currMail.subject }}</h1> 
    <hr>
    <p  class="sender">
      <h3>{{ currMail.sender.name }}</h3> <span> &#60;{{ currMail.sender.email }}&#62;</span>
    </p>
    <hr>
    <p class="mail-content">{{ currMail.body }}</p>
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
