<template>
  <Modal>
    <div class="w-100 right-all">
      <span class="h3 c-p" @click="closeModal">x</span>
    </div>
    <div class="w-100 center-all">
      <img src="../assets/ass32.jpg" alt="">
    </div>
    <!-- <h3 class="text-center mt-3">הוא הגיע!!!</h3> -->
    <!-- <h3 class="text-center">מלאי חדש של תנורי נאפולי הגיע סוף-סוף לארץ!</h3> -->
    <!-- <h3 class="text-center font-weight-bold">עכשיו במבצע השקה לשבוע בלבד!</h3> -->
    <div>
      <h3 class="text-center mt-3">גם אתם התאהבתם בברטלו שלנו?</h3>
      <h3 class="text-center mt-3 font-weight-bolder">בצדק!</h3>
      <h3 class="text-center mt-3">הגיע הזמן שתיהנו מפיצות איטלקיות לוהטות אצלכם בבית!!!</h3>
    </div>

    <!-- <h3 class="text-center font-weight-bold">אז אל תפספסו את המבצע שלנו, כי הוא תכף נגמר.</h3> -->
    <!-- <router-link class="font-weight-bold c-p link-store" tag="h3" to="/store" @click.native="closeModal">רכשו עכשיו >></router-link> -->
    <!-- <div class="w-100 f-center">
    <ButtonLink class="h5" @customEvent="closeModal" text="לחנות" link="/store" />

    </div> -->
    <div class="w-100 center-all">
      <h3 class="text-center">דברו איתנו - נשמח לענות על כל שאלה</h3>
      <div class="wrap-w center-all w m-3">
        <a href="https://api.whatsapp.com/send?phone=972537234223" target="_blanc">
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>
      <!-- <div class="wrap-w center-all f m-3">
        <a href="https://m.me/napoli.oven.il">
          <i class="fab fa-facebook-messenger"></i>
        </a>
      </div> -->
    </div>
  </Modal>
</template>

<script>
  // @ is an alias to /src


  export default {
    name: 'autoModal',
    components: {

    },
    props: {

    },
    methods: {
      closeModal() {
        this.$store.commit('closeAutoModel')
      }
    }
  }
</script>

<style scoped>
  img {
    width: 50%;
  }

  i {
    font-size: 50px;
    color: #ffffff;
  }

  .wrap-w {
    width: 70px;
    height: 70px;
    border-radius: 100px;
    box-shadow: 0 0 14px #000000bd;
  }

  .f {
    background-color: #4267b2;
  }

  .w {
    background-color: #2cb742;
  }

  .link-store {
    color: #0068f7;
    text-decoration: underline;
  }

  @media (max-width: 767.98px) {
    img {
      width: 100%;
    }

    h2 {
      font-size: 21px;
      width: 100%;
    }

    h3 {
      font-size: 18px;
    }
  }
</style>