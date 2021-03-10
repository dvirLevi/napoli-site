<template>
  <div class="col-md-6 pb-3 pt-3">
    <Modal v-if="showModal" @customEvent="showModal = !showModal">
      <div class="">
        <h3 class="w-100 text-center">{{product.name}}</h3>

        <div class="row mt-3">
          <div class="col-md-12 center-all">
            <img class="w-50" :src="product.img" alt="">
          </div>
          <div class="col-md-12 ">
            <p v-html="product.description"></p>
            <ul v-html="product.specifications">
            </ul>
          </div>
        </div>
      </div>
    </Modal>

    <div class="box-product center-all p-3">
      <div class="label f-center" v-if="product.label">
        <!-- star lable -->
        <img class="w-100" src="@/assets/ass31.svg" alt="">
        <h4 class="m-0">{{product.label}}</h4>
        <!-- <div class="circle f-center" :style="{backgroundColor: product.labelColor}">
          <h5 class="m-0">{{product.label}}</h5>
        </div> -->
      </div>
      <div class="row mt-3">
        <div class="col-md-6 center-all-top">
          <img class="w-100" :src="product.img" alt="">
        </div>
        <div class="col-md-6 ">
          <h3 v-html="product.name"></h3>
          <p><span class="line-on-text" v-if="product.previousPrice">{{product.previousPrice}} ₪</span></p>
          <!-- <h4 class=""><span class="font-weight-normal">מבצע</span></h4> -->
          <p class="font-weight-bold">{{product.price}} ₪ בלבד</p>
          <p class="more" @click="showModal = !showModal">לחץ כאן למידע נוסף>></p>
          <div class="center-all mb-3  mt-3">
            <ButtonLink @customEvent="addToCart(product)" text="הוסף לעגלת הקניות" link="/store" class="h5" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import OnNapoli from '@/components/OnNapoli.vue'


  export default {
    name: 'Product',
    components: {

    },
    props: {
      product: Object
    },
    data() {
      return {
        showModal: false,
      }
    },
    methods: {
      addToCart(product) {
        product.amount++;
        this.$store.commit('allTimeShowCart');
        fbq('track', 'AddToCart');
        // gtag('event', 'add_to_cart', {
        //   'event_category': 'add_to_cart',
        //   'event_label': 'add_to_cart'
        // });
        this.$gtag.event('add_to_cart', {
          'event_category': 'ecommerce',
          'event_label': 'add_to_cart'
        })
      }
    },
    computed: {

    },
  }
</script>

<style scoped>
  .row-all {
    padding: 0% 15%;
  }

  p {
    font-size: 20px;
  }

  ul span {
    font-weight: bold;
  }

  .more {
    color: #ca6645;
    cursor: pointer;
  }

  .butt-oper {
    cursor: pointer;
  }

  .line-on-text {
    text-decoration: line-through;
    font-weight: 400;

  }

  button {
    border: none;
    background-color: black;
    color: #ffffff;
    padding: 10px;
    outline: none;
    /* margin: 7px; */
  }

  /* .box-all {
    padding: 0px;
  } */

  .box-product {
    position: relative;
    box-shadow: 1px 1px 3px #c1c1c1;
    /* margin: 15px; */
    /* padding: 17px; */
    height: 100%;
    width: 100%;
  }

  .label {
    position: absolute;
    top: -84px;
    right: -66px;
    color: #fff;
    width: 206px;
    -webkit-transform: rotate(20deg);
    transform: rotate(20deg);
    font-size: 14px;
    text-align: center;
    z-index: 1;
  }

  .label h4 {
    position: absolute;
    top: 50%;
    font-size: 16px;
    width: 45%;
  }

  .circle {
    width: 150px;
    height: 150px;
    border-radius: 100%;
  }

  /* @media (max-width: 1410px) {
    .box-product {
      height: 395px;
    }
  } */

  @media (max-width: 767.98px) {
    .row-all {
      padding: 0% 0%;
    }

    ul {
      padding-right: 25px;
    }

    .box-product {
      height: auto;
      width: auto;
    }

    .label {
      top: -46px;
      right: -49px;
    }

    .label h5 {
      font-size: 17px;
    }

    .circle {
      width: 130px;
      height: 130px;
    }
  }
</style>