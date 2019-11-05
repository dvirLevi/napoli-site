<template>
  <div class="w-100 mt-4 mb-4" v-if="ifCounter">
    <div class="w-100 center-all">
      <div class="w-100 center-all">
        <div class="el-time center-all">
          <h3 class="w-100">שניות</h3>
          <h3 class="w-100">{{seconds}}</h3>
        </div>
        <div class="el-time center-all">
          <h3 class="w-100">דקות</h3>
          <h3 class="w-100">{{minutes}}</h3>
        </div>
        <div class="el-time center-all">
          <h3 class="w-100">שעות</h3>
          <h3 class="w-100">{{hours}}</h3>
        </div>
        <div class="el-time center-all">
          <h3 class="w-100">ימים</h3>
          <h3 class="w-100">{{days}}</h3>
        </div>
      </div>
      <h2 class="text-center w-100">לסיום מבצע ההשקה</h2>
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
        date: new Date("nov 5, 2019 10:00:00")
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

  @media (max-width: 767.98px) {
    .el-time {
      border: solid rgb(0, 0, 0) 2px;
      margin: 3px;
      width: 75px;
    }

    .el-time h3 {
      font-size: 25px;
    }
  }
</style>