const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            showParagraph: true,
            backColor: ''
        }
    },
    methods: {
        toggle() {
            this.showParagraph = !this.showParagraph
        },
    },
    computed: {
        userClass() {
            if(this.userInput === 'user1' || this.userInput === 'user2'){
                return this.userInput
            } else {
                return ''
            }
        },
        toggleClass() {
            if(this.showParagraph){
                return 'visible'
            } else {
                return 'hidden'
            }
        }
    }
})

app.mount('#assignment')