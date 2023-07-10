<script>
import DemoSup from '../components/DemoSup.vue'
import Practice from '@/components/Practice.vue'; 
export default {
  components: {
    Practice,
  },
  data() {
    return {
      submitted: false,
      entries: [],
    };
  },
  methods: {
    addEntry(entry) {
      this.entries.push(entry);
      this.submitted = true;
    },
  },
};
</script>

<template>
    <main>
       
        <DemoSup />
        <Practice @form-submitted="addEntry" />
        <table v-if="submitted">
      <tr>
        <th>Name</th>
        <th>Gender</th>
        <th>Hobbies</th>
      </tr>
      <tr v-for="(entry, index) in entries" :key="index">
        <td>{{ entry.name }}</td>
        <td>{{ entry.gender }}</td>
        <td>{{ entry.hobbies.join(', ') }}</td>
      </tr>
    </table>
    </main>
</template>


<style scooped>
table {
            border-collapse: collapse;
        }
        th, td{
            width: 50%;
            border: 1px solid black;
            padding: 20px;
            text-align: center;
        }
        th {
            font-weight: 700;
            background-color: rgba(0, 0, 0, 0.233);
        }
        
@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }
}
</style>