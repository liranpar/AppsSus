export default {
  template: `
        <section class="mail-folder-list">
            <ul class="mail-folder-list-ul">
                <li @click="setFilter('inbox')" :class="{ folderClicked: isSelecedFolder.inbox }" >Inbox</li>
                <li @click="setFilter('starred')" :class="{ folderClicked: isSelecedFolder.starred }">Starred</li>
                <li @click="setFilter('sent')"  :class="{ folderClicked: isSelecedFolder.sent }">Sent Mail</li>
                <li @click="setFilter('drafts')" :class="{ folderClicked: isSelecedFolder.drafts }">Drafts</li>
                <li @click="setFilter('removed')" :class="{ folderClicked: isSelecedFolder.removed }">Deleted</li>
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
      isSelecedFolder: {
        inbox: true,
        starred: false,
        sent: false,
        drafts: false,
        removed: false,
      },
    };
  },
  created() {},
  methods: {
    setFilter(val) {
      this.isSelecedFolder.inbox = false;
      this.isSelecedFolder.starred = false;
      this.isSelecedFolder.sent = false;
      this.isSelecedFolder.drafts = false;
      this.isSelecedFolder.removed = false;
      this.isSelecedFolder[val] = true;
      console.log(this.isSelecedFolder);
      this.filterBy.folder = val;
      this.$emit("setFilter", { ...this.filterBy });
    },
  },
  computed: {},
};
