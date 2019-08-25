import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [{
      name: "דף הבית",
      link: "",
      id: 1
    },
    {
      name: "חוויה איטלקית",
      link: "",
      id: 2
    },
    {
      name: "חנות",
      link: "",
      id: 3
    },
    {
      name: "צור קשר",
      link: "",
      id: 4
    },
  ]
  },
  mutations: {

  },
  actions: {

  }
})
