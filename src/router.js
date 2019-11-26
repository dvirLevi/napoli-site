import Vue from 'vue'
import Router from 'vue-router'
// import store from './store'
import Home from './views/Home.vue'
import Store from './views/Store.vue'
import Pay from './views/Pay.vue'
import BeforPay from './views/BeforPay.vue'
import Contact from './views/Contact.vue'
import Recipes from './views/Recipes.vue'
Vue.use(Router)

let router = new Router({
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
      path: '/befor-pay',
      name: 'befor-pay',
      component: BeforPay
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: Recipes
    },
    {
      path: '/pay',
      // redirect: { name: 'BeforPay' },
      // redirect: to => {
      //   // the function receives the target route as the argument
      //   // return redirect path/location here.
      // },
      name: 'pay',
      component: Pay,
      
    },
    
 
  ]
})

export default router