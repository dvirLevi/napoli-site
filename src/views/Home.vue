<template>
  <div>
    <counterDays />
    <div class="row">
      <div class="col">
        <!-- <div class="w-100 f-center">
          <h4 class="text-center">טאבון Napoli האהוב השתדרג עם שם חדש! קבלו את Bertello🔥 </h4>
        </div> -->
        <div class="w-100 center-all mb-2">
          <img src="../assets/ass1.jpg" alt="">
        </div>
      </div>
    </div>
    <OnNapoli />
    <RecipesLink />
    <ReelPizza />
    <iconsBanner />
    <GasBurner />
    <videoTop />
    <FoodImages />
    <SoWhy />
    <questions class="mobile" />
    <videoBottom width="width-video-50"
      srcVideo="videos/v1.mp4" />
  </div>
</template>

<script>
  /* eslint-disable */

  // @ is an alias to /src
  import OnNapoli from '@/components/OnNapoli.vue'
  import ReelPizza from '@/components/ReelPizza.vue'
  import videoBottom from '@/components/videoBottom.vue'
  import videoTop from '@/components/videoTop.vue'
  import GasBurner from '@/components/GasBurner.vue'
  import SoWhy from '@/components/SoWhy.vue'
  import FoodImages from '@/components/FoodImages.vue'
  import RecipesLink from '@/components/RecipesLink.vue'
  import 'aos/dist/aos.css'
  
  import counterDays from '@/components/counterDays.vue'
  import iconsBanner from '@/components/iconsBanner.vue'
  import questions from '@/components/questions.vue'


  export default {
    name: 'home',
    components: {
      OnNapoli,
      ReelPizza,
      videoBottom,
      videoTop,
      GasBurner,
      SoWhy,
      FoodImages,
      RecipesLink,
      counterDays,
      iconsBanner,
      questions
    },
    mounted() {
      fbq('track', 'ViewContent', {
        content_name: this.$route.name,
      });
      //  this.$gtag.event('add_to_wishlist', {
      //       'event_category': 'ecommerce',
      //       'event_label': 'add_to_wishlist'
      //     })
      this.$store.commit('upAutoModel', this.$route.name)
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