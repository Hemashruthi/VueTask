<template>
    <FormSub />
    <child-component @submit="handleEvent"></child-component>
    
    </template>

<script setup lang="ts">
import FormSub from '../components/FormSub.vue'

export default {
    components: {
        FormSub,
    },
    methods:{
        handleEvent(data) {
            console.log('Received Data: ',data);
        },
    },
}
</script>

