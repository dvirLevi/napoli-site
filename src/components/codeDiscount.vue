<template>
  <div class="row" v-if="products.length">
    <div class="col">
      <div class="center-all w-100">
        <template v-if="!discountCompute">
          <input type="text" @click.stop="" v-model="myCode" placeholder="הכנס קוד קופון">
          <ButtonLink @click.native="ifCodeCorrect" type="button" text="הפעל" />
          <!-- <button @click.stop="ifCodeCorrect">הפעל</button> -->
        </template>
        <template v-else>
          <h6 class="w-100 text-center" v-if="percentageOfDiscount">הנחת קופון: {{percentageOfDiscount}}%</h6>
          <h6 class="w-100 text-center" v-else-if="integerOfDiscount">הנחת קופון: ₪{{integerOfDiscount}}- </h6>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import Swal from 'sweetalert2'
  import getSheet from "../helpers/getSheets"


  export default {
    name: 'codeDiscount',
    components: {

    },
    data() {
      return {
        myCode: "",
        codes: []
      }
    },
    // mounted() {
    //   this.getCodes()
    // },
    computed: {
      products() {
        return this.$store.getters.inCart
      },
      // discount() {
      //   return this.$store.getters.discount
      // },
      // ifCode() {
      //   return this.$store.state.ifCode
      // },
      // ifNapoliDeal() {
      //   return this.$store.getters.ifNapoliDeal;
      // },
      Payable() {
        return this.$store.getters.Payable;
      },
      discountCompute() {
        return this.$store.getters.discountCompute
      },
      percentageOfDiscount() {
        return this.$store.state.percentageOfDiscount
      },
      integerOfDiscount() {
        return this.$store.state.integerOfDiscount
      },
    },
    watch: {
      products: function () {
        this.ifCodeCorrect()
      }
    },
    methods: {
     async ifCodeCorrect() {
        // if (this.products.length) {
        await this.getCodes();
        for (let x in this.codes) {
          if (this.myCode.toLowerCase() === this.codes[x].code.toLowerCase() && this.Payable >= this.codes[x]
            .minprice) {
            this.$store.commit('pushDiscount', this.codes[x]);
            // this.$store.commit('pushNameCode', this.myCode.toLowerCase());
            break;
          } else {
            this.$store.commit('IfCodeFalse')
          }
        }
        // } else {
        //   this.$store.commit('IfCodeFalse')
        // }
      },
      async getCodes() {
        this.codes = await getSheet('1yWnG47qzf_ZmXLofrQGvaXsPJpMPrvqXzjU2g2vSZ-c');
        console.log(this.codes)
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