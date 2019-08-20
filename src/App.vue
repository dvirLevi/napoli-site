<template>
  <div id="app" class="container-fluid">
   <ToolBar/>
    <router-view/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import ToolBar from '@/components/ToolBar.vue'
  

  export default {
    name: 'App',
    components: {
      ToolBar,
    },
  
  }
</script>

<style>
#app {
 
}
</style>
