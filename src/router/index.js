import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import AddTodo from '../pages/AddTodo.vue'
import ViewTodo from '../pages/ViewTodo.vue'
import RecycleBin from '../pages/RecycleBin.vue'

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
  },
  {
    path: '/bin',
    name: 'RecycleBin',
    component: RecycleBin
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
