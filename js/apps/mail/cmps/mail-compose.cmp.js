export default {
    template: `
        <section class="mail-compose">
            <button class="compose-btn" @click="composeEmail">+ compose </button>
            <article v-if="isCompose"></article>
        </section>
`,
    data() {
        return {
            isCompose: false,
        }
    },
    created() {
    },
    methods: {
        composeEmail (){
            this.isCompose = !this.isCompose;


        }
    },
    computed: {

    }

}