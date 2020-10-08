<template>
  <div class="row">
    <div class="col">
      <section class="row row-icons f-center pt-5 pb-5">
        <div class="col-md-2 f-center icon" v-for="item in icons" :key="item.id">
          <div class="w-100 f-center">
            <i :class="item.icon"></i>
          </div>
          <h5 class="text-center text-white mt-3">{{item.text}}</h5>
        </div>
      </section>
     
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import titleSectionGallery from '@/components/titleSectionGallery.vue'

  export default {
    name: 'iconsBanner',
    components: {
     
    },
    data() {
      return {
        ifShowQues: true,
        icons: [{
            icon: "las la-pizza-slice",
            text: "אפייה איטלקית אמיתית",
            id: 1
          },
          {
            icon: "las la-fire-alt",
            text: "מתלהט במהירות",
            id: 3
          },
          {
            icon: "las la-shipping-fast",
            text: "משלוח מהיר",
            id: 2
          },
          
          {
            icon: "las la-lock",
            text: "רכישה מאובטחת",
            id: 4
          },
          {
            icon: "",
            text: "תו תקן אירופאי CE ",
            id: 5
          },
          
        ],
      
      }
    },
   
  }
</script>

<style scoped>
  .row-icons {
    background-color: black;
  }

  .row-icons img {
    width: 35%;
  }

  .row-icons .icon {
    border-left: solid #fff 1px;
  }

  .row-icons .icon:last-child {
    border-left: none;
  }
  .row-icons .icon i {
    font-size: 45px;
    color: #fff;
  }

  @media (max-width: 767.98px) {
    .row-icons .icon {
      /* border-bottom: solid 1px #fff; */
      padding: 20px;
      position: relative;
      border-left: none;
    }

    .row-icons .icon:before {
      content: "";
      border-bottom: 3px solid #fff;
      bottom: 0;
      width: 50px;
      height: 1px;
      display: block;
      position: absolute;
    }

    .row-icons .icon:last-child:before {
      content: "";
      border-bottom: none;
      bottom: 0;
      width: 50px;
      height: 1px;
      display: block;
      position: absolute;
    }
  }
</style>