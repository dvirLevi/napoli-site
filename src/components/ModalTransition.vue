<template>
  <div id="myModal" :class="myClass" @click.stop="$emit('customEvent')">
    <div class="wrap center-all">
      <div class="center-all" :class="bucCon" v-if="modalCon">
        <slot></slot>
      </div>
    </div>
    <!-- Modal content -->


  </div>
</template>

<script>
  // @ is an alias to /src


  export default {
    name: 'ModalTransition',
    components: {

    },
    props: {
myClass: String,
    },
    data() {
      return {
        modalCon: true
      }
    },
    mounted() {
      // setTimeout(() => {
      //   this.modalCon = true
      // }, 3000)
    },
    computed: {
      bucCon(){
        if(this.myClass === "modal-transition"){
          return "modal-con"
        }
        return "modal-con-b"
      }
    }
  }
</script>

<style scoped>
  /* The Modal (background) */
  .modal-transition {
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

  .modal-transition-b {
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
    background-color: #00000000;
    /* Fallback color */
    animation-name: black-screen-b;
    animation-duration: 7s;
     
  }

  @keyframes black-screen-b {
    0% {
      background-color: rgba(0, 0, 0, 0);
    }

    40% {
      background-color: #000000ef;
    }

    60% {
      background-color: #000000ef;
    }

    100% {
      background-color: rgba(0, 0, 0, 0);
    }
  }

  .wrap {
    position: relative;
    height: 100%;
  }

  /* Modal Content */
  .modal-con {
    background-color: #000000;
    margin: auto;
    padding: 30px;
    /* border: 1px solid #888; */
    width: 60%;
    border-radius: 20px;
  }

  .modal-con-b {
    background-color: #00000000;
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