<template>
  <div>
    <div class="row row-img">
      <div class="col">
        <img class="w-100" src="../assets/ass3.jpg" alt="">
      </div>
    </div>
    <div class="row mt-4 mb-4">
      <div class="col-md-6 center-all">
        <div class="block-text">
          <p class="font-weight-bold">מי שטעם פיצה נאפוליטנית אמיתית, כבר יודע. מי שלא – הגיע הזמן להכיר!</p>
          <p>הפיצה המופלאה הזו, שמקורה בעיר נאפולי באיטליה, עשויה מבצק עשיר ואוורירי, רוטב עגבניות איטלקיות וגבינת
            מוצרלה
            אמיתית. היא מוכנסת לתנור לוהט ונאפית במהירות הבזק, דקה וחצי בלבד והיא בחוץ. איך תכינו את הנאפוליטנית שלכם?
            קודם כל, אתם חייבים תנור שמתלהט ל-400°C לפחות, תנור בחום נמוך מזה, יפגום באיכות הפיצה ובטעמה. הנאפולי שלנו
            מגיע לחום גבוה מ-500°C, אז אתם מסודרים...</p>

          <p>עכשיו אתם זקוקים רק לשלושה חומרי גלם יסודיים, שנמצאים <span>בכל סופר שכונתי</span>:</p>
          <RecipesModal v-for="row in rows" :key="row.id" :row="row" />
        </div>
      </div>
      <div class="col-md-6">
        <videoBottom width="width-video-100" BColor="#ffffff"
          srcVideo="https://res.cloudinary.com/dpdl5lxxb/video/upload/v1572942140/media.io_napoli_ybtqff_cwukoy.mp4" />
      </div>
    </div>
    <div class="row  part-shulders row-modals">
      <div class="col part-shulders-n">
      </div>
    </div>

    <!-- <videoTop /> -->
    <div class="row row-box p-3 center-all mb-5">
      <div class="col-md-6 bg-notebook">
        <div class="row" ref="divPrint">
          <div class="col-12">
            <TitleAndBorderR>ועכשיו, למתכון מומלץ (מתאים ל-8-6 פיצות אישיות):</TitleAndBorderR>
          </div>
          <div class="col-md-6">
            <p class="underline mt-3 font-weight-bold">חומרי גלם:</p>
            <p class="underline mt-3">לבצק:</p>
            <p>1 ק"ג קמח "00" איטלקי</p>
            <p>550 גרם בדיוק של מים <span>קרים מאוד</span></p>
            <p>חצי כפית שמרים יבשים</p>
            <p>כף ורבע מלח</p>
            <p>כף סוכר</p>
            <p>מעט שמן זית</p>
            <p class="underline mt-3">לרוטב:</p>
            <p>פחית עגבניות איטלקיות משומרות</p>
            <p>שן שום קלופה</p>
            <p>חצי כפית מלח </p>
            <p>חצי כפית סוכר</p>
            <p>שתי כפות שמן זית</p>
            <p class="underline mt-3">גבינה ותוספות:</p>
            <p>750 גרם גבינת מוצרלה</p>
            <p>עלי בזיליקום</p>
            <p>בצל סגול, בצל ירוק, פטריות, פלפל צ'ילי – תתפרעו!</p>
          </div>
          <div class="col-md-6">
            <p class="underline mt-3 font-weight-bold">דרך ההכנה:</p>
            <p class="underline mt-3">בצק:</p>
            <ul>
              <li>
                מכניסים לקערת המיקסר את הקמח, השמרים, הסוכר וכף אחת של מלח.
              </li>
              <li>
                מתחילים ללוש במהירות נמוכה, ומוסיפים בהדרגה שני שליש מכמות המים.
              </li>
              <li>לשים במהירות נמוכה 3-2 דקות.</li>
              <li>מוסיפים רבע כף מלח, מעט שמן זית לפי העין והרגש, ובהדרגה את שליש המים הנותר.</li>
              <li>לשים במהירות נמוכה עוד 10 דקות. </li>
              <li>מעבירים את כדור הבצק לקערה משומנת בשמן זית, משמנים מעט גם מלמעלה כדי שלא יתייבש, וסוגרים בניילון נצמד.
              </li>
              <li>מכניסים למקרר ל-24 שעות לפחות.</li>
            </ul>
            <p class="underline mt-3">רוטב:</p>
            <ul>
              <li>מכניסים את כל החומרים למעבד מזון או לבלנדר, וכותשים היטב.</li>
            </ul>
            <p class="underline mt-3">פיצה:</p>
            <ul>
              <li>
                מוציאים את הבצק מהמקרר שעה לפחות לפני ההכנה, כדי שהבצק יגיע לטמפרטורת החדר.
              </li>
              <li>חותכים את כדור הבצק לשישה או לשמונה כדורי בצק, ושומרים עליהם מכוסים בקערה או בקופסה ייעודית.</li>
              <li>
                נוטלים כדור אחד, מקמחים אותו היטב מכל צדדיו, ומרדדים אותו בעזרת הידיים (שומרים על שולי הבצק מעובים
                יחסית).
              </li>
              <li>מורחים את הרוטב על הבצק בתנועה סיבובית.</li>
              <li>קורעים חתיכות מוצרלה ומפזרים על הרוטב במרווחים.</li>
              <li>מוסיפים מעט תוספות לפי הרגש (להשתדל לא להכביד מדי על הבצק), ומזלפים קצת שמן זית מלמעלה.</li>
              <li>מכניסים לתנור נאפולי שחומם מראש במשך 15 דקות.</li>
              <li>במהלך האפייה יש להחליף את כיוון הפיצה, כדי שלא תישרף בצד הסמוך לאש.</li>
              <li>מוציאים את הפיצה וממתינים שתי דקות.</li>
            </ul>
          </div>
          <div class="col-12">
            <h4 class="mt-3 w-100 text-center">בתיאבון!</h4>
            <h3 class=" w-100 text-center">למתכונים נוספים – חפשו אותנו בפייסבוק <i
                class="fab fa-facebook-f h3 mt-3"></i></h3>
          </div>
        </div>
        <ButtonLink @customEvent="print" link="/recipes" text="להדפסת המתכון" />
      </div>
    </div>
  </div>

