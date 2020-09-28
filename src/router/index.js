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
const UsersDetail = () => {
  return import(/* webpackChunkName: "usersdetail" */ '../views/UsersDetail.vue')
}
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/users',
    name: 'users',
    component: Users,
    // 새로운 주소 리스트
    children: [
      {
        path: ':id', // 입력을 받아오는 것이므로 바인딩
        name: 'users-detail',
        component: UsersDetail
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
