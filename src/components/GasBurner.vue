<template>
  <div class="row mt-3">
    <div class="col-md-6 p-3 left-side center-all border-left">

      <div class="row center-all">
        <div class="col center-all">
          <div class="block-text">
            <!-- <h2>מבער פחמים</h2> -->
            <TitleAndBorderR>מבער פחמים</TitleAndBorderR>
            <p>ה-<span>Napoli Pizza Oven</span> מגיע עם תא נירוסטה מעוצב, גדול וייחודי להבערת פחמים, עצים או שבבים. התא
              נפרד
              מחלל האפייה
              וניתן לשליפה בקלות. פתח הזנה בגג התנור מאפשר להוסיף בקלות עצים חדשים תוך כדי עבודה.</p>
            <!-- <ButtonLink text="תוכלו לרכוש אותו כאן" link="/" /> -->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col center-all">
          <img data-aos="fade-up" src="../assets/ass4.jpg" alt="">
        </div>
      </div>

    </div>
    <div class="col-md-6 p-3 left-side center-all ">
      <div class="row row-gas">
        <div class="col-md-12 center-all">
          <img data-aos="fade-up" src="../assets/ass8.png" alt="">
        </div>
        <div class="col-md-12 center-all">
          <div class="block-text">
            <!-- <h2>מבער גז</h2> -->
             <TitleAndBorderR>מבער גז</TitleAndBorderR>
            <p>מבער הגז של <span>Napoli Pizza Oven</span> מספק אש חזקה, יציבה ונקייה, והוא חסכוני ביותר: כ-420 גרם בלבד
              לשעת
              בעירה. עוצמת הלהבות ניתנת לשליטה מדויקת. לחיצה אחת על מצת המבער, והתנור לוהט. מבער הגז ניתן לרכישה בנפרד.
              <span>מומלץ!</span></p>
            <ButtonLink text="לרכישת המבער" link="/store" />
          </div>
        </div>
      </div>
      <!-- <div class="row center-all">
        <div class="col center-all">
          <div class="block-text">
            <h2>מבער גז</h2>
            <p>מבער הגז של <span>Napoli Pizza Oven</span> מספק אש חזקה, יציבה ונקייה, והוא חסכוני ביותר: כ-420 גרם בלבד
              לשעת
              בעירה. עוצמת הלהבות ניתנת לשליטה מדויקת. לחיצה אחת על מצת המבער, והתנור לוהט. מבער הגז ניתן לרכישה בנפרד.
              <span>מומלץ!</span></p>
            <ButtonLink text="לרכישת המבער" link="/" />
          </div>
        </div>
      </div> -->

    </div>

    <!-- <div class="col-md-6 center-all pb-3">

    </div>
    <div class="col-md-6 center-all pb-3">
      <div class="block-text">
        <h2>מבער גז</h2>
        <p>מבער הגז של <span>Napoli Pizza Oven</span> מספק אש חזקה, יציבה ונקייה, והוא חסכוני ביותר: כ-420 גרם בלבד לשעת
          בעירה. עוצמת הלהבות ניתנת לשליטה מדויקת. לחיצה אחת על מצת המבער, והתנור לוהט. מבער הגז ניתן לרכישה בנפרד.
          <span>מומלץ!</span></p>
        <ButtonLink text="לרכישת המבער" link="/" />
      </div>
    </div>
    <div class="col-md-6 p-3 left-side center-all">
      <img data-aos="fade-up" src="../assets/ass4.jpg" alt="">
    </div> -->
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

  .row-gas {
    flex-direction: column;
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
    .row-gas {
    flex-direction: column-reverse;
  }
  }
</style>