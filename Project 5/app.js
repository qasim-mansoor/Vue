const app = Vue.createApp({
    data() {
        return {
            tasks : [],
            userInput: '',
            isShown: true
        }
    },
    methods: {
        addTask () {
            this.tasks.push(this.userInput)
        },
        toggleShown() {
            this.isShown = !this.isShown
        }
    }
})

app.mount('#assignment')