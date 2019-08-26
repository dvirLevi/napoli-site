<template>
  <div class="cart" v-if="ifCart">
    <div class="arrow-up"></div>
    <!-- <Modal> -->
      <div class="w-100 pr-3">
        <span @click.stop="openCart" class="h1 close-m">&times;</span>
      </div>
      <div class="w-100 over-scroll">
      <div class="w-100 center-all">
        <h4>עגלת קניות</h4>
      </div>
      <div class="row center-all m-1 " v-if="products.length">
        <div class="col-md-12 box-product mt-2" v-for="product in products" :key="product.id">
          <div class="row center-all">
            <div class="col-6 ">
              <img class="w-100" :src="product.img" alt="">
            </div>
            <div class="col-6 text-center ">
              <p>מוצר: {{product.name}}</p>
            <p>מחיר: {{product.price}} ₪</p>
            <div class="w-100 center-all">
            <!-- <p class="w-100 m-0 text-center">הוסף מוצר לעגלת הקניות!</p> -->
            <div @click="product.amount++" class=" border-left butt-oper">
              +
            </div>
            <div>
              {{product.amount}}
            </div>
            <div @click="product.amount--" class=" border-right butt-oper">
              -
            </div>
          </div>
          <div class="center-all">
            <p>סה"כ: {{product.amount * product.price}} ₪</p>
          </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="row">
          <div class="col-12 center-all">
            <p>אין מוצרים בעגלה..</p>
          </div>
        </div>
      </div>
    <!-- </Modal> -->
  </div>
  </div>
</template>

<script>
  // @ is an alias to /src


  export default {
    name: 'Cart',
    components: {

    },
    computed: {
      ifCart() {
        return this.$store.state.ifCart
      },
      products() {
        return this.$store.getters.inCart
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
.cart {
  
     position: absolute;
    width: 550px;
    z-index: 5;
    top: 61px;
    right: 0;
    background-color: #f5f5f5;
}
  .close-m {
    cursor: pointer;
  }

  .box-product {
    box-shadow: 1px 1px 3px #c1c1c1;
    /* margin: 12px; */
    padding: 5px;
    background-color: #ffffff;
  }

  .box-product p {
    font-size: 15px;
    margin: 0px;
  }
  .butt-oper {
    margin: 8px;
    padding: 7px 13px;
  }

  .arrow-up {
       position: absolute;
    top: -23px;
    right: 0px;
    width: 0px;
    height: 0px;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 24px solid #f5f5f5;
}
.over-scroll {
  overflow: auto;
    padding: 24px;
max-height: 600px
}

  @media (max-width: 767.98px) {
    .cart {
    width: 331px;
}

  .arrow-up {
    top: -17px;
    right: 5px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid #f5f5f5;
}
.over-scroll {
  overflow: auto;
    padding: 24px;
max-height: 400px
}
  }
</style>