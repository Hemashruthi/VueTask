<template>
    <ul>
           <li> {{ firstName }}</li>
           <li> {{ lastName }}</li>
           <li> {{ age }}</li>
       </ul>
       <input type="text" v-model="name">
       <p>ur name is {{ name }}</p>
       <button @click="changeFirstName">Change first name </button>
</template>

<script>
export default {
    data() {
        return {
            firstName: 'cassie',
            lastName: 'clare',
            age: '24',
            name: ''
        }
    },
    methods: {
        changeFirstName() {
            this.firstName ='Bob';
             
        }
    }
}
</script>

