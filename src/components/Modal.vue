<template>
  <div id="myModal" class="modal" @click.stop="$emit('customEvent')">

  <!-- Modal content -->
  <div class="modal-con center-all" >
    <slot></slot>
  </div>

</div>
</template>

<script>
  // @ is an alias to /src
 

  export default {
    name: 'Modal',
    components: {
    
    },
    props:{
     
    }
  }
</script>

<style scoped>
/* The Modal (background) */
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed; /* Stay in place */
  z-index: 1001; /* Sit on top */
  /* padding-top: 100px; Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-con {
  background-color: #fefefe;
  margin: auto;
  padding: 30px;
  border: 1px solid #888;
  width:60%;
}


   @media (max-width: 767.98px) {
 
.modal-con {
  padding: 15px;
  width:77%;
}

   }
</style>