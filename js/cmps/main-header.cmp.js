export default {
    template: `
        <header class="main-header">
            <div class="logo-div"></div>
            <nav class="nav-bar">
                <ul>
                    <li><i class="fa fa-th" aria-hidden="true"></i></li>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/mail">Mail</router-link></li>
                    <li><router-link to="/keep">keep</router-link></li>
                </ul>
                
            </nav>
        </header>

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