export default {
  props: ["mail"],
  emits: ["removeMail"],
  template: `
        <router-link :to="'/mail/'+mail.id" >
        <div class="mail-preview"><span class="senders-name"></span><span class="mail-subject">
        {{mail.subject}}</span> <span class="mail-body">{{mail.body}} </span><span class="mail-time">{{getTimeForDisplay()}}</span>
        </div>
        </router-link>  
        <span class="actions">
                <button @click="setToReadNotRead(mail.id)">Envelope</button>
                <button @click="removeMail(mail.id)">X</button>
        </span>
        
`,
  data() {
    console.log(this.mail);
    return {
      hours: new Date(this.mail.sentAt).getHours(),
      minutes: new Date(this.mail.sentAt).getMinutes(),
    };
  },

  methods: {
    removeMail(mailId) {
      this.$emit("removeMail", mailId);
    },
    padTo2Digits(num) {
      return String(num).padStart(2, "0");
    },
    getTimeForDisplay() {
      return this.padTo2Digits(this.hours + ":" + this.minutes);
    },
  },
};

// TODO: when the mail received is from today, show the hour it was sent.
// if it is from yesterday and below - show the date.
