import { mailService } from "../services/mail.service.cmp.js";
import { eventBus } from "../../../services/eventBus-service.js";

import mailList from "../cmps/mail-list.cmp.js";
import mailFolderList from "../cmps/mail-folder-list.cmp.js";
import mailCompose from "../cmps/mail-compose.cmp.js";
import mailDetails from "./mail-details.cmp.js";

export default {
  template: `
        <section class="main-mail-page">
          <section class="compose-and-folder">
             <div v-if="!isCompose" class="compose-btn" @click="isCompose = !isCompose"  @mouseover="hover = true"  @mouseleave="hover = false">
                  <span>➕</span><span v-if="hover" class="compose-word"> Compose</span>
             </div>
             <mail-folder-list @setFilter="setFilter" :mails="mails"/>
             <mail-compose v-if="isCompose" @closeModal="isCompose=!isCompose" @sendMail="sendMail"/>
          </section>
          <section class="filter-list-cont" >
            <input class="search-input" name="search-mail" type="text" placeholder="Search.." v-model="filterBy.text" >
            <mail-list v-if="mails" :mails="mailsToDisplay" @removeMail="removeMail"  @setToReadNotRead="setToReadNotRead" />
          </section>
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
      hover: false,
    };
  },
  created() {
    mailService.query().then((mails) => (this.mails = mails));
  },
  methods: {
    setToReadNotRead(mailId) {
      var currMail = this.mails.find((mail) => mail.id === mailId);
      currMail.isRead = !currMail.isRead;
      mailService.save(currMail).then((res) => {
        if (!currMail.isRead) {
          eventBus.emit("show-msg", "Mail set as unread");
        } else {
          eventBus.emit("show-msg", "Mail set as read");
        }
      });
    },
    removeMail(mailId) {
      var currMail = this.mails.find((mail) => mail.id === mailId);
      if (currMail.status !== "removed") {
        currMail.status = "removed";
        mailService.save(currMail).then((res) => {
          eventBus.emit("show-msg", "Mail moved to Deleted folder");
        });
      } else {
        var currMailIndex = this.mails.findIndex((mail) => mail.id === mailId);
        this.mails.splice(currMailIndex, 1);
        mailService.remove(mailId).then((res) => {
          eventBus.emit("show-msg", "Mail deleted");
        });
      }
    },
    setFilter(filterByFromFolders) {
      this.filterBy = filterByFromFolders;
    },
    sendMail(newMail) {
      mailService.save(newMail);
      this.isCompose = !this.isCompose;
      eventBus.emit("show-msg", "Mail sent");
      this.mails.unshift(newMail);
    },
  },
  computed: {
    mailsToDisplay() {
      const regex = new RegExp(this.filterBy.text, "i");
      console.log(this.filterBy.text);
      return this.mails.filter((mail) => {
        return (
          (regex.test(mail.sender.email) ||
            regex.test(mail.receiver) ||
            regex.test(mail.subject) ||
            regex.test(mail.body) ||
            regex.test(mail.sender.name)) &&
          mail.status === this.filterBy.folder
        );
      });
    },
  },
};

// regex.test(mail.sender.email))
// ||
// regex.test(mail.subject) ||
// regex.test(mail.body) ||
// regex.test(mail.sender.name)
