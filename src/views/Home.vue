<template>
  <div>
    <div class="row">
      <div class="col">
        <div class="w-100 center-all">
          <img src="../assets/ass1.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="w-100 center-all wrap-video">
          <video id="Mp4Video-1528056696795"
            src="https://cdn.shopify.com/s/files/1/0011/6195/3290/files/pic_3.mp4?11956933201904785341" loop="" muted=""
            playsinline="" autoplay="">gdfgdfgdfg</video>
        </div>
      </div>
    </div>
    <OnNapoli/>
    <ReelPizza/>
    <TechnicalSpecifications/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import OnNapoli from '@/components/OnNapoli.vue'
  import ReelPizza from '@/components/ReelPizza.vue'
  import TechnicalSpecifications from '@/components/TechnicalSpecifications.vue'
  import 'aos/dist/aos.css'

  export default {
    name: 'home',
    components: {
      OnNapoli,
      ReelPizza,
      TechnicalSpecifications
    }
  }
</script>

<style scoped>
  img {
    max-width: 1567px
  }

  .wrap-video {
    height: 380px;
    overflow: hidden;
  }

  video {
    width: 1298px;
    margin-top: -150px;
  }

   @media (max-width: 767.98px) {
       img {
    width: 100%;
  }

  .wrap-video {
    height: 137px;
  }

  video {
    width: 100%;
        margin-top: -54px;
  }
   }
</style>