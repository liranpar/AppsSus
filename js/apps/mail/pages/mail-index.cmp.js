import { mailService } from "../services/mail.service.cmp.js";
import mailList from "../cmps/mail-list.cmp.js";
import mailPreview from "../cmps/mail-preview.cmp.js";

export default {
    template: `
        <section class="main-mail-page">
            <section class="mail-folders"></section>
            <section class="mail-list" v-if="mails">
            <ul>
                <li v-for="mail in mails" :key="mail.id" class="mail-preview-container">
                   <mail-preview :mail="mail" />
                   <div class="mail-received-time">time</div>
                   <div class="actions">
                       <button @click="remove(mail.id)">X</button>
                       <button @click="setToReadNotRead(mail.id)">Envelope</button>
                   </div>
                </li>
            </ul>
            </section>
        </section>
`,
components: {
    mailService,
    mailList,
    mailPreview,
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