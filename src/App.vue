<template>
  <div id="app" class="container-fluid" @click="closeCart">
    <!-- <Cart/> -->
    <ToolBar />
    <!-- <div @click="closeCart"> -->
    <router-view />
    <Footer />
    <whatsAppFix />
    <autoModal v-if="ifAutoModel" />
    <!-- </div> -->
  </div>
</template>

<script>
  // @ is an alias to /src
  import ToolBar from '@/components/ToolBar.vue'
  import Footer from '@/components/Footer.vue'
  import whatsAppFix from '@/components/whatsAppFix.vue'
  import autoModal from '@/components/autoModalNew.vue'


  export default {
    name: 'App',
    components: {
      ToolBar,
      Footer,
      whatsAppFix,
      autoModal
    },
    computed: {
      ifAutoModel() {
        return this.$store.state.ifAutoModel;
      },
    },
    mounted() {
      this.preloadImages();
    },
    methods: {
      closeCart() {
        this.$store.commit('allTimeCloseCart')
      },
      preloadImages() {
        let arrLoad = [
          require('@/assets/ass32.jpg')
        ]
        var images = [];
        for (let i in arrLoad) {
          images[i] = new Image();
          images[i].src = arrLoad[i];
        }
      }
    }

  }
</script>

<style>

</style>