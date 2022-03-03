import { mailService } from "../services/mail.service.cmp.js";
import mailList from "../cmps/mail-list.cmp.js";
import mailFolderList from "../cmps/mail-folder-list.cmp.js";
import mailCompose from "../cmps/mail-compose.cmp.js";
import mailDetails from "./mail-details.cmp.js";

export default {
  template: `
        <section class="main-mail-page">
            <section class="compose-and-folder">
            <button v-if="!isCompose" class="compose-btn" @click="isCompose = !isCompose" >+ compose </button>
                <mail-compose v-if="isCompose" @closeModal="isCompose=!isCompose" @sendMail="sendMail"/>
                <mail-folder-list @setFilter="setFilter"/>
            </section>
            <mail-list v-if="mails" :mails="mailsToDisplay" @removeMail="removeMail" />
            <router-link to="/maildetails" ></router-link>
        </section>
`,
  components: {
    mailService,
    mailList,
    mailFolderList,
    mailCompose,
    mailDetails,
  },
  data() {
    return {
      isCompose: false,
      mails: [],
      filterBy: {
        folder: "inbox",
        text: "",
      },
    };
  },
  created() {
    mailService.query().then((mails) => (this.mails = mails));
  },
  methods: {
    removeMail(mailId) {
      var currMail = this.mails.find((mail) => mail.id === mailId);
      if (currMail.status !== "removed") {
        currMail.status = "removed";
        mailService.save(currMail).then((res) => {
          console.log("mail removed");
        });
      } else {
        var currMailIndex = this.mails.findIndex((mail) => mail.id === mailId);
        this.mails.splice(currMailIndex, 1);
        mailService.remove(mailId).then((res) => {
          console.log("Mail deleted permanently");
        });
      }
    },
    setFilter(filterByFromFolders) {
      this.filterBy = filterByFromFolders;
    },
    sendMail(newMail) {
      mailService.save(newMail);
      this.isCompose = !this.isCompose;
      console.log("newMail inside sendMail inside mail-index", newMail);
      this.mails.unshift(newMail);
    },
  },
  computed: {
    mailsToDisplay() {
      //   return this.mails;
      return this.mails.filter((mail) => mail.status === this.filterBy.folder);
    },
  },
};
