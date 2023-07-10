import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Task1View from '../views/Task1View.vue';
import Task2View from '../views/Task2View.vue';
import PracticeView from '../views/PracticeView.vue'
import TableView from "../views/TableView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path: '/home',
    name: 'home',
    component: HomeView
   },
   {
    path: '/task1',
    name: 'task1',
    component: Task1View
   },
   {
    path: '/task2',
    name: 'task2',
    component: Task2View
   },
   {
    path: '/prac',
    name: 'prac',
    component: PracticeView
   },
   {
    path: '/form',
    name: 'form',
    component: TableView,
    props: true
   }
  ]
})

export default router
