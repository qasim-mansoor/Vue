const app = Vue.createApp({
    data() {
        return {
            name: 'Qasim',
            age: 27,
            img: 'https://i.pravatar.cc/40?img=70'
        }
    },
    methods: {
        randomNum() {
            return Math.random()
        }
    }
})

app.mount('#assignment')