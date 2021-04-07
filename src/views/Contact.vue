<template>
  <div class="row mt-5 part-shulders">
    <div class="col">
      <div class="w-100 center-all">
        <div class="w-100">
          <TitleAndBorderR>אודות תנור הפיצה ברטלו</TitleAndBorderR>

        </div>
        <p>מוצרי ה-<span>Bertello</span> מיובאים ומשווקים באופן בלעדי על ידי חברת ב.ל סברס שיווק בע"מ.</p>
        <p>אנו עושים את כל המאמצים כדי שתיהנו ממוצרינו. </p>
        <p>נשמח מאוד לעמוד לרשותכם, השאירו את פרטיכם בטופס ונשוב אליכם בהקדם.</p>
      </div>
      <div class="w-100 f-center-right mt-5">
        <div class="w-100">
          <TitleAndBorderR>יצירת קשר</TitleAndBorderR>

        </div>
        <form @submit.prevent="sendMail" class=" f-center mt-3">
          <div class="w-100 center-all">
            <input type="text" placeholder="*שם מלא" v-model="clientDatdlis.name" required>
          </div>
          <div class="w-100 center-all">
            <input type="tel" placeholder="*טלפון" pattern="[0-9]+" minlength="9" maxlength="11"
              v-model="clientDatdlis.tel" required>
          </div>
          <div class="w-100 center-all">
            <input type="email" placeholder='*דוא"ל' v-model="clientDatdlis.mail" required>
          </div>
          <div class="w-100 center-all">
            <textarea id="" rows="5" placeholder="*סיבת הפנייה" v-model="clientDatdlis.note" required></textarea>
          </div>
          <div class="w-100 f-center-right mt-3 confirm">
            <input type="checkbox" :checked="clientDatdlis.ifConfirmMail"
              @click="clientDatdlis.ifConfirmMail = !clientDatdlis.ifConfirmMail">
            <span>לקבלת מתכונים, טיפים ומבצעים לדוא"ל</span>
          </div>

          <div class="w-100 f-center-right">
            <button class="rounded" type="submit">{{textSend}}</button>
          </div>
        </form>
      </div>
      <div class="w-100 border-top mt-5">
        <p>ב.ל סברס שיווק בע"מ</p>
        <p>ח.פ. 516069135</p>
        <p class="m-0"><i class="fas fa-mobile-alt"></i> <a class="text-decoration-none" href="tel:0537234223"> 0537234223</a> </p>
        <p class="m-0">שעות מענה טלפוני:</p>
        <p class="m-0">ימים א-ה: 9:00 - 18:00</p>
        <p class="m-0">יום ו: 10:00 - 13:00</p>
        <p class="mt-3">
          <i class="fab fa-instagram h1"></i>
          <a
            href="https://www.facebook.com/Bertello.oven.il"><i
              class="fab fa-facebook-f mr-5 h1"></i></a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import Swal from 'sweetalert2'
  
  import myMail from '@/helpers/myMail.js'

  export default {
    name: 'Contact',
    components: {},
    data() {
      return {
        // ifConfirm: true,
        clientDatdlis: {
          ifConfirmMail: true,
        },
        textSend: "שלח טופס"
      }
    },
    mounted() {
      fbq('track', 'ViewContent', {
        content_name: this.$route.name,
      });
      // this.$store.commit('upAutoModel')
    },
    methods: {
      async sendMail() {
        if (this.textSend === "שלח טופס") {
          this.textSend = "המתן..."
          await myMail.sendToMail(this.clientDatdlis, null, "יצירת קשר ברטלו");
          this.clientDatdlis = {
            ifConfirmMail: true,
          };
          this.textSend = "שלח טופס"
        }
      }
    },
  }
</script>

<style scoped>
  input {
    width: 100%;
    margin: 8px;
    padding: 5px;
    border: solid var(--main-color) 2px;
  }

  textarea {
    width: 100%;
    margin: 8px;
    padding: 5px;
    border: solid var(--main-color) 2px;
  }

  input[type="checkbox"] {
    width: 20px;
    margin: 5px;
    padding: 5px;
    border: solid var(--main-color) 2px;
  }

  .pay input {
    width: 357px;
    border: none;
    border-bottom: solid #9E9E9E 1px;
  }

  form {
    width: 60%;
  }

  button {
    border: none;
    background-color: var(--main-color);
    color: #ffffff;
    padding: 10px;
    outline: none;
    margin: 5px;
    margin-top: 20px;
    font-weight: 400;
  }

  button:hover {
    background-color: #8c8c8c;
  }

  p {
    width: 100%;
    text-align: right;
  }

  .confirm span {
    font-size: 18px;
  }


  @media (max-width: 767.98px) {
    input {
      width: 90%;
    }

    textarea {
      width: 90%;
    }

    .select-num-payment {
      width: 100%;
    }

    form {
      width: 100%;
    }

    .confirm span {
      font-size: 14px;
    }
  }
</style>