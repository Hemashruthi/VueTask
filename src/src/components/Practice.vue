<template>
  <form @submit.prevent="submitForm">
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name" required><br><br>

    <label>Gender:</label>
    <input type="radio" id="male" value="male" v-model="gender">
    <label for="male">Male</label>
    <input type="radio" id="female" value="female" v-model="gender">
    <label for="female">Female</label><br><br>

    <label>Hobbies:</label>
    <input type="checkbox" id="reading" value="Reading" v-model="hobbies">
    <label for="reading">Reading</label>
    <input type="checkbox" id="music" value="Music" v-model="hobbies">
    <label for="music">Music</label>
    <input type="checkbox" id="sports" value="Sports" v-model="hobbies">
    <label for="sports">Sports</label><br><br>

    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      gender: '',
      hobbies: [],
    };
  },
  methods: {
    submitForm() {
      this.$emit('form-submitted', {
        name: this.name,
        gender: this.gender,
        hobbies: this.hobbies,
      });
      this.name = '';
      this.gender = '';
      this.hobbies = [];
    },
  },
};
</script>
