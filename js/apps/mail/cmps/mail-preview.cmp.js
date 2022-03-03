export default {
    props: ['mail'],
    template: `
        <div class="mail-preview" @click=><span class="senders-name">{{mail.subject}} {{mail.body}} <span class="mail-time">{{getTimeForDisplay()}}</span>
            <span class="actions">
                <button @click="setToReadNotRead(mail.id)">Envelope</button>
                <button @click="remove(mail.id)">X</button>
            </span>
        </div>
`,
    data() {
        console.log(this.mail)
        return {
            hours: new Date(this.mail.sentAt).getHours(),
            minutes: new Date(this.mail.sentAt).getMinutes(),
        }
    },
    created() {

    },
    methods: {
        padTo2Digits(num) {
            return String(num).padStart(2, '0');
          },
          getTimeForDisplay (){
            return this.padTo2Digits(this.hours + ':' + this.minutes)
           }
    },
    computed: {
        // getTimeForDisplay (){

        //     return this.mail.sentAt.toISOString();
        // }
    }

}

// TODO: when the mail received is from today, show the hour it was sent.
// if it is from yesterday and below - show the date.