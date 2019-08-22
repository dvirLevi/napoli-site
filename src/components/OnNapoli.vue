<template>
<div>
  <div class="row mt-4 p-4 text-center">
    <div class="col part-shulders">
      <h2 class="m-3">על Napoli Pizza Oven</h2>
      <p>תנור הפיצה נאפולי | <span>Napoli Pizza Oven</span> נולד משילוב של אהבה גדולה לפיצות גורמה ותכנון הנדסי קפדני, והוא מיוצר מחומרי הגלם האיכותיים ביותר. </p>
      <p>ה-<span>Napoli Pizza Oven</span> מושלם לאפיית פיצות איטלקיות באיכות של מסעדות שף, וכך גם להכנת בשרים, דגים ומאפים. </p>
      <p>בתנור הפיצה נאפולי | <span>Napoli Pizza Oven</span> הפיצה נאפת במלואה ב-90 שניות בלבד. ממש כמו בנאפולי.</p>
      <p>יאללה, להזמין את כל החברים לערב פיצות מפנק!</p>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 p-3 left-side">
      <img data-aos="zoom-out" src="../assets/ass2.jpg" alt="">
    </div>
    <div class="col-md-6 center-all">
      <div class="block-text">
        <p>ה- <span>Napoli Pizza Oven</span> מוביל בקטגוריה שלו עם מגוון יתרונות:</p>
        <ul>
          <li>מתחמם לטמפרטורה של 450° צלסיוס במהירות של <span>15 דקות</span> בלבד</li>
          <li>מוזן בחומרי בעירה מגוונים: גז, עץ, פחמים או שבבים</li>
          <li>כולל אבן אפייה איכותית, לקבלת תחתית בצק פריכה ומענגת</li>
          <li>בעל עיצוב מתקדם ודפנות מבודדות</li>
          <li>קל ועמיד, מושלם לבית ולקמפינג</li>
          <li>הרכבה עצמית מהירה</li>
        </ul>
        <p>הנאפולי מוגדר כ-<span>Best seller</span> באתר אמזון ארה"ב, ונבחר ל-<span>Amazon choice</span>.</p>
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
.row {
      background-color: #be6c422b;
}
 .left-side  {
    text-align: left;
  }
  .left-side img {
        width: 500px;
  }
  .block-text {
    width: 75%;
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
  @media (max-width: 767.98px) {
      .left-side img {
    width: 100%;
  }
  .block-text {
    width: 100%;
  }
.block-text span {
    font-weight: bold;
    font-size: 18px
  }
   span {
    font-weight: bold;
    font-size: 19px;
    
  }
  ul {
     font-size: 20px;
  }

  p {
    font-size: 20px;
  }
  }

</style>