<template>
    <form @submit.prevent="registerUser">
        <div>
            <label for="">Username</label>
            <input type="text" v-model="enteredUsername">
        </div>
        <div>
            <label for="">Age</label>
            <input type="text" v-model="enteredAge">
        </div>
        <button>Submit</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                enteredUsername: '',
                enteredAge: '',
            }
        },
        methods: {
            registerUser() {
                this.$emit('register-user', this.enteredUsername, this.enteredAge)
                this.enteredUsername = ''
                this.enteredAge = ' '
            }
        }
    }
</script>