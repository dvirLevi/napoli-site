<template>
  <div>
    <div class="row">
      <div class="col">
        <div class="w-100 center-all mb-2">
          <img src="../assets/ass1.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="w-100 center-all wrap-video">
          <video id="Mp4Video-1528056696795"
            src="https://scontent.fymy1-2.fna.fbcdn.net/v/t39.24130-6/10000000_2264804657101827_7961877123308366138_n.mp4?_nc_cat=101&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_oc=AQmt0ulqVkP1ZMxXkdKTgFBfRnoT8C-H_LAQHuMe4vQsGWoJ6KrRzEkSHvJ3PbV2733xtp9h5lyytusVNN-d70XN&_nc_ht=scontent.fymy1-2.fna&oh=5ddaa57e7e71ebb5ed67b04ee7d1748a&oe=5DDD807D" loop="" muted=""
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
    height: 700px;
    overflow: hidden;
  }

  video {
       width: 100%;
       margin-top: -794.3px;
  }

   @media (max-width: 767.98px) {
       img {
    width: 100%;
  }

  .wrap-video {
    height: 257px;
  }

  video {
    width: 100%;
            margin-top: -87px;
  }
   }
</style>