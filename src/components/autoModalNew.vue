<template>
  <Modal :myStyle="{backgroundImage: `url(${require('@/assets/ass28.jpg')})`}">
    <div class="w-100 p-4">
      <div class="w-100 right-all">
        <!-- <span class="h3 c-p" @click="closeModal">x</span> -->
        <i class="las la-times h3 c-p" @click="closeModal"></i>
      </div>
      <a class="w-100 c-p" href="https://api.whatsapp.com/send?phone=972537234223" target="_blanc">
        <div class="w-100 f-center-top">
          <div class="text mt-md-0 mt-3">
            <h1 class="color">אחחח איזה ריח!</h1>
            <h2>גם אתם רוצים לאפות פיצות איטלקיות לוהטות בתנור המהמם שלנו?</h2>
            <!-- <h6>*עד סוף פסח או עד גמר המלאי</h6> -->
          </div>
          <div class="p-img">
            <img class="w-100" src="@/assets/ass29.jpg" alt="">
          </div>
        </div>
        <div class="w-100 f-center mt-4">
          <h2 class="text-center">שלחו לנו וואטספ עם המילים <span class="color">קופון הנחה</span> ונפנק אתכם</h2>
          <span class="wrap-w f-center">
          <i class="fab fa-whatsapp"></i>
          </span>
          <!-- <h1 class="underline text-center">הזמינו בחנות האתר>></h1> -->
        </div>
      </a>
    </div>
  </Modal>
</template>

<script>
  // @ is an alias to /src
  import Modal from '@/components/Modal.vue'
  // import firework from '@/components/firework.vue'

  export default {
    name: 'autoModalNew',
    components: {
      Modal
      // firework
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

  .color {
    color: #60d66a;
  }

  .p-img {
    width: 33%;
    border: solid 5px #60d66a;
    padding: 5px
  }

  h1 {
    font-size: 3.2vw;
    font-weight: bold;
    color: #fff;
  }

  h2 {
    font-weight: bold;
    color: #fff;
  }

    .wrap-w {
    width: 70px;
    height: 70px;
    border-radius: 100px;
    box-shadow: 0 0 14px #000000bd;
    background-color: #2cb742;
  }
   .wrap-w i {
    font-size: 50px;
    color: #ffffff;
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
      font-size: 30px;
    }
  }
</style>