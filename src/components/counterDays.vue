<template>
  <div class="w-100 mt-4 mb-4" v-if="ifCounter">
    <div class="w-100 center-all">
      <div class="w-100 center-all">
        <div class="el-time center-all">
          <h4 class="w-100">שניות</h4>
          <h4 class="w-100">{{seconds}}</h4>
        </div>
        <div class="el-time center-all">
          <h4 class="w-100">דקות</h4>
          <h4 class="w-100">{{minutes}}</h4>
        </div>
        <div class="el-time center-all">
          <h4 class="w-100">שעות</h4>
          <h4 class="w-100">{{hours}}</h4>
        </div>
        <div class="el-time center-all">
          <h4 class="w-100">ימים</h4>
          <h4 class="w-100">{{days}}</h4>
        </div>
      </div>
      <!-- <h4 class="text-center w-100">לסיום מבצע חידוש המלאי</h4> -->
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src


  export default {
    name: 'counterDays',
    components: {

    },
    data() {
      return {
        days: "",
        hours: "",
        minutes: "",
        seconds: "",
        // ifCounter: true
        date: new Date("2020-11-12")
      }
    },
    created() {
      this.counter()
    },
    methods: {
      counter() {
        // Set the date we're counting down to
        let countDownDate = this.date.getTime();

        // Update the count down every 1 second
        let x = setInterval(() => {

          // Get today's date and time
          let now = new Date().getTime();

          // Find the distance between now and the count down date
          let distance = countDownDate - now;

          // Time calculations for days, hours, minutes and seconds
          this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
          this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
          // If the count down is finished, write some text
          if (distance < 0) {
            // this.ifCounter = false;
            clearInterval(x);
          }
        }, 1000);
      }
    },
    computed: {
      ifCounter() {
        let countDownDate = this.date.getTime();
        let now = new Date().getTime();
        let distance = countDownDate - now;
        if (distance < 0) {
          return false
        }
        return true
      }
    }
  }
</script>

<style scoped>
  .el-time {
    border: solid rgb(0, 0, 0) 2px;
    margin: 3px;
    width: 120px;
    text-align: center;
  }

  .el-time h3 {
    font-size: 35px;
  }

  h4 {
    color: rgb(175, 76, 30);
  }

  @media (max-width: 767.98px) {
    .el-time {
      border: solid rgb(0, 0, 0) 2px;
      margin: 0.9%;
      width: 23%;
    }

    .el-time h3 {
      font-size: 25px;
    }
  }
</style>