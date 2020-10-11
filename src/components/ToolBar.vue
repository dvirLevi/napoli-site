<template>
  <div class="row row-sticky">
    <div class="col">
      <div class="wrap-all-el d-flex">
        <div class="center-all icon-cart">
          <div class="position-relative">
            <i @click.stop="openCart" class="fas fa-shopping-cart"></i>
            <div class="point-green" v-if="inCart.length"></div>
            <Cart />
          </div>
        </div>
        <div class="bac-menu" @click="ifMenu = !ifMenu" :class="{menusToolBar: !ifMenu}">
          <div class="center-all wrap-items">
            <router-link class="items-menu" tag="div" :to="item.link" v-for="item in categories" :key="item.id"
              router-link-active>{{item.name}}</router-link>
            <div class="mobile w-100">
              <div class="w-100 center-all h2 mt-3 ">
                <div class="w-50 text-center">
                  <a href="https://www.instagram.com/napoli_pizza_oven_israel/" target="_blanc"><i class="fab fa-instagram"></i></a>
                </div>
                <div class="w-50 text-center">
                 <a href="https://www.facebook.com/napoli.oven.il/?__tn__=%2Cd%2CP-R&eid=ARAZokdIjzsZ4vZNMygiFQkyPLRRFrasxpFNiUCIhgwgD6_gfbXwOGZCbl0PJH3tjZODw30-sK0D7Die" target="_blanc"><i class="fab fa-facebook-f"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <Hamburger :ifMenu="ifMenu" @openClose="ifMenu = !ifMenu" />
        <router-link class="" tag="div" to="/">
          <img src="@/assets/napoli_logo.jpg" alt="">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Hamburger from '@/components/Hamburger.vue'
  import Cart from '@/components/Cart.vue'

  export default {
    name: 'ToolBar',
    components: {
      Hamburger,
      Cart
    },
    props: {

    },
    data() {
      return {
        ifMenu: false,

      }
    },
    computed: {
      categories() {
        return this.$store.state.categories
      },
      inCart() {
        return this.$store.getters.inCart
      }
    },
    methods: {
      openCart() {
        this.$store.commit('showCart')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .row-sticky {
    position: sticky;
    top: 0;
    z-index: 3;
    background-color: #ffffff;
  }

  .wrap-all-el {

    width: 71%;
    /* margin: 0 auto; */
    position: relative;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  i:hover {
    color: #8c8c8c;
  }

  .icon-cart {
    position: absolute;
    height: 100%;
    cursor: pointer;
  }

  img {
    position: absolute;
    width: 110px;
    left: 0;
    cursor: pointer;
  }

  .wrap-items {
    /* width: -webkit-fill-available; */
    font-size: 20px;
    font-weight: 600;
  }

  .items-menu {
    margin: 19px 46px;
    cursor: pointer;
    font-weight: 400;
  }




  .bac-menu {
    display: block;
    width: -webkit-fill-available;
  }

  /* .menusToolBar {
    display: block;
    width: -webkit-fill-available;
  } */

  .fa-shopping-cart {
    font-size: 25px;
    margin: 5px;
    color: rgb(0, 0, 0);


  }

  .point-green {
    width: 10px;
    height: 10px;
    top: 2px;
    right: 7px;
    position: absolute;
    border-radius: 100px;
    background-color: #ff9743;
    pointer-events: none;
  }

  @media (max-width: 1199.98px) {
    .items-menu {
      margin: 19px 7px;
      font-size: 17px;
    }

  }

  @media (max-width: 767.98px) {
    .menusToolBar {
      display: none;
    }

    .wrap-all-el {
      height: 60px;
      /* padding: 20px 0px; */
      width: 100%;
    }

    .bac-menu {
      position: fixed;
      width: 100%;
      z-index: 2;
      background: #3333338c;
      right: 0;
      top: 0;
      height: 100%;
    }

    .wrap-items {
      width: 58%;
      background: #ffffff;
      height: 100%;
      flex-direction: column;
    }

    .items-menu {
      margin: 0;
      padding: 19px 25px;
      width: 100%;
      border-bottom: solid rgb(0, 0, 0) 1px;
      font-size: 21px;
    }

    .icon-cart {
      position: static;
    }

    .point-green {
      width: 10px;
      height: 10px;
      /* top: 0px; */
      right: 7px;
      position: absolute;
      border-radius: 100px;
      background-color: #ff9743;
    }
    
  }
</style>