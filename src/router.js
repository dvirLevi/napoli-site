import Vue from 'vue'
import Router from 'vue-router'
// import store from './store'
import Home from './views/Home.vue'
import Store from './views/Store.vue'
import Pay from './views/Pay.vue'
import BeforePay from './views/BeforePay.vue'
import Contact from './views/Contact.vue'
import Recipes from './views/Recipes.vue'
import thanks from './views/thanks.vue'
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
      path: '/before-pay',
      name: 'before-pay',
      component: BeforePay
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
      path: '/thanks',
      name: 'thanks',
      component: thanks
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
