import Vue from 'vue'
import Vuex from 'vuex'
import postService from '@/Services/postService.js'


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
        // name: `תנור פיצה ברטלו <br><span style="font-weight: normal">(אבן אפייה כלולה)</span>`,
        name: `תנור פיצה ברטלו`,
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
        price: 1431,
        previousPrice: 1590,
        amount: 0,
        ifSize: true,
        label: "",
        id: 1
      },
      {
        name: "מבער גז ברטלו",
        img: require("@/assets/ass16.png"),
        description: "",
        specifications: `<li>מבער גז עוצמתי, תוכנן ועוצב במיוחד לתנור ברטלו</li><li>חיבור פשוט ומהיר לתנור</li><li>מתלהט לטמפרטורה של 450 מעלות תוך כ-15 דקות בלבד</li><li>חסכוני בגז – כ-420 גרם בלבד לשעת בעירה</li><li>מספק אש חזקה, יציבה ונקייה לכל אורך השימוש</li><li>כפתור הצתה בטיחותי</li><li>שליטה מלאה על עוצמת הלהבות</li><li>יש לחבר למבער הגז וסת ישראלי תקני בלחץ 30 מיליבר        </li><li>הרכבה באחריות הלקוח, באמצעות טכנאי גז כנדרש ע"פ דין</li><li>אורך:  26.5 ס"מ; רוחב: 15 ס"מ</li>`,
        addCart: false,
        price: 351,
        previousPrice: 390,
        amount: 0,
        ifSize: true,
        label: "",
        id: 2
      },
      {
        name: "כיסוי חוץ לתנור ברטלו",
        img: require("@/assets/ass14.jpg"),
        description: "",
        specifications: `<li>כיסוי ברטלו ייעודי לשמירת התנור מאבק ולכלוך, ולהגנה מפני פגעי מזג האוויר</li><li>שוליים נמתחים להידוק הכיסוי סביב תחתית התנור</li>`,
        addCart: false,
        price: 81,
        previousPrice: 90,
        amount: 0,
        ifSize: false,
        label: "",
        id: 3
      },
      {
        name: "מרדה לתנור ברטלו",
        img: require("@/assets/ass15.jpg"),
        description: "",
        specifications: `<li>מותאמת במיוחד למידות התנור</li><li>כוללת חרירים ייעודיים לעודפי הקמח ולאוורור תחתית הפיצה</li>`,
        addCart: false,
        price: 171,
        previousPrice: 190,
        amount: 0,
        ifSize: false,
        label: "",
        id: 4
      },
      {
        name: "מגירה משולבת פחמים + גז לתנור ברטלו",
        img: require("@/assets/ass24.jpg"),
        description: "",
        specifications: `<li>אביזר ייחודי של ברטלו. </li><li>מאפשר הבערה בו זמנית של גז ועצים, לקבלת טעם מעושן אמיתי של הפיצה. </li><li>חיבור נוח של תא פחמים פנימי למבער הגז החיצוני.</li><li>מומלץ! </li>`,
        addCart: false,
        price: 157,
        previousPrice: 175,
        amount: 0,
        ifSize: false,
        label: "",
        id: 6
      },
      // {
      //   name: "אבן אפייה לתנור ברטלו",
      //   img: require("@/assets/ass25.jpg"),
      //   description: "",
      //   specifications: `<li>אבן קורדיאריט מינרלית ייחודית ואיכותית במיוחד (מכונה גם אבן שמוט) </li><li>אוגרת את החום בתנור ומפזרת אותו באופן אחיד</li><li>מעניקה תחתית פריכה למאפים</li>`,
      //   addCart: false,
      //   price: 175,
      //   previousPrice: 0,
      //   amount: 0,
      //   ifSize: false,
      //   label: "",
      //   id: 7
      // },
      {
        name: "עסקה נאפוליטנית בהנחה: תנור + מבער + מרדה + כיסוי",
        img: require("@/assets/ass19.jpg"),
        description: "",
        specifications: `<li>עסקה איטלקית במחיר משתלם במיוחד!</li>`,
        addCart: false,
        price: 1971,
        previousPrice: 2190,
        amount: 0,
        ifSize: false,
        label: "",
        id: 5
      },
      {
        name: "עסקה איטלקית בהנחה: תנור + מבער + מרדה + מגירה משולבת + כיסוי",
        img: require("@/assets/ass26.jpg"),
        description: "",
        specifications: `<li>עסקה איטלקית במחיר משתלם במיוחד!</li>`,
        addCart: false,
        price: 2115,
        previousPrice: 2350,
        amount: 0,
        ifSize: false,
        label: "",
        id: 8
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
    ifCode: false,
    priceMessenger: 0,
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
      } else if (!getters.ifNapoliDeal && state.IntegerOfDiscount < 200 && getters.Payable > 1000){
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
      // if (getters.Payable >= state.products[0].price) {
        if (getters.Payable >= 0) {
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
          state.ifAutoModel = true;
          state.blockAutoModel = true;
          state.aleadyUp.push(routeName)
        }, 5000)
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
      state.messenger = !state.messenger
    },
    IfCodeFalse(state) {
      state.ifCode = false;
    },
    IfCodeTrue(state, n) {
      state.ifCode = true;
      state.PercentageOfDiscount = n;
    },
    IfCodeTrueInteger(state, n) {
      // alert()
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