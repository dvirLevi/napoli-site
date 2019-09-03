<template>
  <div>

    <div class="row mt-5 part-shulders pay">
      <div class="col-md-6">
        <div class="row border-bottom">
          <div class="col-md-6 p-5">
            <div class="w-100 center-all">
              <h4>פרטי ההזמנה</h4>
              <div class="w-100" v-for="product in products" :key="product.id">
                <P class="font-weight-bold">{{product.name}}</P>
                <P>מחיר: {{product.price}} ₪</P>
                <P>כמות: {{product.amount}}</P>
                <P>סה"כ למוצר: {{product.amount * product.price}}</P>
              </div>
              <div class="w-100">
                <h5>סה"כ לתשלום: {{Payable}} ₪</h5>
              </div>
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

            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="center-all w-100">
              <ButtonLink text="להמשך קנייה" link="/store" />
              <ButtonLink link="/befor-pay" text="לעריכת פרטים אישיים" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 pay mt-3">
        <div class="center-all w-100">
          <h4 class="w-100 text-center">תשלומים</h4>
          <div class="center-all select-num-payment">
            <v-select class="w-100" :clearable="false" dir="rtl" :options="['1 ', '2', '3']" v-model="numPay">
            </v-select>
            <p class="w-100" v-if="ifCredit == 8">תשלום ראשון: {{firstPayAmount}} ₪</p>
            <p class="w-100" v-if="ifCredit == 8">שאר התשלומים: {{namPayAmount}} ₪</p>
            <p class="w-100">סה"כ: {{Payable}} ₪</p>
          </div>
        </div>
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
        // payment: false,
        numPay: 1,
      }
    },
    created() {
      if (!this.$store.state.nextPayment) {
        this.$router.push('befor-pay')
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
        if (this.ifCredit == 8) {
          return `https://direct.tranzila.com/sabresltd/iframenew.php?sum=${this.Payable}&currency=1&cred_type=${this.ifCredit}&npay=${this.numPay - 1}&spay=${this.namPayAmount}&fpay=${this.firstPayAmount}&lang=il&contact=${this.clientDatdlis.name}&phone=${this.clientDatdlis.tel}&email=${this.clientDatdlis.mail}&city=${this.clientDatdlis.city}&address=${this.clientDatdlis.address + this.clientDatdlis.namHome + this.clientDatdlis.mikod}&pdesc=${this.clientDatdlis.note}`
        }
        return `https://direct.tranzila.com/sabresltd/iframenew.php?sum=${this.Payable}&currency=1&cred_type=${this.ifCredit}&lang=il&contact=${this.clientDatdlis.name}&phone=${this.clientDatdlis.tel}&email=${this.clientDatdlis.mail}&city=${this.clientDatdlis.city}&address=${this.clientDatdlis.address + this.clientDatdlis.namHome + this.clientDatdlis.mikod}&pdesc=${this.clientDatdlis.note}`
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
      clientDatdlis() {
        return this.$store.state.clientDatdlis
      },
        //תשלום ראשון
      firstPayAmount() {
        let x  = this.namPayAmount * this.numPay;
        let y = this.Payable - x;
        return  this.namPayAmount + y
      },
      //שאר תשלומים
      namPayAmount() {
        let nam = this.Payable / this.numPay;
        return  Math.floor(nam)
      },
      ifCredit() {
        if (this.numPay == 1) {
          return 1
        }
        return 8
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

  .pay p {
    font-size: 18px !important;
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
    margin-top: 20px;
    font-weight: 400;
  }

  button:hover {
    background-color: #8c8c8c;
  }

  .product-in-cart {
    border-bottom: solid #dee2e6 1px;
  }

  .product-in-cart:last-child {
    border-bottom: none;
  }

  .select-num-payment {
    width: 50%;
  }

  @media (max-width: 767.98px) {
    input {
      width: 90%;
    }

    textarea {
      width: 90%;
    }

    .select-num-payment {
      width: 100%;
    }
  }
</style>