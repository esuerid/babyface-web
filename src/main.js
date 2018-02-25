import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import { router } from './router'
import axios from 'axios'
import { fabric } from 'fabric'
import firebase from 'firebase'
import {store} from './store'
import auth from '@/auth'

// window.token=localStorage.getItem('token');

window.axios=axios
// window.axios.defaults.baseURL='http://weblloapi.dev'
window.axios.defaults.params={api_token:window.token}

import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify)
Vue.use(fabric);
// Vue.use(Vuetify, {
//   theme: {
//     primary: "colors.red.lighten1",
//     secondary: "colors.red.lighten1",
//     accent: "colors.red.lighten1",
//     error: "colors.red.lighten1",
//     warning: "colors.red.lighten1",
//     info: "colors.red.lighten1",
//     success: "colors.red.lighten1"
//   },
//   options: {
//     themeVariations: ['primary', 'secondary']
//   }
// })

Vue.config.productionTip = false

window.Event= new Vue;
// window.baseApiUrl="http://weblloapi.dev/";
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  beforeCreate () {
    auth.init(this)
  },
  render: h => h(App)
})
