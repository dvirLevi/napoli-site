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
          <!-- <video id="Mp4Video-1528056696795"
            src="https://scontent.fymy1-2.fna.fbcdn.net/v/t39.24130-6/10000000_2264804657101827_7961877123308366138_n.mp4?_nc_cat=101&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_oc=AQmt0ulqVkP1ZMxXkdKTgFBfRnoT8C-H_LAQHuMe4vQsGWoJ6KrRzEkSHvJ3PbV2733xtp9h5lyytusVNN-d70XN&_nc_ht=scontent.fymy1-2.fna&oh=5ddaa57e7e71ebb5ed67b04ee7d1748a&oe=5DDD807D" loop="" muted=""
            playsinline="" autoplay="">gdfgdfgdfg</video> -->
            <video id="Mp4Video-1528056696795"
            src="https://cdn.shopify.com/s/files/1/0011/6195/3290/files/napoli_wood_flame2.mp4?6785760937562698444" loop="" muted=""
            playsinline="" autoplay="">gdfgdfgdfg</video>
        </div>
      </div>
    </div>
    <OnNapoli/>
    <ReelPizza/>
    <TechnicalSpecifications/>
    <videoBottom/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import OnNapoli from '@/components/OnNapoli.vue'
  import ReelPizza from '@/components/ReelPizza.vue'
  import TechnicalSpecifications from '@/components/TechnicalSpecifications.vue'
  import videoBottom from '@/components/videoBottom.vue'
  import 'aos/dist/aos.css'

  export default {
    name: 'home',
    components: {
      OnNapoli,
      ReelPizza,
      TechnicalSpecifications,
      videoBottom
    }
  }
</script>

<style scoped>
  img {
        width: 68%;
  }

  .wrap-video {
    height: 374px;
    overflow: hidden;
  }

  video {
       width: 68%;
       margin-top: -188.3px;
  }

   @media (max-width: 767.98px) {
       img {
    width: 100%;
  }

  .wrap-video {
    height: 105px;
  }

  video {
    width: 100%;
            margin-top: -44px;
  }
   }
</style>