<template>
  <div>
    <div class="row mt-4 p-4 text-center">
      <div class="col part-shulders">
        <h2 class="m-3">תנור הפיצה Napoli </h2>
        <p>תנור הפיצה נאפולי נולד משילוב של אהבה גדולה לפיצות גורמה ותכנון הנדסי קפדני. ה&#8209;<span>Napoli</span> מיוצר מהחומרים האיכותיים ביותר, והוא מושלם לאפיית פיצות איטלקיות ולהכנת בשרים, דגים או מאפים. ב&#8209;<span>Napoli</span> הפיצה נאפית ב-90 שניות בלבד, באיכות של מסעדות שף. ממש כמו בנאפולי.</p>

        <p>יאללה, להזמין את כל החברים לערב פיצות מפנק!</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6  left-side p-0">
        <img data-aos="fade-up" src="../assets/ass18.jpg" alt="">
      </div>
      <div class="col-md-6 center-all p-3">
        <div class="block-text">
          <p>תנור הפיצה <span>Napoli</span> מוביל בקטגוריה שלו עם מגוון יתרונות:</p>
          <ul>
            <li>מתחמם לטמפרטורה של 450°C תוך 15 דקות בלבד</li>
            <li>מוזן בחומרי בעירה מגוונים: גז, עץ, פחמים או שבבים</li>
            <li>כולל אבן אפייה ייחודית, לקבלת תחתית בצק פריכה ומענגת</li>
            <li>עשוי מנירוסטה איכותית. בעל עיצוב מתקדם, ציפוי מיוחד ודפנות מבודדות</li>
            <li>קל ועמיד, מושלם לבית ולשטח</li>
            <li>הרכבה עצמית מהירה</li>
            <!-- <li>  מחיר משתלם. הוכרז כ-<span>Best seller</span> וכ-<span>Amazon choice</span> באמזון ארה"ב</li> -->
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'OnNapoli',
    props: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .col-md-6 {
    background-color: #be6c420a;
  }

  .left-side {
    /* text-align: left; */
    text-align: left;
  }

  .left-side img {
    width: 100%;
  }

  .block-text {
    width: 75%;
  }

  h2 {
    display: inline-block;
    position: relative;
    padding: 20px;
    border: solid #000000 2px;
        border-top: 0px;
  }
  h2::before {
    content: '';
    border-top: 2px solid #000000;
    right: 0;
    top: 0;
    width: 35%;
    height: 1px;
    display: block;
    position: absolute;
  }

    h2::after {
    content: '';
    border-top: 2px solid #000000;
    left: 0;
    top: 0;
    width: 35%;
    height: 1px;
    display: block;
    position: absolute;
  }

  @media (max-width: 767.98px) {
    .left-side img {
      width: 100%;
    }

    .block-text {
      width: 100%;
    }
  }
</style>