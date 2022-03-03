import mailPreview from "./mail-preview.cmp.js";
export default {
  props: ["mails"],
  template: `
        <section class="mail-list">
            <ul class="mail-list-ul">
                <li v-for="mail in mails" :key="mail.id" class="mail-preview-container">
                   <mail-preview :mail="mail" @removeMail="removeMail" />

                </li>
            </ul>
        </section>
`,
  components: {
    mailPreview,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    removeMail(mailId) {
      this.$emit("removeMail", mailId);
    },
  },
  computed: {},
};
