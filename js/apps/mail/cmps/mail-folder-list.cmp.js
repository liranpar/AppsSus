export default {
  template: `
        <section class="mail-folder-list">
            <ul class="mail-folder-list-ul">
                <li @click="setFilter('inbox')" class="folder-list-inbox" :class="{ folderClicked: isSelected('inbox')}" >Inbox</li> <!--<i class="fas fa-inbox">Inbox</i> -->
                <li @click="setFilter('starred')"  class="folder-list-starred" :class="{ folderClicked: isSelected('inbox')}>Starred</li>
                <li @click="setFilter('sent')"  class="folder-list-sent-mail" :class="{ folderClicked: isSelected('sent')}>Sent Mail</li>
                <li @click="setFilter('drafts')" class="folder-list-drafts" :class="{ folderClicked: isSelected('drafts')}>Drafts</li>
                <li @click="setFilter('removed')" class="folder-list-drafts" :class="{ folderClicked: isSelected('removed')}>Deleted</li>
            </ul>
        </section>
`,
  data() {
    return {
      filterBy: {
        folder: "inbox",
        text: "",
        folderClicked: "folder-clicked",
      },
      // isSelecedFolder: {
      //   text: true,
      //   image: false,
      //   list: false,
      // },
    };
  },
  created() {},
  methods: {
    isSeleced(val) {
      return this.filterBy.folder === val;
    },
    setFilter(val) {
      this.filterBy.folder = val;
      this.$emit("setFilter", { ...this.filterBy });
    },
  },
  computed: {},
};
