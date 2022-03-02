import mainHeader from "./cmps/main-header.cmp.js";
import mainFooter from "./cmps/main-footer.cmp.js";
import { router } from "./router.js";

const options = {
  components: {
    mainHeader,
    mainFooter,
  },
  template: `
    <section class="app">
        <main-header />
        <router-view /> 
        <main-footer />
    </section>
    `,

  methods: {},
  computed: {},
};

const app = Vue.createApp(options);
app.use(router);
app.mount("#app");
