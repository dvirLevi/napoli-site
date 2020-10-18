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
import TitleAndBorderR from '@/components/TitleAndBorderR.vue'
import TitleAndBorderC from '@/components/TitleAndBorderC.vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
// import VueGtm from 'vue-gtm';



// Vue.use(VueGtm, {
//   id: 'GTM-KXK6ZCV', // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']
//   queryParams: { // Add url query string when load gtm.js with GTM ID (optional)
//     gtm_auth:'AB7cDEf3GHIjkl-MnOP8qr',
//     gtm_preview:'env-4',
//     gtm_cookies_win:'x'
//   },
//   defer: false, // defaults to false. Script can be set to `defer` to increase page-load-time at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible)
//   enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
//   debug: true, // Whether or not display console logs debugs (optional)
//   loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
//   vueRouter: router, // Pass the router instance to automatically sync with router (optional)
//   ignoredViews: ['homepage'], // Don't trigger events for specified router names (case insensitive) (optional)
//   trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
// });


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
