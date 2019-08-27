<template>
    <div class="" @click.stop="$emit('customEvent')">
          <router-link class="" tag="button" :to="link" >{{text}}</router-link>
    </div>
</template>

<script>
  export default {
    name: 'ButtonLink',
    props: {
link: String,
text: String,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
button {
  border: none;
  background-color: black;
  color: #ffffff;
  padding: 10px;
  outline: none;
  margin: 5px;
}

button:hover {
  border: none;
  background-color: #8c8c8c;
  color: #ffffff;
  padding: 10px;
  outline: none;
  margin: 5px;
}


  @media (max-width: 767.98px) {
  
  }
</style>