<template>
  <div id="app" class="container-fluid">
    <!-- <Cart/> -->
    <ToolBar />
    <div @click="closeCart">
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import ToolBar from '@/components/ToolBar.vue'
  import Footer from '@/components/Footer.vue'
  // import Cart from '@/components/Cart.vue'


  export default {
    name: 'App',
    components: {
      ToolBar,
      Footer,
      // Cart
    },
    methods: {
      closeCart() {
        this.$store.commit('allTimeCloseCart')
      }
    }

  }
</script>

<style>
  #app {}
</style>