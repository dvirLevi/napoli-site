<template>
  <div class="row mt-5 part-shulders">
    <div class="col">
      <div class="w-100 center-all">
        <div class="w-100">
          <TitleAndBorderR>אודות Napoli Pizza Oven</TitleAndBorderR>

        </div>
        <p>מוצרי <span>Napoli Pizza Oven</span> מיובאים ומשווקים באופן בלעדי על ידי חברת ב.ל סברס שיווק בע"מ.</p>
        <p>אנו עושים את כל המאמצים כדי שתיהנו ממוצרינו. </p>
        <p>נשמח מאוד לעמוד לרשותכם, השאירו את פרטיכם בטופס ונשוב אליכם בהקדם.</p>
      </div>
      <div class="w-100 center-all mt-5">
        <div class="w-100">
          <TitleAndBorderR>יצירת קשר</TitleAndBorderR>

        </div>
        <form @submit.prevent="sendMail" class=" center-all mt-3">
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


          <div class="w-100 center-all">
            <button type="submit">שלח טופס</button>
          </div>
        </form>
      </div>
      <div class="w-100 border-top mt-5">
        <p>ב.ל סברס שיווק בע"מ</p>
        <p>ח.פ. 516069135</p>
        <p><i class="fas fa-mobile-alt"></i> <a class="text-decoration-none" href="tel:0526070675"> 0526070675</a> </p>
        <p> 
          <i class="fab fa-instagram h1"></i>
          <i class="fab fa-facebook-f mr-5 h1"></i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import Regulations from '@/components/Regulations.vue'
  import Swal from 'sweetalert2'


  export default {
    name: 'Contact',
    components: {},
    data() {
      return {
        clientDatdlis: {

        }
      }
    },
    methods: {
      async sendMail() {
        try {
          // להעיר את השרת
          const response = await fetch('https://my-mail-service.herokuapp.com/WakeUpGet');
          const json = await response.json();
          console.log(json)
          // שליחת הנתונים לשרת
          await this.$store.dispatch('sendToMail', {
            contentMail: {
              from: "napoli@napoli.com",
              to: "dvirlevi2@gmail.com",
              subject: "napoli-oven",
              html: `<p>
      שם מלא: ${this.clientDatdlis.name} <br>
      טלפון: ${this.clientDatdlis.tel} <br>
      מייל: ${this.clientDatdlis.mail} <br>
      הערות: ${this.clientDatdlis.note} <br>
     </p>`,
            }
          })
          await Swal.fire({
            type: 'success',
            title: 'יופי',
            text: 'המייל ההודעה נשלחה בהצלחה!',
            timer: 1500
          });
          this.clientDatdlis = {};

        } catch (err) {
          await Swal.fire({
            type: 'error',
            title: 'אופס',
            text: 'ההודעה לא נשלחה',
            timer: 1500
          })
        }

      }
    },
    computed: {

    }
  }
</script>

<style scoped>
  input {
    width: 100%;
    margin: 8px;
    padding: 5px;
    border: solid black 2px;
  }

  textarea {
    width: 100%;
    margin: 8px;
    padding: 5px;
    border: solid black 2px;
  }

  input[type="checkbox"] {
    width: 20px;
    margin: 5px;
    padding: 5px;
    border: solid black 2px;
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
    background-color: black;
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

  span {
    font-weight: bold;
    font-size: 25px;

  }

  p {
    width: 100%;
    font-size: 24px;
    text-align: right;
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
  }
</style>