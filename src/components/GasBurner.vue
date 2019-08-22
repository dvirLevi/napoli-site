<template>
  <div class="row mt-5">

    <div class="col-md-6 center-all">
      <div class="block-text">
        <h2>על מבער Napoli Pizza Oven</h2>
        <p>ה-<span>Napoli Pizza Oven</span> מוזן בבסיסו באמצעות פחמים, עצים או שבבים.</p>
        <p>לשם כך פותחה עבורו מגירה מעוצבת עם פתח הזנה גדול, מבודד ונוח.</p>
        <p>מלבד הבערת תנור הפיצה נאפולי | <span>Napoli Pizza Oven</span> באמצעות פחמים, מומלץ מאוד להשתמש גם במבער הגז
          של <span>Napoli Pizza Oven</span>, שניתן לרכישה בנפרד. </p>
        <p>מבער הגז של <span>Napoli Pizza Oven</span> מספק אש חזקה, יציבה ונקייה, והוא חסכוני ביותר: כ-420 גרם בלבד לשעת
          בעירה.</p>
        <p>לחיצה אחת על מצת המבער, והתנור לוהט. </p>
        <p><span>מומלץ!</span></p>
      </div>
    </div>
    <div class="col-md-6 p-3 left-side center-all">
      <img data-aos="fade-up" src="../assets/ass8.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GasBurner',
    props: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .row {
    /* background-color: #635d4740; */
  }

  .left-side {
    /* text-align: left; */
  }

  .left-side img {
    width: 80%;
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