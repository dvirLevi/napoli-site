<template>
  <div>
    <div class="row mt-5 part-shulders stap-one">
      <div class="col-md-6 mt-3">
        <div class="center-all">
          <TitleAndBorderC>מוצרים בעגלה</TitleAndBorderC>
          <div class="w-100 center-all mt-5">
            <div class=" w-100 product-in-cart" v-for="product in products" :key="product.id">
              <div class="box-product">
                <div class="row mb-3 mt-3">
                  <div class="col-md-6 center-all">
                    <img class="w-25" :src="product.img" alt="">
                  </div>
                  <div class="col-md-6 ">
                    <h5>{{product.name}}</h5>
                    <p>{{product.price}} ₪</p>
                    <p>כמות: {{product.amount}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
         <template v-if="products.length">
            <div class="w-100 center-all border-top p-4">
              <p class="w-100" v-if="discount">הנחת קופון: {{discount}}%-</p>
              <p class="w-100">סה"כ: {{PayablePlusDiscount}} ₪</p>
              <template v-if="priceMessenger">
                <p class="w-100">משלוח עד הבית {{priceMessenger}} ₪</p>
                <p class="w-100">סה"כ כולל משלוח : {{PayablePlusDiscount + priceMessenger}} ₪</p>
              </template>
            </div>
            <div class="w-100 center-all border-top">
              <p class="w-100" v-if="!ifMinPayable">מחיר מינימום למשלוח {{minPrice}} ₪</p>
              <p class="w-100" v-else-if="ifCode && !priceMessenger">משלוח חינם</p>

              <template>
                <div class="w-100 center-all mt-3 confirm">
                  <input type="checkbox" :checked="!priceMessenger && !ifCode || !ifMinPayable" @click="ifMessenger"
                    required>
                  <p>איסוף עצמי</p>
                </div>
                <p class="w-100 text-center">כתובת לאיסוף: רחוב שמריהו לוין 13, ירושלים. בתיאום מראש. </p>
              </template>
            </div>
          </template>
          <template v-else>
            <h4>אין מוצרים בעגלה</h4>
          </template>
        </div>
      </div>
      <div class="col-md-6 mt-3">
        <div class="w-100 center-all">
          <form @submit.prevent="nextToPay" class=" center-all">
            <TitleAndBorderC>פרטים אישיים</TitleAndBorderC>
            <div class="w-100 center-all mt-5">
              <input type="text" placeholder="*שם מלא" v-model="clientDatdlis.name" required>
            </div>
            <div class="w-100 center-all">
              <input type="tel" placeholder="*טלפון" pattern="[0-9]+" minlength="9" maxlength="11"
                v-model="clientDatdlis.tel" required>
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
            <!-- <div class="w-100 center-all">
              <input type="text" placeholder="*מיקוד" pattern="[0-9]+" minlength="5" v-model="clientDatdlis.mikod"
                required>
            </div> -->
            <div class="w-100 center-all">
              <textarea id="" rows="5" placeholder="הערות" v-model="clientDatdlis.note"></textarea>
            </div>
            <div class="w-100 center-all mt-3 confirm">
              <input type="checkbox" required>
              <p>קראתי והסכמתי <span @click="showModal = !showModal">לתקנון השימוש</span></p>
            </div>
            <Modal v-if="showModal" @customEvent="showModal = !showModal">
              <Regulations />
            </Modal>
            <div class="w-100 center-all mt-3">
              <ButtonLink text="להמשך קנייה" link="/store" />
              <button type="submit">המשך לתשלום מאובטח</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Regulations from '@/components/Regulations.vue'
  import Swal from 'sweetalert2'
  import analyticsPages from '@/helpers/analyticsPages.js'


  export default {
    name: 'BeforPay',
    components: {
      Regulations
    },
    data() {
      return {
        showModal: false,
      }
    },
    mounted(){
       fbq('track', 'ViewContent', {
        content_name: this.$route.name, 
      });
      analyticsPages(this.$route.name)
    },
    methods: {
      nextToPay() {
        if (this.products.length) {
          this.$store.commit('nextPayment');
          this.$router.push('pay');
          fbq('track', 'AddPaymentInfo');
        } else {
          Swal.fire({
            type: 'error',
            title: 'אופס...',
            text: 'יש להוסיף פריטים לעגלה',
            timer: 1500
          });
        }
      },
      ifMessenger() {
        this.$store.commit('ifMessenger');
      }
    },
    computed: {
      products() {
        return this.$store.getters.inCart
      },
      priceMessenger() {
        return this.$store.getters.priceMessenger
      },
      messenger() {
        return this.$store.state.messenger
      },
      clientDatdlis() {
        return this.$store.state.clientDatdlis
      },
      Payable() {
        return  this.$store.getters.Payable
      },
      PayablePlusDiscount() {
       return this.$store.getters.PayablePlusDiscount
      },
      ifMinPayable() {
        return this.$store.getters.ifMinPayable
      },
      discount() {
        return this.$store.getters.discount
      },
    },

  }
</script>

<style scoped>
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

  .pay input {
    width: 357px;
    border: none;
    border-bottom: solid #9E9E9E 1px;
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

  .stap-one p {
    margin: 0;
    font-size: 18px !important;
  }

  .stap-one p span {
    font-size: 18px !important;
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

  .confirm span {
    color: #ff3d00;
    cursor: pointer;
    font-size: 22px !important;
    font-weight: 500 !important;
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

    .confirm span {
      font-size: 20px !important;
    }
  }
</style>