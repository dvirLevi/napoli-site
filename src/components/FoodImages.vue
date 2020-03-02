<template>
  <div class="row pt-3 pb-3">
    <div class="col-12 mt-3 mb-2">
       <TitleAndBorderC>מה תעשו עם הנאפולי שלכם?</TitleAndBorderC>
    </div>
    <div class="col-md-4">
      <div class="row">
        <div class="col">
          <img src="../assets/ass12.png" alt="">
        </div>
      </div>
      <div class="row">
        <div class="col">
          <TitleAndBorderR>פיצה נאפוליטנית אמיתית</TitleAndBorderR>
          <p>קמח טוב, רוטב עגבניות עשיר, בזיליקום טרי ומוצרלה. הכינו לחברים פיצת גורמה משגעת, בדיוק כמו באיטליה</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="row">
        <div class="col">
          <img src="../assets/ass11.png" alt="">
        </div>
      </div>
      <div class="row">
        <div class="col">
          <TitleAndBorderR>סטייק מושלם</TitleAndBorderR>
          <p>בחום האדיר של טאבון <span>נאפולי</span> תוכלו לצלות את הנתח האהוב עליכם באיכות מדהימה. לא לשכוח בירה קרה
            בצד</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="row">
        <div class="col">
          <img src="../assets/ass10.png" alt="">
        </div>
      </div>
      <div class="row">
        <div class="col">
          <TitleAndBorderR>ירקות גורמה</TitleAndBorderR>
          <p>עם קצת שמן זית ותבלינים, הכינו את לקט הירקות האהוב עליכם בתנור הנאפולי</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FoodImages',
    props: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .border-row-top {
    border-top: solid black 2px;
    border-bottom: solid black 2px;
  }

  img {
    width: 100%;
  }

  p {
    font-size: 18px;
  }

  @media (max-width: 767.98px) {}
</style>