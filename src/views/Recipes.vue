<template>
  <div>
    <div class="row row-img">
      <div class="col">
        <img class="w-100" src="../assets/ass3.jpg" alt="">
      </div>
    </div>
    <div class="row  part-shulders">
      <div class="col pt-3 pb-3">
        <p class="font-weight-bold">מי שטעם פיצה נאפוליטנית אמיתית, כבר יודע. מי שלא – הגיע הזמן להכיר!</p>
        <p>הפיצה המופלאה הזו, שמקורה בעיר נאפולי באיטליה, עשויה מבצק עשיר ואוורירי, רוטב עגבניות איטלקיות וגבינת מוצרלה
          אמיתית. היא מוכנסת לתנור לוהט ונאפית במהירות הבזק, דקה וחצי בלבד והיא בחוץ. </p>
          <p>איך תכינו את הנאפוליטנית שלכם?</p>
        <p>קודם כל, אתם חייבים תנור שמתלהט ל-400°C לפחות, תנור בחום נמוך מזה, יפגום באיכות הפיצה ובטעמה. הנאפולי שלנו
          מגיע לחום גבוה מ-500°C, אז אתם מסודרים...</p>
        <p>עכשיו אתם זקוקים רק לשלושה חומרי גלם יסודיים, שנמצאים <span>בכל סופר שכונתי</span>:</p>
        <ul>
          <li>קמח "00" איטלקי לפיצה.</li>
          <li>עגבניות איטלקיות קלופות בקופסת שימורים.</li>
          <li>גבינת מוצרלה אמיתית.</li>
        </ul>
      </div>
    </div>
    <div class="row  part-shulders row-modals ">
      <div class="col pt-3 pb-3 ">
        <RecipesModal v-for="row in rows" :key="row.id" :row="row" />
      </div>
    </div>
    <videoTop />
    <div class="row pt-3 pb-3">
      <div class="col-md-3">

      </div>
      <div class="col-md-9 row-bg">
        <div class="row">
          <div class="col-12">
            <TitleAndBorderR>ועכשיו, למתכון מומלץ (מתאים ל-8-6 פיצות אישיות):</TitleAndBorderR>
          </div>
          <div class="col-md-6">
            <p class="underline mt-3">לבצק:</p>
            <p>1 ק"ג קמח "00" איטלקי</p>
            <p>550 גרם בדיוק של מים <span>קרים מאוד</span></p>
            <p>חצי כפית שמרים</p>
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
            <p class="underline mt-3">דרך ההכנה:</p>
            <p>בצק:</p>
            <ul>
              <li>
                מכניסים לקערת המיקסר את הקמח, השמרים, הסוכר וכף אחת של מלח.
              </li>
              <li>
                מתחילים ללוש במהירות נמוכה, ומוסיפים בהדרגה שני שליש מכמות המים.
              </li>
              <li>לשים במהירות נמוכה 2-3 דקות.</li>
              <li>מוסיפים רבע כף מלח, מעט שמן זית לפי העין והרגש, ובהדרגה את שליש המים הנותר.</li>
              <li>לשים במהירות נמוכה עוד 10 דקות. </li>
              <li>מעבירים את כדור הבצק לקערה משומנת בשמן זית, משמנים מעט גם מלמעלה כדי שלא יתייבש, וסוגרים בניילון נצמד.
              </li>
              <li>מכניסים למקרר ל-24 שעות לפחות.</li>
            </ul>
            <p>רוטב:</p>
            <ul>
              <li>מכניסים את כל החומרים למעבד מזון או לבלנדר, וכותשים היטב.</li>
            </ul>
            <p>פיצה:</p>
            <ul>
              <li>
                מוציאים את הבצק מהמקרר שעה לפחות לפני ההכנה, כדי שהבצק יגיע לטמפרטורת החדר.
              </li>
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
            <h4 class="mt-3">בתיאבון!</h4>
            <h3>למתכונים נוספים – חפשו אותנו בפייסבוק <i class="fab fa-facebook-f h3 mt-3"></i></h3>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  // @ is an alias to /src
  import RecipesModal from '@/components/RecipesModal.vue'
  import videoTop from '@/components/videoTop.vue'


  export default {
    name: 'Recipes',
    components: {
      RecipesModal,
      videoTop
    },
    data() {
      return {
        rows: [{
            text: 'מה הסיפור של "קמח 00"? >>',
            modal: `<p>קמח טבעי לחלוטין, שעשוי מחלק בגרעין החיטה שעשיר מאוד בגלוטן. הקמח טחון בטחינה דקה במיוחד, וריכוז הגלוטן הגבוה שלו הופך את הבצק לגמיש וחזק ביותר. מכירים את הסרטונים האלה ביו-טיוב, של פיציולים שמשליכים לאוויר את בצק הפיצה שלהם ומסובבים אותו במהירות בלי שייקרע? הבצק עשוי מקמח "00"...</p>
  <p>ועכשיו, סוד הזהב של הפיצה הנאפוליטנית: כדי שרשתות הגלוטן יתפתחו היטב בתוך הבצק, חובה לתת לו לישון במקרר 24 שעות לפחות לפני האפייה.</p>
  <p>אז בקיצור, קמח "00" + לילה במקרר.</p>`,
            id: 1
          },
          {
            text: 'מה הסיפור של העגבניות האיטלקיות הקלופות? >>',
            modal: ` <p>פשוט. הן הרבה יותר חלקות, רכות ומותאמות לאפייה בחום גבוה. </p>
  <p>מי שהכין פעם אחת רוטב פיצה מהעגבניות האלה, כבר לא יחזור לרסק העגבניות הרגיל. </p>`,
            id: 2
          },
          {
            text: 'מה הסיפור של גבינת מוצרלה? >>',
            modal: "צריך בכלל להסביר?! 😄 ",
            id: 3
          },
        ]
      }
    },

    methods: {


    },
    computed: {

    }
  }
</script>

<style scoped>
  .row-img {
    height: 300px;
    overflow: hidden;
  }

  span {
    font-weight: bold;
    font-size: 25px;

  }

  ul {
    font-size: 25px;
  }

  p {
    font-size: 24px;
  }

  h3 {
    font-weight: 400;
    cursor: pointer;
  }

  .row-modals {
    background-color: #f5e6c680;
    color: #6b4c3c;


  }

  .row-bg {
    background-image: url(../assets/ass17.jpg);
    background-size: 42%;
    background-position: center;
    padding-right: 80px;
  }

  .col-md-3 {
    background-image: url(../assets/ass3.jpg);
    background-size: cover;
    background-position: center;
    min-height: 300px;
  }


  @media (max-width: 767.98px) {
    .row-img {
      height: 100px;
      overflow: hidden;
    }

    .row-modals h3 {
      font-size: 25px
    }

    .row-bg {
      background-size: contain;
      padding-right: 15px;
    }


  }
</style>