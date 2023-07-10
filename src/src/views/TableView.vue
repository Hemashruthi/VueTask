<template>
    <FormSub @formSubmitted="handleFormSubmitted" v-if="!isEdit" /><br><br>
    <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Roll Number</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Hobbies</th>
            <th>Grade</th>
            <th>Actions</th>
        </tr>
        <!-- <chid-component @customData="handleEvent"></chid-component> -->
        <tr v-for="(row, index) in formSubmissions" :key="index">
           
        <td> {{ row.name }} </td>
        <td> {{ row.email }}</td>
        <td> {{ row.rollNum }}</td>
        <td> {{ row.phNo }}</td>
        
        <td> {{ row.gender }}</td>
        <td>{{ getHobbies(row) }}</td>
        <td> {{ calculateGrade(row.marks) }}</td>
        <td>
            <button @click="editRow(index)" class="edit">Edit</button>
            <button @click="deleteRow(index)" class="del">Delete</button>
        </td>
    </tr>
    </table>

    <formSub v-if="isEdit" @formUpdated="updateForm" :initialData="editData" @formDelete="deleteRow" />
    </template>

<script>
import FormSub from '../components/FormSub.vue';
import { calculateGrade } from '/src/filters.js'
export default {
    components: {
        FormSub
    },
    data() {
        return {
            formSubmissions: [],
            isEdit: false,
            editData: null,
            editIndex: null
        };
    },
    methods: {
        handleFormSubmitted(formData) {
            this.formSubmissions.push({ ...formData, hobbies: [...formData.hobbies] });
            
        },
    editRow(index) {
    this.isEdit = true;
      this.editData = { ...this.formSubmissions[index] };
      this.editIndex=index;
    },
    updateForm(formData) {
        this.formSubmissions.splice(this.editIndex,1, { ...formData, hobbies: [...formData.hobbies] });
        this.isEdit = false;
      this.editData = null;
      this.editIndex = null;
    },
    getHobbies(row) {
      if (Array.isArray(row.hobbies)) {
        return row.hobbies.join(', ');
      } else {
        return '';
      }
    },
    deleteRow(index) {
        this.formSubmissions.splice(index, 1);
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