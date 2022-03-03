import { mailService } from "../services/mail.service.cmp.js";
import mailList from "../cmps/mail-list.cmp.js";
import mailFolderList from "../cmps/mail-folder-list.cmp.js";
import mailCompose from "../cmps/mail-compose.cmp.js";

export default {
  template: `
        <section class="main-mail-page">
            <section class="compose-and-folder">
            <button v-if="!isCompose" class="compose-btn" @click="isCompose = !isCompose" >+ compose </button>
                <mail-compose v-if="isCompose" @closeModal="isCompose=!isCompose" @sendMail="sendMail"/>
                <mail-folder-list @setFilter="setFilter"/>
            </section>
            <mail-list v-if="mails" :mails="mailsToDisplay" />
        </section>
`,
  components: {
    mailService,
    mailList,
    mailFolderList,
    mailCompose,
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
    setFilter(filterByFromFolders) {
      this.filterBy = filterByFromFolders;
    },
    sendMail(newMail){
        mailService.save(newMail)
        this.isCompose = !this.isCompose;
        console.log('newMail inside sendMail inside mail-index',newMail)
        this.mails.unshift(newMail);
    }
  },
  computed: {
    mailsToDisplay() {
      return this.mails;
      //   return this.mails.filter((mail) => mail.status === this.filterBy.folder);
    },
  },
};
