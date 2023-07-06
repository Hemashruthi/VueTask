<template>
    <div class="tab">
        <table>
            <caption>EMPLOYEE DETAILS</caption>
            <tr>
                <th>firstName</th>
                <th>lastName</th>
                <th>age</th>
            </tr>
           
            <tr v-for="person in persons" :key="person.id">
                <td>{{ person.firstName }}</td>
                <td>{{ person.lastName }}</td>
                <td>{{ person.age}}</td>
            </tr>
        </table>
    </div>
    <button @click ="changeFirstName">Change the first name</button>
    </template>

    <script>
    
    export default {
        data() {
            return {
                persons: [
                    {firstName: 'Cassie', lastName: 'Clare', age: 30},
                    {firstName: 'Lisa', lastName: 'Brown', age: 20},
                    {firstName: 'Hema', lastName: 'Shruthi', age: 17}
                ]
            };
        }
    };
    </script>
    
    <style scoped>
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
    caption{
        margin-bottom: 20px;
        font-size: 30px;
        font-weight: 700;
    }
    </style>