<template>
  <div class="row mt-5 p-3 border-top">
    <div class="col center-all">
      <div class="box-text text-center">
        <h2>על פיצה נאפוליטנית אמיתית</h2>
        <p>מי שכבר טעם פיצה נאפוליטנית אמיתית, אינו זקוק להסברים נוספים.</p>
        <p>מי שלא – הגיע הזמן ללמוד!</p>
        <p>הפיצה הנאפוליטנית היא הפיצה בה"א הידיעה. סימני ההיכר שלה הם תחתית ושוליים פריכים, בצק רך ואוורירי, רוטב
          עגבניות צלוי היטב ולמעלה עלי בזיליקום טריים וגבינת מוצרלה שנמסה בחום האדיר. </p>
          <p>בעבר ניתן היה להשיג את הפיצה הנאפוליטנית רק בפיצריות שף שהתמחו בתחום.</p>
          <p>אבל היום, זה קל מתמיד.</p>
          <p>אתם זקוקים רק לשני דברים:</p>
          <ul>
            <li>תנור טוב שמגיע ל-400° ויותר (התנור הביתי שלכם מגיע בדרך כלל ל-250° בלבד).</li>
            <li>בצק מקמח מיוחד, שישן לילה אחד במקרר.</li>
          </ul>
          <p>את הקמח המיוחד (שמכונה בדרך כלל "קמח 00") תוכלו לרכוש בכל סופר שכונתי.</p>
          <p>ואת התנור, ובכן, תוכלו לרכוש כאן </p>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ReelPizza',
    props: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .row {
    background-image: url(../assets/ass3.jpg);
        background-size: cover;
    background-position: center;
  }

  .box-text {
    width: 50%;
    background-color: #ffffff75;
    font-weight: bold;
        padding: 64px;
    margin: 58px 0px;
    font-size: 20px;
  }

  ul {
    text-align: right;
  }

  @media (max-width: 767.98px) {
     .box-text {
    width: 100%;
        padding: 10px;
    margin: 58px 0px;
    font-size: 18px;
  }
  }
</style>