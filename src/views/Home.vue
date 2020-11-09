<template>
  <div>
    <counterDays />
    <div class="row">
      <div class="col">
        <!-- <div class="w-100 f-center">
          <h4 class="text-center">טאבון Napoli האהוב השתדרג עם שם חדש! קבלו את Bertello🔥 </h4>
        </div> -->
        <!-- <div class="w-100 center-all mb-2">
          <img src="../assets/ass1.jpg" alt="">
        </div> -->
        <div class="row part-shulders">
          <div class="col-md-5">
            <div class="w-100 f-center-right">
              <img class="img-shopil" src="@/assets/ass33.jpg" alt="">
            </div>
            <div class="w-100">
              <h1>11-10 בנובמבר</h1>
              <h2>10 אחוז הנחה</h2>
              <h3>10 אחוז הנחה + משלוח חינם</h3>
            </div>
            <div class="w-100">
              <img src="" alt="">
            </div>
          </div>
          <div class="col-md-7">
            <!-- <img class="w-100" src="@/assets/ass6.png" alt=""> -->
            <div class="w-100">
              <img class="w-100" src="../assets/ass1.jpg" alt="">
            </div>
            <div class="w-100">
              <img class="icon-shop" src="../assets/shop1.jpg" alt="">
              <img class="icon-shop" src="../assets/shop6.jpg" alt="">
              <img class="icon-shop" src="../assets/shop2.jpg" alt="">
              <img class="icon-shop" src="../assets/shop3.jpg" alt="">
              <img class="icon-shop" src="../assets/shop4.jpg" alt="">
              <img class="icon-shop" src="../assets/shop5.jpg" alt="">
            </div>
          </div>
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
    <videoBottom width="width-video-50" srcVideo="videos/v1.mp4" />
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
  import analyticsPages from '@/helpers/analyticsPages.js'
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

  .img-shopil {
    width: 50%;
  }

  /* h1 {
    font-size: 50px;
  } */
  h2 {
    font-size: 60px;
  }

  h3 {
    font-size: 35px;
    font-weight: 300;

  }

  .icon-shop {
    width: 16.666%;
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

    h1 {
      font-size: 24px;
    }

    h2 {
      font-size: 47px;
    }

    h3 {
      font-size: 6.6vw;
    }
  }
</style>