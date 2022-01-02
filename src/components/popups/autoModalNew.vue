<template>
  <Modal>
    <div class="w-100" @click="closeModal">
      <div class="w-100 c-p position-relative">
        <div class="w-100 right-all position-absolute">
          <i class="las la-times h3 c-p" ></i>
        </div>
        <img v-if="$route.name !== 'store'" class="w-100" src="@/assets/ass34.png" alt="" @click="$router.push('/store')">
        <img v-else class="w-100" src="@/assets/ass37.png" alt="">
      </div>
    </div>
    <!-- <firework /> -->
  </Modal>
</template>

<script>
  // @ is an alias to /src
  import Modal from '@/components/Modal.vue'
  // import firework from '@/components/firework.vue'

  export default {
    name: 'autoModalNew',
    components: {
      Modal,
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