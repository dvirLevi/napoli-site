<template>
  <div v-if="ifCart">
    <Modal>
      <div class="w-100">
        <span @click="openCart" class="h1 close-m">&times;</span>
      </div>
      <div class="row center-all">
        <div class="col-md-12" v-for="product in products" :key="product.id">
      <div class="row mt-3 center-all">
        <div class="col-md-6 ">
          <img class="w-100" :src="product.img" alt="">
        </div>
        <div class="col-md-6 ">
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

  @media (max-width: 767.98px) {}
</style>