<template>
  <ModalSale>
    <div class="w-100 right-all">
      <span class="h3 c-p" @click="closeModal">x</span>
    </div>
    <router-link class="w-100 c-p" @click.native="closeModal" tag="div" to="/store">
      <div class="w-100 f-center-top">
        <div class="text mt-md-0 mt-3">
          <h2>פסח בברטלו ישראל</h2>
          <h1>כל המוצרים במבצע משוגע!</h1>
          <h6>*עד ערב פסח או עד גמר המלאי</h6>
        </div>
        <div class="p-img">
          <img class="w-100" src="@/assets/ass29.jpg" alt="">
        </div>
      </div>
      <div class="w-100 f-center mt-4">
        <h1 class="underline text-center">הזמינו בחנות האתר>></h1>
      </div>
    </router-link>
    <div class="w-100 center-all">
      <firework />
    </div>
  </ModalSale>
</template>

<script>
  // @ is an alias to /src
  import ModalSale from '@/components/ModalSale.vue'

  export default {
    name: 'autoModal',
    components: {
      ModalSale
    },
    props: {

    },
    methods: {
      closeModal() {
        this.$store.commit('closeAutoModel')
      }
    }
  }
</script>

<style scoped>
  .text {
    width: 66%;
  }

  .p-img {
    width: 33%;
    border: solid 4px #dd6c37;
    padding: 5px
  }

  h1 {
    font-size: 3.2vw;
  }

  @media (max-width: 767.98px) {
    .text {
      width: 100%;
      order: 2;
    }

    .p-img {
      order: 1;
      width: 100%;
    }

    h2 {
      font-size: 25px;
    }

    h1 {
      font-size: 40px;
    }
  }
</style>