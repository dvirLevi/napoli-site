<template>
  <div class="row">

    <div class="col-md-6 center-all p-3">
      <div class="block-text">
        <!-- <h2>500°C במהירות שיא</h2> -->
        <TitleAndBorderR>500°C במהירות שיא</TitleAndBorderR>
        <p>הפיצה הנאפוליטנית היא הפיצה בה"א הידיעה. סימני ההיכר שלה הם אפייה מהירה, תחתית ושוליים פריכים, בצק אוורירי, רוטב עגבניות צלוי היטב וגבינת מוצרלה שנמסה בחום התנור האדיר.</p>
        <p>בעבר ניתן היה להשיג את הפיצה הנאפוליטנית רק בפיצריות שף. אבל היום, זה קל מתמיד: אתם זקוקים רק לחומרי גלם טובים מהסופר, ולתנור <span>Napoli</span> שמגיע בזמן קצרצר ל-500°C (כפליים מהתנור הביתי שלכם, שמגיע לרוב ל-250°C בלבד).</p>
        <ButtonLink text="לרכישת התנור" link="/store" class="h4"/>
      </div>
    </div>
    <div class="col-md-6 left-side p-0">
      <img data-aos="fade-up" src="../assets/ass9.jpg" alt="">
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
    background-color: #be6c420a;
  }

  .left-side {
    /* text-align: left; */
    text-align: left;
  }

  .left-side img {
    width: 100%;
  }

  .block-text {
    width: 75%;
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