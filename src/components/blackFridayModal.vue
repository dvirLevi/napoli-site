<template>
  <ModalTransition myClass="modal-transition">
    <div class="w-100 right-all">
      <span class="h1 c-p text-white" @click="closeModal">x</span>
    </div>
    <div class="w-100 center-all">
      <img src="../assets/ass20.jpg" alt="">
    </div>
    <h2 class="text-center mt-3 text-white">מבצע חנוכה מטורף בנאפולי ישראל!</h2>
    <h3 class="text-center text-white">מחירים מטורללים עד ל-31.12.2019 בלבד! 
הזדרזו! המבצע עד גמר המלאי!</h3>
    <router-link to="/store" tag="h3" class="text-white mt-4 c-p" ><h3 @click="closeModal" class="text-primary">קנו עכשיו בחנות האתר >>></h3></router-link>
    <div class="w-100 center-all">
      <firework />
    </div>
  </ModalTransition>
</template>

<script>
  // @ is an alias to /src
  import ModalTransition from '@/components/ModalTransition.vue'
  import firework from '@/components/firework.vue'


  export default {
    name: 'blackFridayModal',
    components: {
      ModalTransition,
      firework
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
  img {
    width: 50%;
  }

  i {
    font-size: 50px;
    color: #ffffff;
  }

  .wrap-w {
    width: 70px;
    height: 70px;
    border-radius: 100px;
    box-shadow: 0 0 14px #000000bd;
  }

  .f {
    background-color: #4267b2;
  }

  .w {
    background-color: #2cb742;
  }

  h2 {
    font-size: 70px;
  }

  @media (max-width: 767.98px) {
    img {
      width: 100%;
    }

    h2 {
      font-size: 35px;
    }

    h3 {
      font-size: 20px;
    }
  }
</style>