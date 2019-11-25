<template>
  <div id="app" class="container-fluid" @click="closeCart">
    <!-- <Cart/> -->
    <ToolBar />
    <!-- <div @click="closeCart"> -->
    <router-view />
    <Footer />
    <whatsAppFix />
    <!-- <autoModal v-if="ifAutoModel" /> -->
    <blackFridayModal v-if="ifAutoModel" />
    <!-- </div> -->
  </div>
</template>

<script>
  // @ is an alias to /src
  import ToolBar from '@/components/ToolBar.vue'
  import Footer from '@/components/Footer.vue'
  import whatsAppFix from '@/components/whatsAppFix.vue'
  // import autoModal from '@/components/autoModal.vue'
  import blackFridayModal from '@/components/blackFridayModal.vue'


  export default {
    name: 'App',
    components: {
      ToolBar,
      Footer,
      whatsAppFix,
      // autoModal,
      blackFridayModal
    },
    computed: {
      ifAutoModel() {
        return this.$store.state.ifAutoModel;
      },
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