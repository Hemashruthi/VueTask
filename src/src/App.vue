<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
      <nav>       
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/task1">Task1</RouterLink>
        <RouterLink to="/task2">Task2</RouterLink>
        <RouterLink to="/form">Form</RouterLink>
        <RouterLink to="/prac">Practice</RouterLink>
        <RouterLink to="/marks">Marks</RouterLink>
       
      </nav>
    
  <RouterView />
  <br>
   
</template>

<style scoped>

nav {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #333;
}

nav a {
  float: left;
}

nav a {
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

nav a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #04AA6D;
}
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
} */

/* nav {
  width: 100%;
  font-size: 20px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
} */

 /* @media (min-width: 1024px) {
  header {
    display: flex; 
     place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } 
 
  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }  */

  /* nav {
    text-align: left;
    margin-left: -1rem;
   font-size: 1rem; 
    padding: 1rem 0;
    margin-top: 5rem; 
  } */

</style>
