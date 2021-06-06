<template>
  <div class="container min-height-screen f-center">
    <div class="row">
      <div class="col f-center">
        <h2 class="text-center">תודה שרכשת את מוצרי ברטלו</h2>
        <!-- <div class="w-100 f-center">
          <h4>בעוד מס' שניות תועבר לאזור האישי שלך...</h4>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src


  export default {
    name: 'thanks',
    components: {

    },
    mounted() {
       this.$store.dispatch('fbApi', {
        event_name: "ViewContent",
        event_time: Math.floor(new Date() / 1000),
        value: 0,
      })
      // localStorage.setItem("ifPay",true);
      // setTimeout(() => {
      //   this.$router.push("/");
      // }, 5000)
    },
  }
</script>

<style>


</style>