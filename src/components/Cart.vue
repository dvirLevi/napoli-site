<template>
  <div class="cart" v-if="ifCart">
    <div class="arrow-up"></div>
    <!-- <Modal> -->
      <!-- <div class="w-100 pr-3"> -->
        <!-- <span @click.stop="openCart" class="h1 close-m">&times;</span> -->
      <!-- </div> -->
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
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="row pt-5">
          <div class="col-12 center-all font-weight-bold">
            <p>אין מוצרים בעגלה..</p>
          </div>
        </div>
      </div>
      <div class="center-all">
            <p>סה"כ: {{Payable}} ₪</p>
          </div>
      <div class="center-all ">
        <ButtonLink @customEvent="openCart" text="לחנות" link="/store" />
        <ButtonLink text=" לתשלום" link="" v-if="products.length" />
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
      },
      Payable() {
        let Payable = 0;
        for(let x in this.$store.getters.inCart){
Payable += this.$store.getters.inCart[x].amount * this.$store.getters.inCart[x].price;
        }
        return Payable
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
    width: 360px;
    z-index: 5;
    top: 61px;
    right: 0;
    background-color: #fcf9f8;
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
    border-bottom: 24px solid #fcf9f8;
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
    top: -17px;
    right: 0px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid #fcf9f8;
}

  }
</style>