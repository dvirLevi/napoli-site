(function(t){function e(e){for(var s,c,r=e[0],l=e[1],o=e[2],d=0,v=[];d<r.length;d++)c=r[d],n[c]&&v.push(n[c][0]),n[c]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(v.length)v.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==n[l]&&(s=!1)}s&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},n={app:0},i=[];function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("64a9"),n=a.n(s);n.a},"05fd":function(t,e,a){t.exports=a.p+"img/ass14.90500163.jpg"},"0656":function(t,e,a){},"0686":function(t,e,a){},"0866":function(t,e,a){},"0a7a":function(t,e,a){},1056:function(t,e,a){},1550:function(t,e,a){},"17f8":function(t,e,a){t.exports=a.p+"img/ass2.09247556.jpg"},2129:function(t,e,a){t.exports=a.p+"img/ass4.73c6ac73.jpg"},"222e":function(t,e,a){},"260b":function(t,e,a){"use strict";var s=a("aee8"),n=a.n(s);n.a},"2ac2":function(t,e,a){t.exports=a.p+"img/napoli_logo.b76f53ea.jpg"},3374:function(t,e,a){"use strict";var s=a("d377"),n=a.n(s);n.a},"34eb":function(t,e,a){},"40bb":function(t,e,a){"use strict";var s=a("8c82"),n=a.n(s);n.a},4114:function(t,e,a){"use strict";var s=a("7f88"),n=a.n(s);n.a},"45e3":function(t,e,a){t.exports=a.p+"img/ass9.ce1b83ce.jpg"},"47b9":function(t,e,a){"use strict";var s=a("b209"),n=a.n(s);n.a},"4e2e":function(t,e,a){"use strict";var s=a("222e"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"app"}},[a("ToolBar"),a("div",{on:{click:t.closeCart}},[a("router-view"),a("Footer")],1)],1)},i=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row row-sticky"},[s("div",{staticClass:"col"},[s("div",{staticClass:"wrap-all-el d-flex"},[s("div",{staticClass:"center-all icon-cart"},[s("div",{staticClass:"position-relative"},[s("i",{staticClass:"fas fa-shopping-cart",on:{click:function(e){return e.target!==e.currentTarget?null:t.openCart(e)}}}),t.inCart.length?s("div",{staticClass:"point-green"}):t._e(),s("Cart")],1)]),s("div",{staticClass:"bac-menu",class:{menusToolBar:!t.ifMenu},on:{click:function(e){t.ifMenu=!t.ifMenu}}},[s("div",{staticClass:"center-all wrap-items"},[t._l(t.categories,function(e){return s("router-link",{key:e.id,staticClass:"items-menu",attrs:{tag:"div",to:e.link,"router-link-active":""}},[t._v(t._s(e.name))])}),t._m(0)],2)]),s("Hamburger",{attrs:{ifMenu:t.ifMenu},on:{openClose:function(e){t.ifMenu=!t.ifMenu}}}),s("router-link",{attrs:{tag:"div",to:"/"}},[s("img",{attrs:{src:a("2ac2"),alt:""}})])],1)])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mobile w-100"},[a("div",{staticClass:"w-100 center-all h2 mt-3 "},[a("div",{staticClass:"w-50 text-center"},[a("i",{staticClass:"fab fa-instagram"})]),a("div",{staticClass:"w-50 text-center"},[a("i",{staticClass:"fab fa-facebook-f"})])])])}],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contain",class:{change:t.ifMenu},on:{click:function(e){return t.$emit("openClose")}}},[a("div",{staticClass:"bar1"}),a("div",{staticClass:"bar2"}),a("div",{staticClass:"bar3"})])},o=[],u={name:"Hamburger",props:{ifMenu:Boolean},data:function(){return{}}},d=u,v=(a("4114"),a("2877")),p=Object(v["a"])(d,l,o,!1,null,"d15a07f2",null),m=p.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.ifCart?a("div",{staticClass:"cart"},[a("div",{staticClass:"arrow-up"}),a("div",{staticClass:"w-100 over-scroll"},[t._m(0),t.products.length?a("div",{staticClass:"row center-all m-1 "},t._l(t.products,function(e){return a("div",{key:e.id,staticClass:"col-md-12 box-product mt-2"},[a("div",{staticClass:"row center-all"},[a("div",{staticClass:"col-3 "},[a("img",{staticClass:"w-100",attrs:{src:e.img,alt:""}})]),a("div",{staticClass:"col-9 text-center "},[a("p",[t._v(t._s(e.name))]),a("div",{staticClass:"w-100 center-all"},[a("p",[t._v(t._s(e.price)+" ₪")]),a("div",{staticClass:" border-left butt-oper",on:{click:function(t){e.amount++}}},[t._v("\n                +\n              ")]),a("div",[t._v("\n                "+t._s(e.amount)+"\n              ")]),a("div",{staticClass:" border-right butt-oper",on:{click:function(t){e.amount--}}},[t._v("\n                -\n              ")])])])])])}),0):a("div",[t._m(1)]),a("div",{staticClass:"center-all"},[a("p",[t._v('סה"כ: '+t._s(t.Payable)+" ₪")])]),a("div",{staticClass:"center-all "},[a("ButtonLink",{attrs:{text:"להמשך קנייה",link:"/store"},on:{customEvent:t.openCart}}),t.products.length?a("ButtonLink",{attrs:{text:" לתשלום",link:"/pay"}}):t._e()],1)])]):t._e()},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-100 center-all"},[a("h5",{staticClass:"m-0"},[t._v("עגלת קניות")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row pt-5"},[a("div",{staticClass:"col-12 center-all font-weight-bold"},[a("p",[t._v("אין מוצרים בעגלה..")])])])}],C={name:"Cart",components:{},computed:{ifCart:function(){return this.$store.state.ifCart},products:function(){return this.$store.getters.inCart},Payable:function(){var t=0;for(var e in this.$store.getters.inCart)t+=this.$store.getters.inCart[e].amount*this.$store.getters.inCart[e].price;return t}},methods:{openCart:function(){this.$store.commit("showCart")}}},h=C,g=(a("9819"),Object(v["a"])(h,f,_,!1,null,"5d494271",null)),b=g.exports,w={name:"ToolBar",components:{Hamburger:m,Cart:b},props:{},data:function(){return{ifMenu:!1}},computed:{categories:function(){return this.$store.state.categories},inCart:function(){return this.$store.getters.inCart}},methods:{openCart:function(){this.$store.commit("showCart")}}},x=w,y=(a("a5d3"),Object(v["a"])(x,c,r,!1,null,"54ce85b1",null)),$=y.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row mt-5 p-3"},[a("div",{staticClass:"col-md-5 center-all"},t._l(t.categories,function(e){return a("router-link",{key:e.id,staticClass:"items-menu h5 m-3",attrs:{tag:"div",to:e.link,"router-link-active":""}},[t._v(t._s(e.name))])}),1),t._m(0),t._m(1),t._m(2)])},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-5 center-all"},[s("img",{staticClass:"w-25",attrs:{src:a("8680"),alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-2 center-all p-4"},[a("div",{staticClass:"w-50 text-center"},[a("i",{staticClass:"fab fa-instagram"})]),a("div",{staticClass:"w-50 text-center"},[a("i",{staticClass:"fab fa-facebook-f"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-12 center-all mt-5"},[a("p",{staticClass:"m-0"},[t._v("נבנה ופותח ב"),a("a",{attrs:{href:"https://apps-life.netlify.com/#/"}},[t._v("AppsLife")])])])}],O={name:"Footer",props:{},computed:{categories:function(){return this.$store.state.categories}}},E=O,z=(a("c0e0"),Object(v["a"])(E,k,P,!1,null,"e2c99784",null)),j=z.exports,D={name:"App",components:{ToolBar:$,Footer:j},methods:{closeCart:function(){this.$store.commit("allTimeCloseCart")}}},B=D,M=(a("034f"),Object(v["a"])(B,n,i,!1,null,null,null)),N=M.exports,T=a("8c4f"),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("OnNapoli"),a("videoTop"),a("RecipesLink"),a("ReelPizza"),a("GasBurner"),a("FoodImages"),a("SoWhy"),a("videoBottom")],1)},L=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"w-100 center-all mb-2"},[s("img",{attrs:{src:a("6061"),alt:""}})])])])}],R=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row mt-4 p-4 text-center"},[s("div",{staticClass:"col part-shulders"},[s("h2",{staticClass:"m-3"},[t._v("Napoli Pizza Oven")]),s("p",[t._v("תנור הפיצה נאפולי | "),s("span",[t._v("Napoli Pizza Oven")]),t._v(" נולד משילוב של אהבה גדולה לפיצות גורמה ותכנון הנדסי קפדני. ה-"),s("span",[t._v("Napoli Pizza Oven")]),t._v(" מיוצר מהחומרים האיכותיים ביותר, והוא מושלם לאפיית פיצות איטלקיות ולהכנת בשרים, דגים או מאפים.\n        ב-"),s("span",[t._v("Napoli Pizza Oven")]),t._v(" הפיצה נאפית ב-90 שניות בלבד, באיכות של מסעדות שף. ממש כמו בנאפולי.")]),s("p",[t._v("יאללה, להזמין את כל החברים לערב פיצות מפנק!")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6  left-side p-0"},[s("img",{attrs:{"data-aos":"fade-up",src:a("45e3"),alt:""}})]),s("div",{staticClass:"col-md-6 center-all p-3"},[s("div",{staticClass:"block-text"},[s("p",[t._v("ה- "),s("span",[t._v("Napoli Pizza Oven")]),t._v(" מוביל בקטגוריה שלו עם מגוון יתרונות:")]),s("ul",[s("li",[t._v("  מתחמם לטמפרטורה של 450°C תוך 15 דקות בלבד")]),s("li",[t._v("      מוזן בחומרי בעירה מגוונים: גז, עץ, פחמים או שבבים")]),s("li",[t._v("    כולל אבן אפייה ייחודית, לקבלת תחתית בצק פריכה ומענגת")]),s("li",[t._v("   עשוי מנירוסטה איכותית. בעל עיצוב מתקדם ודפנות מבודדות")]),s("li",[t._v("       קל ועמיד, מושלם לבית ולשטח")]),s("li",[t._v("הרכבה עצמית מהירה")]),s("li",[t._v("  מחיר משתלם. הוכרז כ-"),s("span",[t._v("Best seller")]),t._v(" וכ-"),s("span",[t._v("Amazon choice")]),t._v(' באמזון ארה"ב')])])])])])])}],F={name:"OnNapoli",props:{}},q=F,W=(a("77f6"),Object(v["a"])(q,R,A,!1,null,"7e117d9c",null)),I=W.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 center-all p-3"},[a("div",{staticClass:"block-text"},[a("h2",[t._v("500°C במהירות שיא")]),a("p",[t._v('הפיצה הנאפוליטנית היא הפיצה בה"א הידיעה. סימני ההיכר שלה הם אפייה מהירה, תחתית ושוליים פריכים, בצק אוורירי,\n        רוטב עגבניות צלוי היטב וגבינת מוצרלה שנמסה בחום התנור האדיר.')]),t._m(0),a("ButtonLink",{attrs:{text:"לרכישת התנור",link:"/store"}})],1)]),t._m(1)])},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("בעבר ניתן היה להשיג את הפיצה הנאפוליטנית רק בפיצריות שף. אבל היום, זה קל מתמיד: אתם זקוקים רק לחומרי גלם\n        טובים מהסופר, ולתנור "),a("span",[t._v("Napoli Pizza Oven")]),t._v(" שמגיע בזמן קצרצר ל-500°C (כפליים מהתנור הביתי שלכם, שמגיע\n        לרוב ל-250°C בלבד).")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-6 left-side p-0"},[s("img",{attrs:{"data-aos":"fade-up",src:a("17f8"),alt:""}})])}],J={name:"ReelPizza",props:{}},U=J,Z=(a("f63b"),Object(v["a"])(U,G,H,!1,null,"14835362",null)),V=Z.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"w-100 center-all wrap-video"},[a("video",{attrs:{id:"Mp4Video-1528056696795",src:"https://scontent.fymy1-2.fna.fbcdn.net/v/t39.24130-6/10000000_399862003948681_249958788012601182_n.mp4?_nc_cat=101&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_oc=AQlY408sPCYMz39TrevZCjpjuuOBF8AVXOfPWxMOWWHCUseXSg1ALElDunmMufRDo17Gfc-iPNapwtUzI7qm3_o6&_nc_ht=scontent.fymy1-2.fna&oh=8adb5058daabe08cfa14a96c7421daa9&oe=5DDA15E7",loop:"",muted:"",playsinline:"",autoplay:""},domProps:{muted:!0}})])])])])},Y=[],Q={name:"videoBottom",components:{}},K=Q,tt=(a("40bb"),Object(v["a"])(K,X,Y,!1,null,"0f384072",null)),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"w-100 center-all wrap-video"},[a("video",{attrs:{id:"Mp4Video-1528056696795",src:"https://cdn.shopify.com/s/files/1/0011/6195/3290/files/napoli_wood_flame2.mp4?6785760937562698444",loop:"",muted:"",playsinline:"",autoplay:""},domProps:{muted:!0}},[t._v("gdfgdfgdfg")])])])])])},st=[],nt={name:"videoTop",components:{}},it=nt,ct=(a("4e2e"),Object(v["a"])(it,at,st,!1,null,"4c26f2aa",null)),rt=ct.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row mt-3"},[t._m(0),a("div",{staticClass:"col-md-6 p-3 left-side center-all "},[a("div",{staticClass:"row row-gas"},[t._m(1),a("div",{staticClass:"col-md-12 center-all"},[a("div",{staticClass:"block-text"},[a("h2",[t._v("מבער גז")]),t._m(2),a("ButtonLink",{attrs:{text:"לרכישת המבער",link:"/store"}})],1)])])])])},ot=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-6 p-3 left-side center-all border-left"},[s("div",{staticClass:"row center-all"},[s("div",{staticClass:"col center-all"},[s("div",{staticClass:"block-text"},[s("h2",[t._v("מבער פחמים")]),s("p",[t._v("ה-"),s("span",[t._v("Napoli Pizza Oven")]),t._v(" מגיע עם תא נירוסטה מעוצב, גדול וייחודי להבערת פחמים, עצים או שבבים. התא\n            נפרד\n            מחלל האפייה\n            וניתן לשליפה בקלות. פתח הזנה בגג התנור מאפשר להוסיף בקלות עצים חדשים תוך כדי עבודה.")])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col center-all"},[s("img",{attrs:{"data-aos":"fade-up",src:a("2129"),alt:""}})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-12 center-all"},[s("img",{attrs:{"data-aos":"fade-up",src:a("9424"),alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("מבער הגז של "),a("span",[t._v("Napoli Pizza Oven")]),t._v(" מספק אש חזקה, יציבה ונקייה, והוא חסכוני ביותר: כ-420 גרם בלבד\n            לשעת\n            בעירה. עוצמת הלהבות ניתנת לשליטה מדויקת. לחיצה אחת על מצת המבער, והתנור לוהט. מבער הגז ניתן לרכישה בנפרד.\n            "),a("span",[t._v("מומלץ!")])])}],ut={name:"GasBurner",props:{}},dt=ut,vt=(a("c038"),Object(v["a"])(dt,lt,ot,!1,null,"6d07b148",null)),pt=vt.exports,mt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ft=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col part-shulders center-all"},[a("div",{staticClass:"block-text"},[a("h2",[t._v("אז למה Napoli Pizza Oven?")]),a("p",[t._v("תנור הפיצה נאפולי | "),a("span",[t._v("Napoli Pizza Oven")]),t._v(" הושק בקיקסטרטר ב-2017, וגייס את מלוא הסכום תוך 24 שעות בלבד. תוך\n          חודשים אחדים ה-"),a("span",[t._v("Napoli Pizza Oven")]),t._v(' כבש גם את אמזון ארה"ב, הוכרז כ-'),a("span",[t._v("Best seller")]),t._v("\n          וכ-"),a("span",[t._v("Amazon choice")]),t._v(", עד שכל התנורים\n          אזלו מהמלאי למשך שבועות ארוכים. ")]),a("p",[t._v("הנאפולי מתלהט לחום מדהים של +500°C, ויחד עם אבן האפייה המיוחדת שלו הוא מציע חוויה איטלקית אמיתית. רק 90\n          שניות, ויש לכם פיצה גורמה. לבית, לקמפינג, לערבי משפחה וחברים – ה-"),a("span",[t._v("Napoli Pizza Oven")]),t._v(" שלכם יהיה במרכז העניינים.\n        ")])])])])])}],_t={name:"SoWhy",props:{}},Ct=_t,ht=(a("ecce"),Object(v["a"])(Ct,mt,ft,!1,null,"c7d62684",null)),gt=ht.exports,bt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},wt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row pt-3 pb-3"},[s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("img",{attrs:{src:a("ce87"),alt:""}})])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("h2",[t._v("פיצה נאפוליטנית אמיתית")]),s("p",[t._v("קמח טוב, רוטב עגבניות עשיר, בזיליקום טרי ומוצרלה. הכינו לחברים פיצת גורמה משגעת, בדיוק כמו באיטליה")])])])]),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("img",{attrs:{src:a("c290"),alt:""}})])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("h2",[t._v("סטייק מושלם")]),s("p",[t._v("בחום האדיר של ה-Napoli Pizza Oven תוכלו לצלות את הנתח האהוב עליכם באיכות מדהימה. לא לשכוח בירה קרה בצד")])])])]),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("img",{attrs:{src:a("b4b1"),alt:""}})])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("h2",[t._v("ירקות גורמה")]),s("p",[t._v("עם קצת שמן זית ותבלינים, הכינו את לקט הירקות האהוב עליכם ב-Napoli Pizza Oven")])])])])])}],xt={name:"FoodImages",props:{}},yt=xt,$t=(a("3374"),Object(v["a"])(yt,bt,wt,!1,null,"653fa2aa",null)),kt=$t.exports,Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row p-3"},[a("div",{staticClass:"col flex-bottom"},[a("div",{staticClass:"content-text"},[a("h2",[t._v("הכינו לכם פיצת שף משובחת עם התוספות האהובות עליכם")]),a("ButtonLink",{attrs:{text:"למתכונים לחצו כאן",link:"/"}})],1)])])},Ot=[],Et={name:"RecipesLink",props:{}},zt=Et,jt=(a("260b"),Object(v["a"])(zt,Pt,Ot,!1,null,"2c7f8643",null)),Dt=jt.exports,Bt=(a("e829"),{name:"home",components:{OnNapoli:I,ReelPizza:V,videoBottom:et,videoTop:rt,GasBurner:pt,SoWhy:gt,FoodImages:kt,RecipesLink:Dt}}),Mt=Bt,Nt=(a("829e"),Object(v["a"])(Mt,S,L,!1,null,"21bf9dae",null)),Tt=Nt.exports,St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row mt-5 row-all"},t._l(t.products,function(e){return a("div",{key:e.id,staticClass:"col-md-6 box-all"},[a("div",{staticClass:"box-product"},[a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col-md-6 center-all"},[a("img",{staticClass:"w-100",attrs:{src:e.img,alt:""}})]),a("div",{staticClass:"col-md-6 "},[a("h3",[t._v("מוצר: "+t._s(e.name))]),a("p",[t._v("מחיר: "+t._s(e.price)+" ₪")]),a("p",{staticClass:"more"},[t._v("פרטים נוספים>>")]),a("div",{staticClass:"center-all mb-5  mt-5"},[a("ButtonLink",{attrs:{text:"הוסף לעגלת הקניות",link:"/store"},on:{customEvent:function(a){return t.addToCart(e)}}})],1)])])])])}),0)},Lt=[],Rt={name:"Store",components:{},data:function(){return{}},methods:{addToCart:function(t){t.amount++,this.$store.commit("allTimeShowCart")}},computed:{products:function(){return this.$store.state.products}}},At=Rt,Ft=(a("47b9"),Object(v["a"])(At,St,Lt,!1,null,"87cf6cda",null)),qt=Ft.exports,Wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row mt-5"},[t.payment?t._e():[a("div",{staticClass:"col-12"},[a("div",{staticClass:"w-100 center-all"},[a("form",{staticClass:" center-all",on:{submit:function(e){return e.preventDefault(),t.nextToPay(e)}}},[a("h2",[t._v("פרטי הלקוח")]),a("div",{staticClass:"w-100 center-all"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.clientDatdlis.name,expression:"clientDatdlis.name"}],attrs:{type:"text",placeholder:"שם מלא",required:""},domProps:{value:t.clientDatdlis.name},on:{input:function(e){e.target.composing||t.$set(t.clientDatdlis,"name",e.target.value)}}})]),a("div",{staticClass:"w-100 center-all"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.clientDatdlis.tel,expression:"clientDatdlis.tel"}],attrs:{type:"tel",placeholder:"טלפון",required:""},domProps:{value:t.clientDatdlis.tel},on:{input:function(e){e.target.composing||t.$set(t.clientDatdlis,"tel",e.target.value)}}})]),a("div",{staticClass:"w-100 center-all"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.clientDatdlis.mail,expression:"clientDatdlis.mail"}],attrs:{type:"email",placeholder:'דוא"ל',required:""},domProps:{value:t.clientDatdlis.mail},on:{input:function(e){e.target.composing||t.$set(t.clientDatdlis,"mail",e.target.value)}}})]),a("div",{staticClass:"w-100 center-all"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.clientDatdlis.city,expression:"clientDatdlis.city"}],attrs:{type:"text",placeholder:"עיר",required:""},domProps:{value:t.clientDatdlis.city},on:{input:function(e){e.target.composing||t.$set(t.clientDatdlis,"city",e.target.value)}}})]),a("div",{staticClass:"w-100 center-all"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.clientDatdlis.address,expression:"clientDatdlis.address"}],attrs:{type:"text",placeholder:"רחוב, מספר בית, ומיקוד",required:""},domProps:{value:t.clientDatdlis.address},on:{input:function(e){e.target.composing||t.$set(t.clientDatdlis,"address",e.target.value)}}})]),t._m(0),t._m(1)])])])],t.payment?[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 p-5"},[a("div",{staticClass:"w-100 center-all"},[a("h4",[t._v("פרטי ההזמנה")]),t._l(t.products,function(e){return a("div",{key:e.id,staticClass:"w-100"},[a("P",[t._v("מוצר: "+t._s(e.name))]),a("P",[t._v("מחיר: "+t._s(e.price)+" ₪")]),a("P",[t._v("כמות: "+t._s(e.amount))]),a("P",[t._v('סה"כ למוצר: '+t._s(e.amount*e.price))])],1)})],2)]),a("div",{staticClass:"col-md-6 p-5"},[a("div",{staticClass:"w-100 center-all"},[a("h4",[t._v("פרטי הלקוח")]),t._l(t.products,function(e){return a("div",{key:e.id,staticClass:"w-100"},[a("P",[t._v("שם: "+t._s(t.clientDatdlis.name))]),a("P",[t._v("טלפון: "+t._s(t.clientDatdlis.tel))]),a("P",[t._v("מייל: "+t._s(t.clientDatdlis.mail))]),a("P",[t._v("עיר: "+t._s(t.clientDatdlis.city))]),a("P",[t._v("כתובת: "+t._s(t.clientDatdlis.address))])],1)})],2)])])]),a("div",{staticClass:"col-md-6"},[a("iframe",{attrs:{src:t.iframeUrl,height:"570",width:"455"}})])]:t._e()],2)},It=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-50 text-right"},[a("input",{attrs:{type:"checkbox",required:""}}),t._v("קראת והסכמתי לתקנון השימוש\n          ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-100 center-all"},[a("button",{attrs:{type:"submit"}},[t._v("המשך לתשלום")])])}],Gt=(a("7f7f"),{name:"Pay",components:{},data:function(){return{payment:!1,clientDatdlis:{name:"",tel:"",mail:"",city:"",address:""}}},methods:{nextToPay:function(){this.payment=!0}},computed:{iframeUrl:function(){return"https://direct.tranzila.com/sabresltd/iframenew.php?sum=".concat(this.Payable,"&currency=1&cred_type=1&lang=il&contact=").concat(this.clientDatdlis.name,"&phone=").concat(this.clientDatdlis.tel,"&email=").concat(this.clientDatdlis.mail,"&city=").concat(this.clientDatdlis.city,"&address=").concat(this.clientDatdlis.address)},Payable:function(){var t=0;for(var e in this.$store.getters.inCart)t+=this.$store.getters.inCart[e].amount*this.$store.getters.inCart[e].price;return t},products:function(){return this.$store.getters.inCart}}}),Ht=Gt,Jt=(a("c3eb"),Object(v["a"])(Ht,Wt,It,!1,null,"024b418c",null)),Ut=Jt.exports;s["a"].use(T["a"]);var Zt=new T["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:Tt},{path:"/store",name:"store",component:qt},{path:"/pay",name:"pay",component:Ut}]}),Vt=a("2f62");s["a"].use(Vt["a"]);var Xt=new Vt["a"].Store({state:{categories:[{name:"דף הבית",link:"/",id:1},{name:"חוויה איטלקית",link:"",id:2},{name:"חנות",link:"/store",id:3},{name:"צור קשר",link:"",id:4}],products:[{name:"תנור פיצה נאפולי",img:a("76e9"),description:"אחלה תנור",addCart:!1,price:1650,amount:0,id:"1"},{name:"מבער גז נאפולי",img:a("9cba"),description:"אחלה תנור",addCart:!1,price:350,amount:0,id:"2"},{name:"כיסוי חוץ לתנור נאפולי",img:a("05fd"),description:"אחלה תנור",addCart:!1,price:150,amount:0,id:"3"},{name:"מרדה לתנור נאפולי",img:a("e9d0"),description:"אחלה תנור",addCart:!1,price:220,amount:0,id:"4"}],ifCart:!1},getters:{inCart:function(t){var e=t.products.filter(function(t){return t.amount>0});return e}},mutations:{showCart:function(t){t.ifCart=!t.ifCart},allTimeShowCart:function(t){t.ifCart=!0},allTimeCloseCart:function(t){t.ifCart=!1}},actions:{}}),Yt=(a("1056"),a("f5af")),Qt=a.n(Yt),Kt=(a("0a7a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{on:{click:function(e){return e.stopPropagation(),t.$emit("customEvent")}}},[a("router-link",{attrs:{tag:"button",to:t.link}},[t._v(t._s(t.text))])],1)}),te=[],ee={name:"ButtonLink",props:{link:String,text:String}},ae=ee,se=(a("711c"),Object(v["a"])(ae,Kt,te,!1,null,"7969139e",null)),ne=se.exports,ie=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal",attrs:{id:"myModal"}},[a("div",{staticClass:"modal-con center-all"},[t._t("default")],2)])},ce=[],re={name:"Modal",components:{}},le=re,oe=(a("ee67"),Object(v["a"])(le,ie,ce,!1,null,"70b5a0a4",null)),ue=oe.exports;s["a"].config.productionTip=!1,s["a"].component("ButtonLink",ne),s["a"].component("Modal",ue),new s["a"]({created:function(){Qt.a.init()},router:Zt,store:Xt,ButtonLink:ne,Modal:ue,render:function(t){return t(N)}}).$mount("#app")},"5b82":function(t,e,a){},6061:function(t,e,a){t.exports=a.p+"img/ass1.d942f56a.jpg"},"64a9":function(t,e,a){},"711c":function(t,e,a){"use strict";var s=a("34eb"),n=a.n(s);n.a},"76e9":function(t,e,a){t.exports=a.p+"img/ass6.71e50548.png"},"77f6":function(t,e,a){"use strict";var s=a("0866"),n=a.n(s);n.a},"7f88":function(t,e,a){},"829e":function(t,e,a){"use strict";var s=a("d7ed"),n=a.n(s);n.a},8680:function(t,e,a){t.exports=a.p+"img/ass13.05fbd68e.png"},"87c4":function(t,e,a){},"8c82":function(t,e,a){},9424:function(t,e,a){t.exports=a.p+"img/ass8.eded731e.png"},9819:function(t,e,a){"use strict";var s=a("5b82"),n=a.n(s);n.a},"9cba":function(t,e,a){t.exports=a.p+"img/ass16.1b60659f.png"},a5d3:function(t,e,a){"use strict";var s=a("b2a5"),n=a.n(s);n.a},aee8:function(t,e,a){},b209:function(t,e,a){},b2a5:function(t,e,a){},b4b1:function(t,e,a){t.exports=a.p+"img/ass10.e728ee7f.png"},c038:function(t,e,a){"use strict";var s=a("0656"),n=a.n(s);n.a},c0e0:function(t,e,a){"use strict";var s=a("d5f9"),n=a.n(s);n.a},c290:function(t,e,a){t.exports=a.p+"img/ass11.41b365ac.png"},c3eb:function(t,e,a){"use strict";var s=a("c6e5"),n=a.n(s);n.a},c6e5:function(t,e,a){},ce87:function(t,e,a){t.exports=a.p+"img/ass12.dea38ab8.png"},d377:function(t,e,a){},d5f9:function(t,e,a){},d7ed:function(t,e,a){},e9d0:function(t,e,a){t.exports=a.p+"img/ass15.187cce51.jpg"},ecce:function(t,e,a){"use strict";var s=a("87c4"),n=a.n(s);n.a},ee67:function(t,e,a){"use strict";var s=a("1550"),n=a.n(s);n.a},f63b:function(t,e,a){"use strict";var s=a("0686"),n=a.n(s);n.a}});
//# sourceMappingURL=app.dfce9682.js.map