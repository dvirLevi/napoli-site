<template>
  <div class="bac-menu-cert" v-show="payRoutCloseCart && ifCart">
    <div class="p-2 wrap-items f-center-between-column">
      <!-- <div class="arrow-up"></div> -->
      <!-- <div class="w-100 over-scroll"> -->
      <div class="w-100">
        <div class="w-100 center-all">
        <h2 class="mb-3">עגלת קניות</h2>
      </div>
      <div class="w-100">
        <div class="row center-all m-1 " v-if="products.length">
          <div class="col-md-12 box-product mt-2" v-for="product in products" :key="product.id">
            <div class="row center-all">
              <div class="col-3 ">
                <img class="w-100" :src="product.img" alt="">
              </div>
              <div class="col-9 text-center ">
                <p>{{product.name}}</p>
                <div class="w-100 center-all">
                  <p>{{product.price}} ₪</p>
                  <div @click.stop="product.amount++" class=" border-left butt-oper">
                    +
                  </div>
                  <div>
                    {{product.amount}}
                  </div>
                  <div @click.stop="product.amount--" class=" border-right butt-oper">
                    -
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="row pt-5">
            <div class="col-12 center-all font-weight-bold">
              <p>אין מוצרים בעגלה</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div class="w-100">
        <codeDiscount />
        <div class="center-all row">
          <h6 class="w-100 text-center" v-if="discount">הנחת קופון: {{discount}}%- </h6>
          <h6 class="w-100 text-center" v-if="IntegerOfDiscount">הנחת קופון: ₪{{IntegerOfDiscount}}- </h6>

          <p class="w-100 text-center">סה"כ: {{PayablePlusDiscount}} ₪</p>
        </div>
        <div class="center-all row">
          <ButtonLink v-if="products.length" @customEvent="openCart" text="חזרה לחנות" link="/store" />
          <ButtonLink v-else @customEvent="openCart" text="לחנות" link="/store" />
          <ButtonLink @customEvent="openCart" text="לתשלום מאובטח" link="/befor-pay" v-if="products.length" />
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import codeDiscount from '@/components/codeDiscount.vue'


  export default {
    name: 'Cart',
    components: {
      codeDiscount
    },
    computed: {
      ifCart() {
        return this.$store.state.ifCart
      },
      products() {
        return this.$store.getters.inCart
      },
      Payable() {
        return this.$store.getters.Payable
      },
      payRoutCloseCart() {
        if (this.$route.name == "pay") {
          return false
        }
        return true
      },
      PayablePlusDiscount() {
        return this.$store.getters.PayablePlusDiscount
      },
      discount() {
        return this.$store.getters.discount
      },
      IntegerOfDiscount() {
        return this.$store.getters.IntegerOfDiscount
      }
    },
    methods: {
      openCart() {
        // alert()
        this.$store.commit('showCart')
      }
    }
  }
</script>

<style scoped>
  .bac-menu-cert {
    position: fixed;
    width: 100%;
    z-index: 100;
    background: #3333338c;
    right: 0;
    top: 0;
    height: 100%;

  }

  .wrap-items {
    position: absolute;
    right: 0;
    top: 0;
    width: 20%;
    background: #ffffff;
    height: 100%;
    flex-direction: column;
    animation-name: op;
    animation-duration: 0.3s;
    display: flex;
  }


  @keyframes op {
    0% {
      right: -100%;
    }

    100% {
      right: 0%;
    }
  }

  .box-product {
    box-shadow: 1px 1px 3px #c1c1c1;
    /* margin: 12px; */
    padding: 5px;
    background-color: #ffffff;
  }

  .box-product p {
    font-size: 15px !important;
    margin: 0px;
  }

  .butt-oper {
    margin: 8px;
    padding: 0px 13px;
  }

  .over-scroll {
    /* overflow: auto; */
    padding: 10px;
    /* max-height: 600px */
  }




  @media (max-width: 767.98px) {

    .bac-menu-cert .title h1 {
      padding: 15px;
      font-size: 21px;
    }

    .wrap-items {
      width: 75%;
    }

    .items-menu {
      font-size: 18px;
    }

    .bac-menu-cert h3 {
      font-size: 21px;
    }












    /* .box-img {
      width: 100px;
    } */
  }
</style>