<template>
  <div>
    <counterDays />
    <div class="row">
      <div class="col">
        <div class="w-100 center-all mb-2">
          <img src="../assets/ass1.jpg" alt="">
        </div>
      </div>
    </div>
    <OnNapoli />
    <RecipesLink />
    <ReelPizza />
    <GasBurner />
    <videoTop />
    <FoodImages />
    <SoWhy />
    <videoBottom width="width-video-50"
      srcVideo=" https://res.cloudinary.com/dpdl5lxxb/video/upload/v1569263055/Napoli-Pizza_urm29r.mp4" />
  </div>
</template>

<script>
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
  import analyticsPages from '@/helpers/analyticsPages.js'
  import counterDays from '@/components/counterDays.vue'


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
      counterDays
    },
    mounted() {
      fbq('track', 'ViewContent', {
        content_name: this.$route.name,
      });
      analyticsPages('/');

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