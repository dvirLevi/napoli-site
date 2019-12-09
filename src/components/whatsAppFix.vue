<template>
  <div class="all-fix center-all">
    <div class="wrap-w center-all">
      <a href="https://api.whatsapp.com/send?phone=972537234223" target="_blanc">
        <i class="fab fa-whatsapp"></i>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'whatsAppFix',
    props: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .all-fix {
    position: fixed;
    bottom: 0;
    z-index: 1000;
    padding: 20px;
  }

  i {
    font-size: 70px;
    color: #2cb742;
  }

  .wrap-w {
    background-color: rgba(255, 255, 255, 0.32);
    width: 92px;
    height: 92px;
    border-radius: 100px;
    box-shadow: 0 0 14px #000000bd;
  }

  a :hover {
    color: #2cb742;
  }

  @media (max-width: 767.98px) {
    .all-fix {
      padding: 10px 0px;
    }

    i {
      font-size: 50px
    }

    .wrap-w {
      width: 65px;
      height: 65px;
    }
  }
</style>