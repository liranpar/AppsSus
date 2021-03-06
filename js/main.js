import mainHeader from "./cmps/main-header.cmp.js";
import mainFooter from "./cmps/main-footer.cmp.js";
import userMsg from "./cmps/user-msg.cmp.js";
import { router } from "./router.js";

const options = {
  components: {
    mainHeader,
    mainFooter,
    userMsg,
  },
  template: `
    <section class="app">
        <main-header />
        <user-msg />
      <main class="app-container">
      <router-view /> 
      </main>
        <main-footer />
    </section>
    `,

  methods: {},
  computed: {},
};
// .app{
//     display:flex;
//     flex-direction:column;
//     min-height:100vh;
// }
// .app-container{
//     flex-grow:1;
// }

const app = Vue.createApp(options);
app.use(router);
app.mount("#app");
