export default {
  props: ["note"],
  template: `
        <section>  
           <p>{{note.content}}</p>
        </section>
        `,
  data() {
    return {};
  },
  components: {},
  methods: {},
  computed: {},
};
