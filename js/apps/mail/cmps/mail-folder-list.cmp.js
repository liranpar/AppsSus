export default {
  props:['mails'],
  template: `
        <section class="mail-folder-list">
            <ul class="mail-folder-list-ul">
                <li @click="setFilter('inbox')" :class="isSelecedFolder.inbox && folderClicked" >Inbox<span> ({{countUnRead(mails)}})</span></li>
                <li @click="setFilter('starred')" :class="isSelecedFolder.starred && folderClicked ">Starred</li>
                <li @click="setFilter('sent')"  :class="isSelecedFolder.sent && folderClicked">Sent Mail</li>
                <li @click="setFilter('drafts')" :class="isSelecedFolder.drafts && folderClicked">Drafts</li>
                <li @click="setFilter('removed')" :class="isSelecedFolder.removed && folderClicked">Deleted</li>
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
    countUnRead(mails){
      let unReadCounter = 0;
      mails.forEach(mail => {
        if (mail.status==='inbox' && !mail.isRead){
          unReadCounter++;
        }
      })
      return unReadCounter;
    }
  },
  computed: {},
};
