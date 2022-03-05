import hamburger from "./hamburger.cmp.js";

export default {
  template: `
        <header class="main-header">
            <div class="logo-div">Appsus</div>
            <nav class="nav-bar">
                <hamburger class="hamburger" ></hamburger>
                <ul class="nav-bar-ul">
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/mail">Mail</router-link></li>
                    <li><router-link to="/keep">keep</router-link></li>
                </ul>
                
            </nav>
        </header>

`,
  data() {
    return {};
  },
  components: {
    hamburger,
  },
  created() {},
  methods: {},
  computed: {},
};
