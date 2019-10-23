<template>
  <div class="row mt-3 row-all">
    <Product v-for="product in products" :product="product" :key="product.id" />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Product from '@/components/Product.vue'
  import analyticsPages from '@/helpers/analyticsPages.js'


  export default {
    name: 'Store',
    components: {
      Product
    },
    data() {
      return {

      }
    },
    mounted() {
       fbq('track', 'ViewContent', {
        content_name: this.$route.name, 
      });
      analyticsPages(this.$route.name)
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