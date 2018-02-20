import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Boards from '@/components/Boards'
import Logout from '@/components/Logout'
import SingleBoard from '@/components/SingleBoard'
import ImagePage from '@/components/ImagePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Boards',
      component: Boards
    },{
      path: '/image',
      name: 'ImagePage',
      component: ImagePage
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/register',
      name: 'Register',
      component: Register
    },{
      path: '/logout',
      name: 'Logout',
      component: Logout
    },{
      path: '/boards/:id',
      name: 'SingleBoard',
      component: SingleBoard
    }
  ],
  mode:'history'
})
