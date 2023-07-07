<template>
    <form @submit="handleSubmit">
      <label>Name:</label>
      <input type="text" v-model="name" required>

      <label>Email:</label>
      <input type="email" v-model="email" required>
  
  
      <label>ROLL NUMBER:</label>
    <input type="number" required name="RollNum" maxlength="6" pattern="[0-9]"/>
        
    <label>PHONE NUMBER</label>
    <input type="text" required name="PhNo" maxlength="10" pattern="[0-9]"/>
  
      <div class="gender">
        <label>GENDER:</label><br>
        <input type="radio" name="gen" v-model="gender" required>
        <label>Male</label><br>
        <input type="radio" name="gen" v-model="gender" required>
        <label>female</label>
      </div>
      
      <div class="hobbies">
        <label>HOBBIES:</label><br>
        <input type="checkbox" v-model="hobbies" required>
        <label>Reading</label><br>
        <input type="checkbox" v-model="hobbies" required>
        <label>Swimming</label><br>
        <input type="checkbox" v-model="hobbies" required>
        <label>Drawing</label><br>
        <input type="checkbox" v-model="hobbies" required>
        <label>Cooking</label><br>
        <input type="text" placeholder="Others" name="Other_Hobby" maxlength="30" />
      </div>
      
      <label>Marks</label>
      <input type="" v-model="mark">

    
      <div class="submit">
        <button>Reset</button>&nbsp;&nbsp;
        <button>Submit</button>
      </div>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        gender: false,
        hobbies: [],
        mark: '',
      }
    },
    methods: {

      handleSubmit() {
  
        this.$emit('submit', 'Data sent from child');
      }
    }
  }
  </script>
  
  <style>
    form {
      max-width: 4200px;
      margin: 30px auto;
      background: rgba(255, 192, 203, 0.237);
      text-align: left;
      padding: 40px;
      border-radius: 10px;
    }
    label {
      color: #252424;
      display: inline-block;
      margin: 25px 0 15px;
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