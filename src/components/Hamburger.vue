<template>
  <div class="contain" :class="{change: ifMenu}"  @click="$emit('openClose')" >
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </div>
</template>

<script>
  export default {
    name: 'Hamburger',
    props: {
       ifMenu: Boolean,
    },
    data() {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @media (max-width: 767.98px) {
    .contain {
          display: flex;
    flex-direction: column;
    justify-content: center;
      cursor: pointer;
      z-index: 3;
    }

    .bar1,
    .bar2,
    .bar3 {
      width: 35px;
      height: 5px;
      background-color: #333;
      margin: 3px 0;
      transition: 0.4s;
    }

    .change .bar1 {
      -webkit-transform: rotate(-45deg) translate(-9px, 6px);
      transform: rotate(-45deg) translate(-9px, 6px);
    }

    .change .bar2 {
      opacity: 0;
    }

    .change .bar3 {
      -webkit-transform: rotate(45deg) translate(-8px, -8px);
      transform: rotate(45deg) translate(-8px, -8px);
    }
  }
</style>