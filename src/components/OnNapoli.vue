<template>
  <div>
    <div class="row mt-4 p-4 text-center">
      <div class="col part-shulders">
        <router-link class="mb-3 c-p" tag="h2" to="/store">תנור הפיצה Bertello</router-link>
        <p>תנור הפיצה <span>ברטלו</span> נולד משילוב של אהבה גדולה לפיצות גורמה ותכנון הנדסי קפדני. הברטלו מיוצר בסטנדרטים אמריקניים, מהחומרים האיכותיים ביותר, והוא מושלם לאפיית פיצות איטלקיות ולהכנת בשרים, דגים או מאפים. בטאבון הברטלו הפיצה נאפית ב-90 שניות בלבד, באיכות של מסעדות שף. ממש כמו בנאפולי.</p>

        <p>יאללה, להזמין את כל החברים לערב פיצות מפנק!</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6  left-side p-0">
        <img data-aos="fade-up" src="../assets/ass18.jpg" alt="">
      </div>
      <div class="col-md-6 center-all p-3">
        <div class="block-text">
          <p>טאבון הפיצה <span>Bertello</span> מוביל בקטגוריה שלו עם מגוון יתרונות:</p>
          <ul>
            <li>מתחמם לטמפרטורה של 450°C תוך 15 דקות בלבד</li>
            <li>פועל עם מגוון חומרי בעירה: גז, פלטס, עצים ופחמים</li>
            <li>אבן אפייה ייחודית, לקבלת תחתית בצק פריכה ומענגת</li>
            <li>עשוי מנירוסטה איכותית ועמידה</li>
            <li>בעל עיצוב מתקדם ודפנות מבודדות</li>
            <li>קל מאוד לניוד, מושלם לבית ולשטח</li>
            <li>הרכבה עצמית מהירה</li>
            <ButtonLink text="קנו עכשיו" link="/store" class="h4 mt-3"/>
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