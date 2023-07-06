<script>
export default {
    data() {
        return {
            firstName: 'cassie',
            lastName: 'clare',
            age: '24'
        }
    },
    methods: {
        changeFirsName(){
            this.firstName = "John";
        }
    }
}
</script>

<template>
     <ul>
            <li> {{ firstName }}</li>
            <li> {{ lastName }}</li>
            <li> {{ age }}</li>
        </ul>
</template>