<template>
  <div class="col-md-6 box-all">
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
    <div class="box-product">
      <img class="star" src="../assets/ass31.png" alt="">
      <div class="row mt-3">
        <div class="col-md-6 center-all">
          <img class="w-100" :src="product.img" alt="">
        </div>
        <div class="col-md-6 ">
          <h3>{{product.name}}</h3>
          <p>מחיר <span class="line-on-text">{{product.previousPrice}} ₪</span></p>
          <h4 class=""><span class="font-weight-normal"> מחיר מיוחד לחנוכה </span> <span>{{product.price}} ₪</span></h4>
          <p class="more" @click="showModal = !showModal"><template v-if="product.ifSize">מידות ו</template>פרטים נוספים>></p>
          <div class="center-all mb-3  mt-3">
            <ButtonLink @customEvent="addToCart(product)" text="הוסף לעגלת הקניות" link="/store" />

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

  .line-on-text {
    text-decoration: line-through;
    font-weight: 400;

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
    box-shadow: 1px 1px 3px #c1c1c1;
    margin: 15px;
    padding: 17px;
    position: relative;
  }

  .star {
    position: absolute;
    width: 150px;
    z-index: 2;
    top: -30px;
    right: -30px;
    transform: rotate(20deg);
  }

  @media (max-width: 767.98px) {
    .row-all {
      padding: 0% 0%;
    }
    ul {
      padding-right: 25px;
    }
     .star {
    width: 120px;
    right: -10px;
  }
  }
</style>