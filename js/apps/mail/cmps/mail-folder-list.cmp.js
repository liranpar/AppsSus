export default {
  template: `
        <section class="mail-folder-list">
            <ul class="mail-folder-list-ul">
                <li @click="setFilter('inbox')" class="folder-list-inbox"><i class="fas fa-inbox">Inbox</i></li> <!--<i class="fas fa-inbox">Inbox</i> -->
                <li @click="setFilter('starred')"  class="folder-list-starred">Starred</li>
                <li @click="setFilter('sent')"  class="folder-list-sent-mail">Sent Mail</li>
                <li @click="setFilter('drafts')" class="folder-list-drafts">Drafts</li>
            </ul>
        </section>
`,
  data() {
    return {
      filterBy: {
        folder: "inbox",
        text: "",
      },
    };
  },
  created() {},
  methods: {
    setFilter(val) {
      this.filterBy.folder = val;
      this.$emit("setFilter", { ...this.filterBy });
    },
  },
  computed: {},
};
