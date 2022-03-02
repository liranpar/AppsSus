export default {
    template: `
        <section class="main-mail-page">
            <section class="mail-folders"></section>
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
        </section>
`,
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