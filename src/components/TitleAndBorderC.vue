<template>
  <div>
 
            <h2 class="text-center"><slot></slot></h2>

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
    display: flex;
    justify-content: center;
    position: relative;
    padding: 13px;
    /* border: solid var(--main-color) 2px;
        border-top: 0px; */
  }
  /* h2::before {
    content: '';
    border-top: 2px solid var(--main-color);
    right: 0;
    top: 0;
    width: 35%;
    height: 1px;
    display: block;
    position: absolute;
  } */

    h2::after {
    content: '';
    border-top: 2px solid var(--main-color);
    /* right: 25%; */
    bottom: 0;
    width: 100px;
    height: 1px;
    display: block;
    position: absolute;
  }

  @media (max-width: 767.98px) {
 
  }
</style>