<template>
  <div>
    <div class="row mt-5 part-shulders" v-show="!payment">
      <!-- <template v-show="!payment"> -->
      <div class="col-md-6 mt-3">
        <div class="center-all">
          <h2>מוצרים בסל</h2>
          <div class="w-100 center-all mt-5">
            <div class=" w-100" v-for="product in products" :key="product.id">
              <div class="box-product">
                <div class="row mt-3">
                  <div class="col-md-6 center-all">
                    <img class="w-25" :src="product.img" alt="">
                  </div>
                  <div class="col-md-6 ">
                    <h5>{{product.name}}</h5>
                    <p>{{product.price}} ₪</p>
                    <p>כמות: {{product.amount}}</p>
                    <p>סה"כ: {{product.price * product.amount}}</p>
                  </div>
                </div>
              </div>
            </div>
            <ButtonLink text="להמשך קנייה" link="/store" />
          </div>
        </div>
      </div>
      <div class="col-md-6 mt-3">
        <div class="w-100 center-all">
          <form @submit.prevent="nextToPay" class=" center-all">
            <h2>פרטים אישיים</h2>
            <div class="w-100 center-all mt-5">
              <input type="text" placeholder="*שם מלא" v-model="clientDatdlis.name" required>
            </div>
            <div class="w-100 center-all">
              <input type="tel" placeholder="*טלפון" minlength="9" v-model="clientDatdlis.tel" required>
            </div>
            <div class="w-100 center-all">
              <input type="email" placeholder='*דוא"ל' v-model="clientDatdlis.mail" required>
            </div>
            <div class="w-100 center-all">
              <input type="text" placeholder="*עיר" v-model="clientDatdlis.city" required>
            </div>
            <div class="w-100 center-all">
              <input type="text" placeholder="*רחוב" v-model="clientDatdlis.address" required>
            </div>
            <div class="w-100 center-all">
              <input type="text" placeholder="*מספר בית" v-model="clientDatdlis.namHome" required>
            </div>
            <div class="w-100 center-all">
              <input type="text" placeholder="*מיקוד" minlength="5" v-model="clientDatdlis.mikod" required>
            </div>
            <div class="w-100 center-all">
              <textarea id="" rows="5" placeholder="הערות" v-model="clientDatdlis.note"></textarea>
            </div>
            <div class="w-100 center-all mt-3">
              <input type="checkbox" required>קראת והסכמתי לתקנון השימוש
            </div>
            <div class="w-100 center-all mt-3">
              <button type="submit">המשך לתשלום מאובטח</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- </template> -->
    <div class="row mt-5 part-shulders" v-show="payment">
      <!-- <template v-show="payment"> -->
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-6 p-5">
            <div class="w-100 center-all">
              <h4>פרטי ההזמנה</h4>
              <div class="w-100" v-for="product in products" :key="product.id">
                <P class="font-weight-bold">{{product.name}}</P>
                <P>מחיר: {{product.price}} ₪</P>
                <P>כמות: {{product.amount}}</P>
                <P>סה"כ למוצר: {{product.amount * product.price}}</P>
              </div>
              <h5>סה"כ לתשלום: {{Payable}} ₪</h5>
              <ButtonLink text="להמשך קנייה" link="/store" />

            </div>
          </div>
          <div class="col-md-6 p-5">
            <div class="w-100 center-all">
              <h4>פרטי הלקוח</h4>
              <div class="w-100">
                <P>שם: {{clientDatdlis.name}}</P>
                <P>טלפון: {{clientDatdlis.tel}}</P>
                <P>מייל: {{clientDatdlis.mail}}</P>
                <P>עיר: {{clientDatdlis.city}}</P>
                <P>רחוב: {{clientDatdlis.address}}</P>
                <P>מס' בית: {{clientDatdlis.namHome}}</P>
                <P>מיקוד: {{clientDatdlis.mikod}}</P>
                <P>הערות: {{clientDatdlis.note}}</P>
              </div>
              <ButtonLink @customEvent="payment = !payment" text="לעריכת פרטים אישיים" link="" />

            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="center-all w-100">
          <iframe class="mt-5" :src="iframeUrl" height="570" :width="ifWidth"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import OnNapoli from '@/components/OnNapoli.vue'


  export default {
    name: 'Pay',
    components: {},
    data() {
      return {
        payment: false,
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
      }
    },
    methods: {
      nextToPay() {
        this.payment = true;
      }

    },
    computed: {
      ifWidth() {
        if (window.innerWidth > 767) {
          return 500
        }
        return 300
      },
      iframeUrl() {
        return `https://direct.tranzila.com/sabresltd/iframenew.php?sum=${this.Payable}&currency=1&cred_type=1&lang=il&contact=${this.clientDatdlis.name}&phone=${this.clientDatdlis.tel}&email=${this.clientDatdlis.mail}&city=${this.clientDatdlis.city}&address=${this.clientDatdlis.address + this.clientDatdlis.namHome + this.clientDatdlis.mikod}&pdesc=${this.clientDatdlis.note}`
      },
      Payable() {
        let Payable = 0;
        for (let x in this.$store.getters.inCart) {
          Payable += this.$store.getters.inCart[x].amount * this.$store.getters.inCart[x].price;
        }
        return Payable
      },
      products() {
        return this.$store.getters.inCart
      },
    }
  }
</script>

<style scoped>
  iframe {
    border: none;
  }

  input {
    width: 80%;
    margin: 8px;
    padding: 5px;
    border: solid black 2px;
  }

  textarea {
    width: 80%;
    margin: 8px;
    padding: 5px;
    border: solid black 2px;
  }

  input[type="checkbox"] {
    width: 20px;
    margin: 5px;
    padding: 5px;
    border: solid black 2px;
  }

  form {
    width: 100%;
  }

  button {
    border: none;
    background-color: black;
    color: #ffffff;
    padding: 10px;
    outline: none;
    margin: 5px;
  }

  button:hover {
    border: none;
    background-color: #8c8c8c;
    color: #ffffff;
    padding: 10px;
    outline: none;
    margin: 5px;
  }

  p {
    margin: 0;
  }

  @media (max-width: 767.98px) {
    input {
      width: 90%;
    }

    textarea {
      width: 90%;
    }
  }
</style>