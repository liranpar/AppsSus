import { eventBus } from "../../js/services/eventBus-service.js";

export default {
  template: `
      <section v-if="msg" class="user-msg">
      <p>{{msg}}</p>
      </section>`,
  data() {
    return {
      msg: "",
    };
  },
  created() {
    this.unsubscrice = eventBus.on("show-msg", (msg) => {
      this.msg = msg;
      setTimeout(() => {
        this.msg = "";
      }, 1500);
    });
  },
  methods: {},
  unmounted() {
    this.unsubscrice();
  },
};
