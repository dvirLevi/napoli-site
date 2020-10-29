<template>
  
      <div class="row mt-3">
        <div class="col">
          <div class="row">
          <div class="col f-center-right">
            <!-- <h2 class="font-weight-bold">שאלות ותשובות: <span><i v-if="!ifShowQues" class="las la-angle-down"></i><i
                  v-else class="las la-angle-up"></i></span></h2> -->
            <TitleAndBorderR>שאלות ותשובות: </TitleAndBorderR>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mt-2" v-for="item in questions" :key="item.id">
            <div class="w-100 f-center-right">
              <h4>{{item.question}}</h4>
            </div>
            <div class="w-100 f-center-right">
              <p v-html="item.answer"></p>
            </div>
          </div>
        </div>
        <div class="row" v-if="ifShowQues">
          <div class="col-md-6 mt-2" v-for="item in moreQuestions" :key="item.id">
            <div class="w-100 f-center-right">
              <h4>{{item.question}}</h4>
            </div>
            <div class="w-100 f-center-right">
              <p v-html="item.answer"></p>
            </div>
          </div>
        </div>
        <div class="w-100 more mt-2">
          <p v-if="!ifShowQues" @click="ifShowQues = !ifShowQues">עוד שאלות ותשובות>></p>
          <p v-else @click="ifShowQues = !ifShowQues">פחות שאלות ותשובות>></p>
        </div>
        </div>
      </div>
 
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
            answer: `החבילות מגיעות בדרך כלל תוך 5-2 ימי עסקים.`,
            id: 2
          },
          {
            question: "כמה עולה משלוח, והאם יש אפשרות לאיסוף עצמי?",
            answer: "עלות המשלוח 40 שקלים בלבד. ניתן כמובן לבצע איסוף עצמי מהמחסן שלנו בירושלים.",
            id: 3
          },
        ],
        moreQuestions: [{
            question: "למה אין לכם תצוגה?",
            answer: "כי אנחנו רוצים להוריד את המחירים ככל האפשר! תצוגה מחייבת להחזיק חנות ולשכור עוד עובדים, וזה מייקר מאוד את המוצרים.",
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
          // {
          //   question: "איפה הטאבון מיוצר?",
          //   answer: 'ברטלו היא חברה אמריקנית שיושבת במינסוטה ארה"ב. הטאבון מיוצר במפעל שלה בסין (גם חברת אייפון, ומותגים אמריקניים אחרים, מייצרים את המכשירים שלהם בסין ) ',
          //   id: 7
          // },
          {
            question: "האם הטאבון באמת מגיע ל-450 מעלות?",
            answer: "באמת באמת.",
            id: 8
          },

          {
            question: "האם הפיצה באמת מוכנה בדקה וחצי?",
            answer: "באמת באמת. זה כמובן תלוי בבצק שלכם. יש בצקים שמוכנים תוך דקה אחת, ויש כאלה שיצטרכו שתי דקות.",
            id: 10
          },
          {
            question: "האם צריך להרכיב את הטאבון?",
            answer: "כן. ההרכבה פשוטה מאוד ואורכת 3-2 דקות. אין צורך בחוש טכני, ובכל מקרה יש לנו סרטוני הדרכה ותמיכה טלפונית.",
            id: 11
          },
          {
            question: "איך הטאבון מתחבר לגז?",
            answer: "כמו גריל גז רגיל: או לבלון נייד (עם וסת 30 מיליבר), או לנקודת גז קבועה. ",
            id: 12
          },
          {
            question: "הטאבון לא קטן מדי?",
            answer: "לא. זה הגודל הממוצע של טאבונים ביתיים. ויש לכך סיבה טובה: הטאבונים הגדולים יותר מתחממים לאט, זוללים גז, כבדים מאוד, ויקרים להחריד.",
            id: 13
          },
              {
            question: "האם התשלום באתר מאובטח?",
            answer: "לחלוטין. מערכת הסליקה באתר מופעלת על ידי חברת טרנזילה – החברה המובילה בישראל.",
            id: 17
          },
          {
            question: "האם ניתן לשלם בטלפון?",
            answer: "כן. אנחנו זמינים בכל יום משעה 9:00 ועד השעה 18:00.",
            id: 14
          },
          {
            question: "האם ניתן לפרוס את העסקה לתשלומים?",
            answer: "כן. עד 10 תשלומים ללא ריבית.",
            id: 15
          },
          {
            question: "יש לכם מתכונים?",
            answer: `מלא! כנסו לפייסבוק <a class="link" href='https://www.facebook.com/Bertello.oven.il'><i class="fab fa-facebook-f"></i></a> שלנו. </br>  </br>יש לכם שאלות נוספות? שלחו לנו בוואטספ  <a href="https://api.whatsapp.com/send?phone=972537234223" target="_blanc"><i class="fab fa-whatsapp"></i></a>`,
            id: 16
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
      // showHideText() {
      //   // if (this.mobOrDesk) {
      //   this.ifShowQues = !this.ifShowQues
      //   // }
      // },
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

  .more {
    color: #ff3d00;
  }

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