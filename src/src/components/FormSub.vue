<template>
    <form @submit.prevent="submitForm">
      <h1>Student Details</h1>
      <label>Name</label>
      <input type="text" v-model="formData.name" required pattern="^[a-zA-Z\s]+$">

      <label>Email</label>
      <input type="email" v-model="formData.email" required >
  
  
      <label>ROLL NUMBER(4 digit number)</label>
    <input type="text" required v-model="formData.roll_num" pattern="[0-9]+" maxlength="4" minlength="4" />
        
    <label>PHONE NUMBER</label>
    <input type="tel" required v-model="formData.ph_no" pattern="[0-9]+" maxlength="10" minlength="10"/>
  
      <div class="gender">
        <label>GENDER</label><br>
        <label>
        <input type="radio" value="Male" name="gen" v-model="formData.gender" required>
        <img src="../components/icons/man.png" alt="Male"></label><br>
        <label>
        <input type="radio" value="Female" name="gen" v-model="formData.gender" required>
        <img src="../components/icons/girl.png" alt="Female"></label>
      </div>
      
     
        <!-- <label>HOBBIES</label><br>
        <input type="checkbox" name="hob" id="read" value="Reading" v-model="formData.hobbies">
        <label>Reading</label><br>
        <input type="checkbox" name="hob" id="swim" value="Swimming" v-model="formData.hobbies">
        <label>Swimming</label><br>
        <input type="checkbox" name="hob" id="draw" value="Drawing" v-model="formData.hobbies">
        <label>Drawing</label><br>
        <input type="checkbox" name="hob" id="cook" value="Cooking" v-model="formData.hobbies">
        <label>Cooking</label><br> -->
        <!-- <input type="text" placeholder="OTHERS" name="Other_Hobby" maxlength="30" /> -->
      
      
      <!-- <label>Marks(0-100)</label>
      <input type="number" v-model="formData.marks" min="0" max="100" required> -->
        <SubMarks />
    
      <div class="submit">
        <!-- <button type="reset">Reset</button>&nbsp;&nbsp; -->
        <button type="submit" >{{ isEdit ? 'update' : 'submit'}}</button>
        
      </div>
    </form>
  </template>
  
  <script>
  import SubMarks from '../components/SubMarks.vue'
import axios from 'axios'
  export default {
    components: {
      SubMarks
    },
  
    props: {
      initialData: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        formData: {
          id: '',
        name: '',
        email: '',
        roll_num: '',
        ph_no: '',
        gender: '',
        marks: '',
        },
        isEdit: false
      }
    },
    created () {
      this.emitter.on('myevent', (evt) => {
        this.marks = evt;
      })
    },

    watch: {
    initialData: {
      handler(newData) {
      if (newData) {
        this.formData = { ...newData };
        console.log(this.formData)
        this.isEdit = true;
      } else {
        
      //  this.resetForm();
      }
    },
    //immediate: true
  }
    
  },
    methods: {

      // this.isEdit =false;
     
    
    submitForm() {
      
      // if(this.isEdit) {
      //   this.$emit('formUpdated', this.formData);
      //   this.isEdit =false;
      //   this.resetForm();
      // }
      // else {
      //   this.$emit('formSubmitted', this.formData);
      //   this.resetForm();
      // }
      // if(this.isEdit){
      //   this.formData ={
      //   name : this.studName,
      //   email: this.studEmail,
      //   roll_num: this.studRollNum,
      //   ph_no: this.studPhNo,
      //   gender: this.studGender,
      //   marks: this.studMarks,
      // };
      //   this.updateStudent(this.id);
      // }else{
      // this.formData ={
      //   name : this.studName,
      //   email: this.studEmail,
      //   roll_num: this.studRollNum,
      //   ph_no: this.studPhNo,
      //   gender: this.studGender,
      //   marks: this.studMarks,
       //console.log(this.name,"kjb")
      const initialData = {
        id: this.formData.id,
        name : this.formData.name,
        email: this.formData.email,
        roll_num: this.formData.roll_num,
        ph_no: this.formData.ph_no,
        gender: this.formData.gender,
        marks: this.formData.marks,
      }
      if(this.isEdit) {
        axios.put(`http://127.0.0.1:3333/formU/${this.initialData.id}`, initialData);
        this.$emit('formUpdated', initialData);
        this.resetForm();
        location.reload();
      }
      else {
        const response = axios.post(`http://127.0.0.1:3333/formP`, initialData);
        this.$emit("form-data", response.data);
        this.resetForm();
        location.reload();
      }
    }
    },
    // fetchForm(id) {
    //   console.log(id)
    //   axios
    //   .get(`http://127.0.0.1:3333/formE/${id}`, this.formData)
    //   .then((response) => {
    //   //console.log('Data updated successfully:', response.data);
    //   //this.fetchData();
    //   this.isEdit = true;
    //   this.student = response.data
    //   this.studName = this.student.name;
    //   this.studEmail = this.student.email;
    //   this.studRollNum = this.student.roll_num;
    //   this.studPhNo = this.student.ph_no;
    //   this.studGender = this.student.gender;
    //   this.studMarks = this.student.marks;
    //   console.log(this.student);
      
    // })
    // },
 

    // updateStudent(id) {
    //   console.log(this.initialData)

    //   axios 
    //   .put(`http://127.0.0.1:3333/formU/${id}`, this.initialData)
    //   .then((response) => {
    //     //console.log('Data updated successfully:', response.data);
    //   //this.fetchData();

    //   console.log(response);
    //   //this.emitter.emit('reload','trigger');
    //   })
    // },
    resetForm() {
      this.formData= {
      id: '',
      name: '',
      email: '',
      roll_num: '',
      ph_no: null,
      gender: '',
      marks: null,
      isEdit: false,
      };
    },
    deleteRow(index) {
        this.$emit('formDelete', index)
      },
    };
    

  </script>
  
  <style scoped>
    form {
      max-width: 8200px;
      margin-top: 0; 
      background: rgba(255, 192, 203, 0.603);
      text-align: left;
      padding: 90px;
      border-radius: 10px;
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
    input, select {
      display: block;
      padding: 10px 6px;
      width: 100%;
      box-sizing: border-box;
      border: none;
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
    button {
      background: #046b10;
      border: 0;
      padding: 10px 20px;
      margin-top: 20px;
      color: white;
      border-radius: 20px;
    }
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

