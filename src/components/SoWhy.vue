<template>
  <div>
    <div class="row mt-5 text-center border-row-top">
      <div class="col p-3 left-side">
        <img src="../assets/ass9.jpg" alt="">
      </div>
    </div>
    <div class="row">
      <div class="col center-all">
        <div class="block-text">
          <h2>אז למה Napoli Pizza Oven?</h2>
          <p>תנור הפיצה נאפולי | <span>Napoli Pizza Oven</span> הושק בקיקסטרטר ב-2017, וגייס את מלוא הסכום תוך 24 שעות
            בלבד.</p>
          <p>תוך חודשים אחדים ה-<span>Napoli Pizza Oven</span> כבש גם את אמזון ארה"ב, הוכרז כ- <span>Best seller</span>
            וכ- <span>Amazon choice</span>, עד שכל התנורים אזלו מהמלאי למשך שבועות ארוכים.</p>
          <p>תנור הפיצה נאפולי | <span>Napoli Pizza Oven</span> מתלהט לחום מדהים של +500°, ויחד עם אבן האפייה המיוחדת
            שלו הוא מציע חוויה איטלקית אמיתית. 90 שניות בלבד, ויש לכם פיצה גורמה.</p>
          <p>לגינה, לקמפינג, לערבי משפחה וחברים – הנאפולי | <span>Napoli Pizza Oven</span> שלכם יהיה במרכז העניינים.</p>
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
  .border-row-top {
    border-top: solid black 2px;
  }

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