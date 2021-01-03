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
      fbq('track', 'ViewContent', {
        content_name: this.$route.name,
      });
      // localStorage.setItem("ifPay",true);
      // setTimeout(() => {
      //   this.$router.push("/");
      // }, 5000)
    },
  }
</script>

<style>


</style>