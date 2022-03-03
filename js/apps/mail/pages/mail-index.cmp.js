import { mailService } from "../services/mail.service.cmp.js";
import mailList from "../cmps/mail-list.cmp.js";
import mailFolderList from "../cmps/mail-folder-list.cmp.js";
import mailCompose from "../cmps/mail-compose.cmp.js";

export default {
    template: `
        <section class="main-mail-page">
            <section class="compose-and-folder">
                <mail-compose />
                <mail-folder-list />
            </section>
            <mail-list v-if="mails" :mails="mails" />
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
        }
    },
    created() {
        mailService.query()
            .then(mails => this.mails = mails);
    },
    methods: {

    },
    computed: {

    }

}