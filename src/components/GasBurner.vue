<template>
  <div class="row mt-3">
    <div class="col-12 p-4">
      <TitleAndBorderC>מבער Bertello</TitleAndBorderC>
    </div>
    <div class="col-md-6 p-3 left-side center-all border-left">
      <div class="row center-all">
        <div class="col center-all">
          <div class="block-text">
            <TitleAndBorderR>תא פחמים נשלף</TitleAndBorderR>
            <p>תנור הפיצה <span>ברטלו</span> מגיע עם תא נירוסטה מעוצב, גדול וייחודי להבערת פחמים, עצים או שבבים. התא נפרד מחלל האפייה וניתן לשליפה בקלות. פתח הזנה בגג התנור מאפשר להוסיף בקלות עצים חדשים תוך כדי עבודה.</p>
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
          <img data-aos="fade-up" src="../assets/ass30.png" alt="">
        </div>
        <div class="col-md-12 center-all">
          <div class="block-text">
            <!-- <h2>מבער גז</h2> -->
             <TitleAndBorderR>מבער גז</TitleAndBorderR>
            <p>מבער הגז העוצמתי של <span>Bertello</span> מספק אש חזקה, יציבה ונקייה, והוא חסכוני ביותר: כ-420 גרם בלבד לשעת בעירה. עוצמת הלהבות ניתנת לשליטה מדויקת. הכי פשוט ומהיר: לחיצה אחת על המצת, והתנור לוהט. מבער הגז ניתן לרכישה בנפרד. <span>מומלץ!</span></p>
            <ButtonLink text="לחנות האתר" link="/store" class="h4" />
          </div>
        </div>
      </div>
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
  .left-side img {
    width: 80%;
  }

  .block-text {
    width: 75%;
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

    .row-gas {
    flex-direction: column-reverse;
  }
  }
</style>