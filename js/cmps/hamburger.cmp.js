export default {
  template: `
  
          <section>
          <i class="fa fa-th" aria-hidden="true" @click="isClicked = true" ></i>
               <div class="hamburger-menu" :class="{ showMenu: isClicked }" @mouseleave="isClicked = false" >
                   <div class="apps-links-cont">
                       <span><router-link @click="isClicked = false" class="mail-link" to="/mail">✉</router-link></span>
                       <span><router-link @click="isClicked = false" class="keep-link" to="/keep">📌</router-link></span>
                       <span><router-link @click="isClicked = false" class="keep-link" to="/book">📚</router-link></span>
                   </div>
                   
                   <span><router-link @click="isClicked = false" to="/">Home</router-link></span>
                   <span> | </span>
                   <span><router-link @click="isClicked = false" to="/about">About</router-link></span>
               </div>
          </section>
    
    `,
  data() {
    return {
      isClicked: false,
    };
  },
  created() {},
  methods: {},
  computed: {},
};
