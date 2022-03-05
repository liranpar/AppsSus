export default {
template: `
    <section class="home-page">
        <section class="home-logo">
            <router-link to="/about"><img src="../assets/images/logo.png" title="Check us out!"></router-link>
        </section>
        <h1 class="pick-app-title">Pick your favorite App:</h1>
            <ul class="apps-images-ul">
                <li><router-link to="/keep"><img src="assets/images/keep.jpeg" title="ApsusKeep"></router-link></li>
                <li><router-link to="/mail"><img src="assets/images/email.png" title="ApsusMail"></router-link></li>
                <li><router-link to="/book"><img src="assets/images/books.jpg" title="ApsusBooks"></router-link></li>
            </ul>


    </section>
`,
data() {
return {

}
},
created() {

},
methods: {

},
computed: {

}

}
