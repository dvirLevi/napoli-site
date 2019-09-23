<template>
  <div>
    <div class="row">
      <div class="col center-all">
        <div class="center-all wrap-video">
          <video @play="addVol" type="video/mp4" ref="videoVol" :src="srcVideo" loop="" playsinline=""
            autoplay=""></video>
          <i @click="addVol" class="fas fa-volume-up"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'videoBottom',
    props: {
      srcVideo: String,
    },
    components: {},
    data() {
      return {
        toogleVal: true,
      }
    },
    methods: {
      addVol() {
        if (this.toogleVal) {
          this.$refs.videoVol.volume = 0.0;

        } else {
          this.$refs.videoVol.volume = 0.5;

        }
        this.toogleVal = !this.toogleVal;
        console.log(this.$refs.videoVol.volume)

      }
    }
  }
</script>

<style scoped>
  .wrap-video {
    position: relative;
    width: 68%;
  }

  i {
    position: absolute;
    bottom: 0px;
    right: 0px;
    font-size: 30px;
    color: rgb(104, 104, 104);
    margin: 5px;
  }

  video {
    width: 100%;
    /* margin-top: -487.3px; */
  }

  @media (max-width: 767.98px) {
    .wrap-video {
      width: 100%;
    }
  }
</style>