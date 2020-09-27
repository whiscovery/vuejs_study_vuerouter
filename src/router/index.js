import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

// Component 따로 선언
const About = () => {
  return import(/* webpackChunkName: "about" */ '../views/About.vue')
}
const Users = () => {
  return import(/* webpackChunkName: "users" */ '../views/Users.vue')
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
