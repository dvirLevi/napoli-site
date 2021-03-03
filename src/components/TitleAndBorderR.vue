<template>
  <div>
 
            <h2><slot></slot></h2>

  </div>
</template>

<script>
  export default {
    name: 'TitleAndBorderR',
    props: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2 {
    display: inline-block;
    position: relative;
    padding: 13px 0px 13px 13px;
    /* border: solid #000000 2px;
        border-top: 0px; */
  }
  /* h2::before {
    content: '';
    border-top: 2px solid #000000;
    right: 0;
    top: 0;
    width: 35%;
    height: 1px;
    display: block;
    position: absolute;
  } */

    h2::after {
    content: '';
    border-top: 2px solid #000000;
    right: 0;
    bottom: 0;
    width: 100px;
    height: 1px;
    display: block;
    position: absolute;
  }

  @media (max-width: 767.98px) {
 
  }
</style>