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
        link: "/asd",
        id: 2
      },
      {
        name: "חנות",
        link: "/store",
        id: 3
      },
      {
        name: "צור קשר",
        link: "/aasd",
        id: 4
      },
    ],
    products: [{
        name: "תנור פיצה נאפולי",
        img: require("@/assets/ass6.png"),
        description: "אחלה תנור",
        addCart: false,
        price: 1650,
        amount: 0,
        id: "1"
      },
      {
        name: "מבער גז נאפולי",
        img: require("@/assets/ass16.png"),
        description: "אחלה תנור",
        addCart: false,
        price: 350,
        amount: 0,
        id: "2"
      },
      {
        name: "כיסוי חוץ לתנור נאפולי",
        img: require("@/assets/ass14.jpg"),
        description: "אחלה תנור",
        addCart: false,
        price: 150,
        amount: 0,
        id: "3"
      },
      {
        name: "מרדה לתנור נאפולי",
        img: require("@/assets/ass15.jpg"),
        description: "אחלה תנור",
        addCart: false,
        price: 220,
        amount: 0,
        id: "4"
      },

    ],
    ifCart: false,
    clientDatdlis: {
      name: "",
      tel: "",
      mail: "",
      city: "",
      address: "",
      namHome: "",
      mikod: "",
      note: ""
    },
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
    },
    allTimeShowCart(state) {
      state.ifCart = true
    },
    allTimeCloseCart(state) {
      state.ifCart = false
    }
  },
  actions: {

  }
})