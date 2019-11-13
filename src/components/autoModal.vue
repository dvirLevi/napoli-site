<template>
  <Modal>
    <div class="w-100 right-all">
      <span class="h3 c-p" @click="closeModal">x</span>
    </div>
    <div class="w-100 center-all">
      <img src="../assets/ass20.jpg" alt="">
    </div>
    <h2 class="text-center mt-3">גם אתם התאהבתם בטאבון הנאפולי שלנו?</h2>
    <h3 class="text-center">בקשו מאיתנו עוד היום קוד קופון מיוחד וקבלו הנחה משתלמת!</h3>
    <div class="w-100 center-all">
      <div class="wrap-w center-all w m-3">
        <a href="https://api.whatsapp.com/send?phone=972526070675" target="_blanc">
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>
      <div class="wrap-w center-all f m-3">
        <a href="https://m.me/napoli.oven.il">
          <i class="fab fa-facebook-messenger"></i>
        </a>
      </div>
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
    methods:{
      closeModal(){
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

  @media (max-width: 767.98px) {
    img {
      width: 100%;
    }
  }
</style>