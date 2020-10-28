<template>
      <section class="row row-details pt-5 pb-5 mt-4">
        <div class="col">
          <div class="container">
            <div class="row">
              <div class="col f-center" @click="showHideText">
                <h2 class="font-weight-bold">שאלות ותשובות: <span><i v-if="!ifShowQues" class="las la-angle-down"></i><i v-else class="las la-angle-up"></i></span></h2>
              </div>
            </div>
            <div class="row" v-if="ifShowQues">
              <div class="col-md-6 mt-2" v-for="item in questions" :key="item.id">
                <div class="w-100 f-center-right">
                  <h4>{{item.question}}</h4>
                </div>
                <div class="w-100 f-center-right">
                  <h6 v-html="item.answer"></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
  // @ is an alias to /src
  // import titleSectionGallery from '@/components/titleSectionGallery.vue'

  export default {
    name: 'questions',
    components: {
      // titleSectionGallery,
    },
    data() {
      return {
        ifShowQues: false,
        questions: [{
            question: "אתם עושים משלוחים?",
            answer: "ברור. לא סתם משלוחים, אלא משלוחים מהירים במיוחד!",
            id: 1
          },
          {
            question: "תוך כמה זמן החבילה תגיע אליי?",
            answer: `החבילות מגיעות בדרך כלל תוך 5-3 ימי עסקים. אבל הצוות הלוגיסטי שלנו כל כך יעיל, שלא פעם משלוחים הגיעו כבר למחרת ההזמנה.`,
            id: 2
          },
          {
            question: "כמה עולה משלוח, והאם יש אפשרות לאיסוף עצמי?",
            answer: "למרות שהחבילות גדולות וכבדות יחסית, משלוח בפריסה ארצית עולה אצלנו 40 שקלים בלבד. ניתן כמובן לבצע איסוף עצמי מהמחסן שלנו בירושלים",
            id: 3
          },
          {
            question: "למה אין לכם תצוגה?",
            answer: "כי אנחנו רוצים להוריד את המחירים ככל האפשר! תצוגה מחייבת להחזיק חנות ולשכור עובדים, וזה מייקר מאוד את המוצרים. אנחנו מעדיפים להשקיע במשלוחים ובשירות הלקוחות ",
            id: 4
          },
          {
            question: "מה גודל הפיצות שניתן לאפות בטאבון?",
            answer: 'פיצות בקוטר 32-30 ס"מ.',
            id: 5
          },
          {
            question: "מה מידות הטאבון?",
            answer: `רוחב: כ-35 ס"מ. אורך: כ-54 ס"מ. משקל: 13.5 ק"ג. מידע טכני מפורט יותר נמצא <a class="link" href='https://www.bertello.co.il/store'>בחנות האתר</a>.`,
            id: 6
          },
          {
            question: "איפה הטאבון מיוצר?",
            answer: 'ברטלו היא חברה אמריקנית שיושבת במינסוטה ארה"ב. הטאבון מיוצר במפעל שלה בסין (גם חברת אייפון, ומותגים אמריקניים אחרים, מייצרים את המכשירים שלהם בסין ) ',
            id: 7
          },
          {
            question: "האם הטאבון באמת מגיע ל-450 מעלות?",
            answer: "באמת באמת.",
            id: 8
          },
              {
            question: "האם הטאבון באמת מגיע ל-450 מעלות?",
            answer: "באמת באמת.",
            id: 8
          },
              {
            question: "האם הפיצה באמת מוכנה בדקה וחצי?",
            answer: "באמת באמת. זה כמובן תלוי בבצק שלכם. יש בצקים שמוכנים תוך דקה אחת, ויש כאלה שיצטרכו שתי דקות. ",
            id: 8
          },
              {
            question: "האם צריך להרכיב את הטאבון?",
            answer: "כן. ההרכבה פשוטה מאוד ואורכת 3-2 דקות. אין שום צורך בחוש טכני, ובכל מקרה יש לנו סרטוני הדרכה ותמיכה טכנית בטלפון.",
            id: 8
          },
              {
            question: "איך הטאבון מתחבר לגז?",
            answer: "כמו גריל גז רגיל: או לבלון נייד (עם וסת 30 מיליבר), או לנקודת גז קבועה. ",
            id: 8
          },
              {
            question: "הטאבון לא קטן מדי?",
            answer: "לא. זה הגודל הממוצע של טאבונים ביתיים. ויש לכך סיבה טובה: הטאבונים הגדולים יותר מתחממים לאט, זוללים גז, כבדים מאוד, ויקרים להחריד.",
            id: 8
          },
              {
            question: "האם ניתן לשלם בטלפון?",
            answer: "כן. אנחנו זמינים בכל יום משעה 9:00 ועד השעה 18:00.",
            id: 8
          },
            {
            question: "האם ניתן לפרוס את העסקה לתשלומים?",
            answer: "כן. עד 10 תשלומים ללא ריבית.",
            id: 8
          },
            {
            question: "יש לכם מתכונים?",
            answer: `מלא! כנסו <a class="link" href='https://www.facebook.com/Bertello.oven.il'>לפייסבוק</a> שלנו, או בקשו מאיתנו בהודעת וואטספ – <a class="link" href="https://api.whatsapp.com/send?phone=972537234223" target="_blanc"><i class="fab fa-whatsapp"></i></a>.`,
            id: 8
          },
        ]
      }
    },
    mounted() {
      
      
      // if (this.mobOrDesk) {
      //   this.ifShowQues = false
      // }
    },
    methods: {
      showHideText() {
        // if (this.mobOrDesk) {
          this.ifShowQues = !this.ifShowQues
        // }
      },
      // track() {
      //   alert()
      //   this.$ga.page('/')
      // }
    },
    computed: {
      // mobOrDesk() {
      //   return this.$store.getters.mobOrDesk
      // }
    }
  }
</script>

<style scoped>
  /* .row-icons {
    background-color: var(--main-text-color);
  }

  .row-icons img {
    width: 35%;
  }

  .row-icons .icon {
    border-left: solid #fff 1px;
  }

  .row-icons .icon:last-child {
    border-left: none;
  }

  .row-details {
    background-color: #f2f2f2;

  }

  .row-icons .icon i {
    font-size: 45px;
    color: #fff;
  } */

  @media (max-width: 767.98px) {
    /* .row-icons .icon {
      padding: 20px;
      position: relative;
      border-left: none;
    }

    .row-icons .icon:before {
      content: "";
      border-bottom: 3px solid #fff;
      bottom: 0;
      width: 50px;
      height: 1px;
      display: block;
      position: absolute;
    }

    .row-icons .icon:last-child:before {
      content: "";
      border-bottom: none;
      bottom: 0;
      width: 50px;
      height: 1px;
      display: block;
      position: absolute;
    } */
  }
</style>