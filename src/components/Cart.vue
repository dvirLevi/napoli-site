<template>
  <div v-if="ifCart">
    <Modal>
      <div class="w-100">
        <span @click="openCart" class="h1 close-m">&times;</span>
      </div>
      <div class="row center-all m-1" v-if="products.length">
        <div class="col-md-12 box-product mt-2" v-for="product in products" :key="product.id">
          <div class="row center-all">
            <div class="col-6 ">
              <img class="w-100" :src="product.img" alt="">
            </div>
            <div class="col-6 ">
              <p>מוצר: {{product.name}}</p>
              <p>מחיר: {{product.price}} ₪</p>
              <!-- <div class="center-all"> -->
              <p>כמות: {{product.amount}}</p>
              <p>סה"כ: {{product.amount * product.price}} ₪</p>
              <!-- </div> -->
              <div class="center-all">
                <!-- <button @click="openCart"  link="" >לחץ כאן למעבר לעגלת קניות</button> -->
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
    </Modal>
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
        this.$store.commit('showCart')
      }
    }
  }
</script>

<style scoped>
  .close-m {
    cursor: pointer;
  }

  .box-product {
    box-shadow: 1px 1px 3px #c1c1c1;
    /* margin: 12px; */
    padding: 5px;
  }

  .box-product p {
    font-size: 10px;
    margin: 0px;
  }

  @media (max-width: 767.98px) {}
</style>