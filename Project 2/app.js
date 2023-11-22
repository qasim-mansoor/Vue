const app = Vue.createApp({
    data() {
        return {
            output: '',
            outputConfirmed: ''
        }
    },
    methods: {
        buttonPressed() {
            alert('Button Pressed')
        },
        toOutput(event) {
            this.output = event.target.value 
        },
        toOutputConfirmed(event) {
            this.outputConfirmed = event.target.value
        }
    },
})

app.mount("#assignment")