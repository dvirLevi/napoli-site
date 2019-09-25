<template>
  <div class="cart" v-if="ifCart" v-show="payRoutCloseCart">
    <div class="arrow-up"></div>
    <div class="w-100 over-scroll">
      <div class="w-100 center-all">
        <h5 class="m-0">עגלת קניות</h5>
      </div>
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
      <codeDiscount />
      <div class="center-all row">
        <h6 class="w-100 text-center" v-if="discount">הנחת קופון: {{discount}}%- </h6>
        <p class="w-100 text-center">סה"כ: {{PayablePlusDiscount}} ₪</p>
      </div>
      <div class="center-all row">
        <ButtonLink v-if="products.length" @customEvent="openCart" text="להמשך קנייה" link="/store" />
        <ButtonLink v-else @customEvent="openCart" text="לחנות" link="/store" />
        <ButtonLink @customEvent="openCart" text="לתשלום מאובטח" link="/befor-pay" v-if="products.length" />
      </div>
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
  .cart {

    position: absolute;
    width: 360px;
    z-index: 5;
    top: 61px;
    right: 0;
    background-color: #f1f1f1;
  }

  /* .close-m {
    position: absolute;
    cursor: pointer;
  } */

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

  .arrow-up {
    position: absolute;
    top: -23px;
    right: 0px;
    width: 0px;
    height: 0px;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 24px solid #f1f1f1;
    /* border-bottom: 24px solid #e0e0e0; */
  }

  h5 {
    font-weight: 100;
  }

  .over-scroll {
    /* overflow: auto; */
    padding: 10px;
    /* max-height: 600px */
  }

  @media (max-width: 767.98px) {
    .cart {
      width: 289px;
      right: 6px;
    }

    .arrow-up {
      top: -19px;
      right: 0px;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 20px solid #f1f1f1;
    }

  }
</style>