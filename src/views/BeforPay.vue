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
                    <p>סה"כ: {{product.price * product.amount}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            <div class="w-100 center-all">
              <input type="text" placeholder="*מיקוד" pattern="[0-9]+" minlength="5" v-model="clientDatdlis.mikod"
                required>
            </div>
            <div class="w-100 center-all">
              <textarea id="" rows="5" placeholder="הערות" v-model="clientDatdlis.note"></textarea>
            </div>
            <div class="w-100 center-all mt-3 confirm">
              <input type="checkbox" required>
              <p>קראתי והסכמתי <span @click="showModal = !showModal">לתקנון השימוש</span></p>
            </div>
            <Modal v-if="showModal" @customEvent="showModal = !showModal">
          <Regulations/>
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
    methods: {
      nextToPay() {
        if (this.products.length) {
          this.$store.commit('nextPayment')
          this.$router.push('pay')
        } else {
          Swal.fire({
            type: 'error',
            title: 'אופס...',
            text: 'יש להוסיף פריטים לעגלה',
            timer: 1500
          })
        }
      }

    },
    computed: {
      products() {
        return this.$store.getters.inCart
      },
      clientDatdlis() {
        return this.$store.state.clientDatdlis
      },
    }
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