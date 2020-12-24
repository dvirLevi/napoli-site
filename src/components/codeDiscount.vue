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
        // code: 'napoli-sale',
        // codeGush: '!@#asd#@!',
        // codeSpecial: 'special-napoli',
        // codeBezza: '!@#asd#@!',
        // napoli200: '!@#asd#@!',
        // hours: "!@#asd#@!",
        codes: [{
            code: 'napoli-sale',
            discount: 10,
            typeDiscount: "IfCodeTrue"
          },
          {
            code: 'special-napoli',
            discount: 15,
            typeDiscount: "IfCodeTrue"
          },
          {
            code: 'bertello-sale',
            discount: 7,
            typeDiscount: "IfCodeTrue"
          }
        ]
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
      ifNapoliDeal() {
        return this.$store.getters.ifNapoliDeal;
      },
      Payable() {
        return this.$store.getters.Payable;
      }
    },
    watch: {
      products: function (products) {
        this.ifCodeCorrect()
      }
    },
    methods: {
      ifCodeCorrect() {
        if (this.products.length) {
          for (let x in this.codes) {
            if (this.myCode.toLowerCase() === this.codes[x].code.toLowerCase()) {
              this.$store.commit(this.codes[x].typeDiscount, this.codes[x].discount);
              this.$store.commit('pushNameCode', this.myCode.toLowerCase());
              break;
            }
          }
        } else {
          this.$store.commit('IfCodeFalse')
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