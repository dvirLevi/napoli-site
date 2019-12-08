<template>
  <div class="row" v-if="products.length">
    <div class="col">
      <div class="center-all w-100">
        <template v-if="!ifCode">
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
        codeGush: '!@#asd#@!',
        codeSpecial: 'special-napoli',
        codeBezza: 'bezza-napoli'
      }
    },
    computed: {
      products() {
        return this.$store.getters.inCart
      },
      discount() {
        return this.$store.getters.discount
      },
      ifCode() {
        return this.$store.state.ifCode
      },
    },
    watch: {
      products: function (products) {
        if (products.length) {
          if (this.myCode.toLowerCase() === this.code || this.myCode.toLowerCase() === this.codeGush) {
            this.$store.commit('IfCodeTrue', 10)
            this.$store.commit('pushNameCode', this.myCode.toLowerCase())
          } else if (this.myCode.toLowerCase() === this.codeSpecial) {
            this.$store.commit('IfCodeTrue', 15)
            this.$store.commit('pushNameCode', this.myCode.toLowerCase())
          } else if (this.myCode.toLowerCase() === this.codeBezza) {
            this.$store.commit('IfCodeTrue', 10)
            this.$store.commit('IfCodeDiscountMessengerTrue', 0)
            this.$store.commit('pushNameCode', this.myCode.toLowerCase())
          } else {
            this.$store.commit('IfCodeFalse')
          }
        }
      }
    },
    methods: {
      ifCodeCorrect() {
        if (this.myCode.toLowerCase() === this.code || this.myCode.toLowerCase() === this.codeGush) {
          this.$store.commit('IfCodeTrue', 10)
          this.$store.commit('pushNameCode', this.myCode.toLowerCase())

        } else if (this.myCode.toLowerCase() === this.codeSpecial) {
          this.$store.commit('IfCodeTrue', 15)
          this.$store.commit('pushNameCode', this.myCode.toLowerCase())

        } else if (this.myCode.toLowerCase() === this.codeBezza) {
          this.$store.commit('IfCodeTrue', 10)
          this.$store.commit('IfCodeDiscountMessengerTrue', 0)
          this.$store.commit('pushNameCode', this.myCode.toLowerCase())

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

  button:hover {
    background-color: #8c8c8c;
  }

  @media (max-width: 767.98px) {}
</style>