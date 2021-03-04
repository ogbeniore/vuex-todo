import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import AddTodo from '../pages/AddTodo.vue'
import ViewTodo from '../pages/ViewTodo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add-todo',
    name: 'AddTodo',
    component: AddTodo
  },
  {
    path: '/view-todo/:id',
    name: 'ViewTodo',
    component: ViewTodo
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
