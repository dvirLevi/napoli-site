<template>
  <div class="row">
    <div class="col">
      <div class="wrap-all-el d-flex">
        <div class="center-all">
          <i class="fas fa-shopping-cart"></i>
        </div>
        <div :class="{menusToolBar: !ifMenu}">
          <div class="center-all wrap-items">
            <router-link class="items-menu" tag="div" :to="item.link" v-for="item in categories" :key="item.id"
              router-link-active>{{item.name}}</router-link>
          </div>
        </div>
        
        <Hamburger :ifMenu="ifMenu" @openClose="ifMenu = !ifMenu" />
        
        <img src="../assets/napoli_logo.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import Hamburger from '@/components/Hamburger.vue'

  export default {
    name: 'ToolBar',
    components: {
      Hamburger
    },
    props: {

    },
    data() {
      return {
        ifMenu: false,
        categories: [{
            name: "דף בית",
            link: "",
            id: 1
          },
          {
            name: "פיצה",
            link: "",
            id: 2
          },
          {
            name: "חנות",
            link: "",
            id: 3
          },
          {
            name: "צור קשר",
            link: "",
            id: 4
          },
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrap-all-el {
    padding: 20px 40px;
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
  }

  img {
    position: absolute;
    left: 0;
  }

  .wrap-items {
    width: -webkit-fill-available;
    font-size: 20px;
        font-weight: 600;
  }

  .items-menu {
    margin: 19px 46px
  }

  .menusToolBar {
    display: block;
    width: -webkit-fill-available;
  }
.fa-shopping-cart {
  font-size: 25px;
  margin: 5px;
  color: rgb(0, 0, 0);
}
 

  @media (max-width: 767.98px) {
    .menusToolBar {
      display: none;
    }

    .wrap-all-el {
      height: 100px;
          padding: 20px 0px;
    }

    .wrap-items {
      position: fixed;
      width: 58%;
      z-index: 2;
      background: #ffffff;
      right: 0;
      top: 0;
      height: 100%;
      flex-direction: column;
    }

    .items-menu {
      margin: 0;
      padding: 19px 46px;
      width: 100%;
      border-bottom: solid rgb(0, 0, 0) 1px;
    }
  }
</style>