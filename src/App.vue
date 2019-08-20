<template>
  <div id="app" class="container-fluid">
   <ToolBar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import ToolBar from '@/components/ToolBar.vue'
  import Footer from '@/components/Footer.vue'
  

  export default {
    name: 'App',
    components: {
      ToolBar,
      Footer
    },
  
  }
</script>

<style>
#app {
 
}
</style>
