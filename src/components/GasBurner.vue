<template>
  <div class="row mt-3">
    <div class="col-12 p-4">
      <TitleAndBorderC>מבער Bertello</TitleAndBorderC>
    </div>
    <div class="col-md-6 p-3 left-side center-all border-left">
      <div class="row center-all">
        <div class="col center-all">
          <div class="block-text">
            <!-- <TitleAndBorderR>תא פחמים נשלף</TitleAndBorderR> -->
            <p>עם ברטלו תוכלו לאפות את הפיצות שלכם בשלוש דרכים:</p>
            <p><span class="font-weight-bold">עצים |</span> אם אתם משוגעים לדבר, או שסתם נחה עליכם הרוח, טאבון ברטלו
              מציע לכם לאפות פיצות בדרך המסורתית
              והטעימה מכולן: עצים!
              הארומה? משגעת! כאשר משתמשים בעצים בלבד, אין צורך במבער הגז אלא רק בטאבון.</p>
            <p> <span class="font-weight-bold">גז |</span> אם אין לכם כוח להתעסק עם עצים, האפשרות הזו בשבילכם. מבער הגז
              העוצמתי של Bertello מספק אש חזקה ויציבה, והוא צורך כ-420 גרם בלבד לשעה. עוצמת הלהבות ניתנת לשליטה, וההצתה
              פשוטה ובטיחותית.
              מבער הגז ניתן לרכישה בנפרד.</p>
            <!-- <p>תנור הפיצה <span>ברטלו</span> מגיע עם תא נירוסטה מעוצב, גדול וייחודי להבערת פחמים, עצים או שבבים. התא
              נפרד מחלל האפייה וניתן לשליפה בקלות. פתח הזנה בגג התנור מאפשר להוסיף בקלות עצים חדשים תוך כדי עבודה.</p> -->
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
          <img data-aos="fade-up" src="../assets/ass33.png" alt="">
        </div>
        <div class="col-md-12 center-all">
          <div class="block-text">
            <!-- <h2>מבער גז</h2> -->
            <!-- <TitleAndBorderR>מבער גז</TitleAndBorderR> -->
            <p><span class="font-weight-bold">גז ועצים |</span> מבער הגז של ברטלו מגיע תמיד עם <span class="font-weight-bold">מגירת עצים משולבת,</span> והוא
              פותח בפניכם את האפשרות הטובה מכולן: הבערת גז ועצים בו-זמנית. כך תיהנו גם מעוצמת הגז, וגם מהחום ומהארומה של
              העצים. מוסיפים שני כפיסי עץ למגירה, ויחד עם המבער הם יפיקו את התוצאה המושלמת.  <span class="font-weight-bold">90 שניות בלבד ויש לכם פיצה
              איטלקית אמיתית!</span> אין צורך בגפרורים.</p>
            <!-- <p>מבער הגז העוצמתי של <span>Bertello</span> מספק אש חזקה, יציבה ונקייה, והוא חסכוני ביותר: כ-420 גרם בלבד
              לשעת בעירה. עוצמת הלהבות ניתנת לשליטה מדויקת. הכי פשוט ומהיר: לחיצה אחת על המצת, והתנור לוהט. מבער הגז
              ניתן לרכישה בנפרד. <span>מומלץ!</span></p> -->
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