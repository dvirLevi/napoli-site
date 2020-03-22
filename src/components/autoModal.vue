<template>
  <!-- <ModalTransition> -->
  <ModalTransition myClass="modal-transition">
    <div class="w-100 right-all">
      <span class="h3 c-p" @click="closeModal">x</span>
    </div>
    <div class="w-100 center-all">
      <img src="../assets/ass20.jpg" alt="">
    </div>
    <h2 class="text-center mt-3">רוצים להכין בבית פיצות איטלקיות לוהטות טריות ומפנקות?</h2>
    <h2 class="text-center ">עכשיו זה בדיוק הזמן לרכוש</h2>
    <h2 class="text-center font-weight-bold">טאבון ביתי אמיתי!</h2>
    <div class="w-100 center-all">
      <div class="w-100 center-all mt-2 link" @click="closeModal">
        <router-link to="/Store" class="text-center h3">
          <h4 class="m-0">מבצע משוגע לימים משוגעים <span>בחנות האתר</span>.</h4>
          <h4>הזמינו עכשיו והטאבון יגיע אליכם עם שליח מהיר >></h4>
        </router-link>
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
    <div class="stompa center-all">
      פריטים אחרונים
      במלאי
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

  .link a h4 {
    color: #1a0dab;
    /* text-decoration: underline; */
    cursor: pointer;
    font-weight: 500 !important;
    font-size: 27px;
  }

  .link a h4 span {
    text-decoration: underline;

  }

  .stompa {
    width: 100px;
    height: 100px;
    background-color: #c94719;
    border-radius: 100px;
    position: absolute;
    top: 19px;
    left: 30px;
    font-size: 18px;
    text-align: center;
    color: #fff;
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

    .link a h4 {
      font-size: 18px;
    }

    .stompa {
      top: 4px;
      left: 3px;
    }
  }
</style>