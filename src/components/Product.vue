<template>
  <div class="col-md-6 box-all p-md-2 p-0 ">
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

    <div class="box-product center-all">
      <div class="label f-center" v-if="product.label">
        <img class="w-100" src="@/assets/ass31.svg" alt="">
        <h4>{{product.label}}</h4>
        <!-- {{product.label}} -->
      </div>
      <div class="row mt-3">
        <div class="col-md-6 center-all">
          <img class="w-100" :src="product.img" alt="">
        </div>
        <div class="col-md-6 ">
          <h3>{{product.name}}</h3>
          <p>{{product.price}} ₪</p>
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

  button {
    border: none;
    background-color: black;
    color: #ffffff;
    padding: 10px;
    outline: none;
    /* margin: 7px; */
  }

  .box-all {
    padding: 0px;
  }

  .box-product {
    position: relative;
    box-shadow: 1px 1px 3px #c1c1c1;
    margin: 15px;
    padding: 17px;
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
    font-size: 14px;
    width: 50%;
  }

  @media (max-width: 1410px) {
    .box-product {
      height: 395px;
    }
  }

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
      top: -98px;
      right: -31px;
    }
  }
</style>