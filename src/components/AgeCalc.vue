<template>
    <div>
      <h1> {{ title }}</h1>
      <label>Enter your DOB: </label>
      <input type="date" required v-model="dob">
      <button @click="handleClick">Calculate Age</button>
      <p v-if="age">Your age is {{ age }} years.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: "Calculate Age from Date of Birth",
        dob: '',
        age: ''
      };
    },
    methods: {
      handleClick() {
        const today = new Date();
        const dob = new Date(this.dob);
        const age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
          return 'invalid';
        }
        this.age = age;
      }
    }
  }
  </script>

<style scooped>
h1 {
    font-weight: 800;
    margin-top: 0;
}
input {
    margin-top: 10px;
    width: 200px;
    height: 20px;
}

</style>