<template>
  <div class="row mt-5">
    <template v-if="!payment">
      <div class="col-12">
        <div class="w-100 center-all">
          <form @submit.prevent="nextToPay" class=" center-all">
            <h2>פרטי הלקוח</h2>
            <div class="w-100 center-all">
              <input type="text" placeholder="שם מלא" v-model="clientDatdlis.name" required>
            </div>
            <div class="w-100 center-all">
              <input type="tel" placeholder="טלפון" v-model="clientDatdlis.tel" required>
            </div>
            <div class="w-100 center-all">
              <input type="email" placeholder='דוא"ל' v-model="clientDatdlis.mail" required>
            </div>
            <div class="w-100 center-all">
              <input type="text" placeholder="עיר" v-model="clientDatdlis.city" required>
            </div>
            <div class="w-100 center-all">
              <input type="text" placeholder="רחוב, מספר בית, ומיקוד" v-model="clientDatdlis.address" required>
            </div>
            <div class="w-50 text-right">
              <input type="checkbox" required>קראת והסכמתי לתקנון השימוש
            </div>
            <div class="w-100 center-all">
              <button type="submit">המשך לתשלום</button>
            </div>
          </form>
        </div>
      </div>
    </template>
    <template v-if="payment">
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-6 p-5">
            <div class="w-100 center-all">
              <h4>פרטי ההזמנה</h4>
              <div class="w-100" v-for="product in products" :key="product.id">
                <P>מוצר: {{product.name}}</P>
                <P>מחיר: {{product.price}} ₪</P>
                <P>כמות: {{product.amount}}</P>
                <P>סה"כ למוצר: {{product.amount * product.price}}</P>
              </div>
            </div>
          </div>
          <div class="col-md-6 p-5">
            <div class="w-100 center-all">
              <h4>פרטי הלקוח</h4>
              <div class="w-100" v-for="product in products" :key="product.id">
                <P>שם: {{clientDatdlis.name}}</P>
                <P>טלפון: {{clientDatdlis.tel}}</P>
                <P>מייל: {{clientDatdlis.mail}}</P>
                <P>עיר: {{clientDatdlis.city}}</P>
                <P>כתובת: {{clientDatdlis.address}}</P>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="col-md-6">
        <iframe :src="iframeUrl" height="570" width="455"></iframe>
      </div>
    </template>
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
          address: ""
        },
      }
    },
    methods: {
      nextToPay() {
        this.payment = true;
      }

    },
    computed: {
      iframeUrl() {
        return `https://direct.tranzila.com/sabresltd/iframenew.php?sum=${this.Payable}&currency=1&cred_type=1&lang=il&contact=${this.clientDatdlis.name}&phone=${this.clientDatdlis.tel}&email=${this.clientDatdlis.mail}&city=${this.clientDatdlis.city}&address=${this.clientDatdlis.address}`
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
    width: 50%;
    margin: 5px;
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
    width: 50%;
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

  @media (max-width: 767.98px) {
    form {
      width: 100%;
    }
  }
</style>