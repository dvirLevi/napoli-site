<template>
  <div class="row mt-5">
    <div class="col-md-6 box-all" v-for="product in products" :key="product.id">
      <div class="box-product">
      <div class="row mt-3">
        <div class="col-md-6 ">
          <img class="w-100" :src="product.img" alt="">
        </div>
        <div class="col-md-6 ">
          <h3>מוצר: {{product.name}}</h3>
          <p>מחיר: {{product.price}} ₪</p>
          <div class="w-100 center-all">
            <p class="w-100 m-0 text-center">הוסף מוצר לעגלת הקניות!</p>
            <div @click="addPrice(product)" class="m-4 p-2 h3 border-left butt-oper">
              +
            </div>
            <div>
              {{product.amount}}
            </div>
            <div @click="minusPrice(product)" class="m-4 p-2 h3 border-right butt-oper">
              -
            </div>
          </div>
          <div class="center-all">
            <p>סה"כ: {{product.amount * product.price}} ₪</p>
          </div>
          <div class="center-all">
            <button @click="openCart"  link="" >לחץ כאן למעבר לעגלת קניות</button>
          </div>
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
    name: 'Store',
    components: {

    },
    data() {
      return {
      
      }
    },
    methods: {
      addPrice(product) {
        product.amount++
      },
      minusPrice(product) {
        if (product.amount > 0) {
          product.amount--
        }
      },
      openCart(){
        this.$store.commit('showCart')
      }
    },
    computed:{
      products(){
        return this.$store.state.products
      }
    }
  }
</script>

<style scoped>
  p {
    font-size: 20px;
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
  margin: 7px;
}
.box-all {
  padding: 0px;
}
.box-product {
box-shadow: 1px 1px 3px #c1c1c1;
    margin: 15px;
    padding: 17px;
}
    
  @media (max-width: 767.98px) {}
</style>