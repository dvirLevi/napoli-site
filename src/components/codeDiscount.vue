<template>
  <div class="row" v-if="products.length">
    <div class="col">
      <div class="center-all w-100">
        <template v-if="!discount">
          <input type="text" @click.stop="" v-model="myCode" placeholder="הכנס קוד קופון">
          <button @click.stop="ifCodeCorrect">הפעל</button>
        </template>
        <P class="w-100 text-center" v-else>קוד הקופון הופעל!</P>
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
        code: 'napoli-sale',
      }
    },
    computed: {
      products() {
        return this.$store.getters.inCart
      },
      discount() {
        return this.$store.getters.discount
      },
    },
    watch: {
      products: function (products) {
        console.log(products)
        if (products.length && this.myCode === this.code) {
          this.$store.commit('IfCodeTrue')
        } else {
          this.$store.commit('IfCodeFalse')
        }
      }
    },
    methods: {
      ifCodeCorrect() {
        if (this.myCode === this.code) {
          this.$store.commit('IfCodeTrue')
        } else {
          Swal.fire({
            type: 'error',
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