import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./style/global.css"
import "./style/main.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import ButtonLink from '@/components/ButtonLink.vue'
import Modal from '@/components/Modal.vue'
import TitleAndBorderR from '@/components/TitleAndBorderR.vue'
import TitleAndBorderC from '@/components/TitleAndBorderC.vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
// import VueAnalytics from 'vue-analytics';
import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: { id: "UA-150230848-1" }
}, router);

// Vue.use(VueAnalytics, {
//   id: 'UA-150230848-1',
//   router
// })


Vue.config.productionTip = false
Vue.component('ButtonLink', ButtonLink)
Vue.component('Modal', Modal)
Vue.component('v-select', vSelect)
Vue.component('TitleAndBorderR', TitleAndBorderR)
Vue.component('TitleAndBorderC', TitleAndBorderC)

// Vue.use(Swal);

new Vue({
  created () {
    AOS.init()
  },
  router,
  store,
  // ButtonLink,
  // Modal,
  render: h => h(App)
}).$mount('#app')
