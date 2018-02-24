import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Boards from '@/components/Boards'
import Logout from '@/components/Logout'
import SingleBoard from '@/components/SingleBoard'
import ImagePage from '@/components/ImagePage'
import Dashboard from '@/components/Dashboard'
import Auth from '@/components/Auth'
import auth from '@/auth'
import Home from '@/components/Home'

Vue.use(Router)

var routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/auth',
      name: 'auth',
      component: Auth,
      meta: { guestOnly: true }
    },{
      path: '/image',
      name: 'ImagePage',
      component: ImagePage
    },{
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: { requireAuth: true }
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
]

export const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  let currentUser = auth.user()
  let requireAuth = to.matched.some(record => record.meta.requireAuth)
  let guestOnly = to.matched.some(record => record.meta.guestOnly)

  if (requireAuth && !currentUser) next('home')
  else if (guestOnly && currentUser) next('dashboard')
  else next()
})
