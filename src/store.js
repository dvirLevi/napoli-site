import Vue from 'vue'
import Vuex from 'vuex'
import postService from '@/Services/postService.js'
import shortid from 'shortid'


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
        name: "עסקת ברטלו מלאה",
        img: require("@/assets/ass26.jpg"),
        description: "",
        specifications: `<li>עסקה איטלקית במחיר משתלם במיוחד!</li>`,
        addCart: false,
        price: 2090,
        previousPrice: 2350,
        amount: 0,
        ifSize: false,
        label: "אזל מהמלאי",
        labelColor: "#716868",
        id: 8
      },
      {
        name: "עסקת ברטלו מורחבת",
        img: require("@/assets/ass35.jpg"),
        description: "",
        specifications: `<li>עסקה איטלקית במחיר משתלם במיוחד!</li>`,
        addCart: false,
        price: 2250,
        previousPrice: 2500,
        amount: 0,
        ifSize: false,
        label: "אזל מהמלאי",
        labelColor: "#716868",
        id: 9
      },
      {
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
        </li><li><span class="border-bottom border-dark">משקל:</span><br> 14.5 ק"ג</li><li><span class="border-bottom border-dark">שטח אבן האפייה:</span><br>רוחב: 31.75 ס"מ <br>עומק: 34.29 ס"מ </li>`,
        addCart: false,
        price: 1490,
        previousPrice: 1590,
        amount: 0,
        ifSize: true,
        label: "אזל מהמלאי",
        labelColor: "#716868",
        id: 1
      },
      {
        name: "מבער גז ברטלו + מגירה משולבת",
        img: require("@/assets/ass27.jpg"),
        description: "",
        specifications: `<li>מבער גז עוצמתי, תוכנן ועוצב במיוחד לתנור ברטלו</li><li>חיבור פשוט ומהיר לתנור</li><li>מתלהט לטמפרטורה של 450 מעלות תוך כ-15 דקות בלבד</li><li>חסכוני בגז – כ-420 גרם בלבד לשעת בעירה</li><li>מספק אש חזקה, יציבה ונקייה לכל אורך השימוש</li><li>כפתור הצתה בטיחותי</li><li>שליטה מלאה על עוצמת הלהבות</li><li>יש לחבר למבער הגז וסת ישראלי תקני בלחץ 30 מיליבר        </li><li>הרכבה באחריות הלקוח, באמצעות טכנאי גז כנדרש ע"פ דין</li><li>אורך:  26.5 ס"מ; רוחב: 15 ס"מ</li>`,
        addCart: false,
        price: 490,
        previousPrice: 590,
        amount: 0,
        ifSize: true,
        label: "אזל מהמלאי",
        labelColor: "#716868",
        id: 2
      },
      {
        name: "כיסוי חוץ לתנור ברטלו",
        img: require("@/assets/ass14.jpg"),
        description: "",
        specifications: `<li>כיסוי ברטלו ייעודי לשמירת התנור מאבק ולכלוך, ולהגנה מפני פגעי מזג האוויר</li><li>שוליים נמתחים להידוק הכיסוי סביב תחתית התנור</li>`,
        addCart: false,
        price: 50,
        previousPrice: 90,
        amount: 0,
        ifSize: false,
        label: "אזל מהמלאי",
        labelColor: "#716868",
        id: 3
      },
      {
        name: "מרדה לתנור ברטלו",
        img: require("@/assets/ass15.jpg"),
        description: "",
        specifications: `<li>מותאמת במיוחד למידות התנור</li><li>כוללת חרירים ייעודיים לעודפי הקמח ולאוורור תחתית הפיצה</li>`,
        addCart: false,
        price: 140,
        previousPrice: 190,
        amount: 0,
        ifSize: false,
        label: "במלאי",
        labelColor: "#716868",
        id: 4
      },
      {
        name: "מד טמפרטורה ברטלו",
        img: require("@/assets/ass36.jpg"),
        description: "",
        specifications: `<li>מותאמת במיוחד למידות התנור</li><li>כוללת חרירים ייעודיים לעודפי הקמח ולאוורור תחתית הפיצה</li>`,
        addCart: false,
        price: 140,
        previousPrice: 190,
        amount: 0,
        ifSize: false,
        label: "במלאי",
        labelColor: "#716868",
        id: 10
      },
      {
        name: "מגירה משולבת עצים + גז לתנור ברטלו",
        img: require("@/assets/ass24.jpg"),
        description: "",
        specifications: `<li>אביזר ייחודי של ברטלו. </li><li>מאפשר הבערה בו זמנית של גז ועצים, לקבלת טעם מעושן אמיתי של הפיצה. </li><li>חיבור נוח של תא פחמים פנימי למבער הגז החיצוני.</li><li>מומלץ! </li>`,
        addCart: false,
        price: 140,
        previousPrice: 190,
        amount: 0,
        ifSize: false,
        label: "אזל מהמלאי",
        labelColor: "#716868",
        id: 6
      },
      {
        name: "אבן אפייה לתנור ברטלו <h6>כל טאבון כולל כבר אבן אפייה!</h6>",
        img: require("@/assets/ass5.png"),
        description: "",
        specifications: `<li>אבן קורדיאריט מינרלית ייחודית ואיכותית במיוחד (מכונה גם אבן שמוט) </li><li>אוגרת את החום בתנור ומפזרת אותו באופן אחיד</li><li>מעניקה תחתית פריכה למאפים</li>`,
        addCart: false,
        price: 140,
        previousPrice: 190,
        amount: 0,
        ifSize: false,
        label: "",
        id: 7
      },
      {
        name: "עסקה נאפוליטנית: תנור + מבער + מגירה משולבת",
        img: require("@/assets/ass27.png"),
        description: "",
        specifications: `<li>עסקה איטלקית במחיר משתלם במיוחד!</li>`,
        addCart: false,
        price: 1980,
        previousPrice: 2090,
        amount: 0,
        ifSize: false,
        label: "אזל מהמלאי",
        labelColor: "#716868",
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
    // ifCode: false,
    priceMessenger: 40,
    // freeMessenger: false,
    percentageOfDiscount: 0,
    integerOfDiscount: 0,
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
    // messenger: state => {
    //   return state.messenger
    // },
    // discount: state => {
    //   if (state.PercentageOfDiscount) {
    //     return state.PercentageOfDiscount;
    //   }
    //   return 0
    // },
    // ifNapoliDeal: (state, getters) => {
    //   let ifNapoliDeal = getters.inCart.filter((val) => {
    //     return val.id === 5
    //   })
    //   if (ifNapoliDeal.length) {
    //     return true
    //   }
    //   return false
    // },
    // IntegerOfDiscount: (state, getters) => {
    //   if (getters.ifNapoliDeal) {
    //     return state.IntegerOfDiscount
    //   } else if (!getters.ifNapoliDeal && state.IntegerOfDiscount < 200 && getters.Payable > 1000){
    //     return state.IntegerOfDiscount
    //   }
    //   return 0
    // },
    discountCompute: (state, getters) => {
      if (state.percentageOfDiscount) {
        let x = getters.Payable / 100;
        let y = x * state.percentageOfDiscount;
        return y
      } else if (state.integerOfDiscount) {
        return state.integerOfDiscount
      }
      return 0
    },
    PayablePlusDiscount: (state, getters) => {
      return getters.Payable - getters.discountCompute;
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
    // pushNameCode(state, nameCode) {
    //   state.codeCoupon = nameCode
    // },
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
      state.integerOfDiscount = 0;
      state.percentageOfDiscount = 0;
    },
    pushDiscount(state, t) {
      state.codeCoupon = t.code;
      if (t.type === "%") {
        state.integerOfDiscount = 0;
        state.percentageOfDiscount = t.discount;
      } else if (t.type === "-") {
        state.percentageOfDiscount = 0;
        state.integerOfDiscount = t.discount;
      }
    },
    // IfCodeTrueInteger(state, n) {
    //   // alert()
    //   state.ifCode = true;
    //   state.IntegerOfDiscount = n;
    // },
    // IfCodeDiscountMessengerTrue(state, n) {
    //   state.ifCode = true;
    //   state.freeMessenger = true;
    //   state.priceMessenger = n;
    // },
  },
  actions: {
    // async sendToMail(store, contentMail) {
    //   return new Promise(async (resolve, reject) => {
    //     try {
    //       let res = await postService.sendMail(contentMail);
    //       resolve(res)
    //     } catch (err) {
    //       reject(err)
    //       console.log(err)
    //     }
    //   })
    // },
    async fbApi(store, obj) {
      obj.event_id = shortid.generate();
      obj.event_source_url = window.location.href;
      let prametersForBowser = () => {
        if (obj.value) return {
          value: obj.value,
          currency: 'ILS'
        }
        return 
      }
      fbq('track', obj.event_name, {
        content_name: obj.event_source_url,
        ...prametersForBowser()
      }, {
        eventID: obj.event_id
      });
      let res = await postService.post('/bertello/fb-conversions-api', obj);
      return res
    }
  }
})