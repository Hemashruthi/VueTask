<template>
    <form @submit.prevent="submitForm">
      <h1>Student Details</h1>
      <label>Name</label>
      <input type="text" v-model="formData.name" required pattern="^[a-zA-Z\s]+$">

      <label>Email</label>
      <input type="email" v-model="formData.email" required >
  
  
      <label>ROLL NUMBER(4 digit number)</label>
    <input type="text" required v-model="formData.rollNum" pattern="[0-9]+" maxlength="4" minlength="4" />
        
    <label>PHONE NUMBER</label>
    <input type="tel" required v-model="formData.phNo" pattern="[0-9]+" maxlength="10" minlength="10"/>
  
      <div class="gender">
        <label>GENDER</label><br>
        <label>
        <input type="radio" value="Male" name="gen" v-model="formData.gender" required>
        <img src="../components/icons/man.png" alt="Male"></label><br>
        <label>
        <input type="radio" value="Female" name="gen" v-model="formData.gender" required>
        <img src="../components/icons/girl.png" alt="Female"></label>
      </div>
      
      <div class="hobbies">
       
        <label>HOBBIES</label><br>
        <input type="checkbox" name="hob" id="read" value="Reading" v-model="formData.hobbies">
        <label>Reading</label><br>
        <input type="checkbox" name="hob" id="swim" value="Swimming" v-model="formData.hobbies">
        <label>Swimming</label><br>
        <input type="checkbox" name="hob" id="draw" value="Drawing" v-model="formData.hobbies">
        <label>Drawing</label><br>
        <input type="checkbox" name="hob" id="cook" value="Cooking" v-model="formData.hobbies">
        <label>Cooking</label><br>
        <!-- <input type="text" placeholder="OTHERS" name="Other_Hobby" maxlength="30" /> -->
      </div>
      
      <label>Marks(0-100)</label>
      <input type="number" v-model="formData.marks" min="0" max="100" required>

    
      <div class="submit">
        <!-- <button type="reset">Reset</button>&nbsp;&nbsp; -->
        <button type="submit" v-if="!isEdit">Submit</button>
        <button type="submit" v-if="isEdit">Update</button>
      </div>
    </form>
  </template>
  
  <script>
  export default {
    props: {
      initialData: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        formData: {
        name: '',
        email: '',
        rollNum: '',
        phNo: '',
        gender: '',
        hobbies: [],
        mark: '',
        },
        isEdit: false
      }
    },
    watch: {
    initialData: {
      handler(newData) {
      if (newData) {
        this.formData = { ...newData };
        this.isEdit = true;
      } else {
        
        this.isEdit = false;
      }
    },
    immediate: true
  }
    
  },
    methods: {
    submitForm() {
      
      if(this.isEdit) {
        this.$emit('formUpdated', this.formData);
        this.isEdit =false;
        this.resetForm();
      }
      else {
        this.$emit('formSubmitted', this.formData);
        this.resetForm();
      }
    },
    //   this.$emit('formSubmitted', {
    //     name: this.name,
    //     email: this.email,
    //     rollNum: parseInt(this.rollNum),
    //     phNo:parseInt(this.phNo) ,
    //     gender: this.gender,
    //     hobbies: this.hobbies,
    //     marks: this.marks
    //   });
    //   this.name ='';
    //   this.email ='';
    //   this.rollNum ='';
    //   this.phNo ='';
    //   this.gender='';
    //   this.hobbies=[];
    //   this.marks='';
  
    // },
  //   if(this.edit){
  //         this.$emit('editstudent', formData);
  //       }
  //       else{
  //       this.$emit('formSubmitted', formData);
  //       this.resetForm();
  //       }
      
  //   },
    resetForm() {
      this.formData= {
      name: null,
      phone: null,
      email: null,
      rollNum: null,
      phNo: null,
      gende: null,
      hobbies:[],
      mark: null
      };
    },
    deleteRow(index) {
        this.$emit('formDelete', index)
      },
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

<!-- <template>
    <h1>Student Registration</h1>
    <div class="main-block">
    <form action="/">
      <fieldset>
        <legend>
          <h3>Account Details</h3>
        </legend>
        <div  class="account-details">
          <div><label>Email*</label><input type="text" name="name" required></div>
         
        </div>


        
        <div  class="personal-details">
          <div>
            <div><label>Name*</label><input type="text" name="name" required></div>
            <div><label>Phone*</label><input type="text" name="name" required></div>        
            <div>
              <label>Gender*</label>
              <div class="gender">
                <input type="radio" value="none" id="male" name="gender" required/>
                <label for="male" class="radio">Male</label>
                <input type="radio" value="none" id="female" name="gender" required/>
                <label for="female" class="radio">Female</label>
              </div>
          </div>
            
          </div>
        </div>
    </fieldset>
      <button type="submit" href="/">Submit</button>
    </form>
    </div>  -->
<!-- <form>
<div><label>NAME: </label>
<input type="text" name="First_Name" maxlength="30"/>
</div>
<div><label>EMAIL ID</label>
<input type="text" name="Email_Id" maxlength="100" />
</div>
<div><label>PIN CODE</label>
<input type="text" name="Pin_Code" maxlength="6" />
</div>
<div><label>PHONE NUMBER</label>
<input type="text" name="Mobile_Number" maxlength="10" />
</div>
<div><label>GENDER</label>
<input type="radio" value="none" id="male" name="gender" required/>
<label for="male" class="radio">Male</label>
<input type="radio" value="none" id="female" name="gender" required/>
<label for="female" class="radio">Female</label>
</div>
<div><label>HOBBIES</label>
Drawing
<input type="checkbox" name="Hobby_Drawing" value="Drawing" />
Singing
<input type="checkbox" name="Hobby_Singing" value="Singing" />
Dancing
<input type="checkbox" name="Hobby_Dancing" value="Dancing" />
Sketching
<input type="checkbox" name="Hobby_Cooking" value="Cooking" />
<br />
Others
<input type="checkbox" name="Hobby_Other" value="Other">
<input type="text" name="Other_Hobby" maxlength="30" />
</div>

</form> -->
 <!-- <tr>
    <tr>
<td>PIN CODE</td>
<td><input type="text" name="Pin_Code" maxlength="6" />
(6 digit number)
</td>
</tr>
<tr>
<td>EMAIL ID</td>
<td><input type="text" name="Email_Id" maxlength="100" /></td>
</tr>
<td>MOBILE NUMBER</td>
<td>
<input type="text" name="Mobile_Number" maxlength="10" />
(10 digit number)
</td>
</tr>
 

<tr>
<td>GENDER</td>
<td>
Male <input type="radio" name="Gender" value="Male" />
Female <input type="radio" name="Gender" value="Female" />
</td>
</tr>
<tr>
<td>HOBBIES <br /><br /><br /></td>
 
<td>
Drawing
<input type="checkbox" name="Hobby_Drawing" value="Drawing" />
Singing
<input type="checkbox" name="Hobby_Singing" value="Singing" />
Dancing
<input type="checkbox" name="Hobby_Dancing" value="Dancing" />
Sketching
<input type="checkbox" name="Hobby_Cooking" value="Cooking" />
<br />
Others
<input type="checkbox" name="Hobby_Other" value="Other">
<input type="text" name="Other_Hobby" maxlength="30" />
</td>
</tr> -->

<!-- </template>


<script></script>

<style scoped>
      body, div, form, input, select, p { 
      padding: 0;
      margin: 0;
      outline: none;
      font-family: Roboto, Arial, sans-serif;
      font-size: 14px;
      color: #666;
      }
      h1 {
      margin: 0;
      font-weight: 400;
      }
      h3 {
      margin: 12px 0;
      color: #8ebf42;
      }
      .main-block {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      }
      form {
      width: 100%;
      padding: 20px;
      }
     
    
      .account-details >div, .personal-details >div >div {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      }
      .account-details >div, .personal-details >div, input, label {
      width: 100%;
      }
      label {
      padding: 0 5px;
      text-align: right;
      vertical-align: middle;
      }
      input {
      padding: 5px;
      vertical-align: middle;
      }
      .checkbox {
      margin-bottom: 10px;
      }
      select,  .gender {
      width: calc(100% + 26px);
      padding: 5px 0;
      }
      select {
      background: transparent;
      }
      .gender input {
      width: auto;
      } 
      .gender label {
      padding: 0 5px 0 0;
      } 

      .checkbox input {
      width: auto;
      margin: -2px 10px 0 0;
      }
      .checkbox a {
      color: #8ebf42;
      }
      .checkbox a:hover {
      color: #82b534;
      }
      button {
      width: 100%;
      padding: 10px 0;
      margin: 10px auto;
      border-radius: 5px; 
      border: none;
      background: #8ebf42; 
      font-size: 14px;
      font-weight: 600;
      color: #fff;
      }
      button:hover {
      background: #82b534;
      }
      @media (min-width: 568px) {
      .account-details >div, .personal-details >div {
      width: 50%;
      }
      label {
      width: 40%;
      }
      input {
      width: 60%;
      }
      select,  .gender {
      width: calc(60% + 16px);
      }
      }
</style> -->