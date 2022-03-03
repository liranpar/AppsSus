export default {
    props: ['mail'],
    template: `
        <div class="mail-preview">{{mail.subject}} {{mail.body}} {{mail.sentAt}}</div>
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