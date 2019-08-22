<template>
  <div class="row mt-3 p-3 border-top">
    <div class="col border-strong">
      <div class="row">


        <div class="col-12 center-all pt-5 pb-5 text-center">
          <h3>Napoli Pizza Oven – נתונים טכניים</h3>
        </div>
        <div class="col-md-5 center-all" data-aos="fade-up">
          <div class="row">
            <div class="col-md-6 text-center center-all">
              <h3 class="w-100">טמפרטורה:</h3>
              <p class="w-100 font-weight-bold">450° צלסיוס תוך 15 דקות</p>
              <p class="w-100 font-weight-bold">+500° צלסיוס תוך 25 דקות</p>
            </div>
            <div class="col-md-6">
              <img class="w-100" src="../assets/ass7.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="col-md-5 center-all" data-aos="fade-up">
          <div class="col-md-6 text-center center-all">
            <h3 class="w-100">מידות חיצוניות:</h3>
            <p class="w-100">רוחב: 35.5 ס"מ</p>
            <p class="w-100">אורך: 54.5 ס"מ</p>
            <p class="w-100">גובה: 28 ס"מ</p>
            <p class="w-100">משקל: 12.5 ק"ג</p>
          </div>
          <div class="col-md-6">
            <img class="w-100" src="../assets/ass6.png" alt="">
          </div>
        </div>
        <div class="col-md-2 center-all">

        </div>
        <div class="col-md-2 center-all">

        </div>
        <div class="col-md-5 center-all" data-aos="fade-up">
          <div class="col-md-6 text-center center-all">
            <h3 class="w-100">שטח אבן הצלייה:</h3>
            <p class="w-100">רוחב: 31.75 ס"מ</p>
            <p class="w-100">עומק: 34.29 ס"מ </p>

          </div>
          <div class="col-md-6">
            <img class="w-100" src="../assets/ass5.png" alt="">
          </div>
        </div>
        <div class="col-md-5 center-all" data-aos="fade-up">
          <div class="col-md-6 text-center center-all">
            <h3 class="w-100">הזנה:</h3>
            <p class="w-100">גז | פחמים | עצים | שבבים</p>
            <!-- <p class="w-100">פחמים </p>
          <p class="w-100">עצים</p>
          <p class="w-100">שבבים</p> -->
          </div>
          <div class="col-md-6">
            <img class="w-100" src="../assets/ass4.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TechnicalSpecifications',
    props: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .border-strong {
    border: solid rgb(0, 0, 0) 3px;
  }

  .col-md-5 {
    margin: 20px 0
  }

  .box-text {
    width: 50%;
    background-color: #ffffffe8;
    padding: 64px;
    margin: 58px 0px;
  }

  p {
    font-size: 20px;
  }

  @media (max-width: 767.98px) {
    .box-text {
      width: 100%;
      padding: 10px;
      margin: 58px 0px;
    }
  }
</style>