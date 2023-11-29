<template>
    <div>
        <h2>Username: {{ username }}</h2>
    </div>
    <div>
        <h3>Age: {{ age }}</h3>
    </div>
</template>

<script>
    export default {
        props: ['username', 'age']
    }
</script>