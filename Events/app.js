const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmInput(){
      this.confirmedName = this.name
    },
    submitForm() {
      alert("Form Submitted!")
    },
    add(num) {
      this.counter+=num
    },
    subtract(num) {
      this.counter-=num
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName
    }
  }
});

app.mount('#events');
