<template>
  <ModalTransition myClass="modal-transition">
    <div class="w-100 right-all">
      <span class="h1 c-p text-white" @click="closeModal">x</span>
    </div>
    <div class="w-100 center-all">
      <img src="../assets/ass32.jpg" alt="">
      <div class="w-100 f-center">
        <div class="box-icon-shop bg-white">
          <img class="icon-shop" src="../assets/shop1.jpg" alt="">
          <img class="icon-shop" src="../assets/shop6.jpg" alt="">
          <img class="icon-shop-logo" src="../assets/ass33.jpg" alt="">
          <img class="icon-shop" src="../assets/shop7.jpg" alt="">
          <img class="icon-shop" src="../assets/shop4.jpg" alt="">
          <img class="icon-shop" src="../assets/shop6.jpg" alt="">
          <img class="icon-shop" src="../assets/shop8.jpg" alt="">
          <img class="icon-shop" src="../assets/shop3.jpg" alt="">
          <img class="icon-shop" src="../assets/shop9.jpg" alt="">
          <img class="icon-shop" src="../assets/shop2.jpg" alt="">
          <img class="icon-shop" src="../assets/shop10.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="w-100">
      <h2 class="text-center mt-3 text-white font-weight-normal">ShoppingIL בברטלו ישראל!</h2>
    <h2 class="text-center mt-3 text-white font-weight-bold">מבצע מפנק ליומיים בלבד!</h2>
    <h2 class="text-center mt-3 text-white font-weight-bold">אל תפספסו!!!</h2>
    <h2 class="text-center mt-3 text-white font-weight-normal">יש לכם שאלות? דברו איתנו</h2>
    </div>
     <div class="wrap-w center-all w m-3">
        <a href="https://api.whatsapp.com/send?phone=972537234223" target="_blanc">
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>
    <!-- <router-link to="/store" tag="h3" class="text-white mt-4 c-p">
      <h3 @click="closeModal" class="text-primary">קנו עכשיו >>></h3>
    </router-link> -->
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

  /* h2 {
    font-size: 70px;
  } */
  .box-icon-shop {
    width: 50%;
  }

  .icon-shop-logo {
    width: 16.7%;
  }

  .icon-shop {
    width: 8.33%;
  }

  @media (max-width: 767.98px) {
    img {
      width: 100%;
    }

    .box-icon-shop {
    width: 100%;
  }

    h2 {
      font-size: 19px;
    }

    /* h3 {
      font-size: 20px;
    } */
  }
</style>