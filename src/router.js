import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Store from './views/Store.vue'
import Pay from './views/Pay.vue'
Vue.use(Router)

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/store',
      name: 'store',
      component: Store
    },
    {
      path: '/pay',
      name: 'pay',
      component: Pay
    },
 
  ]
})
