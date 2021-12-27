<template>
  <Modal>
    <div class="w-100">
      <!-- <div class="w-100 right-all">
        <i class="las la-times h3 c-p text-white" @click="closeModal"></i>
      </div> -->
      <div class="w-100 c-p" @click="closeModal" >
        <img class="w-100" src="@/assets/ass34.png" alt="">
        <!-- <div class="w-100 f-center-top">
          <div class="text mt-md-0 mt-3">
            <h1 class="color">אחחח איזה ריח!</h1>
            <h2>גם אתם רוצים לאפות פיצות איטלקיות לוהטות בתנור המהמם שלנו?</h2>
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
        </div> -->
      </div>
    </div>
    <firework />
  </Modal>
</template>

<script>
  // @ is an alias to /src
  import Modal from '@/components/Modal.vue'
  import firework from '@/components/firework.vue'

  export default {
    name: 'autoModalNew',
    components: {
      Modal,
      firework
    },
    props: {

    },
    methods: {
      closeModal() {
        this.$router.push('/store')
        this.$store.commit('closeAutoModel')
      }
    }
  }
</script>

<style scoped>
  h3 {
    background-color: #ffa03d;
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