<template>
  <div>
    <div class="row">
      <div class="col">
        <div class="w-100 center-all wrap-video">
          <video id="Mp4Video-1528056696795"
            src="https://scontent.fymy1-2.fna.fbcdn.net/v/t39.24130-6/10000000_399862003948681_249958788012601182_n.mp4?_nc_cat=101&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_oc=AQlY408sPCYMz39TrevZCjpjuuOBF8AVXOfPWxMOWWHCUseXSg1ALElDunmMufRDo17Gfc-iPNapwtUzI7qm3_o6&_nc_ht=scontent.fymy1-2.fna&oh=8adb5058daabe08cfa14a96c7421daa9&oe=5DDA15E7"
            loop="" muted="" playsinline="" autoplay=""></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'videoBottom',
    components: {

    }
  }
</script>

<style scoped>
  .wrap-video {
    /* height: 550px; */
    /* overflow: hidden; */
  }

  video {
    width: 68%;
        /* margin-top: -487.3px; */
  }

  @media (max-width: 767.98px) {
    /* .wrap-video {
      height: 209px;
    } */

    video {
      width: 100%;
      /* margin-top: -104px; */
    }
  }
</style>