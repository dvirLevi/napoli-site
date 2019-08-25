import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [{
        name: "דף הבית",
        link: "/",
        id: 1
      },
      {
        name: "חוויה איטלקית",
        link: "",
        id: 2
      },
      {
        name: "חנות",
        link: "/store",
        id: 3
      },
      {
        name: "צור קשר",
        link: "",
        id: 4
      },
    ],
    products: [{
        name: "תנור פיצה נאפולי",
        img: require("@/assets/ass2.jpg"),
        description: "אחלה תנור",
        price: 300,
        amount: 0,
        id: "1"
      },
      {
        name: "תנור פיצה נאפולי",
        img: require("@/assets/ass2.jpg"),
        description: "אחלה תנור",
        price: 300,
        amount: 0,
        id: "2"
      },
      {
        name: "תנור פיצה נאפולי",
        img: require("@/assets/ass2.jpg"),
        description: "אחלה תנור",
        price: 300,
        amount: 0,
        id: "3"
      },
      {
        name: "תנור פיצה נאפולי",
        img: require("@/assets/ass2.jpg"),
        description: "אחלה תנור",
        price: 300,
        amount: 0,
        id: "4"
      },

    ],
    ifCart: false,
  },
  getters: {
    inCart: state => {
      let inCart = state.products.filter((value) => {
        return value.amount > 0
      })
      return inCart
    }
  },
  mutations: {
    showCart(state) {
      state.ifCart = !state.ifCart
    }
  },
  actions: {

  }
})