import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "../style/global.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import "../style/fontawesome/css/all.css"
import ButtonLink from '@/components/ButtonLink.vue'

Vue.config.productionTip = false
Vue.component('ButtonLink', ButtonLink)

new Vue({
  created () {
    AOS.init()
  },
  router,
  store,
  ButtonLink,
  render: h => h(App)
}).$mount('#app')
