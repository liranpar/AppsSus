import { mailService } from "../services/mail.service.cmp.js";

export default {
  template: `
<section v-if="currMail" >  
    <h1>{{ currMail.subject }}</h1>
    <h3>{{ currMail.to }}</h3>
    <p>{{ currMail.body }}</p>
</section>
`,
  data() {
    return {
      currMail: null,
    };
  },
  created() {
    mailService.get(this.mailId).then((mail) => {
      this.currMail = mail;
      console.log(this.currMail);
    });
  },
  methods: {},
  computed: {
    mailId() {
      return this.$route.params.mailId;
    },
  },
};
