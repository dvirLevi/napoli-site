<template>
  <div>
        <div>
       <p class="mt-3" @click="showModal = !showModal">{{row.text}}</p>
       <Modal @customEvent="showModal = !showModal" v-if="showModal" >
        <p v-html="row.modal"></p>
       </Modal>
       </div>
  </div>
 
</template>

<script>
  // @ is an alias to /src
  // import OnNapoli from '@/components/OnNapoli.vue'


  export default {
    name: 'RecipesModal',
    components: {},
    props:['row'],
    data() {
      return {
showModal: false
      }
    },

    methods: {


    },
    computed: {

    }
  }
</script>

<style scoped>
  .row-img {
    height: 300px;
    overflow: hidden;
  }

  span {
    font-weight: bold;
    font-size: 25px;

  }

  ul {
    font-size: 25px;
  }

  p {
    font-size: 24px;
  }

  h3{
    font-weight: 400;
    cursor: pointer;
  }
.row-modals {
   background-color: #c5a9a67d;
    color: #6b4c3c;
  

}
   

  @media (max-width: 767.98px) {
    .row-img {
    height: 100px;
    overflow: hidden;
  }
    .row-modals h3{
  font-size: 25px
}
 p {
    font-size: 18px;
  }


  }
</style>