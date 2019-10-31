<template>
  <div id="app" class="container-fluid" @click="closeCart">
    <!-- <Cart/> -->
    <ToolBar />
    <!-- <div @click="closeCart"> -->
      <router-view />
      <Footer />
      <whatsAppFix />
    <!-- </div> -->
  </div>
</template>

<script>
  // @ is an alias to /src
  import ToolBar from '@/components/ToolBar.vue'
  import Footer from '@/components/Footer.vue'
  import whatsAppFix from '@/components/whatsAppFix.vue'


  export default {
    name: 'App',
    components: {
      ToolBar,
      Footer,
      whatsAppFix
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