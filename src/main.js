import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "../style/global.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import "../style/fontawesome/css/all.css"

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
