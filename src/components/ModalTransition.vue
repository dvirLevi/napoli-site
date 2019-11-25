<template>
  <div id="myModal" class="modal" @click.stop="$emit('customEvent')">

    <!-- Modal content -->
    <div class="modal-con center-all" v-if="modalCon">
      <slot></slot>
    </div>

  </div>
</template>

<script>
  // @ is an alias to /src


  export default {
    name: 'ModalTransition',
    components: {

    },
    props: {

    },
    data(){
return {
  modalCon: true
}
    },
    mounted() {
      // setTimeout(() => {
      //   this.modalCon = true
      // }, 3000)
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
    z-index: 200;
    /* Sit on top */
    /* padding-top: 100px; Location of the box */
    left: 0;
    top: 0;
    width: 100%;
    /* Full width */
    height: 100%;
    /* Full height */
    overflow: auto;
    /* Enable scroll if needed */
    background-color: #000000c9;
    /* Fallback color */
    animation-name: black-screen;
    animation-duration: 3s;
  }

  @keyframes black-screen {
    from {
      background-color: rgba(0, 0, 0, 0);
    }

    to {
      background-color: #000000c9;
    }
  }

  /* Modal Content */
  .modal-con {
    background-color: #000000;
    margin: auto;
    padding: 30px;
    /* border: 1px solid #888; */
    width: 60%;
  }


  @media (max-width: 767.98px) {

    .modal-con {
      padding: 15px;
      width: 77%;
    }

  }
</style>