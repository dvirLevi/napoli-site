<template>
  <div>
    <div class="row mt-3 row-all">
      <div class="col">
        <counterDays />
        <videoTop plase="store" />
        <div class="row">
          <Product v-for="product in products" :product="product" :key="product.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import counterDays from '@/components/counterDays.vue'
  import Product from '@/components/Product.vue'
  
  import videoTop from '@/components/videoTop.vue'


  export default {
    name: 'Store',
    components: {
      Product,
      counterDays,
      videoTop
    },
    data() {
      return {

      }
    },
    mounted() {
      fbq('track', 'ViewContent', {
        content_name: this.$route.name,
      });
      // this.$store.commit('upAutoModel', this.$route.name)
    },
    computed: {
      products() {
        return this.$store.state.products
      }
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

  .more {
    color: rgb(134, 134, 134);
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
  }

  .box-all {
    padding: 0px;
  }

  .box-product {
    box-shadow: 1px 1px 3px #c1c1c1;
    margin: 15px;
    padding: 17px;
  }

  @media (max-width: 767.98px) {
    .row-all {
      padding: 0% 0%;
    }
  }
</style>