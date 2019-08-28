<template>
  <div class="row mt-5 p-3">
    <div class="col-md-5 center-all">
      <!-- <div class="w-50 text-center"> -->
      <!-- <h2 class="h5 w-100">תפריט:</h2> -->
      <router-link class="items-menu h5 m-3" tag="div" :to="item.link" v-for="item in categories" :key="item.id"
        router-link-active>{{item.name}}</router-link>
    </div>

    <!-- </div> -->
    <div class="col-md-5 center-all">
      <img class="w-25" src="../assets/ass13.png" alt="">
    </div>

    <div class="col-md-2 center-all p-4">
      <div class="w-50 text-center">
        <i class="fab fa-instagram"></i>
      </div>
      <div class="w-50 text-center">
        <i class="fab fa-facebook-f"></i>
      </div>
    </div>
    <div class="col-md-12 center-all mt-5">
      <p class="m-0">נבנה ופותח ב<a href="https://apps-life.netlify.com/#/">AppsLife</a></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    props: {

    },
    computed: {
      categories() {
        return this.$store.state.categories
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .row {
    background-color: black;
    /* height: 300px; */
    color: #ffffff
  }

  i {
    font-size: 40px;
  }

  a {
   text-decoration: none;
   /* color: #fdb7b7; */
   color: #ffffff
  }

  .items-menu {
    font-weight: 400;
    /* margin: 19px 46px; */
    cursor: pointer;
  }


  @media (max-width: 767.98px) {}
</style>