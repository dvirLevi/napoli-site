import Vue from 'vue'
import Vuex from 'vuex'
import postService from '@/Services/postService.js'
// import router from './router'


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
        link: "/recipes",
        id: 2
      },
      {
        name: "חנות",
        link: "/store",
        id: 3
      },
      {
        name: "צור קשר",
        link: "/contact",
        id: 4
      },
    ],
    products: [{
        name: "תנור פיצה נאפולי",
        img: require("@/assets/ass6.png"),
        description: `מושלם לאפיית פיצות גורמה, פוקצ'ות, בשרים, ירקות ודגים.
        עשוי מחומרים איכותיים ובעל עיצוב מושלם. 
        לערבי משפחה, לאירוח חברים, או סתם לארוחה זוגית מהנה.
        תתפנקו!        
        `,
        specifications: `<li>מתלהט לטמפרטורה של<span> 450 מעלות </span> תוך <span >כ-15 דקות בלבד</span></li><li>תא בעירה נפרד להזנה באמצעות פחמים, עצים או שבבים</li><li>קל לניקוי ולהרכבה</li><li>עשוי נירוסטה</li><li>מצופה בשכבת מגן מבודדת</li><li>כולל אבן אפייה מיוחדת </li><li><span class="font-weight-bold">אינו כולל מבער גז – מומלץ לרכישה בנפרד!</span></li><li><span class="border-bottom border-dark">מידות חיצוניות:</span><br>
        רוחב: 35.5 ס"מ<br>
        אורך: 54.5 ס"מ<br>
        גובה: 31.5 ס"מ<br>
        </li><li><span class="border-bottom border-dark">משקל:</span><br> 12.5 ק"ג</li><li><span class="border-bottom border-dark">שטח אבן האפייה:</span><br>רוחב: 31.75 ס"מ <br>עומק: 34.29 ס"מ </li>`,
        addCart: false,
        price: 1490,
        previousPrice: 1690,
        amount: 0,
        ifSize: true,
        id: 1
      },
      {
        name: "מבער גז נאפולי",
        img: require("@/assets/ass16.png"),
        description: "",
        specifications: `<li>מבער גז עוצמתי, תוכנן ועוצב במיוחד לתנור נאפולי</li><li>חיבור פשוט ומהיר לתנור</li><li>מתלהט לטמפרטורה של 450 מעלות תוך כ-15 דקות בלבד</li><li>חסכוני בגז – כ-420 גרם בלבד לשעת בעירה</li><li>מספק אש חזקה, יציבה ונקייה לכל אורך השימוש</li><li>כפתור הצתה בטיחותי</li><li>שליטה מלאה על עוצמת הלהבות</li><li>מבער הגז מגיע עם וסת גז אופציונלי (ניתן להרכיב וסתים אחרים בהתאם לסוג הבלון שברשותכם)
        </li><li>הרכבה באחריות הלקוח, באמצעות טכנאי גז כנדרש ע"פ דין</li><li>אורך:  26.5 ס"מ; רוחב: 15 ס"מ</li>`,
        addCart: false,
        price: 290,
        previousPrice: 390,
        amount: 0,
        ifSize: true,
        id: 2
      },
      {
        name: "כיסוי חוץ לתנור נאפולי",
        img: require("@/assets/ass14.jpg"),
        description: "",
        specifications: `<li>כיסוי נאפולי ייעודי לשמירת התנור מאבק ולכלוך, ולהגנה מפני פגעי מזג האוויר</li><li>שוליים נמתחים להידוק הכיסוי סביב תחתית התנור</li>`,
        addCart: false,
        price: 50,
        previousPrice: 90,
        amount: 0,
        ifSize: false,
        id: 3
      },
      {
        name: "מרדה לתנור נאפולי",
        img: require("@/assets/ass15.jpg"),
        description: "",
        specifications: `<li>מותאמת במיוחד למידות התנור</li><li>כוללת חרירים ייעודיים לעודפי הקמח ולאוורור תחתית הפיצה</li>`,
        addCart: false,
        price: 100,
        previousPrice: 190,
        amount: 0,
        ifSize: false,
        id: 4
      },
      {
        name: "עסקה נאפוליטנית בהנחה: תנור + מבער + מרדה + כיסוי",
        img: require("@/assets/ass19.jpg"),
        description: "",
        specifications: `<li>עסקה נאפוליטנית במחיר משתלם במיוחד!</li>`,
        addCart: false,
        price: 1890,
        previousPrice: 2190,
        amount: 0,
        ifSize: false,
        id: 5
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
      // mikod: "",
      note: ""
    },
    nextPayment: false,
    messenger: true,
    priceMessenger: 40,
    ifCode: false,
    // priceMessenger: 40,
    freeMessenger: false,
    PercentageOfDiscount: 0,
    IntegerOfDiscount: 0,
    ifAutoModel: false,
    blockAutoModel: true,
    aleadyUp: [],
    codeCoupon: ""
  },
  getters: {
    inCart: state => {
      let inCart = state.products.filter((value) => {
        return value.amount > 0
      })
      return inCart
    },
    priceMessenger: (state, getters) => {
      if (state.messenger && getters.ifMinPayable) {
        return state.priceMessenger;
      }
      return 0
    },
    messenger: state => {
      return state.messenger
    },
    discount: state => {
      if (state.ifCode) {
        return state.PercentageOfDiscount;
      }
      return 0
    },
    ifNapoliDeal: (state, getters) => {
      let ifNapoliDeal = getters.inCart.filter((val) => {
        return val.id === 5
      })
      if (ifNapoliDeal.length) {
        return true
      }
      return false
    },
    IntegerOfDiscount: (state, getters) => {
      if (getters.ifNapoliDeal) {
        return state.IntegerOfDiscount
      }
      return 0
    },
    PayablePlusDiscount: (state, getters) => {
      if (getters.discount) {
        let x = getters.Payable / 100;
        let y = x * getters.discount
        return getters.Payable - y - getters.IntegerOfDiscount;
      }
      return getters.Payable - getters.IntegerOfDiscount;
    },
    Payable: (state, getters) => {
      let Payable = 0;
      for (let x in getters.inCart) {
        Payable += getters.inCart[x].amount * getters.inCart[x].price;
      }
      return Payable
    },
    ifMinPayable: (state, getters) => {
      if (getters.Payable >= state.products[0].price) {
        return true
      }
      return false
    },
  },
  mutations: {
    showCart(state) {
      state.ifCart = !state.ifCart
    },
    pushNameCode(state, nameCode) {
      state.codeCoupon = nameCode
    },
    upAutoModel(state, routeName) {
      let ifRoute = ""
      state.aleadyUp.map((val) => {
        if (val === routeName) {
          ifRoute = routeName
        }
      })

      if (state.blockAutoModel && !ifRoute.length) {
        state.blockAutoModel = false;
        setTimeout(() => {
          // console.log(router.history.current.name)
          // if (router.history.current.name !== "store") {
            state.ifAutoModel = true;
          // }
          state.blockAutoModel = true;
          state.aleadyUp.push(routeName)
        }, 3000)
      }
    },
    closeAutoModel(state) {
      state.ifAutoModel = false;
    },
    allTimeShowCart(state) {
      state.ifCart = true
    },
    allTimeCloseCart(state) {
      state.ifCart = false
    },
    nextPayment(state) {
      state.nextPayment = true
    },
    ifMessenger(state) {
      // console.log(state.products[0].price)
      // if(this.getters.ifMinPayable){
      //   alert("asd")
      //   state.messenger = false
      // }else {
      //   // alert()
        state.messenger = !state.messenger
      // }
    },
    IfCodeFalse(state) {
      state.ifCode = false;
    },
    IfCodeTrue(state, n) {
      state.ifCode = true;
      state.PercentageOfDiscount = n;
    },
    IfCodeTrueInteger(state, n) {
      state.ifCode = true;
      state.IntegerOfDiscount = n;
    },
    IfCodeDiscountMessengerTrue(state, n) {
      state.ifCode = true;
      state.freeMessenger = true;
      state.priceMessenger = n;
    },
  },
  actions: {
    async sendToMail(store, contentMail) {
      return new Promise(async (resolve, reject) => {
        try {
          let res = await postService.sendMail(contentMail);
          resolve(res)
        } catch (err) {
          reject(err)
          console.log(err)
        }
      })
    }
  }
})