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
    <title>Subject Marks Input</title>
  <div class="container">
    <h2>Enter Marks for 5 Subjects</h2>
    <form>
      <div class="form-group">
        <label for="subject1">Subject 1:</label>
        <input type="number" id="subject1" name="subject1" required>
      </div>
      <div class="form-group">
        <label for="subject2">Subject 2:</label>
        <input type="number" id="subject2" name="subject2" required>
      </div>
      <div class="form-group">
        <label for="subject3">Subject 3:</label>
        <input type="number" id="subject3" name="subject3" required>
      </div>
      <div class="form-group">
        <label for="subject4">Subject 4:</label>
        <input type="number" id="subject4" name="subject4" required>
      </div>
      <div class="form-group">
        <label for="subject5">Subject 5:</label>
        <input type="number" id="subject5" name="subject5" required>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
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
        .container {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
    }

    .form-group {
      margin-bottom: 20px;
    }

    label {
      display: block;
      margin-bottom: 5px;
    }

    input[type="number"] {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    button[type="submit"] {
      padding: 10px 20px;
      background-color: #4CAF50;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
        
@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }
}
</style>