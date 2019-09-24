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
        price: 1450,
        // price: 1,
        amount: 0,
        id: 1
      },
      {
        name: "מבער גז נאפולי",
        img: require("@/assets/ass16.png"),
        description: "",
        specifications: `<li>מבער גז עוצמתי, תוכנן ועוצב במיוחד לתנור נאפולי</li><li>חיבור פשוט ומהיר לתנור</li><li>מתלהט לטמפרטורה של 450 מעלות תוך כ-15 דקות בלבד</li><li>חסכוני בגז – כ-420 גרם בלבד לשעת בעירה</li><li>מספק אש חזקה, יציבה ונקייה לכל אורך השימוש</li><li>כפתור הצתה בטיחותי</li><li>שליטה מלאה על עוצמת הלהבות</li><li>מבער הגז מגיע עם וסת גז אופציונלי (ניתן להרכיב וסתים אחרים בהתאם לסוג הבלון שברשותכם)
        </li><li>אורך:  26.5 ס"מ; רוחב: 15 ס"מ</li>`,
        addCart: false,
        price: 350,
        amount: 0,
        id: 2
      },
      {
        name: "כיסוי חוץ לתנור נאפולי",
        img: require("@/assets/ass14.jpg"),
        description: "",
        specifications: `<li>כיסוי נאפולי ייעודי לשמירת התנור מאבק ולכלוך, ולהגנה מפני פגעי מזג האוויר</li><li>שוליים נמתחים להידוק הכיסוי סביב תחתית התנור</li>`,
        addCart: false,
        price: 100,
        amount: 0,
        id: 3
      },
      {
        name: "מרדה לתנור נאפולי",
        img: require("@/assets/ass15.jpg"),
        description: "",
        specifications: `<li>מותאמת במיוחד למידות התנור</li><li>כוללת חרירים ייעודיים לעודפי הקמח ולאוורור תחתית הפיצה</li>`,
        addCart: false,
        price: 150,
        amount: 0,
        id: 4
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
    nextPayment: false,
    messenger: true,
    ifCode: false,
  },
  getters: {
    inCart: state => {
      let inCart = state.products.filter((value) => {
        return value.amount > 0
      })
      return inCart
    },
    priceMessenger: state => {
      if (state.messenger) {
        return 40
      }
      return 0
    },
    messenger: state => {
      return state.messenger
    },
    discount: state => {
      if (state.ifCode) {
        return 45
      }
      return 0
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
    IfCodeTrue(state) {
      state.ifCode = true;
    },
  },
  actions: {
    async sendToMail(store, contentMail) {
      try {
        this.articles = await postService.sendMail(contentMail);

      } catch (err) {
        console.log(err)
      }
    }
  }
})