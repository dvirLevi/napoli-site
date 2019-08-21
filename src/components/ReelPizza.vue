<template>
  <div class="row p-3 border-top">
    <div class="col center-all">
      <div class="box-text text-center">
        <h2>500° במהירות שיא</h2>
        <p>הפיצה הנאפוליטנית היא הפיצה בה"א הידיעה. סימני ההיכר שלה הם תחתית ושוליים פריכים, בצק רך ואוורירי, רוטב
          עגבניות צלוי היטב וגבינת מוצרלה שנמסה בחום התנור האדיר. </p>
        <p>90 שניות בלבד! זה זמן האפייה המלא של פיצה נאפוליטנית אמיתית.</p>
        <p>בעבר ניתן היה להשיג את הפיצה הנאפוליטנית רק בפיצריות שף שהתמחו בתחום. אבל היום, זה קל מתמיד. אתם זקוקים רק
          לקמח פיצה טוב, ולתנור איכותי שעובר את ה-400° (התנור הביתי שלכם מגיע לרוב ל-250° בלבד).</p>
        <p>את הקמח, שמכונה בדרך כלל <span>"קמח 00"</span>, תוכלו לרכוש בכל סופר שכונתי.</p>
        <p>ואת התנור, ובכן... תנור הפיצה נאפולי | <span>Napoli Pizza Oven</span> לרשותכם. תוך עשר דקות הוא יגיע ל-400°,
          תוך רבע שעה ל-450°, ותוך 25 דקות בלבד הוא כבר יחצה את ה-500°. </p>
          <button>תוכלו לרכוש אותו כאן</button>

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
    /* font-weight: bold; */
    padding: 64px;
    margin: 58px 0px;
    font-size: 20px;
  }

  .box-text span {
    font-weight: bold;
  }
button {
  border: none;
  background-color: black;
  color: #ffffff;
  padding: 10px;
  outline: none;
}


  @media (max-width: 767.98px) {
    .box-text {
      width: 100%;
      padding: 10px;
      margin: 58px 0px;
      font-size: 20px;
    }
  }
</style>