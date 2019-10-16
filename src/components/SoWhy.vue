<template>
  <div>
    <!-- <div class="row mt-5 text-center border-row-top">
      <div class="col p-3 left-side">
        <img src="../assets/ass9.jpg" alt="">
      </div>
    </div> -->
    <div class="row mt-5">
      <div class="col part-shulders center-all">
        <div class="block-text">
          <TitleAndBorderC>אז למה תנור הפיצה Napoli?</TitleAndBorderC>
          <p>טאבון הפיצה <span>נאפולי</span> הושק בקיקסטרטר ב-2017, וגייס את מלוא הסכום תוך 24 שעות בלבד. תוך חודשים אחדים הנאפולי כבש גם את שוק תנורי הפיצה בארה"ב, עד שכל הטאבונים אזלו מהמלאי למשך שבועות ארוכים.</p>
          <p>הנאפולי מתלהט לחום מדהים של +500°C, ויחד עם אבן האפייה המיוחדת שלו הוא מציע חוויה איטלקית אמיתית. רק 90 שניות, ויש לכם פיצה גורמה. לבית, לקמפינג, לערבי משפחה וחברים – ה-<span>Napoli</span> שלכם יהיה במרכז העניינים.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SoWhy',
    props: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .left-side img {
    width: 25%;
  }

  .block-text {
    width: 75%;
    text-align: center;
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