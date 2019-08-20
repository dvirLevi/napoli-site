<template>
  <div class="row mt-3 p-3 border-top">
    <div class="col-md-6 center-all">
      <div class="block-text">
        <h2>על תנור נאפולי</h2>
        <p>תנור הפיצה נאפולי נולד משילוב של אהבה גדולה לפיצות גורמה ותכנון הנדסי קפדני.</p>
        <p>הנאפולי מושלם לאפיית פיצות איטלקיות, בשרים, דגים ומאפים, והוא מיוצר מחומרי הגלם האיכותיים ביותר. </p>
        <p>לתנור נאפולי היתרונות הגדולים ביותר בתחום:</p>
        <ul>
          <li>מתחמם לטמפרטורה של<span> 450° צלסיוס </span> במהירות שיא של <span>15 דקות בלבד</span></li>
          <li>מוזן בחומרי בעירה מגוונים: גז, עץ, פחמים או שבבים</li>
          <li>הודות לעיצוב המתקדם ולדפנות העבות והמבודדות, הנאפולי <span>חסכוני בגז</span>: כ-420 גרם בלבד לשעת בעירה
          </li>
          <li>אבן אפייה איכותית ברצפת התנור, לקבלת תחתית בצק פריכה ומענגת</li>
          <li>קל ועמיד, מושלם לבית ולקמפינג</li>
          <li>הרכבה עצמית קלה</li>
        </ul>
        <p>זה לא מפתיע שהנאפולי מוגדר כ- <span>Best seller</span> באתר אמזון, ונבחר ל- <span>Amazon choice</span>.</p>
      </div>
    </div>
    <div class="col-md-6 left-side">
      <img src="../assets/ass2.jpg" alt="">
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
  .left-side img {
    width: 50%;
  }
  .block-text {
    width: 75%;
  }
.block-text span {
    font-weight: bold;
    font-size: 18px
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
  }

</style>