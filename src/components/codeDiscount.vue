<template>
  <div class="row">
    <div class="col">
      <div class="center-all w-100">
        <input type="text" @click.stop="" v-model="myCode" placeholder="הכנס קוד קופון">
        <button @click.stop="ifCodeCorrect">הפעל</button>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Swal from 'sweetalert2'


  export default {
    name: 'codeDiscount',
    components: {

    },
    data() {
      return {
        myCode: "",
        code: 'napolisale72',
      }
    },
    computed: {

    },
    methods: {
      ifCodeCorrect() {
        if (this.myCode === this.code) {

        } else {
          Swal.fire({
            type: 'error',
            // title: 'יופי',
            text: 'קוד קופון שגוי',
            timer: 1500
          });
        }
      }
    }
  }
</script>

<style scoped>
  input {
    width: 55%;
    margin: 8px;
    padding: 5px;
    border: solid black 2px;
  }

  button {
    border: none;
    background-color: black;
    color: #ffffff;
    padding: 10px;
    outline: none;
    margin: 5px;
    font-weight: 400;
  }

  @media (max-width: 767.98px) {}
</style>