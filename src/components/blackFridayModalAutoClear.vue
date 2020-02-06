<template>
  <ModalTransition myClass="modal-transition-b" @customEvent="$emit('customEvent')">
    //<div class="w-100 center-all">
     //<img src="../assets/ass20.jpg" alt="" class="opas">
  //</div>
    <h2 class="text-center mt-3 text-white mb-0 opas">מבצע מיוחד בנאפולי ישראל </h2>
    <h1 class="text-center text-white opas"> לכבוד יום הפיצה הבינלאומי</h1>
    <h4 class="text-center mt-3 text-white opas">עד ה-10.2.2020 או עד גמר המלאי</h4>
    <div class="w-100 center-all">
        <firework class="opas"/>
    </div>
  </ModalTransition>
</template>

<script>
  // @ is an alias to /src
  import ModalTransition from '@/components/ModalTransition.vue'
  import firework from '@/components/firework.vue'


  export default {
    name: 'blackFridayModalAutoClear',
    components: {
      ModalTransition,
      firework
    },
    props: {

    },
    methods: {
      closeModal() {
        // this.$store.commit('closeAutoModel')
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

   h1 {
    font-size: 75px;
  }

  .opas {
    animation-name: opas;
    animation-duration: 7s;
  }

  @keyframes opas {
    0% {
      opacity: 1;
    }

    90% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  @media (max-width: 767.98px) {
    img {
      width: 100%;
    }

    h2 {
      font-size: 35px;
    }
     h1 {
    font-size: 38px;
  }

    h3 {
      font-size: 20px;
    }
  }
</style>
