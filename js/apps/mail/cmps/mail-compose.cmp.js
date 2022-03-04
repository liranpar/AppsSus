import { mailService } from "../services/mail.service.cmp.js";

export default {
  template: `
        <section class="mail-compose-modal">
            <section class="mail-compose">
                <section  class="mail-to">
                    <input v-model="newMail.to" type='text' name="to" placeholder='Send Email to:'>
                </section>
                <section class="mail-subject">
                    <input v-model="newMail.subject" type='text' name="subject" placeholder="Enter subject">
                </section>
                <section class="mail-body">
                    <textarea v-model="newMail.body" name="body"></textarea>
                </section>
                <div>
                <button class="send-mail" @click="sendMail">Send</button>
                <button class="close-mail-modal" @click="closeModal">Close</button>
                </div>
            </section>
        </section>
`,
  data() {
    return {
      newMail: null,
      loggedInUser: {},
    };
  },
  created() {
    this.newMail = mailService.getEmptyMail();
    this.loggedInUser = mailService.getLoggedinUser();
  },
  methods: {
    composeEmail() {
      this.isCompose = !this.isCompose;
    },
    closeModal() {
      this.$emit("closeModal");
    },
    sendMail() {
      const mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      console.log(mailRegex.test(this.newMail.to));
      if (!mailRegex.test(this.newMail.to)) {
        alert("You didnt provide a valid Email address! fucker.");
        return;
      }
      if (!this.newMail.subject && !this.newMail.body) {
        alert("You didnt enter a subject and a body, beach");
        return;
      } else if (!this.newMail.body)
        if (!confirm("you didn't enter a body, would you like to proceed?"))
          return;
        else if (!this.newMail.subject) {
          if (
            !confirm("you didn't enter a subject, would you like to proceed?")
          )
            return;
          else
            this.newMail.subject =
              "No subject (because the fucker didnt provide a subject";
        }
      this.newMail.status = "sent";
      this.newMail.isRead = true;
      this.newMail.sender = this.loggedInUser;
      this.$emit("sendMail", { ...this.newMail });
    },
  },
  computed: {},
};
