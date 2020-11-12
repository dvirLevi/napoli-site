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
                <p class="w-100" v-if="discount">הנחת קופון: {{discount}}%- </p>
                <p class="w-100" v-if="priceMessenger">משלוח עד הבית {{priceMessenger}} ₪</p>
                <h5>סה"כ לתשלום: {{allPayable}} ₪</h5>
                <!-- <h5>סה"כ לתשלום <span v-if="messenger">כולל משלוח</span>: {{allPayable}} ₪</h5> -->
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
                <!-- <P>מיקוד: {{clientDatdlis.mikod}}</P> -->
                <P>הערות: {{clientDatdlis.note}}</P>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="center-all w-100">
              <ButtonLink text="חזרה לחנות" link="/store" />
              <ButtonLink link="/before-pay" text="לעריכת פרטים אישיים" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 pay mt-3">
        <form v-show="false" ref="myForm" name='formname' method='POST'
          action='https://direct.tranzila.com/sabresltd/iframenew.php' target='iframe'>

          <input id="sum" name="sum" :value="allPayable">
          <input id="currency" name="currency" value="1">
          <input id="lang" name="lang" value="il">
          <input id="cred_type" name="cred_type" :value="ifCredit">
          <input v-if="ifCredit === 8" id="npay" name="npay" :value="numPay - 1">
          <input v-if="ifCredit === 8" id="spay" name="spay" :value="namPayAmount">
          <input v-if="ifCredit === 8" id="fpay" name="fpay" :value="firstPayAmount">
          <input id="contact" name="contact" :value="clientDatdlis.name">
          <input id="phone" name="phone" :value="clientDatdlis.tel">
          <input id="email" name="email" :value="clientDatdlis.mail">
          <input id="city" name="city" :value="clientDatdlis.city">
          <input id="address" name="address"
            :value="clientDatdlis.address +' '+ clientDatdlis.namHome +' '+ codeCouponName">
          <input id="json_purchase_data" name="json_purchase_data" :value="JSonProducts">
          <input id="u71" name="u71" value="1">
          <button type="submit"></button>
        </form>
        <div class="center-all w-100">
          <h4 class="w-100 text-center">תשלומים</h4>
          <div class="center-all select-num-payment">
            <v-select class="w-100" :clearable="false" dir="rtl"
              :options="['1', '2', '3', '4', '5 ', '6', '7', '8', '9', '10']" v-model="numPay">
            </v-select>
            <p class="w-100" v-if="ifCredit == 8">תשלום ראשון: {{firstPayAmount}} ₪</p>
            <p class="w-100" v-if="ifCredit == 8">שאר התשלומים: {{namPayAmount}} ₪</p>
            <p class="w-100">סה"כ: {{allPayable}} ₪</p>
          </div>
        </div>
        <div class="center-all w-100">
          <iframe name="iframe" @load="endPay" class="mt-5" height="650" :width="ifWidth"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import analyticsPages from '@/helpers/analyticsPages.js'
  import shortid from 'shortid'


  export default {
    name: 'Pay',
    components: {},
    data() {
      return {
        numPay: 1,
        numOfLoadIframe: 0
      }
    },
    created() {
      if (!this.$store.state.nextPayment) {
        this.$router.push('before-pay')
      }
    },
    mounted() {
      this.$refs.myForm.submit();
      fbq('track', 'ViewContent', {
        content_name: this.$route.name,
      });
      analyticsPages(this.$route.name)
    },
    methods: {
      nextToPay() {
        this.payment = true;
      },
      vat(num) {
        let vat = num / 1.17;
        return vat.toFixed(2);
      },
      endPay() {
        this.numOfLoadIframe = this.numOfLoadIframe + 1;
        if (this.numOfLoadIframe > 1) {
          setInterval(() => {
            let ifPay = localStorage.getItem("ifPay");
            if (ifPay) {
              this.$router.push("/thanks");

              fbq('track', 'Purchase', {
                value: this.allPayable,
                currency: 'ILS'
              });

              gtag('event', 'purchase', {
                'event_category': 'purchase',
                'event_label': 'purchase',
                "transaction_id": shortid.generate(),
                "affiliation": "Bertello store",
                "value": this.allPayable,
                "currency": "ILS",
                "tax": this.allPayable - this.vat(this.allPayable),
                "shipping": this.priceMessenger,
                "items": (() => {
                  let arr = [];
                  for (let x in this.products) {
                    arr.push({
                      "id": this.products[x].id.toString(),
                      "name": this.products[x].name,
                      "quantity": this.products[x].amount,
                      "price": this.products[x].price.toString()
                    })
                  }
                  return arr
                })()
              });

            }
          }, 2000)
        } else {
          localStorage.removeItem("ifPay");
        }
      }
    },
    computed: {
      ifWidth() {
        if (window.innerWidth > 767) {
          return 500
        }
        return 300
      },
      Payable() {
        return this.$store.getters.Payable
      },
      priceMessenger() {
        return this.$store.getters.priceMessenger;
      },
      PayablePlusDiscount() {
        return this.$store.getters.PayablePlusDiscount
      },
      allPayable() {
        return this.PayablePlusDiscount + this.priceMessenger;
      },
      products() {
        return this.$store.getters.inCart
      },
      nameProducts() {
        let name = "";
        for (let x in this.products) {
          name += this.products[x].name + " " + this.products[x].amount + 'כ ';
        }
        return name
      },
      JSonProducts() {
        let json = [];
        for (let x in this.products) {
          json.push({
            product_name: this.products[x].name,
            product_quantity: this.products[x].amount,
            // product_price: this.products[x].price,
            product_price: this.vat(this.products[x].price),
          })
        }
        if (this.priceMessenger) {
          json.push({
            product_name: "משלוח",
            product_quantity: 1,
            // product_price: this.priceMessenger,
            product_price: this.vat(this.priceMessenger),
          })
        }
        if (this.discount) {
          let vatDiscount = this.Payable - this.PayablePlusDiscount;
          json.push({
            product_name: `הנחה ${this.discount}%`,
            product_quantity: 1,
            product_price: -this.vat(vatDiscount),
            // product_price: - vatDiscount,
          })
        }
        return encodeURIComponent(JSON.stringify(json))
      },
      clientDatdlis() {
        return this.$store.state.clientDatdlis;
      },
      //תשלום ראשון
      firstPayAmount() {
        let x = this.namPayAmount * this.numPay;
        let y = this.allPayable - x;
        return this.namPayAmount + y;
      },
      //שאר תשלומים
      namPayAmount() {
        let nam = this.allPayable / this.numPay;
        return Math.floor(nam)
      },
      ifCredit() {
        if (this.numPay == 1) {
          return 1
        }
        return 8
      },
      messenger() {
        return this.$store.state.messenger
      },
      codeCouponName() {
        return this.$store.state.codeCoupon
      },
      discount() {
        return this.$store.getters.discount
      },
    },
    watch: {
      numPay: function () {
        setTimeout(() => {
          this.$refs.myForm.submit()
        }, 100)

      }
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