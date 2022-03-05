export default {
  props: ["mail"],
  emits: ["removeMail", "setToReadNotRead"],
  template: `
          <div class="mail-preview" :class="{ unreadBgc: !mail.isRead }" >
              <router-link :to="'/mail/'+mail.id">
                  <div class="mail-preview-mail">
                      <span class="senders-name">{{checkSendReceive(mail)}}</span>
                      <span class="mail-subject" :class="{ unread: !mail.isRead }">{{mail.subject}}</span>
                      <span class="mail-body" :class="{ unread: !mail.isRead }">{{bodyLength(mail)}} </span>
                  </div>
              </router-link>  
              <div class="actions-time">
                <span class="mail-time">{{getTimeForDisplay()}}</span>
                <span>
                  <button @click="setToReadNotRead(mail.id)">✉</button>
                  <button @click="removeMail(mail.id)">❌</button>
                </span>
              </div>
        </div>
        
`,
  data() {
    return {
      hours: new Date(this.mail.sentAt).getHours(),
      minutes: new Date(this.mail.sentAt).getMinutes(),
    };
  },

  methods: {
    setToReadNotRead(mailId) {
      this.$emit("setToReadNotRead", mailId);
    },
    removeMail(mailId) {
      this.$emit("removeMail", mailId);
    },
    padTo2Digits(num) {
      return String(num).padStart(2, "0");
    },
    getTimeForDisplay() {
      let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      let dayToCompare = 1000 * 60 * 60 * 24;
      let date = new Date(this.mail.sentAt).getDate() + 1;
      let month = new Date(this.mail.sentAt).getMonth();
      let dayOfWeek = new Date().getDay();
      let dayOfMail = new Date(this.mail.sentAt).getDay();

      if (
        Date.now() - this.mail.sentAt > dayToCompare ||
        dayOfWeek !== dayOfMail
      ) {
        return months[month] + ", " + date;
      }
      return (
        this.padTo2Digits(this.hours) + ":" + this.padTo2Digits(this.minutes)
      );
    },
    bodyLength(mail) {
      if (mail.body.length > 40) return mail.body.slice(0, 38) + " ...";
      return mail.body;
    },
    checkSendReceive(mail) {
      if (mail.status === "sent") {
        return "To: " + mail.receiver;
      } else return mail.sender.name;
    },
  },
};

// TODO: when decreasing window width, text should be sliced (and not dropped to another line)
// TODO: when in mobile mode, to cancel hovering on the time to show the buttons, and show only the time
