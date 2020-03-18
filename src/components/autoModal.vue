<template>
  <!-- <ModalTransition> -->
    <ModalTransition myClass="modal-transition">
    <div class="w-100 right-all">
      <span class="h3 c-p" @click="closeModal">x</span>
    </div>
    <div class="w-100 center-all">
      <img src="../assets/ass20.jpg" alt="">
    </div>
    <h2 class="text-center mt-3">כולם בבית? נמאס כבר מפיצה מקפיצה במיקרוגל?</h2>
    <h2 class="text-center ">עכשיו הזמן להתחיל להכין פיצות גורמה</h2>
    <h2 class="text-center ">בטאבון ביתי אמיתי!</h2>
    <div class="w-100 center-all">
      <div class="w-100 center-all mt-2 link" @click="closeModal">
        <router-link to="/Store" class="text-center h3" ><h4 class="m-0">מבצע מיוחד לימי הקורונה <span>בחנות האתר.</span></h4> <h4>רכשו עכשיו והטאבון יגיע אליכם עם שליח מהיר >></h4></router-link>
      </div>
      <h2 class="text-center h4">שאלות נוספות? צרו איתנו קשר בוואטספ - </h2>
      <div class="wrap-w center-all w m-1">
        <a href="https://api.whatsapp.com/send?phone=972537234223" target="_blanc">
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>
      <!-- <div class="wrap-w center-all f m-3">
        <a href="https://m.me/napoli.oven.il">
          <i class="fab fa-facebook-messenger"></i>
        </a>
      </div> -->
      <!-- <div class="w-100 center-all">
        <h2 class="text-center">וקבלו מיד קוד קופון מיוחד להנחה משתלמת!</h2>
      </div> -->
    </div>
  </ModalTransition>
</template>

<script>
  // @ is an alias to /src
  import ModalTransition from '@/components/ModalTransition.vue'

  export default {
    name: 'autoModal',
    components: {
ModalTransition
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
      font-size: 24px;
      width: 100%;
    }

  .link a h4{
    color: #1a0dab;
    /* text-decoration: underline; */
    cursor: pointer;
    font-weight: 500 !important;
    font-size: 27px;
  }

  .link a h4 span{
    text-decoration: underline;
   
  }

  @media (max-width: 767.98px) {
    img {
      width: 100%;
    }

    h2 {
      font-size: 18px;
      width: 100%;
    }

    h3 {
      font-size: 20px;
    }

    .link a h4{
    font-size: 18px;
  }
  }
</style>