import { mailService } from "../services/mail.service.cmp.js";

export default {
  template: `
<section v-if="currMail" >  
    <h1>{{ currMail.subject }}</h1>
    <h3>{{ currMail.to }}</h3>
    <p>{{ currMail.body }}</p>
    <button class="remove-within-details" @click="removeEmail"> Delete mail </button>
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
  methods: {
    removeEmail (){
      if (this.currMail.status !== 'removed'){
        this.currMail.status = 'removed';
        mailService.save(this.currMail)
      } else {
        mailService.remove(this.currMail.id)
      }
      this.$router.push('/mail')
    }
  },
  computed: {
    mailId() {
      return this.$route.params.mailId;
    },
  },
};
