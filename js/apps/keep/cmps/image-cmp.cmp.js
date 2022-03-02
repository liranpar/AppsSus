export default {
  props: ["note"],
  template: `
          <section>  
             
               <img class="note-img" :src=note.content alt="">
             
          </section>
          `,
  data() {
    return {};
  },
  components: {},
  methods: {},
  computed: {},
};
