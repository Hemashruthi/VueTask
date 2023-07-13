<template>  
    <h3>Enter Marks: </h3>
    <form @submit.prevent = "calcPer">
      <div class="form-group">
        <label>English:</label>
        <input type="number" id="subject1" v-model="subject1" required min="0" max="100">
      </div>
      <div class="form-group">
        <label>Hindi:</label>
        <input type="number" id="subject2" v-model="subject2" required min="0" max="100">
      </div>
      <div class="form-group">
        <label>Maths:</label>
        <input type="number" id="subject3" v-model="subject3" required min="0" max="100">
      </div>
      <div class="form-group">
        <label>Physics:</label>
        <input type="number" id="subject4" v-model="subject4" required min="0" max="100">
      </div>
      <div class="form-group">
        <label>Chemistry:</label>
        <input type="number" id="subject5" v-model="subject5" required min="0" max="100">
      </div>
      <button type="submit">Display Average Marks</button>
    </form>
    <p v-if="avgPer !== null">marks: {{ avgPer }}</p>
</template>

<script>

export default {
  data() {
    return {
      subject1: null,
      subject2: null,
      subject3: null,
      subject4: null,
      subject5: null,
      avgPer: null
    }
  },
  methods: {
    calcPer(){
      const sum = parseInt(this.subject1)+parseInt(this.subject2)+parseInt(this.subject3)+parseInt(this.subject4)+parseInt(this.subject5);
      this.avgPer = ( sum /5);
    },
    onSubmit() {
      this.emitter.emit('my-event', this.avgPer)
    } // add form submission logic here.
  }
}
</script>

<style scooped>
    /* .form-group {
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
*/
    button[type="submit"] {
      cursor: pointer;
    } 
    
    label {
      color: #252424;
      display: inline-block;
      margin: 15px 0 5px;
      font-size: 0.6em;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bold;
    }
    h3 {
      color: #252424;
      display: inline-block;
      margin: 15px 0 5px;
      font-size: 1.0em;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bold;
    }
    input, select {
      display: block;
      
      width: 100%;
     
 
      border-bottom: 1px solid #ddd;
      color: #555;
    }
    input[type="radio"] {
      display: inline-block;
      width: 16px;
      margin: 0 10px 0 0;
      position: relative;
      top: 2px;
    }
    input[type="checkbox"] {
      display: inline-block;
      width: 16px;
      margin: 0 10px 0 0;
      position: relative;
      top: 2px;
    }
    /* button {
      background: #046b10;
      border: 0;
      padding: 10px 20px;
      margin-top: 20px;
      color: white;
      border-radius: 20px;
    } */
    .submit {
      text-align: center;
    }
    img {
      max-width:5%;
    }
    h1 {
      margin-top: 0;
    }
  </style>