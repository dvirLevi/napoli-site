<template>
  <Modal>
    <div class="w-100 p-4 bg-white position-relative">
      <div class="bg flag img-cover"></div>

      <div class="w-100 content">
        <div class="w-100 right-all">
          <i class="las la-times h3 c-p" @click="closeModal"></i>
        </div>
        <a class="w-100 c-p" href="https://api.whatsapp.com/send?phone=972537234223" target="_blanc">
          <div class="w-100 f-center-top">
            <div class="text mt-md-0 mt-3">
              <h1 class="color">חוגגים עצמאות בברטלו ישראל!</h1>
              <h2>מבצע כביר בחנות האתר עד מוצאי החג!</h2>
            </div>
            <div class="p-img">
              <img class="w-100" src="@/assets/ass29.jpg" alt="">
            </div>
          </div>
          <div class="w-100 f-center mt-4">
            <h1 class="text-center">לרכישה >></h1>
          </div>
        </a>
    <firework />

      </div>
    </div>
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
        this.$store.commit('closeAutoModel')
      }
    }
  }
</script>

<style scoped>
  .content {
    position: relative;
    z-index: 2;
  }

  .text {
    width: 66%;
  }

  .color {
    color: #2562BD;
  }

  .p-img {
    width: 33%;
    border: solid 5px #2562BD;
    padding: 5px
  }

  h1 {
    font-size: 3.2vw;
    font-weight: bolder;
  }

  h2 {
    font-weight: bold;
    /* color: #444; */
  }

  .wrap-w {
    width: 70px;
    height: 70px;
    border-radius: 100px;
    box-shadow: 0 0 14px var(--main-color);
    background-color: #2cb742;
  }

  .wrap-w i {
    font-size: 50px;
    color: #ffffff;
  }

  .flag {
    background-image: url('../../assets/ass35.jpg');
    opacity: 0.3;
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