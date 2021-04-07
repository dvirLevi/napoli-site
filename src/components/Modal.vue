<template>
  <div id="myModal" class="modal" @click.stop="$emit('customEvent')">
    <!-- Modal content -->
    <div class="modal-con img-cover" :style="myStyle">
      <slot></slot>
    </div>

  </div>
</template>

<script>
  // @ is an alias to /src


  export default {
    name: 'Modal',
    props: {
      myStyle: Object
    }
  }
</script>

<style scoped>
  /* The Modal (background) */
  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    /* Stay in place */
    z-index: 1001;
    /* Sit on top */
    left: 0;
    top: 0;
    width: 100%;
    /* Full width */
    height: 100%;
    /* Full height */
    overflow: auto;
    /* Enable scroll if needed */
    background-color: var(--main-color);
    /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4);
    /* var(--main-color) w/ opacity */
  }

  /* Modal Content */
  .modal-con {
    background-color: #fefefe;
    margin: auto;
    /* padding: 30px; */
    width: 40%;
    /* border: 3px dashed rgb(82, 82, 82); */
    border-radius: 20px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
  }


  @media (max-width: 767.98px) {

    .modal-con {
      /* padding: 15px; */
      width: 77%;
    }

  }
</style>