export default {
  template: `
        <section class="mail-folder-list">
            <ul class="mail-folder-list-ul">
                <li @click="setFilter('inbox')" :class="{ folderClicked: isSelected}" >Inbox</li>
                <li @click="setFilter('starred')" :class="{ folderClicked: isSelected}">Starred</li>
                <li @click="setFilter('sent')"  :class="{ folderClicked: isSelected}">Sent Mail</li>
                <li @click="setFilter('drafts')" :class="{ folderClicked: isSelected}">Drafts</li>
                <li @click="setFilter('removed')" :class="{ folderClicked: isSelected}">Deleted</li>
            </ul>
        </section>
`,
  data() {
    return {
      filterBy: {
        folder: "inbox",
        text: "",
      },
      folderClicked: "folder-clicked",
      isInbox: true,
      isStarred: false,
    };
  },
  created() {},
  methods: {
    isSeleced() {
      this.isSeleced = true;
    },
    setFilter(val) {
      this.filterBy.folder = val;
      this.$emit("setFilter", { ...this.filterBy });
    },
  },
  computed: {},
};
