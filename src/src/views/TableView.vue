<template>
<formSub v-if="isEdit==false" @formUpdated="updateForm" @form-data= "addFormData" :initialData="editData" @formDelete="deleteRow"  />

    <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Roll Number</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Result</th>
            <th>Actions</th>
        </tr>
        <!-- <chid-component @customData="handleEvent"></chid-component> -->
        <tr v-for="(row, index) in formSubmissions" :key="row.id">
          
        <td> {{ row.name }} </td>
        <td> {{ row.email }}</td>
        <td> {{ row.roll_num }}</td>
        <td> {{ row.ph_no }}</td> 
        <td> {{ row.gender }}</td>
        <td> {{ calculateGrade(row.marks) }}</td>
        <td>
            <button @click="editRow(index)" class="edit">Edit</button>
            <button @click="deleteRow(row.id)" class="del">Delete</button>
        </td>
    </tr>
    </table>

    
    </template>

<script>
import FormSub from '../components/FormSub.vue';
import { calculateGrade } from '/src/filters.js';
import axios from 'axios';
export default {
    mounted() {
        this.fetchData();
    },
    updated(){
       //this.fetchData();
    },
    components: {
        FormSub
    },
    data() {
        return {
            formSubmissions: [],
            formData: [],
        //     {
        // name: '',
        // email: '',
        // roll_num: '',
        // ph_no: '',
        // gender: '',
        // marks: '',
        // },
            isEdit: false,
            editData: null,
            editIndex: -1
        };
    },
    methods: {
        fetchData() {
    axios
    .get('http://127.0.0.1:3333/form')
    .then(response => {
        this.formSubmissions = response.data;
        
    })
    .catch(error => {
        console.log('Error')
    })
  },
    //     handleFormSubmitted(formData) {
    //         axios.post('http://127.0.0.1:3333/formP', formData)
    //         .then(response => {
    //   console.log('Data saved successfully:', response.data);
    //   this.fetchData();
    //   this.isEdit = false;
    // })
    // .catch(error => {
    //   console.error('Error saving data:', error);
    // });           
    //     },
        addFormData(row) {
            this.formSubmissions.push(row);
        },
    editRow(index) {
        this.editIndex =index;
    // this.isEdit = true;
      this.editData = { ...this.formSubmissions[index] };

    },
    updateForm(row) {
        const response = axios.put(`http://127.0.0.1:3333/formU/${row.id}`, row);
        this.formSubmissions.splice(this.editIndex,1, response.data);
        //this.editData = { ...this.editData}
        // this.isEdit = false;
      this.editData = null;
    this.editIndex = -1;
    },
    deleteRow(id) {
        axios
        .delete(`http://127.0.0.1:3333/formD/${id}`)
        .then((response) => {
          console.log('Data deleted successfully:', response.data);
          this.fetchData();
        })
        .catch((error) => {
          console.error('Error deleting data:', error);
        });
    }
},
computed: {
    calculateGrade() {
        return calculateGrade;
    }
}
};
</script>

<!-- // export default {
    //     components: {
    //         FormSub,
    //     },
    //     methods: {
    //         handleEvent(data) {
    //             console.log('Received Data: ',data);
    //         },
    //     },
    // }
    // props: { formSubmissions: {
        //     type: Array,
        //     default: () => []
        // } -->


        <style scoped>
        table {
            border-collapse: collapse;
        }
        th, td{
            width: 50%;
            border: 1px solid black;
            padding: 15px;
            text-align: center;
        }
        th {
            font-weight: 700;
            background-color: rgba(0, 0, 0, 0.153);
        }
        .edit {
            background-color: rgba(255, 217, 0, 0.637);
            color: black; 
            padding: 5px 10px; 
            border: none; 
            border-radius: 4px;
        }
        .del {
            margin-top: 10px;
            background-color: rgba(255, 0, 0, 0.715);
            color: black; 
            padding: 5px 10px; 
            border: none; 
            border-radius: 4px;
        }
        </style>