</template>

<script>
  // @ is an alias to /src
  import RecipesModal from '@/components/RecipesModal.vue'
  import videoBottom from '@/components/videoBottom.vue'
  import analyticsPages from '@/helpers/analyticsPages.js'


  export default {
    name: 'Recipes',
    components: {
      RecipesModal,
      videoBottom
    },
    data() {
      return {
        rows: [{
            text: 'קמח "00" איטלקי לפיצה >>',
            modal: `<p>קמח דק ועשיר במיוחד בגלוטן. סוד הזהב של הנאפוליטנים: הבצק חייב לישון במקרר<span> 24 שעות לפחות</span, כדי שרשתות הגלוטן יתפתחו בבצק. כך הוא יהפוך לגמיש וחזק במיוחד!</p>`,
            id: 1
          },
          {
            text: 'עגבניות איטלקיות קלופות בקופסת שימורים >>',
            modal: ` <p>העגבניות האלה הרבה יותר חלקות, רכות ומותאמות לאפייה בחום גבוה.</p>
  <p>מי שהכין פעם אחת רוטב פיצה מהעגבניות האלה, כבר לא יחזור לרסק העגבניות הרגיל.</p>`,
            id: 2
          },
          {
            text: 'גבינת מוצרלה אמיתית >>',
            modal: "צריך בכלל להסביר?! 😄 ",
            id: 3
          },
        ]
      }
    },
    mounted() {
      fbq('track', 'ViewContent', {
        content_name: this.$route.name,
      });
      analyticsPages(this.$route.name)
    },
    methods: {
      print() {
        let printContents = this.$refs.divPrint.innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
      }

    },
  }
</script>

<style scoped>
  .row-img {
    height: 300px;
    overflow: hidden;
  }

  h3 {
    font-weight: 400;
    cursor: pointer;
  }

  .row-modals {
    background-color: #f5e6c680;
    color: #6b4c3c;
  }

  .row-box {
    background-image: url(../assets/ass3.jpg);
    background-size: cover;
    background-position: center;
  }

  .bg-notebook {
    position: relative;
    z-index: 2;
  }

  .bg-notebook::after {
    background-size: 42%;
    background-position: center;
    content: "";
    background-image: url(../assets/ass17.jpg);
    opacity: 0.8;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }

  .bg-notebook p {
    font-size: 18px !important;
  }

  .bg-notebook p span {
    font-size: 18px !important;
  }

  .bg-notebook ul {
    font-size: 18px !important;
  }

  .part-shulders-n {
    padding: 0 10% !important;
  }

  .block-text {
    width: 75%;
  }


  @media (max-width: 767.98px) {
    .row-img {
      height: 100px;
    }

    .block-text {
      width: 100%;
    }

    .row-box {
      background-image: url(../assets/ass3.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 70%;
    }

    .bg-notebook::after {
      background-size: 85%;
    }

    .part-shulders-n {
      padding: 0 0 !important;
    }
  }
</style>