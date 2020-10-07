<template>
  <Modal>
    <div class="w-100 right-all">
      <span class="h3 c-p" @click="closeModal">x</span>
    </div>
    <div class="w-100 center-all">
      <img src="../assets/ass22.png" alt="">
    </div>
    <h3 class="text-center mt-3">חיכינו וחיכינו, והנה זה הגיע!!!</h3>
    <h3 class="text-center">מלאי חדש של תנורי נאפולי הגיע סוף-סוף לארץ!</h3>
    <h3 class="text-center font-weight-bold">עכשיו במבצע השקה לשבוע בלבד!</h3>
    <h3 class="text-center font-weight-bold">מהרו לרכוש לפני שהמלאי שוב יתחסל... 🙂</h3>
    <div class="w-100 f-center">
    <ButtonLink class="h5" @customEvent="closeModal" text="לחנות" link="/store" />

    </div>
    <!-- <div class="w-100 center-all">
      <h2 class="text-center">צרו איתנו קשר ב - </h2>
      <div class="wrap-w center-all w m-3">
        <a href="https://api.whatsapp.com/send?phone=972537234223" target="_blanc">
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>
      <div class="wrap-w center-all f m-3">
        <a href="https://m.me/napoli.oven.il">
          <i class="fab fa-facebook-messenger"></i>
        </a>
      </div>
      <div class="w-100 center-all">
        <h2 class="text-center">וקבלו מיד קוד קופון מיוחד להנחה משתלמת!</h2>
      </div>
    </div> -->
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