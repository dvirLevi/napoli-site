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
          <TitleAndBorderC>אז למה Napoli Pizza Oven?</TitleAndBorderC>
          <p>תנור הפיצה נאפולי | <span>Napoli Pizza Oven</span> הושק בקיקסטרטר ב-2017, וגייס את מלוא הסכום תוך 24 שעות בלבד. תוך
            חודשים אחדים ה-<span>Napoli Pizza Oven</span> כבש גם את אמזון ארה"ב, הוכרז כ-<span>Best seller</span>
            וכ-<span>Amazon choice</span>, עד שכל התנורים
            אזלו מהמלאי למשך שבועות ארוכים. </p>
          <p>הנאפולי מתלהט לחום מדהים של +500°C, ויחד עם אבן האפייה המיוחדת שלו הוא מציע חוויה איטלקית אמיתית. רק 90
            שניות, ויש לכם פיצה גורמה. לבית, לקמפינג, לערבי משפחה וחברים – ה-<span>Napoli Pizza Oven</span> שלכם יהיה במרכז העניינים.
          </p>
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

  span {
    font-weight: bold;
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