import { mailService } from "../services/mail.service.cmp.js";
import mailList from "../cmps/mail-list.cmp.js";
import mailFolderList from "../cmps/mail-folder-list.cmp.js";
import mailCompose from "../cmps/mail-compose.cmp.js";

export default {
  template: `
        <section class="main-mail-page">
            <section class="compose-and-folder">
                <mail-compose />
                <mail-folder-list @setFilter="setFilter" />
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
  },
  computed: {
    mailsToDisplay() {
      //   return this.mails;
      return this.mails.filter((mail) => mail.status === this.filterBy.folder);
    },
  },
};
