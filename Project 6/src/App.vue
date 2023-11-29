<template>
    <section>
        <user-data @register-user="registerUser"></user-data>
        <active-user v-for="user in users" :key="user.id" :username="user.username" :age="user.age" ></active-user>
    </section>
</template>

<script>
    export default{
        data() {
            return {
                users: [
                    {   
                        id: "qasim",
                        username: "qasim",
                        age: 27
                    },
                    {
                        id: "ali",
                        username: "ali",
                        age: 20
                    },
                ]
            }
        },
        methods: {
            registerUser(username, age) {
                const newUser = {
                    id: new Date().toISOString(),
                    username: username,
                    age: age
                }

                this.users.push(newUser)
            }
        }
    }
</script>