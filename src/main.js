import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "../style/global.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import "../style/fontawesome/css/all.css"
import ButtonLink from '@/components/ButtonLink.vue'
import Modal from '@/components/Modal.vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';


Vue.config.productionTip = false
Vue.component('ButtonLink', ButtonLink)
Vue.component('Modal', Modal)
Vue.component('v-select', vSelect)

new Vue({
  created () {
    AOS.init()
  },
  router,
  store,
  ButtonLink,
  Modal,
  render: h => h(App)
}).$mount('#app')
