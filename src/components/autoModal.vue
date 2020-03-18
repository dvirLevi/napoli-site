<template>
  <Modal>
    <div class="w-100 right-all">
      <span class="h3 c-p" @click="closeModal">x</span>
    </div>
    <div class="w-100 center-all">
      <img src="../assets/ass20.jpg" alt="">
    </div>
    <h2 class="text-center mt-3">כולם בבית? נמאס כבר מפתיתים ופיצה מקפיצה במיקרוגל? 
עכשיו זה הזמן להתחיל להכין פיצות גורמה בטאבון ביתי אמיתי!</h2>
    <div class="w-100 center-all">
      <div class="w-100 center-all mt-3 link" @click="closeModal">
        <router-link to="/Store" class="text-center h3" >מבצע מיוחד לימי הקורונה בחנות האתר. רכשו עכשיו והטאבון יגיע אליכם עם שליח מהיר >></router-link>
      </div>
      <h2 class="text-center h4">שאלות נוספות? צרו איתנו קשר בוואטספ - </h2>
      <div class="wrap-w center-all w m-3">
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
  </Modal>
</template>

<script>
  // @ is an alias to /src


  export default {
    name: 'autoModal',
    components: {

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

  .link a {
    color: #1a0dab;
    text-decoration: underline;
    cursor: pointer;
    font-weight: 500 !important;
  }

  @media (max-width: 767.98px) {
    img {
      width: 100%;
    }

    h2 {
      font-size: 21px;
      width: 100%;
    }

    h3 {
      font-size: 18px;
    }
  }
</style>