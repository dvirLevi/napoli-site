<template>
  <div class="row p-3">
    <div class="col flex-bottom">
      <div class="content-text">
        <h2>הכינו לכם פיצת שף משובחת עם התוספות האהובות עליכם</h2>
        <ButtonLink text="למתכונים לחצו כאן" link="/recipes" class="h4" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RecipesLink',
    props: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .row {
    background-image: url(../assets/ass3.jpg);
    background-size: cover;
    background-position: center;
    height: 696px;
  }

  .flex-bottom {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
  }

  .content-text {
    width: 50%;
    padding: 30px;
  }

  .content-text h2 {
    font-size: 43px;
    color: white;
    font-weight: bold;
    text-shadow: 1px 1px 7px black;
  }

  @media (max-width: 767.98px) {
    .row {
      /* background-image: url(../img/ass3.b7124460.jpg); */
      background-size: 224%;
      background-repeat: no-repeat;
      background-position: 50%;
      height: 414px;
    }

    .content-text h2 {
    font-size: 25px;
  
  }


    .box-text {
      width: 100%;
      padding: 10px;
      margin: 58px 0px;
      font-size: 20px;
    }

    .content-text {
      width: 100%;
    }
  }
</style>