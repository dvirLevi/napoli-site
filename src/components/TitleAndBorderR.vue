<template>
    <h2>
      <slot></slot>
    </h2>
</template>

<script>
  export default {
    name: 'TitleAndBorderR',
    props: {

    }
  }
</script>

<style scoped>
  h2 {
    display: inline-block;
    position: relative;
    padding: 13px 0px 13px 13px;
  }

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

  @media (max-width: 767.98px) {}
</style>