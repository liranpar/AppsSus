import mailPreview from "./mail-preview.cmp.js"
export default {
    props: ['mails'],
    template: `
        <section class="mail-list">
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
`,
    components: {
        mailPreview,
    },
    data() {
        return {

        }
    },
    created() {

    },
    methods: {

    },
    computed: {

    }

}